export class ParseDateService {
  /*
  * PARSE DATE SERVICE
  * whenever the user types a date, it should be allowed
  * to type in a lot of dirrerent date formats. This service
  * should detect all of the supported formats. Some supported formats:
  * - 1. April 1970 => 1970-04-01
  * - 1970          => 1970-01-01
  * - 1970-12-23    => 1970-12-23
  * - 1900 12 23    => 1900-12-23
  * - 1 jan 1970    => 1970-01-01
  * - 2020-W12      => 2020-03-16
  * - 2020-01       => 2020-01-01
  * For all formats check the tests written in AVA `test/parse-date-service-test.js`
  *
  * public methods
  *   run()
  */
  constructor() {
  }

  run (input) {
    this.input = input;
    this.day = "??";
    this.month = "??";
    this.year = "????";

    const resultIsoMatch = this.input.match(this._isoMatchRegex());
    const resultCustomMatch = this.input.match(this._customRegex());
    const resultWeekMatch = this.input.match(this._weekMatchRegex());
    const resultYearAndMonthMatch = this.input.match(this._yearAndMonthRegex());
    if (resultIsoMatch) {
      const split = resultIsoMatch[0].split(/-|\/|\s/);
      this.year  = split[0];
      this.month = this._setWithLeadingZero(split[1]);
      this.day   = this._setWithLeadingZero(split[2]);
    } else if (resultYearAndMonthMatch) {
      const split = resultYearAndMonthMatch[0].split("-");
      this.year = split[0];
      this.month = this._setWithLeadingZero(split[1]);
      this.day = "01";
    } else if (resultCustomMatch) {
      const split = resultCustomMatch[0].split(/\.|\s|\/|-/);
      this.day = this._setWithLeadingZero(split[0]);
      this.month = this._setWithLeadingZero(split[1]);
      this.year = split[2];
    } else if (resultWeekMatch) {
      const split = resultWeekMatch[0].split(/\.|\s|\/|-/);
      const year = Number(split[0]);
      const week = Number(split[1].replace("W0", "").replace("W", ""));
      return this._getDateStrOfISOWeek(year, week);
    } else {
      this._findYear();
      this._findMonth();
      this._findDay();
    }
    return this._buildResult();
  }

  _buildResult() {
    if (this.year != "????" && this.month === "??") {
      this.month = "01";
    }
    if (this.month != "??" && this.day === "??") {
      this.day = "01";
    }
    return `${this.year}-${this.month}-${this.day}`;
  }

