import { get as i18n } from "./pb-i18n.js";

export class SearchResultService {
  /*
  * SEARCH RESULT OBJECT
  * Service that loads initial data from a datasource,
  * can be a database or an API, and converts it in
  * a format that can be used by the pb-timeline component.
  *
  * public methods:
  *   getMinDateStr()
  *   getMaxDateStr()
  *   getMinDate()
  *   getMaxDate()
  *   export()
  *   getIntervalSizes()
  */

  /*
  * CONSRTUCTOR INPUTS EXPLAINED
  * jsonData: data to load, object with
  *   keys => valid datestrings formatted YYYY-MM-DD
  *   values => number of results for this day
  * maxInterval: max amount of bins allowed
  * scopes: array of all 6 possible values for scope
  */
  constructor(jsonData = {}, maxInterval = 60, scopes = ["D", "W", "M", "Y", "5Y", "10Y"]) {
    this.data = { invalid: {}, valid: {} };
    this.maxInterval = maxInterval;
    this.scopes = scopes;
    this._validateJsonData(jsonData);
  }

  /*
  * based on the loaded jsonData, compute
  * - min date as dateStr or utc-date-object
  * - max date as dateStr or utc-date-object
  */
  getMinDateStr() {
    return Object.keys(this.data.valid).sort()[0];
  }
  getMaxDateStr() {
    let days = Object.keys(this.data.valid);
    return days.sort()[days.length - 1];
  }
  getMinDate() {
    return this._dateStrToUTCDate(this.getMinDateStr());
  }
  getMaxDate() {
    return this._dateStrToUTCDate(this.getMaxDateStr());
  }

  getEndOfRangeDate(scope, date) {
    return this._UTCDateToDateStr(this._increaseDateBy(scope, date));
  }
  
  /*
  * exports data for each scope
  * when no argument is provided, the optimal scope based
  * on the maxInterval (default 60) will be assigned
  */
  export(scope) {
    // auto assign scope when no argument provided
    scope = scope || this._autoAssignScope();
    // validate scope
    if (!this.scopes.includes(scope)) {
      throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${scope}"`);
    }
    // initialize object to export
    const exportData = {
      data: [],
      scope: scope,
      binTitleRotated: this._binTitleRotatedLookup(scope)
    }
    if (Object.keys(this.data.valid).length === 0) {
      return exportData;
    }
    // get start and end date
    const startCategory = this._classify(this.getMinDateStr(), scope);
    const startDateStr = this._getFirstDay(startCategory);
    let currentDate = this._dateStrToUTCDate(startDateStr);
    const endDate = this.getMaxDate();
    // iterate until end of intervall reached, add binObject for each step
    while (currentDate <= endDate) {
      const currentDateStr = this._UTCDateToDateStr(currentDate);
      const currentCategory = this._classify(currentDateStr, scope);
      exportData.data.push(this._buildBinObject(currentDateStr, currentCategory, scope));
      currentDate = this._increaseDateBy(scope, currentDate);
    }
    // count all values
    Object.keys(this.data.valid).sort().forEach(dateStr => {
      const currentCategory = this._classify(dateStr, scope);
      const targetBinObject = exportData.data.find(it => it.category === currentCategory);
      try {
        const value = this.data.valid[dateStr];
        if (typeof value === 'object') {
          targetBinObject.value += value.count || 0;
          if (value.info) {
            targetBinObject.info = targetBinObject.info.concat(value.info);
          }
        } else {
          targetBinObject.value += this.data.valid[dateStr] || 0;
        }
      } catch(e) {
        console.log(e);
        console.log("currentCategory");
        console.log(currentCategory);
      }
    });
    if (this.data.invalid) {
      let invalid = 0;
      let info = [];
      Object.values(this.data.invalid).forEach((value) => {
        if (typeof value === 'object') {
          invalid += value.count || 0;
          info = info.concat(value.info);
        } else {
          invalid += value;
        }
      });
      if (invalid > 0) {
        exportData.data.push({
          tooltip: i18n('timeline.unknown'),
          title: i18n('timeline.unknown'),
          // binTitle: i18n('timeline.unknown'),
          category: '?',
          separator: true,
          value: invalid,
          info
        });
      }
    }
    return exportData;
  }

