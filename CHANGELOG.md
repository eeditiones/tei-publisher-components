## [1.17.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.17.2...v1.17.3) (2021-01-22)


### Bug Fixes

* **pb-popover:** re-enabling tippy instance after disabling it via toggle was broken ([a146ba5](https://github.com/eeditiones/tei-publisher-components/commit/a146ba5e82086140ce22f96f40de154f2422ed71))

## [1.17.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.17.1...v1.17.2) (2021-01-22)


### Bug Fixes

* **pb-formula:** add option to disable context menu on math formulas ([b3378b0](https://github.com/eeditiones/tei-publisher-components/commit/b3378b0bd224a86a83295c2733bab0fac8a4319d))

## [1.17.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.17.0...v1.17.1) (2021-01-13)


### Bug Fixes

* **pb-facsimile:** CSS issue caused facsimile viewer to have 0 height ([e0dd744](https://github.com/eeditiones/tei-publisher-components/commit/e0dd7449700c04630dcf18c8935d441954aa89e1))

# [1.17.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.16.1...v1.17.0) (2021-01-13)


### Bug Fixes

* **pb-formula:** respect surrounding text metrics ([7405d4c](https://github.com/eeditiones/tei-publisher-components/commit/7405d4c680fc89ffcd2f1fe4410f4f08cb3258f2))
* **pb-formula:** use correct context root for stylesheet; refactor ([c12fc6b](https://github.com/eeditiones/tei-publisher-components/commit/c12fc6ba30528ea13231e5b585bbdcd88e091e49))
* **pb-load:** typeset math formulas also for content loaded via pb-load ([7627e35](https://github.com/eeditiones/tei-publisher-components/commit/7627e353dcc61181d9f12257ba8fe4fddd56ae5e))


### Features

* **pb-formula:** refactor to run MathJax typesetting from a single function on the page. Calling MathJax asynchronously causes display errors. ([38365bf](https://github.com/eeditiones/tei-publisher-components/commit/38365bfafcf2c49d6fb17e770c23b8dd6a06b84d))
* add pb-formula component ([6467377](https://github.com/eeditiones/tei-publisher-components/commit/6467377854ba113e72c9f5870a1b5bd349f441ef))

## [1.16.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.16.0...v1.16.1) (2021-01-11)


### Bug Fixes

* **pb-view:** styles should be updated on pb-toggle ([142af90](https://github.com/eeditiones/tei-publisher-components/commit/142af909c2e7611fd96ab22c43cf87a5479b62d8))

# [1.16.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.15.3...v1.16.0) (2021-01-11)


### Features

* **pb-popover:** register mutation observer to update popover content if any of the slots changes ([ac6a578](https://github.com/eeditiones/tei-publisher-components/commit/ac6a578872023e6d3c3f9792783c0e6888a07115))

## [1.15.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.15.2...v1.15.3) (2021-01-06)


### Bug Fixes

* **pb-search:** additional submit buttons did not work if they contained nested elements ([5734040](https://github.com/eeditiones/tei-publisher-components/commit/57340408554cf221c32da4344073c0ef29369a8c))

## [1.15.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.15.1...v1.15.2) (2021-01-06)


### Bug Fixes

* **pb-select:** do not use fixed height for multi select ([0997279](https://github.com/eeditiones/tei-publisher-components/commit/0997279e73efafe00052d912bfdf476f445e4285))

## [1.15.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.15.0...v1.15.1) (2021-01-06)


### Bug Fixes

* **pb-facsimile:** if loading the tile source fails, set 'loaded' property to false ([bcfbd57](https://github.com/eeditiones/tei-publisher-components/commit/bcfbd57a653024c37b1d28857940caffd09d17d8))

# [1.15.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.14.1...v1.15.0) (2021-01-03)


### Features

* **pb-collapse:** add property 'toggles': if true, an open collapse is automatically closed if another pb-collapse is expanded ([61f3491](https://github.com/eeditiones/tei-publisher-components/commit/61f349138501ee45833938ac91e3f122ed861b39))
* **pb-facsimile:** add before/after slots to output a heading or credits information before or after the facsimile viewer ([53c5827](https://github.com/eeditiones/tei-publisher-components/commit/53c582742937d5b3ec614c9ea64b5b82d19f5c9d))

## [1.14.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.14.0...v1.14.1) (2021-01-02)


### Bug Fixes

* **pb-events:** add subscribeOnce to listen to event once and resolve promise. Allow multiple channels to be passed in. Add tests. ([40298c0](https://github.com/eeditiones/tei-publisher-components/commit/40298c020658a3c85786151ac92698d38cffa330))

# [1.14.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.13.0...v1.14.0) (2020-12-18)


### Features

* **i18n:** synchronize language files with Crowdin ([d0cf148](https://github.com/eeditiones/tei-publisher-components/commit/d0cf148f3a66ebeabc957139c5e02cefc3b91a4d))

# [1.13.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.12.0...v1.13.0) (2020-12-16)


### Bug Fixes

* **pb-select-odd:** wrong endpoint ([807f223](https://github.com/eeditiones/tei-publisher-components/commit/807f223dd41aa97ff09cec477f506964fab63373))


### Features

* **pb-custom-form:** add top and bottom searchButton slots ([d51d79b](https://github.com/eeditiones/tei-publisher-components/commit/d51d79b26ebf6933e27904cc4be186afa46716ed))
* **pb-events:** add utility class to plug custom code into publisher's event system ([09f082d](https://github.com/eeditiones/tei-publisher-components/commit/09f082df05066d27f3a068c6ef4042b827856534))

# [1.12.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.11.0...v1.12.0) (2020-12-12)


### Features

* **pb-custom-form:** add parameter to pb-search to collect form data from pb-custom-form instances elsewhere on the page ([fe41414](https://github.com/eeditiones/tei-publisher-components/commit/fe41414ec51060c4aa9b0207c74b0751ae06acd5))

# [1.11.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.10.0...v1.11.0) (2020-12-01)


### Features

* **pb-popover:** allow popover content to be loaded asynchronously from a remote URL ([768cead](https://github.com/eeditiones/tei-publisher-components/commit/768ceadd8e29547a58c19d717914c1224b4fba25))

# [1.10.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.9.1...v1.10.0) (2020-11-30)


### Bug Fixes

* **pb-view:** also scroll the view to an anchor given by id, not just node-id ([ea3e15e](https://github.com/eeditiones/tei-publisher-components/commit/ea3e15e8249fb3d225ab0db8056a00fec8cf4e84))


### Features

* **pb-load:** add property use-language to listen for language change and trigger a content reload ([4099d2b](https://github.com/eeditiones/tei-publisher-components/commit/4099d2b1a0ea2060489f73464bcace94bead83bc))

## [1.9.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.9.0...v1.9.1) (2020-11-28)


### Bug Fixes

* **pb-popover:** support nested popovers ([9a9a2ec](https://github.com/eeditiones/tei-publisher-components/commit/9a9a2ec4bd2492e0feec1991eeb57e95b5710e07))

# [1.9.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.8.2...v1.9.0) (2020-11-20)


### Features

* **pb-facs-link:** allow the type of event which triggers the facsimile load to be defined ('click' or 'mouseover') ([00e15d9](https://github.com/eeditiones/tei-publisher-components/commit/00e15d9896f8c8f7bb749fdf55fc223c96561b55))

## [1.8.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.8.1...v1.8.2) (2020-11-19)


### Bug Fixes

* **i18n:** add missing i18n labels and references ([522a3bd](https://github.com/eeditiones/tei-publisher-components/commit/522a3bdb72c9fc82acb895b3fa2b8d3d63632d7f))
* **pb-clipboard:** import pb-clipboard correctly ([50832ed](https://github.com/eeditiones/tei-publisher-components/commit/50832edb3f7174e4c2f327210475cd351d5b552a))

## [1.8.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.8.0...v1.8.1) (2020-11-19)


### Bug Fixes

* **i18n:** add missing labels for errors when managing ODDs; fix [#53](https://github.com/eeditiones/tei-publisher-components/issues/53) ([b8b9dbf](https://github.com/eeditiones/tei-publisher-components/commit/b8b9dbf1707c113b55ece6bb8167a9a463faea0c))

# [1.8.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.7.2...v1.8.0) (2020-11-19)


### Features

* **pb-clipboard:** migrate pb-clipboard component ([303ea2e](https://github.com/eeditiones/tei-publisher-components/commit/303ea2e30eb7f0a080d7c9b3d822aaa22e5c5211))

## [1.7.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.7.1...v1.7.2) (2020-11-01)


### Bug Fixes

* **pb-browse-docs:** scroll to window top after navigating to subcollection ([0025a63](https://github.com/eeditiones/tei-publisher-components/commit/0025a6320937b88600964812f8523de4477a2643))
* **pb-load:** resolve relative URLs against API endpoint ([a4362fb](https://github.com/eeditiones/tei-publisher-components/commit/a4362fb122629ed7a760980361141ff865c7a9fd))
* **pb-login:** expose login failed message as parts ([2b512a2](https://github.com/eeditiones/tei-publisher-components/commit/2b512a234d5d90c25dd624a291d4b7aa6684fb8e))
* **pb-popover:** use inherited cursor style ([c09c7ed](https://github.com/eeditiones/tei-publisher-components/commit/c09c7ed848c9008c63311300dc0f52da69a9adae))
* **pb-upload:** allow icons to be changed via CSS property ([95e0340](https://github.com/eeditiones/tei-publisher-components/commit/95e03407321a867256d5abc04befb7dc3294f7a3))

## [1.7.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.7.0...v1.7.1) (2020-10-25)


### Bug Fixes

* **pb-odd-editor:** correctly wait for component update to finish after adding new elementSpec ([470d5be](https://github.com/eeditiones/tei-publisher-components/commit/470d5be37d2e5d7ecdf222418cd52328d16ebb4f))

# [1.7.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.6.1...v1.7.0) (2020-10-22)


### Features

* **pb-leaflet-map:** add property "toggle" to show the map if a event is received from pb-geolocation ([ecf8b48](https://github.com/eeditiones/tei-publisher-components/commit/ecf8b48a7359e1637cff6d1a497509582bf4cc58))

## [1.6.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.6.0...v1.6.1) (2020-10-22)


### Bug Fixes

* **pb-browse-docs:** if URL is not set, guess it for given publisher version ([32df62a](https://github.com/eeditiones/tei-publisher-components/commit/32df62a77c22916815e5d5fd393b0492193b978c))
* **pb-page:** accessing publisher instance < 7 failed due to CORS issue ([df6ea5e](https://github.com/eeditiones/tei-publisher-components/commit/df6ea5eefda5d96ee1cde868fad1b88724c7f95a))
* **pb-upload:** fix generated link to uploaded document if the data collection is flat, i.e. has no subcollections ([b6e79a5](https://github.com/eeditiones/tei-publisher-components/commit/b6e79a5d5b4e75db7d2fda39a80ea58a609225ac))

# [1.6.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.5.0...v1.6.0) (2020-10-21)


### Bug Fixes

* **pb-browse-docs:** correctly resolve links to images ([e15377c](https://github.com/eeditiones/tei-publisher-components/commit/e15377c157c067671620b5f17239a31633865cdf))


### Features

* **pb-upload:** generate link for viewing uploaded document ([6c9fb19](https://github.com/eeditiones/tei-publisher-components/commit/6c9fb1921a6a3130de9fde0f69801008506a6a3e))

# [1.5.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.4.0...v1.5.0) (2020-10-20)


### Features

* **pb-browse-docs:** expose built-in controls as CSS parts for hiding or styling ([cc3ed0a](https://github.com/eeditiones/tei-publisher-components/commit/cc3ed0a48e302a5bf5158c1303f55eb5dbd0dbe2))
* **pb-login:** Allow additional slot for information to be shown in login dialog ([5b49fc4](https://github.com/eeditiones/tei-publisher-components/commit/5b49fc4cb4e41b38f5971228b1e425e92aaa4f90))

# [1.4.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.3.2...v1.4.0) (2020-10-06)


### Bug Fixes

* **pb-collapse:** Align icon padding with items in pb-list ([317fbf2](https://github.com/eeditiones/tei-publisher-components/commit/317fbf2e0b77535cf9faa9d1abc1ef1cca224898))
* **pb-component-docs:** API version is a float, not an int ([66f502b](https://github.com/eeditiones/tei-publisher-components/commit/66f502b581d7e53c7583790fc9e5393631183413))
* **pb-login:** backwards compatibility broken ([257b593](https://github.com/eeditiones/tei-publisher-components/commit/257b5939e54767e98b4a4a54f081baeb7fa9d8af))
* **pb-page:** clean up i18n instance and event listeners on disconnected ([238fe81](https://github.com/eeditiones/tei-publisher-components/commit/238fe81862a6752064bc8b1d03b43252657611f8))
* **pb-page:** use correct i18n instance ([452930d](https://github.com/eeditiones/tei-publisher-components/commit/452930dcbb20c01677eb4e65532c1cca5df0d86c))


### Features

* **pb-load:** allow url property to be a template string ([7040abf](https://github.com/eeditiones/tei-publisher-components/commit/7040abf03e228f73e23d289c57c242c566aa89be))

## [1.3.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.3.1...v1.3.2) (2020-10-01)


### Bug Fixes

* **pb-browse-docs:** fix setting filterBy value on selection change ([1c1549f](https://github.com/eeditiones/tei-publisher-components/commit/1c1549f79ec91daa425629f49d872b3ef71bd755))

# [1.3.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.4...v1.3.0) (2020-09-13)


### Bug Fixes

* **pb-code-highlight:** allow text wrap to be configured via CSS variable ([09ef248](https://github.com/eeditiones/tei-publisher-components/commit/09ef2481b0ffd63c00c5f92919c1d40204ea91a0))


### Features

* **pb-popover:** emit pb-popover-show event ([d914035](https://github.com/eeditiones/tei-publisher-components/commit/d91403571c8d0827788ee8e119d910407492b27f))

# [1.3.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.4...v1.3.0) (2020-09-11)


### Bug Fixes

* **pb-code-highlight:** allow text wrap to be configured via CSS variable ([09ef248](https://github.com/eeditiones/tei-publisher-components/commit/09ef2481b0ffd63c00c5f92919c1d40204ea91a0))


### Features

* **pb-popover:** emit pb-popover-show event ([d914035](https://github.com/eeditiones/tei-publisher-components/commit/d91403571c8d0827788ee8e119d910407492b27f))

# [1.3.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.4...v1.3.0) (2020-09-11)


### Bug Fixes

* **pb-code-highlight:** allow text wrap to be configured via CSS variable ([09ef248](https://github.com/eeditiones/tei-publisher-components/commit/09ef2481b0ffd63c00c5f92919c1d40204ea91a0))


### Features

* **pb-popover:** emit pb-popover-show event ([d914035](https://github.com/eeditiones/tei-publisher-components/commit/d91403571c8d0827788ee8e119d910407492b27f))

## [1.2.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.3...v1.2.4) (2020-09-03)


### Bug Fixes

* **pb-select:** fix exception when no value is selected initially ([a480fcb](https://github.com/eeditiones/tei-publisher-components/commit/a480fcb35c4f0c5b72f21f9025d655855c20d0de))

## [1.2.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.2...v1.2.3) (2020-09-03)


### Bug Fixes

* **pb-odd-editor:** outputRendition/[@scope](https://github.com/scope) set to 'null' ([a84b908](https://github.com/eeditiones/tei-publisher-components/commit/a84b908204bbb084d73316f761ba283d6dd0d0ae))

## [1.2.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.1...v1.2.2) (2020-09-01)


### Bug Fixes

* **pb-i18n:** fix concurrency issue; render pb-i18n without shadow dom, so it can be used with pb-select options ([7da1b78](https://github.com/eeditiones/tei-publisher-components/commit/7da1b7866fd0adbf40fe9894302510b3ae8e358f))
* **pb-select:** parameter serialization for multi-selection pb-select ([3e1af83](https://github.com/eeditiones/tei-publisher-components/commit/3e1af8389ee471f4a01098026be3586c7c100191))
* **pb-view:** scroll to target element if an id was specified in URL hash ([0125aa5](https://github.com/eeditiones/tei-publisher-components/commit/0125aa5eb77dbd0cf665840efcce4c6067ac1d51))

## [1.2.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.2.0...v1.2.1) (2020-09-01)


### Bug Fixes

* **pb-paginate:** Fix css ([064cb8b](https://github.com/eeditiones/tei-publisher-components/commit/064cb8b5083d5dadbf01210d8d67da7839e7f378))

# [1.2.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.1.1...v1.2.0) (2020-08-23)


### Bug Fixes

* **pb-autocomplete:** handle initial value, documentation ([29bc826](https://github.com/eeditiones/tei-publisher-components/commit/29bc8269e4ab7adab151cd8f4eb2635df7d6a2db))


### Features

* **pb-select:** support multiple item selection ([728bbe8](https://github.com/eeditiones/tei-publisher-components/commit/728bbe8f8993de96dc79936a88e0779c63de33ee))

## [1.1.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.1.0...v1.1.1) (2020-08-20)


### Bug Fixes

* **pb-mixin:** pr to fix getParameters and setParameters ([524fed0](https://github.com/eeditiones/tei-publisher-components/commit/524fed0513d60b98943cdaea006332cc787a52ea))

# [1.1.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.0.6...v1.1.0) (2020-08-15)


### Features

* **pb-autocomplete:** autocomplete webcomponent accepting enumerated option list or URL ([1560e54](https://github.com/eeditiones/tei-publisher-components/commit/1560e54fba90296def6e23829c881b11fd982f35))