  /*
  * matches ISO string format (with some extensions)
  * | 2012-01-31 | 2012-1-31 | 2012/01/31 |
  * | 2012/1/31  | 2012 1 31 | 2012 01 31 |
  */
  _isoMatchRegex() {
    return /(?<=\s|^)\d{4}(-|\s|\/)([0][1-9]|[1-9]|10|11|12)(-|\s|\/)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.)/;
    /*      |        | year         | 01-09 | 1-9 | 10-12   |         |01-09  |10-29     |30,31| 1-9  |
    *       |             | dash or slash                   | dash or slash                           |
    *       |preceding with space or start of string                 end with space endofstr or dot <-|*/
  }

  /*
  * matches a custom date string format (reversed order, day-month-year)
  * | 12.3.2000 | 1.2.2012 | 1-2-2012 |
  * | 12/3/2000 | 1 2 2012 | 1/2/2012 |
  */
  _customRegex() {
    return /\d{1,2}(\.|\s|\/|-)\d{1,2}(\.|\s|\/|-)\d{4}/;
    /*      | day  |           | month |          | year
    *              |___________________|
    *                        |
    *        seperated by dot, space, slash or dash */
  }

  /*
  * matches a date format that specifies the week
  * | 2012-W1 | 2012 W1  | 2012 W01 |
  * | 2020.W2 | 2020-W53 | 2012/W1  |
  */
  _weekMatchRegex() {
    return /\d{4}(\.|\s|\/|-)W\d{1,2}(?=\s|$|\.)/;
    /*      |year |         |W1-W53   |
    *             |___________________|
    *                      |
    *     seperated by dot, space, slash or dash */
  }

  /*
  * matches a date format with only year and month
  * YYYY-MM (1-12)
  * | 2020-01 | 2020-12 | 2012-1 |
  */
  _yearAndMonthRegex() {
    return /(?<=\s|^)\d{4}-([0][1-9]|[1-9]|10|11|12)(?=\s|$)/;
  }

  _findYear() {
    let regex = /[1-9]{1}[0-9]{3}/;
    const result = this.input.match(regex)
    if (result) {
      this.year = result[0];
      this._removeMatchFromInput(result);
    }
  }

  _findMonth() {
    const months = this._monthDictionaryValues();
    months.forEach(month => {
      let re = new RegExp(`(?<=\\s|^)(${month})(?=\\s|$|\\.)`, "i")
      const result = this.input.match(re);
      if (result) { // yes => get dict and value + return
        this.month = this._monthDictionary()[result[0].toLowerCase()];
        this._removeMatchFromInput(result);
        return this.month;
      }
    })
    return undefined;
  }

  /*
  * find single numbers from 1-31
  */
  _findDay() {
    let regex = /(?<=\s|^)([0][1-9]|[1-2][0-9]|3[01]|[1-9])(?=\s|$|\.|st|nd|rd|th)/;
    /*           |         | 01-09 | 10-29    |30,31|1-9    | ends with whitespace, endofstr or dot.
    *            | starts with whitepace or startoftr       | won't be included in match (lookbehind operator)
    *            | look behind operator (not included)
    *            | https://stackoverflow.com/a/6713378/6272061 */
    const result = this.input.match(regex)
    if (result) {
      this.day = this._setWithLeadingZero(result[0]);
    }
  }

  /*
  * if a string or number has only 1 digit or char
  * a leading zro is added
  * returns a string
  */
  _setWithLeadingZero(input) {
    input = input.toString();
    if (input.length == 1) {
      return "0" + input;
    } else {
      return input;
    }
  }

  _removeMatchFromInput(matchObj) {
    if (matchObj && matchObj[0] && matchObj.index) {
      let len = matchObj[0].length;
      let charArr = this.input.split('');
      charArr.splice(matchObj.index, len);
      this.input = charArr.join("");
    }
  }

  _monthDictionaryValues() {
    return Object.keys(this._monthDictionary());
  }
  _monthDictionary() {
    return {
      // german
      "jan": "01", "januar":    "01",
      "feb": "02", "februar":   "02",
      "mär": "03", "märz":      "03",
      "apr": "04", "april":     "04",
      "mai": "05", "mai":       "05",
      "jun": "06", "juni":      "06",
      "jul": "07", "juli":      "07",
      "aug": "08", "august":    "08",
      "sep": "09", "september": "09",
      "okt": "10", "oktober":   "10",
      "nov": "11", "november":  "11",
      "dez": "12", "dezember":  "12",
      // english
      "jan": "01", "january":   "01",
      "feb": "02", "february":  "02",
      "mar": "03", "march":     "03",
      "apr": "04", "april":     "04",
      "may": "05", "may":       "05",
      "jun": "06", "june":      "06",
      "jul": "07", "july":      "07",
      "aug": "08", "august":    "08",
      "sep": "09", "september": "09",
      "oct": "10", "october":   "10",
      "nov": "11", "november":  "11",
      "dec": "12", "december":  "12",
      // french
      "janv":"01", "janvier":   "01",
      "févr":"02", "février'":  "02",
      "mars":"03", "mars":      "03",
      "avr": "04", "avril":     "04",
      "mai": "05", "mai":       "05",
      "juin":"06", "juin":      "06",
      "juil":"07", "juillet":   "07",
      "août":"08", "août":      "08",
      "sept":"09", "septembre": "09",
      "oct": "10", "octobre":   "10",
      "nov": "11", "novembre":  "11",
      "déc": "12", "décembre":  "12",
      //italian
      "gen": "01", "gennaio":   "01",
      "feb": "02", "febbraio":  "02",
      "mar": "03", "marzo":     "03",
      "apr": "04", "aprile":    "04",
      "mag": "05", "maggio":    "05",
      "giu": "06", "giugno":    "06",
      "lug": "07", "luglio":    "07",
      "ago": "08", "agosto":    "08",
      "set": "09", "settembre": "09",
      "ott": "10", "ottobre":   "10",
      "nov": "11", "novembre":  "11",
      "dic": "12", "dicembre":  "12",
    }
  }

  _getDateStrOfISOWeek(y, w) {
    let simple = new Date(y, 0, 1 + (w - 1) * 7);
    let dow = simple.getDay();
    let ISOweekStart = simple;
    if (dow <= 4) {
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }
    // do not rollover to next or previous year
    if (ISOweekStart.getFullYear() > y) {
      return `${y}-12-31`;
    } else if (ISOweekStart.getFullYear() < y) {
      return `${y}-01-01`;
    }
    return this._dateToDateStr(ISOweekStart);
  }

  /*
  * formats date object to dateStr YYYY-MM-DD
  */
  _dateToDateStr(date) {
    let d = new Date(date);
    let month = this._setWithLeadingZero((d.getMonth() + 1));
    let day = this._setWithLeadingZero(d.getDate());
    let year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
}