  /*
  * returns optimal scope based on the maxInterval
  * by computing the scope that meets the criteria
  * nbr of bins <= maxInterval
  */
  _autoAssignScope() {
    for (let i = 0; i < this.scopes.length; i++) {
      if (this._computeIntervalSize(this.scopes[i]) <= this.maxInterval) {
        return this.scopes[i];
      }
    }
    throw new Error(`Interval too big! Computed: ${this._computeIntervalSize(this.scopes[i])}. Allowed: ${this.maxInterval}. Try to increase maxInterval.`);
  }

  /*
  * splits input data in 2 sections
  * => valid data
  * => invalid (if not a vaid date, for example 2012-00-00 is invalid)
  */
  _validateJsonData(jsonData) {
    Object.keys(jsonData).sort().forEach(key => {
      if (this._isValidDateStr(key)) {
        this.data.valid[key] = jsonData[key];
      } else {
        this.data.invalid[key] = jsonData[key];
      }
    });
  }

  /*
  * lookup table which bin titles should be rotated
  */
  _binTitleRotatedLookup(scope) {
    const lookup = {
      "10Y": true,
      "5Y": true,
      "Y": true,
      "M": false, // only exception not to rotate in monthly scope
      "W": true,
      "D": true,
    }
    return lookup[scope];
  }

  /*
  * Helper method that builds a binObject that
  * can be read by the pb-timeline component
  */
  _buildBinObject(dateStr, category, scope) {
    const split = dateStr.split("-");
    const yearStr = split[0];
    const monthStr = split[1];
    const dayStr = split[2];
    // for all scopes this remains the same
    const binObject = {
      dateStr: dateStr,
      category: category,
      value: 0,
      info: []
    }
    // scope specific bin data
    if (scope === "10Y") {
      binObject.tooltip = `${category} - ${Number(category) + 9}`; // 1900 - 1999
      binObject.selectionStart = `${category}`;
      binObject.selectionEnd = `${Number(category) + 9}`;
      // seperator every 100 years (10 bins)
      if (Number(category) % 100 === 0) {
        binObject.title = `${category} - ${Number(category) + 99}`;
        binObject.binTitle = category;
        binObject.seperator = true;
      };
    } else if (scope === "5Y") {
      binObject.tooltip = `${category} - ${Number(category) + 4}`; // 1995 - 1999
      binObject.selectionStart = `${category}`;
      binObject.selectionEnd = `${Number(category) + 4}`;
      // seperator every 50 years (10 bins)
      if (Number(category) % 50 === 0) {
        binObject.title = `${category} - ${Number(category) + 49}`;
        binObject.binTitle = category;
        binObject.seperator = true;
      }
    } else if (scope === "Y") {
      binObject.tooltip = category;
      binObject.selectionStart = category;
      binObject.selectionEnd = category;
      // seperator every 10 years (10 bins)
      if (Number(category) % 10 === 0) {
        binObject.title = `${category} - ${Number(category) + 9}`;
        binObject.binTitle = `${category}`;
        binObject.seperator = true;
      }
    } else if (scope === "M") {
      const monthNum = Number(monthStr);
      const month = this._monthLookup(monthNum); // Jan,Feb,Mar,...,Nov,Dez
      binObject.binTitle = month[0]; // J,F,M,A,M,J,J,..N,D
      binObject.tooltip = `${month} ${yearStr}`; // May 1996
      binObject.selectionStart = `${month} ${yearStr}`;
      binObject.selectionEnd = `${month} ${yearStr}`;
      // every first of the month
      if (monthNum === 1) {
        binObject.title = yearStr; // YYYY
        binObject.seperator = true;
      }
    } else if (scope === "W") {
      const week = category.split("-")[1];; // => W52
      binObject.tooltip = `${yearStr} ${week}`; // 1996 W52
      binObject.selectionStart = `${yearStr} ${week}`; // 1996 W52
      binObject.selectionEnd = `${yearStr} ${week}`; // 1996 W52
      let currentDate = this._dateStrToUTCDate(dateStr);
      let lastWeek = this._addDays(currentDate, -7);
      // title and binTitle every first monday of the month
      if (currentDate.getUTCMonth() !== lastWeek.getUTCMonth()) {
        binObject.binTitle = week;
        binObject.title = this._monthLookup(currentDate.getUTCMonth() + 1);
      }
      // seperator every start of the year
      binObject.seperator = week === "W1";
    } else if (scope === "D") {
      binObject.tooltip = dateStr;
      binObject.selectionStart = dateStr;
      binObject.selectionEnd = dateStr;
      // every monday
      if (this._dateStrToUTCDate(dateStr).getUTCDay() === 1) {
        binObject.binTitle = `${Number(dayStr)}.${Number(monthStr)}`;
        binObject.title = `${this._classify(dateStr, "W").replace("-", " ")}`;
        binObject.seperator = true;
      }
    } else {
      throw new Error(`invalid scope provided, expected: ["10Y", "5Y", "Y", "M", "W", "D"]. Got: "${scope}"`);
    }
    return binObject;
  }

