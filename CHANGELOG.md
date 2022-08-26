## [1.38.5](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.4...v1.38.5) (2022-08-26)


### Bug Fixes

* **pb-grid:** fix panel restore when using RTL; state not preserved when changing panel view ([78c18f6](https://github.com/eeditiones/tei-publisher-components/commit/78c18f64eb3cb5a4215b464ce9d3a89ff1051819))

## [1.38.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.3...v1.38.4) (2022-07-23)


### Bug Fixes

* **pb-view:** trigger two column view mode only if there are at least two cb ([0402c50](https://github.com/eeditiones/tei-publisher-components/commit/0402c507b7f4721544707e7214c8bf57233418a7))

## [1.38.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.2...v1.38.3) (2022-07-22)


### Bug Fixes

* **pb-leaflet-map:** omit extra slash from CSS path to avoid issues with CDN ([5dde12a](https://github.com/eeditiones/tei-publisher-components/commit/5dde12a38f8765bd198512937e306f07988e5b19))

## [1.38.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.1...v1.38.2) (2022-07-19)


### Bug Fixes

* **pb-authority-lookup, kbga, gf:** add 'limit' parameter to control how many entries are shown when searching the authority ([213fb91](https://github.com/eeditiones/tei-publisher-components/commit/213fb91d7f7e3797724df8e8d0fd4e3fe82a0bf5))

## [1.38.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.0...v1.38.1) (2022-06-21)


### Bug Fixes

* **pb-leaflet-map:** copy demo marker icons to build ([4f91fe1](https://github.com/eeditiones/tei-publisher-components/commit/4f91fe19369e72cb9c7daf72e131af5e8bf944b5))

# [1.38.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.37.0...v1.38.0) (2022-06-21)


### Features

* **pb-leaflet-map:** allow map marker icons to be configured via nested pb-map-icon elements ([45b6045](https://github.com/eeditiones/tei-publisher-components/commit/45b604514caaf2447d9eaf4172bcd6389cb53bcc))

# [1.37.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.36.3...v1.37.0) (2022-06-10)


### Bug Fixes

* **pb-combo-box:** also rename events ([0ef89fe](https://github.com/eeditiones/tei-publisher-components/commit/0ef89fe3850326abb5a97f12312ad236bbb13938))
* **pb-popover:** typo in docs ([d81742e](https://github.com/eeditiones/tei-publisher-components/commit/d81742e1c09b0492281007fd2330f0df78b48282))


### Features

* **pb-multi-select:** emit blur and change events ([81d1cae](https://github.com/eeditiones/tei-publisher-components/commit/81d1cae18de69d2859953df0ca54a410852b29de))
* **pb-multi-select:** new select component with autocomplete ([d86c488](https://github.com/eeditiones/tei-publisher-components/commit/d86c4889649e28e2fd0b28ac22d9de040601c7d6))
* **pb-page:** emit pb-page-loaded once when slotted elements are ready ([639ad14](https://github.com/eeditiones/tei-publisher-components/commit/639ad14d2a81f15959d99d14c6f213dda00d5f67))

## [1.36.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.36.2...v1.36.3) (2022-04-06)


### Bug Fixes

* **pb-timeline:** allow max-interval to be configured; emit label with events ([7f4818f](https://github.com/eeditiones/tei-publisher-components/commit/7f4818f2938f5298d34119e0d84471d6de658b19))

## [1.36.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.36.1...v1.36.2) (2022-03-16)


### Bug Fixes

* **pb-facsimile:** add option to enable a reference strip ([3aa5ed1](https://github.com/eeditiones/tei-publisher-components/commit/3aa5ed1a7044062503641a07c3e3f729f15407d4))

## [1.36.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.36.0...v1.36.1) (2022-03-09)


### Bug Fixes

* **pb-authority-lookup:** allow HTML for the main label to be displayed ([be24182](https://github.com/eeditiones/tei-publisher-components/commit/be241829f70161fc28d39f6369bb2ae9d32eba07))
* **pb-authority-lookup, kbga:** display full bibliographic entry ([1aae87c](https://github.com/eeditiones/tei-publisher-components/commit/1aae87c1152a2c88ee3c91512f9900242fae6043))

# [1.36.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.35.2...v1.36.0) (2022-03-08)


### Features

* **pb-authority-lookup, kbga:** integrate bibliographic database lookups ([867e29f](https://github.com/eeditiones/tei-publisher-components/commit/867e29f30bcad416fb0b21d1055d35f53a0daf1c))
* **pb-view-annotate:** the key attribute for authority references can now optionally be configured for each annotation type, so one can use [@key](https://github.com/key) for some, [@corresp](https://github.com/corresp) for others ([b51e9a0](https://github.com/eeditiones/tei-publisher-components/commit/b51e9a0ddf0d4f2f46729b400a1d3a0daf1b9c43))

## [1.35.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.35.1...v1.35.2) (2022-02-27)


### Bug Fixes

* **pb-view:** add option 'no-scroll' to disable automatic scrolling of content to hash target ([0b1737f](https://github.com/eeditiones/tei-publisher-components/commit/0b1737fef77ff7c234c6f1a5746fe13f89070a07))

## [1.35.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.35.0...v1.35.1) (2022-02-26)


### Bug Fixes

* **pb-search:** add option to disable autocomplete ([18be531](https://github.com/eeditiones/tei-publisher-components/commit/18be53150f23fe97322b3b9dedefbdb4fe9dbf5b))

# [1.35.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.34.3...v1.35.0) (2022-02-24)


### Bug Fixes

* **pb-view:** allow 'xpath' to be specified in 'pb-refresh' event ([5375710](https://github.com/eeditiones/tei-publisher-components/commit/5375710251861fa767502ecdf8e9769acb306766))


### Features

* **pb-autocomplete:** add 'preload' property to preload entire list of possible suggestions once during initialization ([447dfcb](https://github.com/eeditiones/tei-publisher-components/commit/447dfcbf6963cbcdb631ce84993b2f3a5cdd3280))

## [1.34.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.34.2...v1.34.3) (2022-02-23)


### Bug Fixes

* **pb-view:** add CSS property --pb-view-scroll-margin-top to control scrolling offset for all elements being a potential link target ([9b836b9](https://github.com/eeditiones/tei-publisher-components/commit/9b836b9dce7ae6cba6c6b49ddc9484e7bc6a141a))

## [1.34.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.34.1...v1.34.2) (2022-02-22)


### Bug Fixes

* **pb-timeline:** safari broken: does not support regex look back ([349924c](https://github.com/eeditiones/tei-publisher-components/commit/349924c6e2c3be4bd84bd3c9d7850db0e8acfe43))
* **pb-view:** change "static" property to point to HTTP context path to use for CSS stylesheet loading ([539af55](https://github.com/eeditiones/tei-publisher-components/commit/539af55f43061f62076882e4884e4995eccb9b4c))

## [1.34.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.34.0...v1.34.1) (2022-02-14)


### Bug Fixes

* **pb-browse-docs:** navigating to parent collection should start on page 1 again ([804e6c4](https://github.com/eeditiones/tei-publisher-components/commit/804e6c40c30f2acda62b1b9903f801909f070a3e))

# [1.34.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.33.1...v1.34.0) (2022-02-14)


### Bug Fixes

* **pb-load:** for pagination, allow total number of pages/current page to also be specified via data-pagination-* attributes in content for cases where HTTP header cannot be used ([347ea0c](https://github.com/eeditiones/tei-publisher-components/commit/347ea0c4b7a09039d2dbf5615ee807b82727fb1d))


### Features

* **pb-view, pb-browse-docs:** add an option "static" to load pre-generated pages from a static endpoint, i.e. not a full TEI Publisher instance ([496ea4b](https://github.com/eeditiones/tei-publisher-components/commit/496ea4b2f0c84e653c3d8fe2047a56d66c90edae))

## [1.33.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.33.0...v1.33.1) (2022-02-03)


### Bug Fixes

* **pb-timeline:** improve tooltip placement; show details for undated entries as well ([d1edea8](https://github.com/eeditiones/tei-publisher-components/commit/d1edea8e5833f9a641329974710016529ada59ec))

# [1.33.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.32.2...v1.33.0) (2022-01-31)


### Bug Fixes

* **pb-timeline:** fix reported range ([fdbbc44](https://github.com/eeditiones/tei-publisher-components/commit/fdbbc445ede8a36631349e43ee6966804e03b819))
* **pb-timeline:** get timeline to work with facets ([71b3c4d](https://github.com/eeditiones/tei-publisher-components/commit/71b3c4da45c043f269e3114725370973180e2f44))
* **pb-timeline:** improve display, show current time range ([edc317e](https://github.com/eeditiones/tei-publisher-components/commit/edc317e7e880c2609b1df1f8156eb10d4e7851a1))
* **pb-timeline:** various fixes to support integration in publisher ([8fb1b7c](https://github.com/eeditiones/tei-publisher-components/commit/8fb1b7c63c3c33dda21b982310372590d0b55202))


### Features

* **pb-timeline:** show additional info in tooltip ([45dd690](https://github.com/eeditiones/tei-publisher-components/commit/45dd6907debc7c67db067eb6558304e3c6475972))

## [1.32.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.32.1...v1.32.2) (2022-01-26)


### Bug Fixes

* **pb-leaflet-map:** when clustering markers, make sure to zoom the map so the marker becomes visible - unless user defined a fixed zoom level ([2e44a9a](https://github.com/eeditiones/tei-publisher-components/commit/2e44a9a872b9c3030aa2776793625ff4dab13617))

## [1.32.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.32.0...v1.32.1) (2022-01-25)


### Bug Fixes

* **pb-geolocation:** allow a desired zoom level to be passed in via pb-geolocation event ([e0054f8](https://github.com/eeditiones/tei-publisher-components/commit/e0054f89d9f08d1e1b5ee5dd712f0eb354225e1e))
* **pb-split-list:** allow categories to wrap around if screen is too small ([53fb84d](https://github.com/eeditiones/tei-publisher-components/commit/53fb84dc7087fb85665ec250c0e6c6ec2f343a87))

# [1.32.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.31.0...v1.32.0) (2022-01-25)


### Bug Fixes

* **pb-split-list:** add items to light DOM instead of shadow DOM, so they can be styled ([6dd2267](https://github.com/eeditiones/tei-publisher-components/commit/6dd22675c898b1a7cf641ee653e21def9c23e818))


### Features

* **pb-leaflet-map:** Support clustering of markers to improve performance of maps with many markers ([4d73e38](https://github.com/eeditiones/tei-publisher-components/commit/4d73e3898fc235d402e28420e18819c5146b1673))

# [1.31.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.30.4...v1.31.0) (2022-01-24)


### Bug Fixes

* **pb-leaflet-map:** if there's only one location marked, show it on the map using the defined zoom level and not the whole world ([88ca01d](https://github.com/eeditiones/tei-publisher-components/commit/88ca01d24ce9ea1e756f9707eed0d1e74ae14ffc))


### Features

* **pb-custom-form:** add auto-submit feature: selected form elements will automatically submit the form when changed ([b34385a](https://github.com/eeditiones/tei-publisher-components/commit/b34385a768281964c8f571ebc96d6712276fe7c9))
* **pb-split-list:** new component to display lists organized into categories (e.g. letter of the alphabet, topic, country ...) ([0060931](https://github.com/eeditiones/tei-publisher-components/commit/00609317946f6f2750d9c504d9775f5191835868))

## [1.30.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.30.3...v1.30.4) (2022-01-19)


### Bug Fixes

* **pb-leaflet-map:** fix zoom if there's just one location; automatically emit pb-geolocation event ([7259290](https://github.com/eeditiones/tei-publisher-components/commit/72592902db5fda2ddbdae58e8e152e2cc2508205))

## [1.30.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.30.2...v1.30.3) (2021-12-19)


### Bug Fixes

* **pb-select-feature:** inherit width for dropdown ([29f0079](https://github.com/eeditiones/tei-publisher-components/commit/29f0079dbe35a403921d24fa2aa7e7d413a91088))

## [1.30.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.30.1...v1.30.2) (2021-12-12)


### Bug Fixes

* **pb-view-annotate:** do not throw errors when batch-applying annotations ([5432c64](https://github.com/eeditiones/tei-publisher-components/commit/5432c64812276047eabf6fad0d0b96435c10669d))

## [1.30.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.30.0...v1.30.1) (2021-12-04)


### Bug Fixes

* **odd editor:** add translations for pb:set-param and [@pb](https://github.com/pb):mode ([1e5422f](https://github.com/eeditiones/tei-publisher-components/commit/1e5422f53d0bbfff12b18f2d66805844b6449ef7))

# [1.30.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.29.0...v1.30.0) (2021-12-04)


### Bug Fixes

* **pb-view-annotate:** fix range detection bugs ([d1f31b3](https://github.com/eeditiones/tei-publisher-components/commit/d1f31b3687f58d924f76d32e68bd53f0e53d79d2))


### Features

* **pb-view-annotate:** emit pb-annotation-colors event if annotation color scheme changed ([185b075](https://github.com/eeditiones/tei-publisher-components/commit/185b075fa72191d7fb8753026a38e217b90fd8d9))

# [1.29.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.28.2...v1.29.0) (2021-11-26)


### Features

* **pb-view:** allow custom javascript to intercept updates and modify content before it is shown ([c98035e](https://github.com/eeditiones/tei-publisher-components/commit/c98035e8696cb4e642c6a8396b346ceb29e83595))

## [1.28.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.28.1...v1.28.2) (2021-11-23)


### Bug Fixes

* **pb-table-grid:** start item reported to server should be 1, not 0 ([8feab1d](https://github.com/eeditiones/tei-publisher-components/commit/8feab1db0b8d0bd8e8db5b8ecbaf531485a3c94b))

## [1.28.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.28.0...v1.28.1) (2021-11-23)


### Bug Fixes

* **pb-link, pb-view:** if only scroll target is changed, do not reload the content ([e7cc114](https://github.com/eeditiones/tei-publisher-components/commit/e7cc1145467935a41d410d3735b5d0327e26de14))

# [1.28.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.27.1...v1.28.0) (2021-11-17)


### Bug Fixes

* **pb-table-grid:** support setting number of entries per page ([69b29ab](https://github.com/eeditiones/tei-publisher-components/commit/69b29abfd7168012a32ad1cdacd8b404a655a090))


### Features

* **pb-odd-editor:** support extensions pb:set-param and [@pb](https://github.com/pb):mode ([748cd1e](https://github.com/eeditiones/tei-publisher-components/commit/748cd1e4d885e03e850b0433367bb9ac241f81c7))

## [1.27.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.27.0...v1.27.1) (2021-11-08)


### Bug Fixes

* **pb-view-annotate:** add class .incomplete if a semantic annotation has an empty reference, so users can quickly see which annotations may need inspection ([b9370a0](https://github.com/eeditiones/tei-publisher-components/commit/b9370a00683d027f1826fef769a79493b5cadc7e))

# [1.27.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.26.0...v1.27.0) (2021-11-02)


### Bug Fixes

* **pb-table-grid:** emit pb-results-received after table data loaded ([3e04d55](https://github.com/eeditiones/tei-publisher-components/commit/3e04d55cbed1c71c61ef08231776bc70eade963b))
* **pb-table-grid:** initialization issues ([072a6d9](https://github.com/eeditiones/tei-publisher-components/commit/072a6d98ce1fe2c4b54a19b2c43ad4e8e0b77f1e))
* **pb-table-grid:** save and restore parameters from URL ([88c585c](https://github.com/eeditiones/tei-publisher-components/commit/88c585c60e61820b43177701c59cd6f25dfe39c8))


### Features

* **pb-table-grid:** add new table grid component ([c1f5825](https://github.com/eeditiones/tei-publisher-components/commit/c1f582525eadced4bdb59743fd37537aa721347a))
* **pb-table-grid:** emit pb-grid-loaded event when data has updated ([9fc04af](https://github.com/eeditiones/tei-publisher-components/commit/9fc04af99fdbcb5ca7848fa34f4ec5ffd4750e37))

# [1.26.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.25.0...v1.26.0) (2021-10-29)


### Features

* **pb-authority-lookup:** new connector for Georg Fischer AG Konzernarchiv ([b66b1b4](https://github.com/eeditiones/tei-publisher-components/commit/b66b1b46beefc9dfd12193aed643693891eb6047))

# [1.25.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.20...v1.25.0) (2021-10-05)


### Features

* **dts-client:** support navigation to parent collection ([5985a70](https://github.com/eeditiones/tei-publisher-components/commit/5985a70253ac9f9b0f512a528b12e36178ea6413))

## [1.24.20](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.19...v1.24.20) (2021-10-04)


### Bug Fixes

* **pb-load:** correctly pass initial language set if use-language is true ([a759e24](https://github.com/eeditiones/tei-publisher-components/commit/a759e248d2de18b143a89d5327f18299f07f2c71))

## [1.24.19](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.18...v1.24.19) (2021-09-16)


### Bug Fixes

* rename pb-kwic-results to pb-blacklab-results and pb-kwic-highlight to pb-blacklab-highlight ([3e85fa5](https://github.com/eeditiones/tei-publisher-components/commit/3e85fa5427765f2c72840df183059ed7155c296d))
* **pb-view-annotate:** avoid exception if data-type attribut is missing on an element ([41f0ab0](https://github.com/eeditiones/tei-publisher-components/commit/41f0ab0e946698179b2aceb904fa21255e8b8934))

## [1.24.18](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.17...v1.24.18) (2021-08-10)


### Bug Fixes

* update Swedish translation ([e536d9c](https://github.com/eeditiones/tei-publisher-components/commit/e536d9c140435ee318656220bd30a74e76e898b9))

## [1.24.17](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.16...v1.24.17) (2021-08-10)


### Bug Fixes

* **pb-authority-lookup:** https api for geonames uses different domain ([9f20921](https://github.com/eeditiones/tei-publisher-components/commit/9f209212b806448f83ac206553239f79fa74fb3b))

## [1.24.16](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.15...v1.24.16) (2021-08-10)


### Bug Fixes

* **pb-authority-lookup:** switch geonames connector to HTTPS to avoid CORS error ([4e2d706](https://github.com/eeditiones/tei-publisher-components/commit/4e2d706fe5cd7701545f080d82c90e7c51a6ad81))

## [1.24.15](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.14...v1.24.15) (2021-08-09)


### Bug Fixes

* **pb-view:** add method to enable scrollbars ([c1ad3d7](https://github.com/eeditiones/tei-publisher-components/commit/c1ad3d7550598261a900396f626788a55c9499b4))

## [1.24.14](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.13...v1.24.14) (2021-08-09)


### Bug Fixes

* **pb-authority-lookup:** fix support for multiple sub-connectors in custom connector ([467d71e](https://github.com/eeditiones/tei-publisher-components/commit/467d71e85512e64c2ad9a5fce55a39fd247df4f9))

## [1.24.13](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.12...v1.24.13) (2021-08-09)


### Bug Fixes

* **pb-authority-lookup:** change register name from 'organisation' to 'organization' ([2a4cfba](https://github.com/eeditiones/tei-publisher-components/commit/2a4cfbad0c51c0a6449eb60ebff4334aecb03058))
* **pb-mei:** define options in element instead of requiring external javascript ([42e046c](https://github.com/eeditiones/tei-publisher-components/commit/42e046c5df68669a90cdc9bf3d41e9ea8a9f7469))
* **pb-mixin:** toAbsoluteURL failed when embedded in iframe ([15e3213](https://github.com/eeditiones/tei-publisher-components/commit/15e3213e9c04e656cfdaea75d53cc78316498853))
* **pb-odd-model-editor:** add 'pass-through' behaviour to default list ([38def5a](https://github.com/eeditiones/tei-publisher-components/commit/38def5a62598e78b420d8e0416a5a6f1bb3dfd9d))

## [1.24.12](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.11...v1.24.12) (2021-08-08)


### Bug Fixes

* **pb-authority-lookup:** hide extra scrollbar on authority entries list ([6ba9642](https://github.com/eeditiones/tei-publisher-components/commit/6ba96423b1111cf903cb418528fa7db88fca95bd))
* **pb-view-annotate:** add extra 4px margin to occurrence highlight ([69dbcc4](https://github.com/eeditiones/tei-publisher-components/commit/69dbcc4662819b9b93e0f1e3c7f886b95693dde6))
* **pb-view-annotate:** use requestAnimationFrame instead of delay for repainting markers ([219b184](https://github.com/eeditiones/tei-publisher-components/commit/219b1840f839769e0f2fed3dcdccc1fa0d825459))

## [1.24.11](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.10...v1.24.11) (2021-08-07)


### Bug Fixes

* **pb-view-annotate:** chrome sometimes inserts empty text nodes: skip when calculating offsets ([ac79121](https://github.com/eeditiones/tei-publisher-components/commit/ac79121e28f299ce7834325f65bd188ea438fc25))

## [1.24.10](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.9...v1.24.10) (2021-08-06)


### Bug Fixes

* **pb-view-annotate:** fix regex used for searching other occurrences to correctly handle non-word characters in the search string; make case-sensitivity configurable ([576484b](https://github.com/eeditiones/tei-publisher-components/commit/576484bd88dc87e15e3042b9e4de21629c570234))

## [1.24.9](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.8...v1.24.9) (2021-08-05)


### Bug Fixes

* **pb-view-annotate:** adjust annotation start point when spanning multiple nodes ([aa399a3](https://github.com/eeditiones/tei-publisher-components/commit/aa399a39d125c0ce3cd2ee98973f97b6b8f2aac3))

## [1.24.8](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.7...v1.24.8) (2021-08-04)


### Bug Fixes

* **pb-hotkeys:** disable hotkeys for form elements ([8129473](https://github.com/eeditiones/tei-publisher-components/commit/812947356a9aebfbcf7649a7ef1cff9a930d9ed4))
* **pb-view-annotate:** wrong offset used if annotation follows footnote ([6c5e284](https://github.com/eeditiones/tei-publisher-components/commit/6c5e2841b01bd797563aff6d6c96202fb46bd334))

## [1.24.7](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.6...v1.24.7) (2021-08-04)


### Bug Fixes

* **pb-view-annotate:** changing an already applied edit annotation failed ([efbcfbd](https://github.com/eeditiones/tei-publisher-components/commit/efbcfbded913e80f5e147b55f2ba9058b0a3b265))

## [1.24.6](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.5...v1.24.6) (2021-08-04)


### Bug Fixes

* **pb-view-annotate:** annotation markers need to be cleared upon pb-refresh event, not after every refresh as this breaks undo ([1f34d2f](https://github.com/eeditiones/tei-publisher-components/commit/1f34d2f20da0269c31116f83837659c8c76e6221))

## [1.24.5](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.4...v1.24.5) (2021-08-03)


### Bug Fixes

* **pb-message:** do not overwrite initial title and message unless requested; resize dialog on property update ([bae975e](https://github.com/eeditiones/tei-publisher-components/commit/bae975ec4ee88833a32b67a6647599df169e958d))
* **pb-page:** allow multiple attributes separated by ; in data-i18n ([2d4df1b](https://github.com/eeditiones/tei-publisher-components/commit/2d4df1bb11ea7b5747e0d5b245f40a0bd318ede8))
* **pb-view-annotate:** optionally preserve scroll position on pb-refresh ([a6e1a13](https://github.com/eeditiones/tei-publisher-components/commit/a6e1a1348ac126989c8b8589ff911bb1c4c1f621))

## [1.24.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.3...v1.24.4) (2021-08-01)


### Bug Fixes

* **pb-search:** remove 'start' parameter from URL: it serves no purpose ([da93a16](https://github.com/eeditiones/tei-publisher-components/commit/da93a16a642a1db14f00501ab2a566409d849a8c))

## [1.24.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.2...v1.24.3) (2021-08-01)


### Bug Fixes

* **pb-authority-lookup:** add property sort-by-label to control if the search results returned by an authority should be reordered by label or not ([2fa7357](https://github.com/eeditiones/tei-publisher-components/commit/2fa7357b00202ce4514574bc607b23997106d1d3))
* **pb-view:** the 'highlight' property was useless as it would be set to true automatically; rename it to suppressHighlight ([a36bbad](https://github.com/eeditiones/tei-publisher-components/commit/a36bbade5c6068944a364e91d234d3323615bf52))

## [1.24.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.1...v1.24.2) (2021-08-01)


### Bug Fixes

* **pb-search:** remove unused hidden doc parameter; fix parameter serialization ([5d8e13f](https://github.com/eeditiones/tei-publisher-components/commit/5d8e13ffcc3d91d651d8a54cb9304eb08e918707))

## [1.24.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.24.0...v1.24.1) (2021-07-29)


### Bug Fixes

* **pb-authority-lookup, airtable:** add an attribute "tokenize" to the connector to configure which fields should be tokenized when constructing the search expression for other occurrences ([4a751aa](https://github.com/eeditiones/tei-publisher-components/commit/4a751aa01ad4c218f51861613d93c40c0ca7b447))

# [1.24.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.6...v1.24.0) (2021-07-29)


### Bug Fixes

* **pb-authority-lookup:** add a property to define stopwords ([d465a76](https://github.com/eeditiones/tei-publisher-components/commit/d465a7623adf66ddb1e5ce23ccde468399b18633))
* **pb-authority-lookup:** airtable: using wrong fields for retrieving info ([5b0d339](https://github.com/eeditiones/tei-publisher-components/commit/5b0d339147148abc8c3f38c2342f05b40feee792))
* **pb-authority-lookup, airtable:** limit number of fields retrieved to those needed ([1d06aea](https://github.com/eeditiones/tei-publisher-components/commit/1d06aea8c75c529fff764250ec8b75f9c802ac82))
* **pb-authority-lookup, airtable:** provide feedback for non-existant keys ([ce845d5](https://github.com/eeditiones/tei-publisher-components/commit/ce845d579f813236c7244ee829a0b9cdd5a32830))
* **pb-authority-lookup, airtable:** report error message if lookup fails ([3d77e81](https://github.com/eeditiones/tei-publisher-components/commit/3d77e817ab4dcbf8aeace472fcd3fd883f46e3b4))
* **pb-authority-lookup, airtable:** work around airtable reporting an additional empty record ([3fd1852](https://github.com/eeditiones/tei-publisher-components/commit/3fd1852685a4acf3798b135cec992c17842bcd4b))
* **pb-authority-lookup, geonames:** handle errors and not found entries ([e730afe](https://github.com/eeditiones/tei-publisher-components/commit/e730afece4f1e01253f650600d069291ae3f2a08))
* **pb-popover:** add CSS variables for min-width and min-height ([34dab6d](https://github.com/eeditiones/tei-publisher-components/commit/34dab6debdcef53558a8b34b408384a82c6fe6f1))
* **pb-view-annotate:**  re-read annotation data each time popup is shown ([4e1f438](https://github.com/eeditiones/tei-publisher-components/commit/4e1f4388182ef823a5f660f19d6829dbf80ac53e))
* **pb-view-annotate:** add i18n labels ([db0d2fd](https://github.com/eeditiones/tei-publisher-components/commit/db0d2fdb20bf6f25740224efc11a91f7cbd5ff4c))
* **pb-view-annotate:** annotation popup should only appear on click ([488e7f5](https://github.com/eeditiones/tei-publisher-components/commit/488e7f52b712bd60d8dd413abc5bb32bec99ab60))
* **pb-view-annotate:** creating a nested annotation fails in the browser; closes https://github.com/eeditiones/tei-publisher-app/issues/61 ([531e171](https://github.com/eeditiones/tei-publisher-components/commit/531e17167d76daad166a72c7ab59523ff84fb4be))
* **pb-view-annotate:** fix annotation marker display performance ([f1f1c6c](https://github.com/eeditiones/tei-publisher-components/commit/f1f1c6c7e27eb16747637c3562b7f8a9034eee2a))
* **pb-view-annotate:** fix deletion of annotation with nested elements ([e62def9](https://github.com/eeditiones/tei-publisher-components/commit/e62def976c20e6c772abca5141c1cea0487586d2))
* **pb-view-annotate:** fix popover positioning ([486e9c7](https://github.com/eeditiones/tei-publisher-components/commit/486e9c7ba12466d6af4adaaf67c815fe1e0c05bc))
* **pb-view-annotate:** fix popover positioning ([60622d2](https://github.com/eeditiones/tei-publisher-components/commit/60622d27c21cc13411197d027a8d691ef3709e1f))
* **pb-view-annotate:** fix popover width ([9163ff8](https://github.com/eeditiones/tei-publisher-components/commit/9163ff8a0f2425601781ae7de185887e4c5d6490))
* **pb-view-annotate:** fix search regexp ([d146abd](https://github.com/eeditiones/tei-publisher-components/commit/d146abdbffaccf9c75c7b9555c29474da8797bcd))
* **pb-view-annotate:** fix undo for modifications ([4d02ee4](https://github.com/eeditiones/tei-publisher-components/commit/4d02ee47857c2303777b5dcd9c7d7df72c8075d0))
* **pb-view-annotate:** handle selection in firefox and safari; select previously wrapped content after deleting an annotation to make it easier for user to reassign an annotation ([417ba83](https://github.com/eeditiones/tei-publisher-components/commit/417ba83598b733f3cf743db0f372e6dbc7f7d4cd))
* **pb-view-annotate:** optimize code for creating annotation markers ([dc73f34](https://github.com/eeditiones/tei-publisher-components/commit/dc73f344c77a4bc4d91a0aadeb17231d13118d1f))
* **pb-view-annotate:** output properties as table if annotation is not connected to an authority ([45f807c](https://github.com/eeditiones/tei-publisher-components/commit/45f807c262e3a7224df572e6c41a02138ed627da))
* **pb-view-annotate:** refresh markers on zoom in/out ([4eed943](https://github.com/eeditiones/tei-publisher-components/commit/4eed94322428bf988d55fd26d3310346b02c26c9))
* **pb-view-annotate:** reinitialize colors after restoring annotations from local storage ([574b17e](https://github.com/eeditiones/tei-publisher-components/commit/574b17eb7603aaf1cafdebd02b031b966262381d))
* **pb-view-annotate:** show note if no properties are defined for an annotation rather than just an empty table ([231e7c1](https://github.com/eeditiones/tei-publisher-components/commit/231e7c13a2c437fa6c780198920d95d681454468))
* **pb-view-annotate:** to avoid blocking browser, do not redraw annotation markers after every change in batch operation mode ([08aa614](https://github.com/eeditiones/tei-publisher-components/commit/08aa614501fb644fd25c9a149d914d113b2178ac))
* **pb-view-annotate:** when searching the text, try to match full names first ([3e1ad8f](https://github.com/eeditiones/tei-publisher-components/commit/3e1ad8f53219a322e532113476797cca71fc1840))


### Features

* **pb-authority-lookup:** add "local" connector, which combines one or more connectors and saves a copy of any selected entry to a local TEI file where it can be edited ([624ceea](https://github.com/eeditiones/tei-publisher-components/commit/624ceea6ea6dd6da11392131e9c5e23435db08b2))
* **pb-authority-lookup:** show database occurrence count for each authority entry ([291cc0a](https://github.com/eeditiones/tei-publisher-components/commit/291cc0a3592c2a854b5b5fc5d3eb9060fa697d37))
* **pb-hotkeys:** expose window.pbKeyboard function to be used by custom code for extra keybindings ([d137df2](https://github.com/eeditiones/tei-publisher-components/commit/d137df2a684c8c9561dc3d4176958b8b5e74fa7b))
* **pb-repeat:** allow data to be set programmatically ([efc4ad7](https://github.com/eeditiones/tei-publisher-components/commit/efc4ad7fd2dcdfd39f684fc8415579dd991a8b7c))
* **pb-selectable:** create mixin PbSelectable to handle browser selection ([0f16d96](https://github.com/eeditiones/tei-publisher-components/commit/0f16d9696ddd81f905aab67e0594b553b456cb59))
* **pb-view-annotate:** auto-generate colors to be used ([b1b3b0f](https://github.com/eeditiones/tei-publisher-components/commit/b1b3b0f7e416e93ffbb43c40ec68044f2388ab33))
* **pb-view-annotation:** implement undo feature ([4c987e0](https://github.com/eeditiones/tei-publisher-components/commit/4c987e0fffcecee49ac52b439becf35298a1ac2d))

## [1.23.6](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.5...v1.23.6) (2021-07-15)


### Bug Fixes

* **pb-mixin:** copy event details before modifying them; avoid useless _source parameter being sent to server ([4493fd2](https://github.com/eeditiones/tei-publisher-components/commit/4493fd27da309919c2a9e020501c30b8c774c90e))

## [1.23.5](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.4...v1.23.5) (2021-06-24)


### Bug Fixes

* **pb-facsimile:** height computation incorrect if there is no before/after slot ([e2702a1](https://github.com/eeditiones/tei-publisher-components/commit/e2702a1afbfb622415eaf10cfe03c63679cf665a))

## [1.23.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.3...v1.23.4) (2021-06-24)


### Bug Fixes

* **pb-drawer:** drawer sometimes does not hide when loaded ([ca33ddb](https://github.com/eeditiones/tei-publisher-components/commit/ca33ddb7457f9258913584d4bba52d528f5149e3))
* **pb-facsimile:** before/after slots are sometimes hidden; use grid for automatic height ([f515771](https://github.com/eeditiones/tei-publisher-components/commit/f51577136c32dd5008336c54af351e12ce362f6f))

## [1.23.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.2...v1.23.3) (2021-06-17)


### Bug Fixes

* **pb-popover:** it should be possible to modify the element returned by property alternate ([f84b80f](https://github.com/eeditiones/tei-publisher-components/commit/f84b80f3913eb308ced3133b069577ecffbd6073))

## [1.23.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.1...v1.23.2) (2021-06-14)


### Bug Fixes

* **pb-facsimile:** emit pb-facsimile-status event to indicate if a image has been requested, is loaded or the loading failed ([bf072dc](https://github.com/eeditiones/tei-publisher-components/commit/bf072dc104dbf384eb2c58223e15c630d24950c3))

## [1.23.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.23.0...v1.23.1) (2021-06-03)


### Bug Fixes

* **pb-code-highlight:** do not show message while parsing code ([7ebc4fc](https://github.com/eeditiones/tei-publisher-components/commit/7ebc4fcf981590576aeb8c5fc6732c1c7a6e3b73))
* **pb-load:** improve error reporting ([1c35fe4](https://github.com/eeditiones/tei-publisher-components/commit/1c35fe42b99f6adaac1005ce1f2be1c5efc7c573))
* **pb-restricted:** hide disabled element if there's no fallback ([4067bc7](https://github.com/eeditiones/tei-publisher-components/commit/4067bc7c3a8a2a013eeed8beac1d969c2eefb15f))

# [1.23.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.22.0...v1.23.0) (2021-05-15)


### Features

* **pb-markdown:** react to zoom-in/-out event ([e99f61e](https://github.com/eeditiones/tei-publisher-components/commit/e99f61ead98eabf3faf2d884718efbf94b2aef2a))

# [1.22.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.21.3...v1.22.0) (2021-04-08)


### Features

* **pb-mei:** support dynamic switching of app/lem/rdg and other alternates in MEI content ([5de4d03](https://github.com/eeditiones/tei-publisher-components/commit/5de4d03fc63d48b3be0fff72ae548f38b8fc96f7))

## [1.21.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.21.2...v1.21.3) (2021-03-26)


### Bug Fixes

* **pb-markdown:** update content when url property is changed dynamically ([c5073fc](https://github.com/eeditiones/tei-publisher-components/commit/c5073fc306fc962bd6de4a4e72a5f11a29401ca4))

## [1.21.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.21.1...v1.21.2) (2021-03-21)


### Bug Fixes

* **pb-popover:** if persistent is true, only hide the popover when user clicks outside ([59f6c5e](https://github.com/eeditiones/tei-publisher-components/commit/59f6c5eacd7847e626491a2d292a9f448adb4ce8))

## [1.21.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.21.0...v1.21.1) (2021-03-21)


### Bug Fixes

* **pb-popover:** fix display of nested popovers; allow trigger action to be set for all pb-popover via CSS custom variable ([cbb625b](https://github.com/eeditiones/tei-publisher-components/commit/cbb625ba960e0be20ff344aaef883f7d21593e81))

# [1.21.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.20.0...v1.21.0) (2021-03-17)


### Bug Fixes

* **pb-leaflet-map:** properly show location markers, support tooltips and popups ([f2a7641](https://github.com/eeditiones/tei-publisher-components/commit/f2a7641c1b1b5e4389b005f2df87c60aa2b726d1))


### Features

* **pb-geolocation:** support popups to be displayed in map ([6cc2aa1](https://github.com/eeditiones/tei-publisher-components/commit/6cc2aa19d03fafd45b8b12d6eb076f69289001bd))

# [1.20.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.19.4...v1.20.0) (2021-03-02)


### Bug Fixes

* **pb-toggle-feature,pb-select-feature:** respect the global disabled property ([7597a6c](https://github.com/eeditiones/tei-publisher-components/commit/7597a6c2d3eb301b55a13742f91598a8be88ad4c))


### Features

* **i18n:** add support for Chinese simplified and traditional ([b5fa659](https://github.com/eeditiones/tei-publisher-components/commit/b5fa6599598c6b76b5d7749eed71e457f7f8f29d))
* **pb-restricted:** add optional fallback slot to show content if user is not logged in ([0140d63](https://github.com/eeditiones/tei-publisher-components/commit/0140d63abca155d2479b1b63fbf2094bca5be114))

## [1.19.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.19.3...v1.19.4) (2021-02-12)


### Bug Fixes

* **pb-drawer:** only enforce fixed width in overlay mode ([8f90984](https://github.com/eeditiones/tei-publisher-components/commit/8f90984edc0c5bcce1cfe300586961a2629b5c2c))

## [1.19.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.19.2...v1.19.3) (2021-02-12)


### Bug Fixes

* **pb-drawer:** add property position=left|right to slide in from right or left; add CSS properties for width; support ::part for inner div ([01df3f1](https://github.com/eeditiones/tei-publisher-components/commit/01df3f154cc1a962341418ef4ce7b1a4c0237247))
* **pb-facsimile:** all properties should be dash-separated, not camel case; show-xxx-control properties had no effect; set all boolean properties to false by default ([f9610d2](https://github.com/eeditiones/tei-publisher-components/commit/f9610d20bd5a5dd67afb0d7cccf8d9225cdd28ab))
* **pb-view:** document parts; add part to style footnote div ([4499d92](https://github.com/eeditiones/tei-publisher-components/commit/4499d92df5c39ed8f99532b0a28089b220f83d86))

## [1.19.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.19.1...v1.19.2) (2021-02-02)


### Bug Fixes

* **pb-drawer:** toggle may not have been specified - allow controlling pb-drawer via custom event ([d311968](https://github.com/eeditiones/tei-publisher-components/commit/d31196894cb8d3f14049cab22633ddfc6503076c))

## [1.19.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.19.0...v1.19.1) (2021-01-31)


### Bug Fixes

* **pb-leaflet-map:** fix demo ([b8cdcb1](https://github.com/eeditiones/tei-publisher-components/commit/b8cdcb15fda48f93a21a1fad213430db7767c586))

# [1.19.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.18.1...v1.19.0) (2021-01-31)


### Bug Fixes

* **pb-facs-link:** emitOnLoad should be specified as emit-on-load attribute ([516a575](https://github.com/eeditiones/tei-publisher-components/commit/516a5750e5ca902b5002d8a1be24e36f84cb6c98))


### Features

* **pb-leaflet-map:** add feature to configure different map layers ([0f6d96e](https://github.com/eeditiones/tei-publisher-components/commit/0f6d96ed93986a6f693a004dbb853f46b33640b3))

## [1.18.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.18.0...v1.18.1) (2021-01-30)


### Bug Fixes

* **pb-svg:** do not try to load svg if url is not set ([b1c55e0](https://github.com/eeditiones/tei-publisher-components/commit/b1c55e0036f46dead38274238845035b9dce8f90))

# [1.18.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.17.4...v1.18.0) (2021-01-26)


### Features

* **pb-page:** make pb-page react to pb-toggle events and dispatch the state changes to elements on the page ([a15ab4d](https://github.com/eeditiones/tei-publisher-components/commit/a15ab4db8e80a6ee7340724b55863ff3e3800626))

## [1.17.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.17.3...v1.17.4) (2021-01-24)


### Bug Fixes

* **pb-leaflet-map:** add map configuration to allow for no automatic scroll ([303beaf](https://github.com/eeditiones/tei-publisher-components/commit/303beafecd5e0fd5b37afada4677882be0307ade))

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
