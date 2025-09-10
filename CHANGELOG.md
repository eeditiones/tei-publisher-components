# [2.26.0-next-3.14](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.13...v2.26.0-next-3.14) (2025-09-10)


### Bug Fixes

* **pb-facsimile:** component did not initialize if openseadragon was already loaded; this prevented multiple instances on the same page ([16c881b](https://github.com/eeditiones/tei-publisher-components/commit/16c881bdd0e1c7d9d441414d020778050f714f5e))
* **pb-view:** start listening to pb-refresh after component is ready; prevents race condition ([6196e03](https://github.com/eeditiones/tei-publisher-components/commit/6196e03e648fad9d37404f4d7d06a5bbcfe317a3))


### Features

* **pb-grid:** drop polymer components ([8014c9c](https://github.com/eeditiones/tei-publisher-components/commit/8014c9cdd1bd79834e4fcd7c2f0d6d5d16349f2c))

# [2.26.0-next-3.13](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.12...v2.26.0-next-3.13) (2025-09-10)


### Bug Fixes

* **docker:** allign image ([45fcfe6](https://github.com/eeditiones/tei-publisher-components/commit/45fcfe682d4413baaf6413e3801201f46d7b0f0a)), closes [#244](https://github.com/eeditiones/tei-publisher-components/issues/244)
* **docker:** minor fixes ([34ad702](https://github.com/eeditiones/tei-publisher-components/commit/34ad702e6e72455096421cfa6f77a9a921cf2b31))
* **i18n:** correct pl labels ([f861af7](https://github.com/eeditiones/tei-publisher-components/commit/f861af774050accc0a5479ae40a5be94c8f87f2f))
* **pb-dialog:** any button with [rel="prev"] should close the dialog ([9c8c7f0](https://github.com/eeditiones/tei-publisher-components/commit/9c8c7f0ac24ffb139fd71dcc5e58922a1488e165))


### Features

* **pb-progress:** replace paper-progress with native progres ([5ce49f1](https://github.com/eeditiones/tei-publisher-components/commit/5ce49f19abda1f37f884d977a0cc5204d690f290))

# [2.26.0-next-3.12](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.11...v2.26.0-next-3.12) (2025-08-31)


### Bug Fixes

* **pb-dialog:** include background svg for close button in default ([98d043d](https://github.com/eeditiones/tei-publisher-components/commit/98d043dae1e0669078cc1adac354b9273b23ed31))
* **pb-login:** login/logout icons were swapped ([7b43326](https://github.com/eeditiones/tei-publisher-components/commit/7b4332604d44768b0c22f08edeba8ea6c4d6acdf))

# [2.26.0-next-3.11](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.10...v2.26.0-next-3.11) (2025-08-28)


### Bug Fixes

* **pb-view:** add an attribute to set the "fill" parameter on requests. ([e6f3836](https://github.com/eeditiones/tei-publisher-components/commit/e6f3836cbde99133ba861dc71216397997bbb291))

# [2.26.0-next-3.10](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.9...v2.26.0-next-3.10) (2025-07-29)


### Features

* **pb-collapse, pb-odd-editor:** remove iron-collapse and use standard ([628f782](https://github.com/eeditiones/tei-publisher-components/commit/628f78278cca122a77ab5f0fadd1bb26a4dc8ed3))

# [2.26.0-next-3.9](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.8...v2.26.0-next-3.9) (2025-07-26)


### Bug Fixes

* **pb-authority-lookup:** fix styling ([6272717](https://github.com/eeditiones/tei-publisher-components/commit/6272717f9ad8c126ce97e220099c45ef6f1923e6))

# [2.26.0-next-3.8](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.7...v2.26.0-next-3.8) (2025-07-25)


### Bug Fixes

* **pb-authority-lookup:** drop paper-input and paper-icon-button ([47edcd2](https://github.com/eeditiones/tei-publisher-components/commit/47edcd29b52e99a40309c4e8a2d5e394003c8813))
* **pb-view:** remove unused paper-dialog ([90463df](https://github.com/eeditiones/tei-publisher-components/commit/90463df6f1fe7720d676a5e79dbc9b7586217c82))

# [2.26.0-next-3.7](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.6...v2.26.0-next-3.7) (2025-07-24)


### Bug Fixes

* **pb-custom-form:** also handle key up for input[type=search] ([96bd084](https://github.com/eeditiones/tei-publisher-components/commit/96bd08490b79b15ed6a714575bc1f335f4563818))
* **pb-download,pb-edit-xml:** make themable ([85c5834](https://github.com/eeditiones/tei-publisher-components/commit/85c583448ce9778b7cb061f69b259293fffa3b26))

# [2.26.0-next-3.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.5...v2.26.0-next-3.6) (2025-07-18)


### Bug Fixes

* **pb-search:** autocomplete not working ([626fdd8](https://github.com/eeditiones/tei-publisher-components/commit/626fdd8c52510ee7c61a9240c8b94a9e6d0cc10c))


### Features

* **pb-search:** replace paper with native elements ([03679ea](https://github.com/eeditiones/tei-publisher-components/commit/03679ea0b52c547b7b55f5fb04bd34894c833d90))

# [2.26.0-next-3.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.4...v2.26.0-next-3.5) (2025-07-02)


### Bug Fixes

* **pb-ajax:** contained pb-message should initially be display=none to avoid taking space ([84df915](https://github.com/eeditiones/tei-publisher-components/commit/84df9159bf3dad8dcd200f2e5a4e6bbd744cf37e))


### Features

* **pb-toggle-feature:** replace paper with native checkbox ([b1da06c](https://github.com/eeditiones/tei-publisher-components/commit/b1da06c70745646effb082e67556f7f6691c46e7))

# [2.26.0-next-3.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.3...v2.26.0-next-3.4) (2025-06-19)


### Bug Fixes

* **pb-lang:** default value not displayed ([89426bf](https://github.com/eeditiones/tei-publisher-components/commit/89426bf97620976320b321b55d4b5ec0d39ffc1d))

# [2.26.0-next-3.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.2...v2.26.0-next-3.3) (2025-06-19)


### Bug Fixes

* **pb-lang:** use details/summary structure instead of select ([cdc2dcd](https://github.com/eeditiones/tei-publisher-components/commit/cdc2dcda188e2feef88fec45a6263569d4be9887))

# [2.26.0-next-3.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.26.0-next-3.1...v2.26.0-next-3.2) (2025-06-15)


### Bug Fixes

* **pb-login:** do not enforce h2 for title, add placeholders ([d888703](https://github.com/eeditiones/tei-publisher-components/commit/d88870319a5c18e02a02b0bbbccf1ea678548916))


### Features

* **pb-zoom:** replace paper button ([cddb36f](https://github.com/eeditiones/tei-publisher-components/commit/cddb36fddd35e4e31b6bbd1a98af1f3c9275a92e))

# [2.26.0-next-3.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.4...v2.26.0-next-3.1) (2025-06-10)


### Bug Fixes

* **pb-dialog:** move dialog default CSS to components.css ([ece99c9](https://github.com/eeditiones/tei-publisher-components/commit/ece99c9bdb37cd70c81bbe54691d3263043e19a2))
* **pb-download:** use pb-dialog instead of paper-dialog ([ddc4879](https://github.com/eeditiones/tei-publisher-components/commit/ddc48793d66c126df3ae023f15a4342c5b6f6661))


### Features

* **pb-dialog:** add pb-dialog component to replace paper-dialog ([c05b760](https://github.com/eeditiones/tei-publisher-components/commit/c05b760ce6b63fc8d4893c354ad4731a1b619fff))
* **pb-lang:** switch to standard select ([9a4a01a](https://github.com/eeditiones/tei-publisher-components/commit/9a4a01abcb87dbe0cde5e4a4deeb5ba0a94c0a61))
* **pb-login:** drop polymer, use pb-dialog ([ffee19f](https://github.com/eeditiones/tei-publisher-components/commit/ffee19fa27f1e8520c8c3e9a877100b981e38ddf))
* **pb-message:** replace paper-dialog with pb-dialog ([e60c401](https://github.com/eeditiones/tei-publisher-components/commit/e60c401153bd2756c0d081a09e70f2be31ab2526))

## [2.25.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.5...v2.25.6) (2025-09-09)


### Bug Fixes

* **docker:** allign image ([45fcfe6](https://github.com/eeditiones/tei-publisher-components/commit/45fcfe682d4413baaf6413e3801201f46d7b0f0a)), closes [#244](https://github.com/eeditiones/tei-publisher-components/issues/244)
* **docker:** minor fixes ([34ad702](https://github.com/eeditiones/tei-publisher-components/commit/34ad702e6e72455096421cfa6f77a9a921cf2b31))

## [2.25.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.4...v2.25.5) (2025-08-16)


### Bug Fixes

* **i18n:** correct pl labels ([f861af7](https://github.com/eeditiones/tei-publisher-components/commit/f861af774050accc0a5479ae40a5be94c8f87f2f))

## [2.25.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.3...v2.25.4) (2025-06-04)


### Bug Fixes

* **pb-leaflet-map:** collapse the layer control by default, so it doesn't use too much space ([78f160f](https://github.com/eeditiones/tei-publisher-components/commit/78f160fa9e87799453354b19b6186c1c53d2b48b))

## [2.25.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.2...v2.25.3) (2025-05-30)


### Bug Fixes

* **pb-timeline:** Fix the timeframe label for some edge cases ([e6a8fbe](https://github.com/eeditiones/tei-publisher-components/commit/e6a8fbe915906ab51186cba2875ee0f107ba41e9))

## [2.25.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.1...v2.25.2) (2025-04-11)


### Bug Fixes

* **pb-authority-lookup:** add attributes so the element can be configured via html and not just by sending an event ([fb7a6aa](https://github.com/eeditiones/tei-publisher-components/commit/fb7a6aae18b836dcec0db79339ae266a17204132))

## [2.25.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.25.0...v2.25.1) (2025-03-14)


### Bug Fixes

* **pb-combo-box:** abort requests to prevent race condition ([8ccf2ce](https://github.com/eeditiones/tei-publisher-components/commit/8ccf2ce6f3d1e55520cc1488445de3c92d99cb64))

# [2.25.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.9...v2.25.0) (2025-03-13)


### Bug Fixes

* **pb-tify:** prevent flickering when requested page equals current page ([3d97de1](https://github.com/eeditiones/tei-publisher-components/commit/3d97de1c201eef6dbe091b74cae5f74d544837b2))


### Features

* **pb-tify:** add support for pb-facs-link coordinates (rectangle highlighting) ([67ab02f](https://github.com/eeditiones/tei-publisher-components/commit/67ab02f2fc4879aa2b3dc5ca14df3bade70f6d7b))

## [2.24.9](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.8...v2.24.9) (2025-02-25)


### Bug Fixes

* **pb-table-grid:** add "subforms" attribute to append parameters from other forms similar to pb-search et al ([c9ec6cf](https://github.com/eeditiones/tei-publisher-components/commit/c9ec6cfb7edb8403ec1ff75251dfad0322cd851e))
* **pb-table-grid:** support i18n on column headers by interpreting label as i18n key ([63e9ed6](https://github.com/eeditiones/tei-publisher-components/commit/63e9ed6d4b4cb97ef3f1df6dc6673952267a7c18))

## [2.24.8](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.7...v2.24.8) (2025-01-14)


### Bug Fixes

* **pb-login:** if "auto" is set, show login dialog as modal to prevent users from accessing content ([82256bc](https://github.com/eeditiones/tei-publisher-components/commit/82256bc9ccfece2e844e9555138b57fc910f1800))

## [2.24.7](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.6...v2.24.7) (2024-12-12)


### Bug Fixes

* **pb-formula:** fix typo ([bace492](https://github.com/eeditiones/tei-publisher-components/commit/bace4928116a22eec3109f14f3f3de9fd8575ae3))
* **pb-formula:** replace XML entities ([cd95621](https://github.com/eeditiones/tei-publisher-components/commit/cd95621077131ba080092f9c2213db32fc87da55))

## [2.24.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.5...v2.24.6) (2024-12-02)


### Bug Fixes

* **pb-collapse:** too much space between trigger icon and text ([9b153b6](https://github.com/eeditiones/tei-publisher-components/commit/9b153b6056c2b1b9108656dad31a9b50670f8243))

## [2.24.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.4...v2.24.5) (2024-11-21)


### Bug Fixes

* **pb-combo-box:** Clear items before refetching ([b6fdf68](https://github.com/eeditiones/tei-publisher-components/commit/b6fdf68040484df01de23ee28f6461f525ce5423))

## [2.24.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.3...v2.24.4) (2024-11-14)


### Bug Fixes

* **pb-table-grid:** respect existing search parameter when using included search feature ([7abdd8f](https://github.com/eeditiones/tei-publisher-components/commit/7abdd8fb67368f0a864a14354c98839e527dda94))

## [2.24.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.2...v2.24.3) (2024-10-10)


### Bug Fixes

* **pb-view-annotate:** allow placing element after selected text ([f7272c6](https://github.com/eeditiones/tei-publisher-components/commit/f7272c66d202fa4311324588b54b11af9fb4dd86))

## [2.24.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.1...v2.24.2) (2024-07-23)


### Bug Fixes

* **pb-collapse:** collapse icons with fixed width ([0e83fbe](https://github.com/eeditiones/tei-publisher-components/commit/0e83fbecaaca0983bf282a80135cbf674668dfe3))

## [2.24.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.24.0...v2.24.1) (2024-07-16)


### Bug Fixes

* **pb-grid:** Fix calling pb-grid#addPanel(0) ([e326905](https://github.com/eeditiones/tei-publisher-components/commit/e326905a070224267dc1b1b0840ce368eeeac330))

# [2.24.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.23.2...v2.24.0) (2024-06-27)


### Features

* **i18n:** add translations for mainland traditional Chinese; complete simplified Chinese; drop incomplete zh_TW ([0cf6127](https://github.com/eeditiones/tei-publisher-components/commit/0cf6127ebfbf9d39cbc60ca0a2c00b0cff52928b))

## [2.23.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.23.1...v2.23.2) (2024-05-19)


### Bug Fixes

* **pb-facs-link:** emit-on-load should also wait for pb-facsimile/pb-tify to be available ([b16730a](https://github.com/eeditiones/tei-publisher-components/commit/b16730a07c7d930080b35de2de9af75da93b3ab2))
* **pb-mixin:** fix bug in wait method introduced by 189d5a1ac87014db3452f846cf506616a12959f4 ([afb665d](https://github.com/eeditiones/tei-publisher-components/commit/afb665d9a720c484bbf0549628780920f7a91447))
* **pb-mixin:** the wait method needs to make sure the HTML DOM has been loaded entirely before selecting elements to wait for ([189d5a1](https://github.com/eeditiones/tei-publisher-components/commit/189d5a1ac87014db3452f846cf506616a12959f4))
* **pb-tify:** emit ready event element is connected ([b8bae11](https://github.com/eeditiones/tei-publisher-components/commit/b8bae1199030dd8d3b68307507be9ac3246a4e9f))

## [2.23.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.23.0...v2.23.1) (2024-05-16)


### Bug Fixes

* **pb-authority-lookup, anton:** avoid error if json.data.location == null ([d06a34a](https://github.com/eeditiones/tei-publisher-components/commit/d06a34acc923b80b3b788bef5fa6fb2aecd18a35))

# [2.23.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.22.2...v2.23.0) (2024-05-15)


### Features

* **pb-facsimile:** added option to add download icon to trigger download of current viewport. Added a demo for the feature ([0233c83](https://github.com/eeditiones/tei-publisher-components/commit/0233c8333e9e78ed529a21361e358974c1cecf46))

## [2.22.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.22.1...v2.22.2) (2024-05-02)


### Bug Fixes

* **pb-grid:** emit pb-refresh to configured channel only ([63091ab](https://github.com/eeditiones/tei-publisher-components/commit/63091ab6d509770b8b847fe25fe5a1a2ed7d86e8))

## [2.22.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.22.0...v2.22.1) (2024-05-02)


### Bug Fixes

* **pb-grid:** remove panel broken ([44bcf81](https://github.com/eeditiones/tei-publisher-components/commit/44bcf8150832042c9706cc8e3e4dee8c19db9689))

# [2.22.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.21.0...v2.22.0) (2024-05-02)


### Features

* adds zoom to pb-grid ([c3f557d](https://github.com/eeditiones/tei-publisher-components/commit/c3f557d83ff13e23dad5a9162af5f9f0f7e319ad))

# [2.21.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.20.0...v2.21.0) (2024-05-02)


### Bug Fixes

* no scrolling when component is disabled ([dfe1881](https://github.com/eeditiones/tei-publisher-components/commit/dfe188178d556608501a5e600ccb81591565e6c2))


### Features

* changes vertical alignment of scroll ([38b8dce](https://github.com/eeditiones/tei-publisher-components/commit/38b8dce6f5e6dc63c38aa34905b21dc1ab832c33))

# [2.20.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.19.3...v2.20.0) (2024-05-02)


### Features

* **pb-grid:** support dragging a panel to a different position in the grid ([4cf75f8](https://github.com/eeditiones/tei-publisher-components/commit/4cf75f8edb0294a8943846037c44a41e87a76afd))

## [2.19.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.19.2...v2.19.3) (2024-04-25)


### Bug Fixes

* **pb-facsimile:** using patched OSD from jinntec/openseadragon and corrected finding the pb-page element. ([2a89c8d](https://github.com/eeditiones/tei-publisher-components/commit/2a89c8d108260608eab76ade31b81f289ce1902b))

## [2.19.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.19.1...v2.19.2) (2024-03-23)


### Bug Fixes

* **pb-tify:** make sure container div is created ([e96f4f2](https://github.com/eeditiones/tei-publisher-components/commit/e96f4f2ba27d83096c5cf84ce4943bd00ba62091))

## [2.19.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.19.0...v2.19.1) (2024-02-16)


### Bug Fixes

* **pb-leaflet-map:** pb-leaflet-marker-click event details should include reference to pb-geolocation element where possible ([da54cdb](https://github.com/eeditiones/tei-publisher-components/commit/da54cdb99bda19ab2bb9386d5d0e2e3b3196ee19))
* **pb-table-grid:** react to language changes ([50cc2a0](https://github.com/eeditiones/tei-publisher-components/commit/50cc2a019bde937061499cd151cda9aed455c31a))

# [2.19.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.18.4...v2.19.0) (2024-01-26)


### Features

* **pb-view-annotate:** keep track of the current selection; allow external js to disable/enable selection tracking via event ([e15d1d1](https://github.com/eeditiones/tei-publisher-components/commit/e15d1d12faaacf8c4c0dae1915807fabd2eaa013))

## [2.18.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.18.3...v2.18.4) (2024-01-22)


### Bug Fixes

* **pb-view-annotate:** changes not saved after editing/correcting an added (but not yet merged) annotation ([837b37f](https://github.com/eeditiones/tei-publisher-components/commit/837b37f6639d7e57b768ad7b7ffc612b14c4a3c3))

## [2.18.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.18.2...v2.18.3) (2024-01-18)


### Bug Fixes

* **pb-code-editor:** include jinn-xml-editor and jinn-epidoc-editor in bundle so they can be used instead of deprecated pb-code-editor ([106d91f](https://github.com/eeditiones/tei-publisher-components/commit/106d91f0e2ab4a27d17aa89c8cb8c6a1fa4058b0))

## [2.18.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.18.1...v2.18.2) (2024-01-17)


### Bug Fixes

* **pb-view-annotate:** selection still sometimes ignored due to typo ([dcbc2be](https://github.com/eeditiones/tei-publisher-components/commit/dcbc2be8150beaa7e1d531bf313b37e1af964c3c))

## [2.18.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.18.0...v2.18.1) (2024-01-17)


### Bug Fixes

* **pb-leaflet-map:** fix map initialization; hold ctrl or cmd while clicking on map for reverse geocoding ([ed9ce33](https://github.com/eeditiones/tei-publisher-components/commit/ed9ce33262cc3b142c7bdb4b6f9e09a8c411671f))
* **pb-view-annotate:** view stopped reporting selection events after error ([d56c5b5](https://github.com/eeditiones/tei-publisher-components/commit/d56c5b5f75d590c8a2da4bcabfc21febb155027a))

# [2.18.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.17.0...v2.18.0) (2024-01-14)


### Bug Fixes

* **pb-authority-lookup:** only show edit buttons if user is logged in and belongs to right group ([ad43550](https://github.com/eeditiones/tei-publisher-components/commit/ad435501c4f72419378b934525ff0fc0236f70fd))


### Features

* **pb-login,pb-restricted:** pb-login now copies the user information into the global state registry, so it is no longer necessary for pb-restricted to have access to the pb-login element ([e83d248](https://github.com/eeditiones/tei-publisher-components/commit/e83d24855cfb290434479c07207f2c1d042ac458))

# [2.17.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.16.0...v2.17.0) (2024-01-14)


### Features

* **pb-leaflet-map:** enable geocoding using the OSM/Nominatim service ([0c6e4a2](https://github.com/eeditiones/tei-publisher-components/commit/0c6e4a2cd5eda0e2dfbaf047b6bf83598b39d605))

# [2.16.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.15.3...v2.16.0) (2024-01-12)


### Features

* **pb-view-annotate:** support (potentially empty) annotations to be inserted before the current selection, e.g. <pb> ([acbecd3](https://github.com/eeditiones/tei-publisher-components/commit/acbecd3ee7a92044a97f930be9ae89e13243004f))

## [2.15.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.15.2...v2.15.3) (2024-01-10)


### Bug Fixes

* **pb-tify:** support changing the displayed manifest by reacting to 'pb-show-annotation' emitted by 'pb-facs-link'. Use the URL given in [@facs](https://github.com/facs) as manifest URL. ([1f7e6ff](https://github.com/eeditiones/tei-publisher-components/commit/1f7e6ffcd2085a9c381379e94930f77d128879bb))

## [2.15.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.15.1...v2.15.2) (2023-12-22)


### Bug Fixes

* **pb-combo-box:** always disable client-side filtering if there's a remote source configured ([5331ca4](https://github.com/eeditiones/tei-publisher-components/commit/5331ca483576f4032c9fa073377e149f49c9dfc8))

## [2.15.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.15.0...v2.15.1) (2023-11-22)


### Bug Fixes

* **pb-authority-lookup:** pass register type in events ([0d26d6a](https://github.com/eeditiones/tei-publisher-components/commit/0d26d6ab529378bb4c8f5f0b5278efbc667dca7d))

# [2.15.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.6...v2.15.0) (2023-11-22)


### Bug Fixes

* **i18n:** corrects preposition ([0f702ae](https://github.com/eeditiones/tei-publisher-components/commit/0f702aeabdd81e152503a410b048e7dc15af3229))
* **i18n:** minor correction in es translation ([811ff02](https://github.com/eeditiones/tei-publisher-components/commit/811ff02b91aa461d885933fdba66b6f318e575d4))


### Features

* **i18n:** adds missing translations in spanish ([4c231ab](https://github.com/eeditiones/tei-publisher-components/commit/4c231ab9dbdfcbed6429480d637dc676cb7b8aa1))

## [2.14.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.5...v2.14.6) (2023-11-21)


### Bug Fixes

* **pb-authority-lookup:** add missing i18n labels ([cdf33cb](https://github.com/eeditiones/tei-publisher-components/commit/cdf33cbe6194a4165f308f9e9f94af310def8b7f))
* **pb-authority-lookup:** fix undefined error ([d549209](https://github.com/eeditiones/tei-publisher-components/commit/d5492091c4b9a02ee6c345e61ad424ee554a70fe))
* **pb-authority-lookup,custom:** add property to info event details if authority is editable ([fd2e388](https://github.com/eeditiones/tei-publisher-components/commit/fd2e3885402e2cde219be1c3f9db4c162bdfd336))
* **pb-view-annotate:** add callback function to pb-annotation-detail event; refreshes popover position when called ([b76bf9f](https://github.com/eeditiones/tei-publisher-components/commit/b76bf9fd0cd7df30d5dc89f180dcb313e7ea836c))

## [2.14.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.4...v2.14.5) (2023-11-17)


### Bug Fixes

* **pb-authority,custom:** select method should not reject promise if no record is found in external authorities: the entry may only exist in the local register ([2c7ec1e](https://github.com/eeditiones/tei-publisher-components/commit/2c7ec1efa393084abcae570c790902d6912f26fd))

## [2.14.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.3...v2.14.4) (2023-11-16)


### Bug Fixes

* **pb-view-annotate:** suppress pb-selection-changed event if annotation is deleted ([c5cb4d9](https://github.com/eeditiones/tei-publisher-components/commit/c5cb4d992c1fc9ee34167f3a942715ac55b8232a))

## [2.14.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.2...v2.14.3) (2023-11-16)


### Bug Fixes

* **pb-authority-lookup,custom:** trigger pb-authority-error if saving to local registry fails ([66edabc](https://github.com/eeditiones/tei-publisher-components/commit/66edabc50913c38bcf20a9094d995800f8c17271))

## [2.14.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.1...v2.14.2) (2023-11-15)


### Bug Fixes

* **pb-authority-lookup:** emit event if user clicks add entity ([58e63a4](https://github.com/eeditiones/tei-publisher-components/commit/58e63a47a9c11ca35a6f53620aec5cfc0e52be96))

## [2.14.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.14.0...v2.14.1) (2023-11-12)


### Bug Fixes

* **pb-tify:** instead of using a custom property, link to the transcription page is now specified in a "rendering" property on the canvas ([c092878](https://github.com/eeditiones/tei-publisher-components/commit/c0928785ce31db2a95e765fde203e0c1e7443ec5))

# [2.14.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.13.2...v2.14.0) (2023-11-03)


### Bug Fixes

* **pb-select-feature:** determine initial state on load ([2a80ce0](https://github.com/eeditiones/tei-publisher-components/commit/2a80ce0f362025c6c09c205fddfb0e79c7514711))
* **pb-toggle-feature:** if selector specified, emit event on load ([7d3ff92](https://github.com/eeditiones/tei-publisher-components/commit/7d3ff9284f2e9afbf7d381654928bd3371f38060))


### Features

* **pb-toggle-feature:** add attribute "global": if set, toggles any matching selectors below the surrounding pb-page (i.e. not just in connected pb-view/pb-load) ([18ee228](https://github.com/eeditiones/tei-publisher-components/commit/18ee22805550e5f663b89c7a1c4d51442e36cde3))

## [2.13.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.13.1...v2.13.2) (2023-10-26)


### Bug Fixes

* **pb-authority-lookup,airtable:** avoid javascript console error, report missing record for key ([c483125](https://github.com/eeditiones/tei-publisher-components/commit/c4831252602062685b03f3f3fe3f1f51776ddc04))

## [2.13.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.13.0...v2.13.1) (2023-10-24)


### Bug Fixes

* **pb-authority-lookup:** fix issue with authority entry list display ([427ac63](https://github.com/eeditiones/tei-publisher-components/commit/427ac63039cd9b572a0d2a57306964cb02bf7d45))

# [2.13.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.10...v2.13.0) (2023-10-24)


### Features

* **pb-authority-lookup:** custom connector can now have an edit button (used by future versions of annotation tool) ([1240172](https://github.com/eeditiones/tei-publisher-components/commit/124017238557f1d6bfe93c6a4da91e6caece6f31))

## [2.12.10](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.9...v2.12.10) (2023-10-23)


### Bug Fixes

* **pb-load:** add property 'plain' to prevent pb-load injecting internal parameters like 'start' or 'language' ([a9b7b8f](https://github.com/eeditiones/tei-publisher-components/commit/a9b7b8f08fa61d55ea61f409ebdd7fbcf93acf40))

## [2.12.9](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.8...v2.12.9) (2023-10-23)


### Bug Fixes

* **pb-combo-box:** drop change listener as this is leading to display issues ([73cf4be](https://github.com/eeditiones/tei-publisher-components/commit/73cf4be4171414479534e7c1f3bc56c870abfb17))

## [2.12.8](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.7...v2.12.8) (2023-10-22)


### Bug Fixes

* **pb-combo-box:** provide getter/setter for current value ([72443d8](https://github.com/eeditiones/tei-publisher-components/commit/72443d880ea252fd1cfe58b43d49cf26a06f8a11))

## [2.12.7](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.6...v2.12.7) (2023-10-20)


### Bug Fixes

* **pb-i18n:** support changing options at runtime ([66a9e41](https://github.com/eeditiones/tei-publisher-components/commit/66a9e4107424e84172269e1317d2633298d63e29))
* **pb-view-annotate:** emit pb-annotations-loaded; refresh incomplete annotation display after list of annotations changed ([b7b1569](https://github.com/eeditiones/tei-publisher-components/commit/b7b1569e77290600bcd73fcd50da4c26c3bcbae0))

## [2.12.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.5...v2.12.6) (2023-09-01)


### Bug Fixes

* **pb-link:** support parameters 'xpath' to be passed to connected pb-view ([56f50e9](https://github.com/eeditiones/tei-publisher-components/commit/56f50e912fc5eb83027638a31e2660d0ca06a803))
* **pb-split-list:** prevent commit after popstate to avoid messing up history ([c817eb8](https://github.com/eeditiones/tei-publisher-components/commit/c817eb8187cb71123c10d17953f29a3c2c1bce4e))

## [2.12.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.4...v2.12.5) (2023-08-31)


### Bug Fixes

* **pb-facsimile:** openseadragon.min.js should not be removed by npm clean ([9ccdfb6](https://github.com/eeditiones/tei-publisher-components/commit/9ccdfb6158c152359d96b4fb82edfd0170b2fb2c))

## [2.12.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.3...v2.12.4) (2023-08-31)


### Bug Fixes

* **pb-view:** initial load failed if on-update was set ([4876ffe](https://github.com/eeditiones/tei-publisher-components/commit/4876ffe55fbd680b0e70694e95f1c316516aba4a))

## [2.12.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.2...v2.12.3) (2023-08-31)


### Bug Fixes

* **pb-facsimile:** local version of openseadragon.min.js needs to stay ([4e958a1](https://github.com/eeditiones/tei-publisher-components/commit/4e958a19aa87e6be4cfc77cbab71bf102547699f))

## [2.12.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.1...v2.12.2) (2023-08-28)


### Bug Fixes

* **pb-odd-editor:** download to file produced incomplete ODD; save is required first ([16fa08f](https://github.com/eeditiones/tei-publisher-components/commit/16fa08fb39944eb5dc77d5c06d90b7e2632361e8))

## [2.12.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.12.0...v2.12.1) (2023-08-28)


### Bug Fixes

* **pb-authority-lookup,airtable:** fix error caused by empty field ([1af83fb](https://github.com/eeditiones/tei-publisher-components/commit/1af83fb88f594cfb3a667e619702a42b4b136859))

# [2.12.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.11.1...v2.12.0) (2023-08-28)


### Features

* **pb-mei:** allow MEI data to be passed directly; move into separate bundle pb-mei ([9fe14f4](https://github.com/eeditiones/tei-publisher-components/commit/9fe14f4e8b34e1ab2934d75e3602fbed2b45185d))

## [2.11.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.11.0...v2.11.1) (2023-08-22)


### Bug Fixes

* **pb-manage-odds:** do not reload list of ODDs on pb-login event: permissions are handled by pb-restricted anyway ([e530710](https://github.com/eeditiones/tei-publisher-components/commit/e530710aa216783358ec6d9e7e3cc39002499847))

# [2.11.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.7...v2.11.0) (2023-08-11)


### Features

* **pb-odd-editor:** add download/export button ([4020bbf](https://github.com/eeditiones/tei-publisher-components/commit/4020bbf3418ca6324d129b5a8183312f1c024773))

## [2.10.7](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.6...v2.10.7) (2023-08-08)


### Bug Fixes

* **pb-view:** fix navigation by xml:id ([ff1bd9c](https://github.com/eeditiones/tei-publisher-components/commit/ff1bd9cd27a8d2b550f183dd50d915cffab2dc2a))

## [2.10.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.5...v2.10.6) (2023-08-06)


### Bug Fixes

* **pb-select-template:** needs to trigger page reload to render chosen template ([b22b761](https://github.com/eeditiones/tei-publisher-components/commit/b22b761661b7974e24a7e0c3f5b470021b4f8b08))

## [2.10.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.4...v2.10.5) (2023-08-06)


### Bug Fixes

* **pb-login:** login event sent with wrong loggedIn flag ([880747e](https://github.com/eeditiones/tei-publisher-components/commit/880747ef9c8416960babb41dc03c79807068f7ab))

## [2.10.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.3...v2.10.4) (2023-07-27)


### Bug Fixes

* **pb-combo-box:** react to i18n language change ([67037cb](https://github.com/eeditiones/tei-publisher-components/commit/67037cb818358b0f8da5a918aae931130c136827))

## [2.10.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.2...v2.10.3) (2023-07-24)


### Bug Fixes

* **odd-editor:** update jinn-codemirror to 1.13.5 to fix issue with old predicate/template being copied into new rules ([1e80466](https://github.com/eeditiones/tei-publisher-components/commit/1e80466201d25f0263713aedfea8e48688ed46e9))
* **pb-odd-model-editor:** re-enable paste into modelSequence ([ffb1bd8](https://github.com/eeditiones/tei-publisher-components/commit/ffb1bd8754821fc28891149c2e4fff0f18e3e3ef))

## [2.10.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.1...v2.10.2) (2023-07-22)


### Bug Fixes

* **pb-code-editor, pb-odd-editor:** code editor not visible in safari ([22cd409](https://github.com/eeditiones/tei-publisher-components/commit/22cd4096f3e1fe66735495e2426517d74192a2de))

## [2.10.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.10.0...v2.10.1) (2023-07-19)


### Bug Fixes

* **pb-facsimile:** set loaded attribute if facsimiles are available for display ([bf0c641](https://github.com/eeditiones/tei-publisher-components/commit/bf0c641ac947c056b5f95a3e747cab0e58047dca))

# [2.10.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.9.0...v2.10.0) (2023-07-18)


### Features

* **pb-tify:** emit pb-refresh event if user switches page ([6c3f880](https://github.com/eeditiones/tei-publisher-components/commit/6c3f8807214f3a41593b72e75b2f23b5c7002ddd))

# [2.9.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.8.0...v2.9.0) (2023-07-17)


### Features

* **pb-tify:** viewer for IIIF presentation manifests ([c82b56a](https://github.com/eeditiones/tei-publisher-components/commit/c82b56a55b0675a0dd8cf0b032c6a9d4e50eb985))

# [2.8.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.7.0...v2.8.0) (2023-07-13)


### Bug Fixes

* **pb-split-list:** fix empty category passed as null ([819c44a](https://github.com/eeditiones/tei-publisher-components/commit/819c44a5c0508f0ebdf612f673c610a76d5d0e6a))
* **url registry:** check url template for required parameters and try to fill them in from both, unprefixed or "user."-prefixed parameters ([f2e1a96](https://github.com/eeditiones/tei-publisher-components/commit/f2e1a96553eaf3bfb6927931c41a5d1f6d9eec8b))


### Features

* **pb-link, pb-view:** allow additional parameters to be passed with pb-refresh event ([672ab6f](https://github.com/eeditiones/tei-publisher-components/commit/672ab6f597b95ba014b2089e568de0a44e3bd281))

# [2.7.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.6.1...v2.7.0) (2023-07-11)


### Bug Fixes

* **pb-browse-docs:** init with multiple facets ([b538976](https://github.com/eeditiones/tei-publisher-components/commit/b538976766a69fe4e84cf568289d0d7e48c8336c))
* **pb-custom-form:** null values in serializeform ([5c6af3d](https://github.com/eeditiones/tei-publisher-components/commit/5c6af3d0a7bd8782c7d3f2a2486abfb7483fd975))
* **pb-load:** filter null values ([df5f8dc](https://github.com/eeditiones/tei-publisher-components/commit/df5f8dc4f43fabdaa833843a50b131c3a23b0b50))
* **urls:** do not mutate state on replace ([09a4a94](https://github.com/eeditiones/tei-publisher-components/commit/09a4a94739b7a9cc46e8e2c915aebdd748aab1e0))
* **urls:** multiple values in state and URL ([33940a5](https://github.com/eeditiones/tei-publisher-components/commit/33940a5333bf0bed54e66096e1186eac3ddb86dc))


### Features

* **pb-page:** add a property url-ignore to list parameter names which should never be reflected in the browser URL ([039e212](https://github.com/eeditiones/tei-publisher-components/commit/039e212c37e699b976fa3e3d5f5b51d268b62cae))
* **pb-popover:** allow to override touch setting ([d8455e8](https://github.com/eeditiones/tei-publisher-components/commit/d8455e80bf2f96199b8d83dc5f682cadeab94975))
* support url patterns to map parameters into the url path ([d0ec078](https://github.com/eeditiones/tei-publisher-components/commit/d0ec0789482e9dd0ea4d848de317d1d3057e7dd4))

## [2.6.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.6.0...v2.6.1) (2023-07-07)


### Bug Fixes

* **pb-svg:** react to url property change as well as event ([5fb4f7f](https://github.com/eeditiones/tei-publisher-components/commit/5fb4f7f48867a145a7cf97d5f1787a43006220a4))
* **pb-tabs:** emit pb-tab event when selected tab changes ([709ee80](https://github.com/eeditiones/tei-publisher-components/commit/709ee8053526b290b257684bf97a21ed4a54a392))

# [2.6.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.5.1...v2.6.0) (2023-07-06)


### Features

* **authority:** renamed gf.js to anton.js and made endpoint and provider name configurable ([5dc6943](https://github.com/eeditiones/tei-publisher-components/commit/5dc69436644954d813801faf09e1c50f565b5d6e))

## [2.5.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.5.0...v2.5.1) (2023-06-14)


### Bug Fixes

* **pb-mixin:** emitting/subscribing to default channel failed, in particular for ([d7fa70a](https://github.com/eeditiones/tei-publisher-components/commit/d7fa70a1bc3f28bd2c4453275dad2c86b3a5e83e))

# [2.5.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.8...v2.5.0) (2023-05-15)


### Bug Fixes

* **pb-view:** if not-found is set to a string, show it instead of error message ([615cc9f](https://github.com/eeditiones/tei-publisher-components/commit/615cc9ff402aebf1e787b7c00ce25bcd8103fb08))


### Features

* **pb-page:** list of supported languages and fallback language can now be configured for cases when the detected language is not supported ([eeba0c5](https://github.com/eeditiones/tei-publisher-components/commit/eeba0c59f98b3eef0dcc44c311ce0f9a8ce109a0))

## [2.4.8](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.7...v2.4.8) (2023-05-15)


### Bug Fixes

* **pb-select-feature:** allow labels in dropdown to be translated via i18n ([e5e5350](https://github.com/eeditiones/tei-publisher-components/commit/e5e5350dd8ed618ddaff6ceb7417d9c1b29f99ab))

## [2.4.7](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.6...v2.4.7) (2023-04-12)


### Bug Fixes

* **pb-split-list:** added missing import ([b9e8212](https://github.com/eeditiones/tei-publisher-components/commit/b9e82129fc744eae630fc9e84e326ebfa48af858))

## [2.4.6](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.5...v2.4.6) (2023-04-10)


### Bug Fixes

* **kbga:** support endpoint for songs ([7bcff0b](https://github.com/eeditiones/tei-publisher-components/commit/7bcff0b37a464023281a7a6cdb7bcad94d4aabd1))

## [2.4.5](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.4...v2.4.5) (2023-03-31)


### Bug Fixes

* **pb-manage-odds:** react to login and remove hover effect to fix dialog not showing ([f1297c1](https://github.com/eeditiones/tei-publisher-components/commit/f1297c17236a44f3d14d9d49997216cfe85f183d))

## [2.4.4](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.3...v2.4.4) (2023-03-28)


### Bug Fixes

* **pb-facsimile:** usage of 'viewportToImageRectangle' ([dc62c48](https://github.com/eeditiones/tei-publisher-components/commit/dc62c488690f0659441d4f968c3a00bda365ce52))
* **pb-facsimile:** usage of 'viewportToImageRectangle' removed comment ([384fbe8](https://github.com/eeditiones/tei-publisher-components/commit/384fbe8a44dcd04143f0c2bdbc192cdf9a88cdc2))

## [2.4.3](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.2...v2.4.3) (2023-03-27)


### Bug Fixes

* wrong URL resolving leads to various errors if context path is empty ([43b9152](https://github.com/eeditiones/tei-publisher-components/commit/43b91528c120627b993190e486bd678d9724187e))

## [2.4.2](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.1...v2.4.2) (2023-03-25)


### Bug Fixes

* **registry:** ignore popstate event if no components are involved ([9976fa0](https://github.com/eeditiones/tei-publisher-components/commit/9976fa07b5976d5f600abf6bbbc8fc646d225987))

## [2.4.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.4.0...v2.4.1) (2023-03-24)


### Bug Fixes

* **pb-ajax:** progress bar breaks layout ([a00a6a6](https://github.com/eeditiones/tei-publisher-components/commit/a00a6a6a7d3d21f217bae2e96c2bd514501e9207))
* **pb-paginate:** declare part for span showing number of items ([3fc090a](https://github.com/eeditiones/tei-publisher-components/commit/3fc090aef1d40897d9f9d25d3d5e1e7f2ee674eb))

# [2.4.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.3.1...v2.4.0) (2023-03-23)


### Bug Fixes

* **pb-manage-odds:** changed link to button ([e07dfaf](https://github.com/eeditiones/tei-publisher-components/commit/e07dfaf5708145e7364b15cd8cbaaa2e406970aa))


### Features

* **pb-ajax:** added progress and button indicates state ([e41254d](https://github.com/eeditiones/tei-publisher-components/commit/e41254df61fd560e1599ea41dd6fb70187e0b33e))

## [2.3.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.3.0...v2.3.1) (2023-03-23)


### Bug Fixes

* **pb-page:** make configurable if the hash part of the URL should be interpreted as xml:id to navigate to. This allows links like doc.xml#intro to work. ([6929257](https://github.com/eeditiones/tei-publisher-components/commit/69292572733516f5158ed2d2d37a4447e8844dee))

# [2.3.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.2.0...v2.3.0) (2023-03-21)


### Features

* **pb-manage-odds:** layout and a11y refinements ([7ff2b1e](https://github.com/eeditiones/tei-publisher-components/commit/7ff2b1e082cb21b767aa234139338430e7f38c44))

# [2.2.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.1.1...v2.2.0) (2023-03-20)


### Features

* **line-endings:** normalizing line-endings to use LF always in repo but allow CRLF on workspace ([95134e8](https://github.com/eeditiones/tei-publisher-components/commit/95134e8bc4f166696de53ff0478e04165692475b))
* **pb-collapse:** allow icon to be right-handed. ([7a7429c](https://github.com/eeditiones/tei-publisher-components/commit/7a7429c0866e67f88bf540a70556e86f923271af))
* **pb-collapse:** icon can be positioned absolutely (e.g. on the right) ([784e20f](https://github.com/eeditiones/tei-publisher-components/commit/784e20f060c98e3c1bd409442f379baa054abb14))
* **pb-collapse:** icon can be positioned absolutely (e.g. on the right) ([4b4ec6b](https://github.com/eeditiones/tei-publisher-components/commit/4b4ec6b3c71af8ffc75a41c70d569f5f0fdd5ec1))
* **pb-login:** submit dialog on 'enter' key ([9e5f0aa](https://github.com/eeditiones/tei-publisher-components/commit/9e5f0aaad203cfd5dabd22ebf066ba02ee5f9adf))

## [2.1.1](https://github.com/eeditiones/tei-publisher-components/compare/v2.1.0...v2.1.1) (2023-03-17)


### Bug Fixes

* **pb-facsimile:** include static version of patched openseadragon to avoid build issues ([de663f3](https://github.com/eeditiones/tei-publisher-components/commit/de663f3bbe58d2a08b60906f5c350f624f385ecd))

# [2.1.0](https://github.com/eeditiones/tei-publisher-components/compare/v2.0.0...v2.1.0) (2023-03-16)


### Bug Fixes

* **pb-facs-link:** wait for pb-facsimile or pb-image-strip to be ready ([93da282](https://github.com/eeditiones/tei-publisher-components/commit/93da282ddcafd9c28bc87bb4efeefd13ecf73a51))


### Features

* **pb-facsimile:** respect facs-link order ([8754768](https://github.com/eeditiones/tei-publisher-components/commit/87547680da8c4a539a13e3283d234d121bec6571))
* **pb-image-strip:** reverse default order ([ea12409](https://github.com/eeditiones/tei-publisher-components/commit/ea12409fed2051ac2ed9132b81c5644a679e4296))
* pb-facs-link, pb-image-strip ([f667176](https://github.com/eeditiones/tei-publisher-components/commit/f667176b7561a824c63ecacdb8ee0ed454997907))
* ** pb-image-strip:** sort items by order ([d0baa51](https://github.com/eeditiones/tei-publisher-components/commit/d0baa5193b6f6cb1ea1abe54a27f811aa272d4cc))
* **pb-image-strip:** add new component ([9143856](https://github.com/eeditiones/tei-publisher-components/commit/9143856b5877da9d896ca6c4cef8e3f8deff8c97)), closes [#85](https://github.com/eeditiones/tei-publisher-components/issues/85)

# [2.0.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.44.2...v2.0.0) (2023-03-16)


### Bug Fixes

* **pb-ajax:** partial fix for test failure ([2699c4c](https://github.com/eeditiones/tei-publisher-components/commit/2699c4c684068f4384811b724e4dbd4c380f85cd))
* **pb-browse:** respect history property to disable pushing to history ([b5f8c28](https://github.com/eeditiones/tei-publisher-components/commit/b5f8c28a3ad343f0f1f18bbbba593414eb2de33e))
* **pb-browse-docs:** add history support ([5698237](https://github.com/eeditiones/tei-publisher-components/commit/569823737cf4d40c992eaae5b70776ec222b957a))
* **pb-browse-docs:** pick up facets when connected ([a4eb4f2](https://github.com/eeditiones/tei-publisher-components/commit/a4eb4f238d569c5d94a4d1327307f0f773364c44))
* **pb-events:** defaultChannel handling ([a16ce6f](https://github.com/eeditiones/tei-publisher-components/commit/a16ce6f87fe017497076044074da894d820f2d45))
* **pb-events:** subscribe to defaultChannel if channel is null or empty array ([5c59613](https://github.com/eeditiones/tei-publisher-components/commit/5c5961377891419ea5027420195b28bc78c7a1c4))
* **pb-grid:** do not use es6 operator ([dedbf14](https://github.com/eeditiones/tei-publisher-components/commit/dedbf14edb8007fa47be6ddc0767be0c6aa96428))
* **pb-load:** also pass content in pb-results-received ([2947281](https://github.com/eeditiones/tei-publisher-components/commit/2947281c13da3c374522d08cd5a8aeb68db73916))
* **pb-load:** subscribe to browser history only if enabled by user ([3771c27](https://github.com/eeditiones/tei-publisher-components/commit/3771c27c86027910253d1447497c69954e97a3c7))
* **pb-mixin:** add defaultChannel constant ([ab84bea](https://github.com/eeditiones/tei-publisher-components/commit/ab84beaca9bbd1b5487269ab41f0dab838e74c06))
* **pb-search:** browser history navigation ([4aa9b76](https://github.com/eeditiones/tei-publisher-components/commit/4aa9b76d88c907c780960c005dc28ad6e6b02ab6))
* **pb-search:** strip out the 'autocomplete-custom-template' parameter added by the autcomplete subcomponent ([12e1e5c](https://github.com/eeditiones/tei-publisher-components/commit/12e1e5c0cc09712b6e711a0422d387616f4f7e61))
* **pb-search,pb-paginate:** pb-search now keeps track of pagination position ([1700af0](https://github.com/eeditiones/tei-publisher-components/commit/1700af053dc0227de41bfcf6782014cf3d78c8fa))
* **pb-select:** use correct string function ([13ebfbb](https://github.com/eeditiones/tei-publisher-components/commit/13ebfbbbd9e49a0b5360c14744069a24e03729df))
* **pb-select-feature:** (re-)allow state to be toggled on elements which reside in the HTML context, but are not part of a pb-view or pb-load ([1260e9b](https://github.com/eeditiones/tei-publisher-components/commit/1260e9bb1f4aa8107cfa173c74dac12300cb1240))
* **pb-select-feature:** update to mirror pb-toggle-feature ([9606688](https://github.com/eeditiones/tei-publisher-components/commit/96066880d4fafd99f7b629f7a1cf50695dfca62a))
* **pb-split-list,pb-table-grid:** update to support browser history ([1b72351](https://github.com/eeditiones/tei-publisher-components/commit/1b723516a97c15ce93a3dc308f397beb5983e51d))
* **pb-tabs:** update to support browser history ([e205279](https://github.com/eeditiones/tei-publisher-components/commit/e20527914037addd6a49040d79f76105c3202633))
* **pb-toggle-feature:** refactor for history support ([27d7638](https://github.com/eeditiones/tei-publisher-components/commit/27d7638c78bcfb62be9fb10a23001a373ab44cb8))
* **pb-view:** fix on-update ([814f4bb](https://github.com/eeditiones/tei-publisher-components/commit/814f4bbf08bd0bdb34c00782dbdd58fd6b607892))
* **pb-view:** ignore external params if property is specified as attribute ([77851d2](https://github.com/eeditiones/tei-publisher-components/commit/77851d2f038c97c1050b9dfa5fad79f517d37a02))
* **theming:** add polyfill for constructable stylesheets ([0056e94](https://github.com/eeditiones/tei-publisher-components/commit/0056e94bc29bd46b4c7183704b74a2f4ca12d9c9))
* **theming:** line endings ([cf029ed](https://github.com/eeditiones/tei-publisher-components/commit/cf029ede1490c283627ffef9a799e9d410ad5875))
* **urls:** improve warning message ([9832a53](https://github.com/eeditiones/tei-publisher-components/commit/9832a53150dd46f619b03dbf0d88b4b82c72b4f1))
* drop url-templates in favour of simpler mechanism ([d0f6d01](https://github.com/eeditiones/tei-publisher-components/commit/d0f6d01d920220147d53a70e511ede14ad4a2b7f))
* state should be saved by subscribed, not emitted channels ([1f93be9](https://github.com/eeditiones/tei-publisher-components/commit/1f93be9a19e6678e2e6f0f8d3fa57e1e2ae31a1f))


### Code Refactoring

* **pb-mixin:** remove unused methods ([b21bfae](https://github.com/eeditiones/tei-publisher-components/commit/b21bfae717052167ac3e539216e4de20cc73ab57))


### Features

* **dts-client:** use URL registry ([cea7336](https://github.com/eeditiones/tei-publisher-components/commit/cea733680aaf3d52b9fc42445eca8d26bf0b1b86))
* **dts-select-endpoint:** use URL registry ([b6df38f](https://github.com/eeditiones/tei-publisher-components/commit/b6df38f4cb4064eb105a424ef9070d7ffd129eba))
* **pb-browse-docs:** use URL registry ([07a20ff](https://github.com/eeditiones/tei-publisher-components/commit/07a20ffd83e49468acfb62e3d93a8c3af4a9fc82))
* **pb-load:** use new URL registry ([5e8030d](https://github.com/eeditiones/tei-publisher-components/commit/5e8030de30d634ea37812b3731bf0f67f0b6ebe8))
* **pb-select-template:** use URL registry ([82fc98b](https://github.com/eeditiones/tei-publisher-components/commit/82fc98b85b42ec576a5b8e1bae3a5607b7567410))
* **pb-upload:** make the event emitted on finish configurable ([f1a0aca](https://github.com/eeditiones/tei-publisher-components/commit/f1a0aca552324ef972443c890ffa50d2372c1dcb))


### BREAKING CHANGES

* **pb-mixin:** Several methods are no longer used since the
introduction of the URL registry.

- getParameterValues
- setParameter
- setParameters
- getParametersMatching
- setPath
- pushHistory

## [1.44.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.44.1...v1.44.2) (2023-03-15)


### Bug Fixes

* **OSD full-screen:** fixes detached eventlisteners after fullscreen view ([0d1cfb9](https://github.com/eeditiones/tei-publisher-components/commit/0d1cfb9c13af5f6a026e18919fb8768892d2eeb0))

## [1.44.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.44.0...v1.44.1) (2023-03-15)


### Bug Fixes

* **cdn:** dynamic redirect for publisher cdn ([16b3d51](https://github.com/eeditiones/tei-publisher-components/commit/16b3d51e0997a4f114b4a8c524602e583c458c3e))

# [1.44.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.5...v1.44.0) (2023-03-09)


### Features

* **pb-browse:** pb-browse is a stripped-down and simplified replacement for pb-browse-docs ([df165b6](https://github.com/eeditiones/tei-publisher-components/commit/df165b6e9347b9bd603eea06a647bd76e800e097))

## [1.43.5](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.4...v1.43.5) (2023-03-01)


### Bug Fixes

* **pb-odd-editor:** fix editor issues by updating to jinn-codemirror 1.11.6 ([5ada4b8](https://github.com/eeditiones/tei-publisher-components/commit/5ada4b81d20a638d0e6e3b1781436ff2b6cf9dca))

## [1.43.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.3...v1.43.4) (2023-02-27)


### Bug Fixes

* **pb-odd-editor:** update to latest jinn-codemirror to fix potential concurrency issues ([f16b260](https://github.com/eeditiones/tei-publisher-components/commit/f16b260b31ce022be716df5efb34fb71348d8cc7))

## [1.43.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.2...v1.43.3) (2023-02-15)


### Bug Fixes

* **pb-popover:** add property to stop propagation, thus avoiding multiple nested pb-popover to all appear at once ([d015797](https://github.com/eeditiones/tei-publisher-components/commit/d015797084838f9d9007f6bb47a3af9313b7622a))

## [1.43.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.1...v1.43.2) (2023-02-09)


### Bug Fixes

* **pb-load:** wrong initial setting for noCredentials broke pagination ([6433e07](https://github.com/eeditiones/tei-publisher-components/commit/6433e078900d713b6f489e54850ffcb9bdc08163))

## [1.43.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.43.0...v1.43.1) (2023-01-18)


### Bug Fixes

* **theming:** try loading theme css from library as well as endpoint; make more components themable. ([3bf8848](https://github.com/eeditiones/tei-publisher-components/commit/3bf88485c4de2724b436a33bf31ab2211c44bfe7))

# [1.43.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.7...v1.43.0) (2023-01-18)


### Features

* add support for component theming ([f618127](https://github.com/eeditiones/tei-publisher-components/commit/f6181279a25476e7b6e1494d774c54dc6e2ee236))

## [1.42.7](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.6...v1.42.7) (2023-01-16)


### Bug Fixes

* **pb-split-list:** allow category name to be internationalized ([ffafde4](https://github.com/eeditiones/tei-publisher-components/commit/ffafde4ed9cf8dd467690cf9ed5477de5ab9d368))

## [1.42.6](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.5...v1.42.6) (2023-01-16)


### Bug Fixes

* **pb-leaflet-map:** Expose underlying map object ([0660fc0](https://github.com/eeditiones/tei-publisher-components/commit/0660fc05e64d419750f708d3584e928173a6c3b6))
* **pb-odd-editor:** output mode "printcss" is now called "print" ([5075713](https://github.com/eeditiones/tei-publisher-components/commit/507571321e1e5d51c5e642613d843300eb12d0e6))
* **pb-split-list:** allow HTML in category names ([b55e254](https://github.com/eeditiones/tei-publisher-components/commit/b55e254c656bcf8a037efedc861d4a853df1fd7a))

## [1.42.5](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.4...v1.42.5) (2023-01-10)


### Bug Fixes

* **pb-odd-editor:** update to jinn-codemirror 1.11.2 ([ac912c4](https://github.com/eeditiones/tei-publisher-components/commit/ac912c44943917b26b259c249233ae7a1e354dce))

## [1.42.4](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.3...v1.42.4) (2023-01-09)


### Bug Fixes

* **pb-print-preview:** reveal raw URL without paged.js in url attribute ([0c90240](https://github.com/eeditiones/tei-publisher-components/commit/0c9024046a3b13a12af17af5e26ce5cb04c0ea7e))

## [1.42.3](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.2...v1.42.3) (2023-01-06)


### Bug Fixes

* **pb-print-preview:** fix CORS issue with embedded iframe ([e070bf8](https://github.com/eeditiones/tei-publisher-components/commit/e070bf8c0db9a8c0511efdbe5f5e3062c9a4c141))

## [1.42.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.1...v1.42.2) (2023-01-05)


### Bug Fixes

* **pb-print-preview:** use iframe for preview ([d8d93f2](https://github.com/eeditiones/tei-publisher-components/commit/d8d93f210cf70dfa837b4fc863ff49ecdd1d3ac8))

## [1.42.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.42.0...v1.42.1) (2023-01-05)


### Bug Fixes

* **pb-print-preview:** missing interface.cs ([aed8716](https://github.com/eeditiones/tei-publisher-components/commit/aed87160d8b133f0554db81245019e7df31f3277))

# [1.42.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.41.2...v1.42.0) (2023-01-04)


### Features

* **pb-print-preview:** new component for a print CSS preview ([3222f08](https://github.com/eeditiones/tei-publisher-components/commit/3222f08f40ed2f5e3d4e03bbb7665bab35e1fff9))

## [1.41.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.41.1...v1.41.2) (2023-01-03)


### Bug Fixes

* **pb-link:** allow 'view' mode to be set via pb-link ([f08eb68](https://github.com/eeditiones/tei-publisher-components/commit/f08eb68942ae01e68d37be86f8bf421de37f0dca))

## [1.41.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.41.0...v1.41.1) (2022-12-31)


### Bug Fixes

* **pb-odd-editor:** use correct editing mode for code editors ([9e6aa09](https://github.com/eeditiones/tei-publisher-components/commit/9e6aa09d861c3b22c294c7ca137f80473f3541ff))

# [1.41.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.40.2...v1.41.0) (2022-12-30)


### Bug Fixes

* **pb-code-editor:** wrong import ([47bcbb3](https://github.com/eeditiones/tei-publisher-components/commit/47bcbb3c242ea8b7317c0a399d540692b0efb023))


### Features

* update pb-code-editor and pb-odd-editor to use codemirror 6 (instead of 5) as editor ([cc319ba](https://github.com/eeditiones/tei-publisher-components/commit/cc319baf322c9443a6282ffb0ddcf546369e9b40))
* **pb-code-editor:** update to new @jinntec/jinn-codemirror based on codemirror 6 ([b1df9a3](https://github.com/eeditiones/tei-publisher-components/commit/b1df9a35197fa7a62a39013a85302f07d293c679))

## [1.40.2](https://github.com/eeditiones/tei-publisher-components/compare/v1.40.1...v1.40.2) (2022-11-27)


### Bug Fixes

* **pb-load:** add option to silently ignore network errors ([3695b28](https://github.com/eeditiones/tei-publisher-components/commit/3695b282d13e1bb127ec411fbb359ddd394a72a3))

## [1.40.1](https://github.com/eeditiones/tei-publisher-components/compare/v1.40.0...v1.40.1) (2022-11-26)


### Bug Fixes

* **pb-load:** fix errors if no-credentials option is set ([0bdb718](https://github.com/eeditiones/tei-publisher-components/commit/0bdb718cfd125f7e38d6f1a075209548f7093a7c))

# [1.40.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.39.0...v1.40.0) (2022-11-26)


### Features

* **pb-load:** refresh when url, start or userParams attribute is changed; add attribute 'no-credentials' to disable attempting a cross-site request ([6f55e85](https://github.com/eeditiones/tei-publisher-components/commit/6f55e8533360adfcdb9862d8f4eda871345564da))

# [1.39.0](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.7...v1.39.0) (2022-11-22)


### Bug Fixes

* **Dockerfile:** update to match TEI Publisher master with newer roaster ([2ca4d37](https://github.com/eeditiones/tei-publisher-components/commit/2ca4d37a56df8054d1f29446163e694cba69e73f))
* **pb-page:** don't send pb-page-ready until both: i18n language and api version are correctly reported ([41c02cd](https://github.com/eeditiones/tei-publisher-components/commit/41c02cd4e0cec066901c0bdf47790ad610143e59))


### Features

* **pb-code-highlight:** allow theme to be set via CSS variable; load CSS only once ([6d4e2fe](https://github.com/eeditiones/tei-publisher-components/commit/6d4e2fe51664b8325de75b785bf5026336239697))

## [1.38.7](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.6...v1.38.7) (2022-11-01)


### Bug Fixes

* globally disable automatic loading of Roboto font ([64b393b](https://github.com/eeditiones/tei-publisher-components/commit/64b393b057420506ec79a509e2d392efbd814c94))

## [1.38.6](https://github.com/eeditiones/tei-publisher-components/compare/v1.38.5...v1.38.6) (2022-10-13)


### Bug Fixes

* **pb-formula:** Fix font loading issue for mathematical formulas ([b2d41ca](https://github.com/eeditiones/tei-publisher-components/commit/b2d41cacf2aa86dfe9ea10060ebaa0ef190fd0fe))

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