  /*
  * ...classifies dateStr into category (based on scope)
  * EXAMPLES:
  * _classify("2016-01-12", "10Y") // => "2010"
  * _classify("2016-01-12", "5Y") // => "2015"
  * _classify("2016-01-12", "Y") // => "2016"
  * _classify("2016-01-12", "M") // => "2010-01"
  * _classify("2016-01-12", "W") // => "2016-W2"
  * _classify("2016-01-12", "D") // => "2016-01-12"
  */
  _classify(dateStr, scope) { // returns category (as string)
    if (!dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) { // quick validate dateStr
      throw new Error(`invalid dateStr format, expected "YYYY-MM-DD", got: "${dateStr}".`);
    }
    if (!dateStr || !scope) { // both inputs provided
      throw new Error(`both inputs must be provided. Got dateStr=${dateStr}, scope=${scope}`);
    }
    switch (scope) {
      case "10Y": case "5Y":
        const intervalSize = Number(scope.replace("Y", ""));
        const startYear = Math.floor(Number(dateStr.split("-")[0]) / intervalSize) * intervalSize;
        return startYear.toString();
      case "Y":
        return dateStr.substr(0, 4);
      case "M":
        return dateStr.substr(0, 7);
      case "W":
        const UTCDate = this._dateStrToUTCDate(dateStr);
        return this._UTCDateToWeekFormat(UTCDate);
      case "D":
        return dateStr;
    }
  }

  /*
  * ...gets first day as UTC Date, based on the category
  * EXAMPLES:
  * _getFirstDay("2010")     // => 2010-01-01
  * _getFirstDay("2010-12")  // => 2010-12-01
  * _getFirstDay("2010-W10") // => 2010-03-08
  */
  _getFirstDay(categoryStr) {
    if (categoryStr.match(/^\d{4}-\d{2}-\d{2}$/)) { // YYYY-MM-DD => return same value
      return categoryStr;
    }
    if (categoryStr.match(/^\d{4}-\d{2}$/)) { // YYYY-MM
      return `${categoryStr}-01`;             // add    -01
    }
    if (categoryStr.match(/^\d{4}$/)) { // YYYY
      return `${categoryStr}-01-01`;    // add -01-01
    }
    if (categoryStr.match(/^\d{4}-W([1-9]|[1-4][0-9]|5[0-3])$/)) { // YYYY-W?  // ? => [1-53]
      //                    |YYYY-W |1-9 | 10-49    | 50-53 |
      const split = categoryStr.split("-");
      const year = Number(split[0]);
      const weekNumber = Number(split[1].replace("W", ""));
      return this._getDateStrOfISOWeek(year, weekNumber);
    }
    throw new Error("invalid categoryStr");
  }

  /*
  * converts dateStr (YYYY-MM-DD) to a date object in UTC time
  */
  _dateStrToUTCDate(dateStr) {
    if (!this._isValidDateStr(dateStr)) {
      throw new Error(`invalid dateStr, expected "YYYY-MM-DD" with month[1-12] and day[1-31], got: "${dateStr}".`);
    }
    const split = dateStr.split("-");
    const year  = Number(split[0]);
    const month = Number(split[1]);
    const day   = Number(split[2]);
    return new Date(Date.UTC(year, month - 1, day));
  }

  /*
  * converts a UTC date object to a dateStr (YYYY-MM-DD)
  */
  _UTCDateToDateStr(UTCDate) {
    return UTCDate.toISOString().split("T")[0];
  }

  /*
  * example:
  * 1 Jan 2020 => 2020-W1
  */
  _UTCDateToWeekFormat(UTCDate) {
    const year = this._getISOWeekYear(UTCDate);
    const weekNbr = this._getISOWeek(UTCDate);
    return `${year}-W${weekNbr}`;
  }

  /*
   * returns the ISO week (_getISOWeek) or year (_getISOWeekYear)
   * as number based on a UTC date.
   */
  _getISOWeek(UTCDate) { // https://weeknumber.net/how-to/javascript
    let date = new Date(UTCDate.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    let week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
      - 3 + (week1.getDay() + 6) % 7) / 7);
  }
  /*
  * returns the ISO week year as number based on a UTC date
  * this is only needed for rollovers, for example:
  * => 1.jan 2011 is in W52 of year 2010.
  */
  _getISOWeekYear(UTCDate) { // https://weeknumber.net/how-to/javascript
    var date = new Date(UTCDate.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
  }

  /*
  * given the year and weeknumber -> return dateStr (YYYY-MM-DD)
  */
  _getDateStrOfISOWeek(year, weekNumber) { // https://stackoverflow.com/a/16591175/6272061
    let simple = new Date(Date.UTC(year, 0, 1 + (weekNumber - 1) * 7));
    let dow = simple.getUTCDay();
    let ISOweekStart = simple;
    if (dow <= 4)
      ISOweekStart.setDate(simple.getDate() - simple.getUTCDay() + 1);
    else
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getUTCDay());
    return ISOweekStart.toISOString().split("T")[0];
  }

  /*
  * compute the interval sizes based on the scope
  * prediction only, not the actuall export of the data
  */
  getIntervalSizes() {
    return {
      "D": this._computeIntervalSize("D"),
      "W": this._computeIntervalSize("W"),
      "M": this._computeIntervalSize("M"),
      "Y": this._computeIntervalSize("Y"),
      "5Y": this._computeIntervalSize("5Y"),
      "10Y": this._computeIntervalSize("10Y"),
    }
  }
  _computeIntervalSize(scope) {
    const maxDate = this.getMaxDateStr();
    if (!maxDate) {
      return 0;
    }
    const endDate = this._dateStrToUTCDate(maxDate);
    const firstDayDateStr = this._getFirstDay(this._classify(this.getMinDateStr(), scope));
    let currentDate = this._dateStrToUTCDate(firstDayDateStr);
    let count = 0;
    while (currentDate <= endDate) {
      count++;
      currentDate = this._increaseDateBy(scope, currentDate);
    }
    return count;
  }
  _increaseDateBy(scope, date) {
    switch (scope) {
      case "D":
        return this._addDays(date, 1);
      case "W":
        return this._addDays(date, 7);
      case "M":
        return this._addMonths(date, 1);
      case "Y":
        return this._addYears(date, 1);
      case "5Y":
        return this._addYears(date, 5);
      case "10Y":
        return this._addYears(date, 10);
    }
  }

  /*
  * functions that add n days (_addDays), months (_addMonths)
  * or years (_addYears) to a UTC date object
  * returns the computed new UTC date
  */
  _addDays(UTCDate, days) {
    let newUTCDate = new Date(UTCDate.valueOf());
    newUTCDate.setUTCDate(newUTCDate.getUTCDate() + days);
    return newUTCDate;
  }
  _addMonths(UTCdate, months) {
    let newUTCDate = new Date(UTCdate.valueOf());
    let d = newUTCDate.getUTCDate();
    newUTCDate.setUTCMonth(newUTCDate.getUTCMonth() + +months);
    if (newUTCDate.getUTCDate() != d) {
      newUTCDate.setUTCDate(0);
    }
    return newUTCDate;
  }
  _addYears(UTCdate, years) {
    let newUTCDate = new Date(UTCdate.valueOf());
    newUTCDate.setUTCFullYear(newUTCDate.getUTCFullYear() + years);
    return newUTCDate;
  }

  /*
  * Validates dateStr. rules:
  * => year: 4 digit number
  * => month: [1-12]
  * => day: [1-31]
  */
  _isValidDateStr(str) {
    if (!str) {
      return false;
    }

    let split = str.split("-");
    if (split.length !== 3) return false;
    let year = split[0];
    let month = split[1];
    let day = split[2];
    if (year === "0000" || day === "00" || month === "00") return false;
    if (Number(day) < 1 || Number(day) > 31) return false;
    if (Number(month) < 1 || Number(month) > 12) return false;
    // if all checks are passed => valid datestring!
    return true;
  }

  /*
  * Converts month number (str or number) to a 3 char
  * abbreviation of the month (in english)
  */
  _monthLookup(num) {
    if (num > 12 || num < 1) {
      throw new Error(`invalid 'num' provided, expected 1-12. Got: ${num}`);
    }
    const lookup = {
      "1": "Jan",
      "2": "Feb",
      "3": "Mar",
      "4": "Apr",
      "5": "May",
      "6": "Jun",
      "7": "Jul",
      "8": "Aug",
      "9": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec",
    }
    return lookup[num.toString()];
  }
}


