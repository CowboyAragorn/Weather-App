/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --jonquil: #f0c808ff;\n  --steel-teal: #62929eff;\n  --dark-teal: #466972;\n  --papaya-whip: #fff1d0ff;\n  --orange-red: #f26419ff;\n  --black-coffee: #2e1f27ff;\n  --margin-left-line: 50px;\n  --margin-bottom: 50px;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--steel-teal);\n}\nheader {\n  /* background-color: black; */\n  height: fit-content;\n  color: white;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n\n#headerWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: left;\n  margin-left: var(--margin-left-line);\n  margin-top: 25px;\n}\n#headerWrapper > * {\n  margin: 0;\n}\n\n#cityWrapper {\n  display: flex;\n  font-size: 3.3rem;\n  align-items: center;\n  gap: 25px;\n}\n#currentWeatherIcon {\n  color: var(--orange-red);\n}\n#cityWrapper > * {\n  margin: 0;\n}\n#temperature {\n  font-size: 8rem;\n  color: var(--jonquil);\n}\n\n#weatherRow {\n  display: flex;\n  align-items: left;\n  justify-content: left;\n  gap: 20px;\n}\n/*targeting just the data, not the h2 */\n#weatherRow > * > :nth-child(2n) {\n  font-size: 2.5rem;\n}\n#inputWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: end;\n  height: 100%;\n  margin-right: var(--margin-left-line);\n  gap: 15px;\n}\n#map {\n  display: flex;\n  height: 200px;\n  width: 350px;\n}\n#inputRow {\n  position: relative;\n  display: flex;\n  justify-content: end;\n  width: 100%;\n  height: 70px;\n}\n::placeholder {\n  color: white;\n}\n\ninput {\n  position: relative;\n  background-color: var(--dark-teal);\n  color: white;\n  padding-left: 15px;\n  border: none;\n  border-radius: 15px;\n  width: 75%;\n  height: 100%;\n  font-size: 1.8rem;\n}\ninput:focus {\n  border: none;\n  outline: none;\n}\n#submitBtn {\n  font-size: 1.5rem;\n  position: absolute;\n  top: 33%;\n  right: 2%;\n  border: none;\n  color: var(--jonquil);\n  font-weight: bold;\n  background-color: var(--dark-teal);\n  cursor: pointer;\n}\n\n#weatherRow > * > * {\n  margin: 0;\n}\n\n#hr {\n  background-color: var(--jonquil);\n  font-size: 50px;\n  height: 1px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  margin-top: 15px;\n}\n\nsection {\n  height: 80%;\n  /* background-color: black; */\n  margin: 0;\n  display: grid;\n  grid-template-columns: 0.5fr 1.5fr;\n}\n\n#day_forecast {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: end;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: var(--margin-bottom);\n}\n.dailyForecastBox {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  margin-left: var(--margin-left-line);\n  gap: 10px;\n}\n.dayForecastHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.tempRainContainer {\n  display: flex;\n  gap: 15px;\n}\n\n.dailyForecastBox > * {\n  margin: 0;\n}\n.dailyForecastBox > * > * {\n  margin: 0;\n}\n.tempRainContainer > * > * {\n  margin: 0;\n}\n.forecastDetailsFlex > :nth-child(1) {\n  font-size: 2rem;\n}\n\n.time {\n  font-size: 3.3rem;\n}\n.forecastIcon {\n  font-size: 3.3rem;\n  margin-right: 25px;\n  color: var(--orange-red);\n}\n.temp {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n.rain {\n  font-size: 2.5rem;\n}\n\n#weekForecast {\n  /*\n  display: grid;\n  grid-auto-flow: column;\n  margin-right: var(--margin-left-line);\n  margin-bottom: var(--margin-bottom);\n  justify-items: end;\n  align-content: end;\n  align-items: end;\n  column-gap: 40px;\n  */\n\n  display: flex;\n  justify-content: right;\n  align-items: flex-end;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  gap: 40px;\n\n  color: white;\n  margin-right: var(--margin-left-line);\n  margin-bottom: var(--margin-bottom);\n}\n\n.dayAndIconContainer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dayAndIconContainer > * {\n  margin: 0;\n}\n\n.dayOfWeek {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n\n.weatherIconWeekly {\n  color: var(--orange-red);\n  font-size: 2.5rem;\n}\n\n.highAndLowContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 25px;\n}\n\n.highAndLowContainer > * {\n  margin: 0;\n}\n\n.highAndLowHeader {\n  font-size: 2rem;\n  color: white;\n}\n.high,\n.low {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n\n/*\n.high {\n  color: var(--jonquil);\n}\n.low {\n  color: var(--papaya-whip);\n}\n*/\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;EACzB,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;AACA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,mCAAmC;AACrC;AACA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,qBAAqB;EACrB,oCAAoC;EACpC,gBAAgB;AAClB;AACA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,wBAAwB;AAC1B;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,SAAS;AACX;AACA,uCAAuC;AACvC;EACE,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;EACZ,qCAAqC;EACrC,SAAS;AACX;AACA;EACE,aAAa;EACb,aAAa;EACb,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;EACpB,WAAW;EACX,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;EACjB,kCAAkC;EAClC,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,eAAe;EACf,WAAW;EACX,WAAW;EACX,SAAS;EACT,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,SAAS;EACT,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,oBAAoB;EACpB,uBAAuB;EACvB,SAAS;EACT,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,SAAS;AACX;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;AAC1B;AACA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE;;;;;;;;;GASC;;EAED,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,SAAS;;EAET,YAAY;EACZ,qCAAqC;EACrC,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,eAAe;EACf,YAAY;AACd;AACA;;EAEE,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;;;;;;;CAOC","sourcesContent":[":root {\n  --jonquil: #f0c808ff;\n  --steel-teal: #62929eff;\n  --dark-teal: #466972;\n  --papaya-whip: #fff1d0ff;\n  --orange-red: #f26419ff;\n  --black-coffee: #2e1f27ff;\n  --margin-left-line: 50px;\n  --margin-bottom: 50px;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--steel-teal);\n}\nheader {\n  /* background-color: black; */\n  height: fit-content;\n  color: white;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n\n#headerWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: left;\n  margin-left: var(--margin-left-line);\n  margin-top: 25px;\n}\n#headerWrapper > * {\n  margin: 0;\n}\n\n#cityWrapper {\n  display: flex;\n  font-size: 3.3rem;\n  align-items: center;\n  gap: 25px;\n}\n#currentWeatherIcon {\n  color: var(--orange-red);\n}\n#cityWrapper > * {\n  margin: 0;\n}\n#temperature {\n  font-size: 8rem;\n  color: var(--jonquil);\n}\n\n#weatherRow {\n  display: flex;\n  align-items: left;\n  justify-content: left;\n  gap: 20px;\n}\n/*targeting just the data, not the h2 */\n#weatherRow > * > :nth-child(2n) {\n  font-size: 2.5rem;\n}\n#inputWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: end;\n  height: 100%;\n  margin-right: var(--margin-left-line);\n  gap: 15px;\n}\n#map {\n  display: flex;\n  height: 200px;\n  width: 350px;\n}\n#inputRow {\n  position: relative;\n  display: flex;\n  justify-content: end;\n  width: 100%;\n  height: 70px;\n}\n::placeholder {\n  color: white;\n}\n\ninput {\n  position: relative;\n  background-color: var(--dark-teal);\n  color: white;\n  padding-left: 15px;\n  border: none;\n  border-radius: 15px;\n  width: 75%;\n  height: 100%;\n  font-size: 1.8rem;\n}\ninput:focus {\n  border: none;\n  outline: none;\n}\n#submitBtn {\n  font-size: 1.5rem;\n  position: absolute;\n  top: 33%;\n  right: 2%;\n  border: none;\n  color: var(--jonquil);\n  font-weight: bold;\n  background-color: var(--dark-teal);\n  cursor: pointer;\n}\n\n#weatherRow > * > * {\n  margin: 0;\n}\n\n#hr {\n  background-color: var(--jonquil);\n  font-size: 50px;\n  height: 1px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  margin-top: 15px;\n}\n\nsection {\n  height: 80%;\n  /* background-color: black; */\n  margin: 0;\n  display: grid;\n  grid-template-columns: 0.5fr 1.5fr;\n}\n\n#day_forecast {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: end;\n  align-items: flex-start;\n  gap: 15px;\n  margin-bottom: var(--margin-bottom);\n}\n.dailyForecastBox {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n  margin-left: var(--margin-left-line);\n  gap: 10px;\n}\n.dayForecastHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.tempRainContainer {\n  display: flex;\n  gap: 15px;\n}\n\n.dailyForecastBox > * {\n  margin: 0;\n}\n.dailyForecastBox > * > * {\n  margin: 0;\n}\n.tempRainContainer > * > * {\n  margin: 0;\n}\n.forecastDetailsFlex > :nth-child(1) {\n  font-size: 2rem;\n}\n\n.time {\n  font-size: 3.3rem;\n}\n.forecastIcon {\n  font-size: 3.3rem;\n  margin-right: 25px;\n  color: var(--orange-red);\n}\n.temp {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n.rain {\n  font-size: 2.5rem;\n}\n\n#weekForecast {\n  /*\n  display: grid;\n  grid-auto-flow: column;\n  margin-right: var(--margin-left-line);\n  margin-bottom: var(--margin-bottom);\n  justify-items: end;\n  align-content: end;\n  align-items: end;\n  column-gap: 40px;\n  */\n\n  display: flex;\n  justify-content: right;\n  align-items: flex-end;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  gap: 40px;\n\n  color: white;\n  margin-right: var(--margin-left-line);\n  margin-bottom: var(--margin-bottom);\n}\n\n.dayAndIconContainer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.dayAndIconContainer > * {\n  margin: 0;\n}\n\n.dayOfWeek {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n\n.weatherIconWeekly {\n  color: var(--orange-red);\n  font-size: 2.5rem;\n}\n\n.highAndLowContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 25px;\n}\n\n.highAndLowContainer > * {\n  margin: 0;\n}\n\n.highAndLowHeader {\n  font-size: 2rem;\n  color: white;\n}\n.high,\n.low {\n  font-size: 2.5rem;\n  color: var(--jonquil);\n}\n\n/*\n.high {\n  color: var(--jonquil);\n}\n.low {\n  color: var(--papaya-whip);\n}\n*/\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/weather-icons.min.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/weather-icons.min.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.eot */ "./src/font/weathericons-regular-webfont.eot"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.woff2 */ "./src/font/weathericons-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.woff */ "./src/font/weathericons-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.ttf */ "./src/font/weathericons-regular-webfont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../font/weathericons-regular-webfont.svg */ "./src/font/weathericons-regular-webfont.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___, { hash: "#weather_iconsregular" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n *  Weather Icons 2.0.10\n *  Updated November 1, 2020\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face {\n  font-family: \"weathericons\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")\n      format(\"embedded-opentype\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ")\n      format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.wi {\n  display: inline-block;\n  font-family: \"weathericons\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wi-fw {\n  text-align: center;\n  width: 1.4em;\n}\n.wi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.wi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.wi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.wi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.wi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n.wi-day-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-day-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-day-cloudy-gusts:before {\n  content: \"\\f000\";\n}\n.wi-day-cloudy-windy:before {\n  content: \"\\f001\";\n}\n.wi-day-fog:before {\n  content: \"\\f003\";\n}\n.wi-day-hail:before {\n  content: \"\\f004\";\n}\n.wi-day-haze:before {\n  content: \"\\f0b6\";\n}\n.wi-day-lightning:before {\n  content: \"\\f005\";\n}\n.wi-day-rain:before {\n  content: \"\\f008\";\n}\n.wi-day-rain-mix:before {\n  content: \"\\f006\";\n}\n.wi-day-rain-wind:before {\n  content: \"\\f007\";\n}\n.wi-day-showers:before {\n  content: \"\\f009\";\n}\n.wi-day-sleet:before {\n  content: \"\\f0b2\";\n}\n.wi-day-sleet-storm:before {\n  content: \"\\f068\";\n}\n.wi-day-snow:before {\n  content: \"\\f00a\";\n}\n.wi-day-snow-thunderstorm:before {\n  content: \"\\f06b\";\n}\n.wi-day-snow-wind:before {\n  content: \"\\f065\";\n}\n.wi-day-sprinkle:before {\n  content: \"\\f00b\";\n}\n.wi-day-storm-showers:before {\n  content: \"\\f00e\";\n}\n.wi-day-sunny-overcast:before {\n  content: \"\\f00c\";\n}\n.wi-day-thunderstorm:before {\n  content: \"\\f010\";\n}\n.wi-day-windy:before {\n  content: \"\\f085\";\n}\n.wi-solar-eclipse:before {\n  content: \"\\f06e\";\n}\n.wi-hot:before {\n  content: \"\\f072\";\n}\n.wi-day-cloudy-high:before {\n  content: \"\\f07d\";\n}\n.wi-day-light-wind:before {\n  content: \"\\f0c4\";\n}\n.wi-night-clear:before {\n  content: \"\\f02e\";\n}\n.wi-night-alt-cloudy:before {\n  content: \"\\f086\";\n}\n.wi-night-alt-cloudy-gusts:before {\n  content: \"\\f022\";\n}\n.wi-night-alt-cloudy-windy:before {\n  content: \"\\f023\";\n}\n.wi-night-alt-hail:before {\n  content: \"\\f024\";\n}\n.wi-night-alt-lightning:before {\n  content: \"\\f025\";\n}\n.wi-night-alt-rain:before {\n  content: \"\\f028\";\n}\n.wi-night-alt-rain-mix:before {\n  content: \"\\f026\";\n}\n.wi-night-alt-rain-wind:before {\n  content: \"\\f027\";\n}\n.wi-night-alt-showers:before {\n  content: \"\\f029\";\n}\n.wi-night-alt-sleet:before {\n  content: \"\\f0b4\";\n}\n.wi-night-alt-sleet-storm:before {\n  content: \"\\f06a\";\n}\n.wi-night-alt-snow:before {\n  content: \"\\f02a\";\n}\n.wi-night-alt-snow-thunderstorm:before {\n  content: \"\\f06d\";\n}\n.wi-night-alt-snow-wind:before {\n  content: \"\\f067\";\n}\n.wi-night-alt-sprinkle:before {\n  content: \"\\f02b\";\n}\n.wi-night-alt-storm-showers:before {\n  content: \"\\f02c\";\n}\n.wi-night-alt-thunderstorm:before {\n  content: \"\\f02d\";\n}\n.wi-night-cloudy:before {\n  content: \"\\f031\";\n}\n.wi-night-cloudy-gusts:before {\n  content: \"\\f02f\";\n}\n.wi-night-cloudy-windy:before {\n  content: \"\\f030\";\n}\n.wi-night-fog:before {\n  content: \"\\f04a\";\n}\n.wi-night-hail:before {\n  content: \"\\f032\";\n}\n.wi-night-lightning:before {\n  content: \"\\f033\";\n}\n.wi-night-partly-cloudy:before {\n  content: \"\\f083\";\n}\n.wi-night-rain:before {\n  content: \"\\f036\";\n}\n.wi-night-rain-mix:before {\n  content: \"\\f034\";\n}\n.wi-night-rain-wind:before {\n  content: \"\\f035\";\n}\n.wi-night-showers:before {\n  content: \"\\f037\";\n}\n.wi-night-sleet:before {\n  content: \"\\f0b3\";\n}\n.wi-night-sleet-storm:before {\n  content: \"\\f069\";\n}\n.wi-night-snow:before {\n  content: \"\\f038\";\n}\n.wi-night-snow-thunderstorm:before {\n  content: \"\\f06c\";\n}\n.wi-night-snow-wind:before {\n  content: \"\\f066\";\n}\n.wi-night-sprinkle:before {\n  content: \"\\f039\";\n}\n.wi-night-storm-showers:before {\n  content: \"\\f03a\";\n}\n.wi-night-thunderstorm:before {\n  content: \"\\f03b\";\n}\n.wi-lunar-eclipse:before {\n  content: \"\\f070\";\n}\n.wi-stars:before {\n  content: \"\\f077\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-night-alt-cloudy-high:before {\n  content: \"\\f07e\";\n}\n.wi-night-cloudy-high:before {\n  content: \"\\f080\";\n}\n.wi-night-alt-partly-cloudy:before {\n  content: \"\\f081\";\n}\n.wi-cloud:before {\n  content: \"\\f041\";\n}\n.wi-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-cloudy-gusts:before {\n  content: \"\\f011\";\n}\n.wi-cloudy-windy:before {\n  content: \"\\f012\";\n}\n.wi-fog:before {\n  content: \"\\f014\";\n}\n.wi-hail:before {\n  content: \"\\f015\";\n}\n.wi-rain:before {\n  content: \"\\f019\";\n}\n.wi-rain-mix:before {\n  content: \"\\f017\";\n}\n.wi-rain-wind:before {\n  content: \"\\f018\";\n}\n.wi-showers:before {\n  content: \"\\f01a\";\n}\n.wi-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-sprinkle:before {\n  content: \"\\f01c\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-snow-wind:before {\n  content: \"\\f064\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-smog:before {\n  content: \"\\f074\";\n}\n.wi-smoke:before {\n  content: \"\\f062\";\n}\n.wi-lightning:before {\n  content: \"\\f016\";\n}\n.wi-raindrops:before {\n  content: \"\\f04e\";\n}\n.wi-raindrop:before {\n  content: \"\\f078\";\n}\n.wi-dust:before {\n  content: \"\\f063\";\n}\n.wi-snowflake-cold:before {\n  content: \"\\f076\";\n}\n.wi-windy:before {\n  content: \"\\f021\";\n}\n.wi-strong-wind:before {\n  content: \"\\f050\";\n}\n.wi-sandstorm:before {\n  content: \"\\f082\";\n}\n.wi-earthquake:before {\n  content: \"\\f0c6\";\n}\n.wi-fire:before {\n  content: \"\\f0c7\";\n}\n.wi-flood:before {\n  content: \"\\f07c\";\n}\n.wi-meteor:before {\n  content: \"\\f071\";\n}\n.wi-tsunami:before {\n  content: \"\\f0c5\";\n}\n.wi-volcano:before {\n  content: \"\\f0c8\";\n}\n.wi-hurricane:before {\n  content: \"\\f073\";\n}\n.wi-tornado:before {\n  content: \"\\f056\";\n}\n.wi-small-craft-advisory:before {\n  content: \"\\f0cc\";\n}\n.wi-gale-warning:before {\n  content: \"\\f0cd\";\n}\n.wi-storm-warning:before {\n  content: \"\\f0ce\";\n}\n.wi-hurricane-warning:before {\n  content: \"\\f0cf\";\n}\n.wi-wind-direction:before {\n  content: \"\\f0b1\";\n}\n.wi-alien:before {\n  content: \"\\f075\";\n}\n.wi-celsius:before {\n  content: \"\\f03c\";\n}\n.wi-fahrenheit:before {\n  content: \"\\f045\";\n}\n.wi-degrees:before {\n  content: \"\\f042\";\n}\n.wi-thermometer:before {\n  content: \"\\f055\";\n}\n.wi-thermometer-exterior:before {\n  content: \"\\f053\";\n}\n.wi-thermometer-internal:before {\n  content: \"\\f054\";\n}\n.wi-cloud-down:before {\n  content: \"\\f03d\";\n}\n.wi-cloud-up:before {\n  content: \"\\f040\";\n}\n.wi-cloud-refresh:before {\n  content: \"\\f03e\";\n}\n.wi-horizon:before {\n  content: \"\\f047\";\n}\n.wi-horizon-alt:before {\n  content: \"\\f046\";\n}\n.wi-sunrise:before {\n  content: \"\\f051\";\n}\n.wi-sunset:before {\n  content: \"\\f052\";\n}\n.wi-moonrise:before {\n  content: \"\\f0c9\";\n}\n.wi-moonset:before {\n  content: \"\\f0ca\";\n}\n.wi-refresh:before {\n  content: \"\\f04c\";\n}\n.wi-refresh-alt:before {\n  content: \"\\f04b\";\n}\n.wi-umbrella:before {\n  content: \"\\f084\";\n}\n.wi-barometer:before {\n  content: \"\\f079\";\n}\n.wi-humidity:before {\n  content: \"\\f07a\";\n}\n.wi-na:before {\n  content: \"\\f07b\";\n}\n.wi-train:before {\n  content: \"\\f0cb\";\n}\n.wi-moon-new:before {\n  content: \"\\f095\";\n}\n.wi-moon-waxing-crescent-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-waxing-crescent-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-waxing-crescent-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-waxing-crescent-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-waxing-crescent-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-waxing-crescent-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-first-quarter:before {\n  content: \"\\f09c\";\n}\n.wi-moon-waxing-gibbous-1:before {\n  content: \"\\f09d\";\n}\n.wi-moon-waxing-gibbous-2:before {\n  content: \"\\f09e\";\n}\n.wi-moon-waxing-gibbous-3:before {\n  content: \"\\f09f\";\n}\n.wi-moon-waxing-gibbous-4:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-waxing-gibbous-5:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-waxing-gibbous-6:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-full:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-waning-gibbous-1:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-waning-gibbous-2:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-waning-gibbous-3:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-waning-gibbous-4:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-waning-gibbous-5:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-waning-gibbous-6:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-third-quarter:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-waning-crescent-1:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-waning-crescent-2:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-waning-crescent-3:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-waning-crescent-4:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-waning-crescent-5:before {\n  content: \"\\f0af\";\n}\n.wi-moon-waning-crescent-6:before {\n  content: \"\\f0b0\";\n}\n.wi-moon-alt-new:before {\n  content: \"\\f0eb\";\n}\n.wi-moon-alt-waxing-crescent-1:before {\n  content: \"\\f0d0\";\n}\n.wi-moon-alt-waxing-crescent-2:before {\n  content: \"\\f0d1\";\n}\n.wi-moon-alt-waxing-crescent-3:before {\n  content: \"\\f0d2\";\n}\n.wi-moon-alt-waxing-crescent-4:before {\n  content: \"\\f0d3\";\n}\n.wi-moon-alt-waxing-crescent-5:before {\n  content: \"\\f0d4\";\n}\n.wi-moon-alt-waxing-crescent-6:before {\n  content: \"\\f0d5\";\n}\n.wi-moon-alt-first-quarter:before {\n  content: \"\\f0d6\";\n}\n.wi-moon-alt-waxing-gibbous-1:before {\n  content: \"\\f0d7\";\n}\n.wi-moon-alt-waxing-gibbous-2:before {\n  content: \"\\f0d8\";\n}\n.wi-moon-alt-waxing-gibbous-3:before {\n  content: \"\\f0d9\";\n}\n.wi-moon-alt-waxing-gibbous-4:before {\n  content: \"\\f0da\";\n}\n.wi-moon-alt-waxing-gibbous-5:before {\n  content: \"\\f0db\";\n}\n.wi-moon-alt-waxing-gibbous-6:before {\n  content: \"\\f0dc\";\n}\n.wi-moon-alt-full:before {\n  content: \"\\f0dd\";\n}\n.wi-moon-alt-waning-gibbous-1:before {\n  content: \"\\f0de\";\n}\n.wi-moon-alt-waning-gibbous-2:before {\n  content: \"\\f0df\";\n}\n.wi-moon-alt-waning-gibbous-3:before {\n  content: \"\\f0e0\";\n}\n.wi-moon-alt-waning-gibbous-4:before {\n  content: \"\\f0e1\";\n}\n.wi-moon-alt-waning-gibbous-5:before {\n  content: \"\\f0e2\";\n}\n.wi-moon-alt-waning-gibbous-6:before {\n  content: \"\\f0e3\";\n}\n.wi-moon-alt-third-quarter:before {\n  content: \"\\f0e4\";\n}\n.wi-moon-alt-waning-crescent-1:before {\n  content: \"\\f0e5\";\n}\n.wi-moon-alt-waning-crescent-2:before {\n  content: \"\\f0e6\";\n}\n.wi-moon-alt-waning-crescent-3:before {\n  content: \"\\f0e7\";\n}\n.wi-moon-alt-waning-crescent-4:before {\n  content: \"\\f0e8\";\n}\n.wi-moon-alt-waning-crescent-5:before {\n  content: \"\\f0e9\";\n}\n.wi-moon-alt-waning-crescent-6:before {\n  content: \"\\f0ea\";\n}\n.wi-moon-0:before {\n  content: \"\\f095\";\n}\n.wi-moon-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-7:before {\n  content: \"\\f09c\";\n}\n.wi-moon-8:before {\n  content: \"\\f09d\";\n}\n.wi-moon-9:before {\n  content: \"\\f09e\";\n}\n.wi-moon-10:before {\n  content: \"\\f09f\";\n}\n.wi-moon-11:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-12:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-13:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-14:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-15:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-16:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-17:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-18:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-19:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-20:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-21:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-22:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-23:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-24:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-25:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-26:before {\n  content: \"\\f0af\";\n}\n.wi-moon-27:before {\n  content: \"\\f0b0\";\n}\n.wi-time-1:before {\n  content: \"\\f08a\";\n}\n.wi-time-2:before {\n  content: \"\\f08b\";\n}\n.wi-time-3:before {\n  content: \"\\f08c\";\n}\n.wi-time-4:before {\n  content: \"\\f08d\";\n}\n.wi-time-5:before {\n  content: \"\\f08e\";\n}\n.wi-time-6:before {\n  content: \"\\f08f\";\n}\n.wi-time-7:before {\n  content: \"\\f090\";\n}\n.wi-time-8:before {\n  content: \"\\f091\";\n}\n.wi-time-9:before {\n  content: \"\\f092\";\n}\n.wi-time-10:before {\n  content: \"\\f093\";\n}\n.wi-time-11:before {\n  content: \"\\f094\";\n}\n.wi-time-12:before {\n  content: \"\\f089\";\n}\n.wi-direction-up:before {\n  content: \"\\f058\";\n}\n.wi-direction-up-right:before {\n  content: \"\\f057\";\n}\n.wi-direction-right:before {\n  content: \"\\f04d\";\n}\n.wi-direction-down-right:before {\n  content: \"\\f088\";\n}\n.wi-direction-down:before {\n  content: \"\\f044\";\n}\n.wi-direction-down-left:before {\n  content: \"\\f043\";\n}\n.wi-direction-left:before {\n  content: \"\\f048\";\n}\n.wi-direction-up-left:before {\n  content: \"\\f087\";\n}\n.wi-wind-beaufort-0:before {\n  content: \"\\f0b7\";\n}\n.wi-wind-beaufort-1:before {\n  content: \"\\f0b8\";\n}\n.wi-wind-beaufort-2:before {\n  content: \"\\f0b9\";\n}\n.wi-wind-beaufort-3:before {\n  content: \"\\f0ba\";\n}\n.wi-wind-beaufort-4:before {\n  content: \"\\f0bb\";\n}\n.wi-wind-beaufort-5:before {\n  content: \"\\f0bc\";\n}\n.wi-wind-beaufort-6:before {\n  content: \"\\f0bd\";\n}\n.wi-wind-beaufort-7:before {\n  content: \"\\f0be\";\n}\n.wi-wind-beaufort-8:before {\n  content: \"\\f0bf\";\n}\n.wi-wind-beaufort-9:before {\n  content: \"\\f0c0\";\n}\n.wi-wind-beaufort-10:before {\n  content: \"\\f0c1\";\n}\n.wi-wind-beaufort-11:before {\n  content: \"\\f0c2\";\n}\n.wi-wind-beaufort-12:before {\n  content: \"\\f0c3\";\n}\n.wi-yahoo-0:before {\n  content: \"\\f056\";\n}\n.wi-yahoo-1:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-2:before {\n  content: \"\\f073\";\n}\n.wi-yahoo-3:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-4:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-5:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-6:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-7:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-8:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-9:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-10:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-11:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-12:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-13:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-14:before {\n  content: \"\\f00a\";\n}\n.wi-yahoo-15:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-16:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-17:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-18:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-19:before {\n  content: \"\\f063\";\n}\n.wi-yahoo-20:before {\n  content: \"\\f014\";\n}\n.wi-yahoo-21:before {\n  content: \"\\f021\";\n}\n.wi-yahoo-22:before {\n  content: \"\\f062\";\n}\n.wi-yahoo-23:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-24:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-25:before {\n  content: \"\\f076\";\n}\n.wi-yahoo-26:before {\n  content: \"\\f013\";\n}\n.wi-yahoo-27:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-28:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-29:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-30:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-31:before {\n  content: \"\\f02e\";\n}\n.wi-yahoo-32:before {\n  content: \"\\f00d\";\n}\n.wi-yahoo-33:before {\n  content: \"\\f083\";\n}\n.wi-yahoo-34:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-35:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-36:before {\n  content: \"\\f072\";\n}\n.wi-yahoo-37:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-38:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-39:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-40:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-41:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-42:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-43:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-44:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-45:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-46:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-47:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-3200:before {\n  content: \"\\f077\";\n}\n.wi-forecast-io-clear-day:before {\n  content: \"\\f00d\";\n}\n.wi-forecast-io-clear-night:before {\n  content: \"\\f02e\";\n}\n.wi-forecast-io-rain:before {\n  content: \"\\f019\";\n}\n.wi-forecast-io-snow:before {\n  content: \"\\f01b\";\n}\n.wi-forecast-io-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-forecast-io-wind:before {\n  content: \"\\f050\";\n}\n.wi-forecast-io-fog:before {\n  content: \"\\f014\";\n}\n.wi-forecast-io-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-forecast-io-partly-cloudy-day:before {\n  content: \"\\f002\";\n}\n.wi-forecast-io-partly-cloudy-night:before {\n  content: \"\\f031\";\n}\n.wi-forecast-io-hail:before {\n  content: \"\\f015\";\n}\n.wi-forecast-io-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-forecast-io-tornado:before {\n  content: \"\\f056\";\n}\n.wi-wmo4680-0:before,\n.wi-wmo4680-00:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-1:before,\n.wi-wmo4680-01:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-2:before,\n.wi-wmo4680-02:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-3:before,\n.wi-wmo4680-03:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-4:before,\n.wi-wmo4680-04:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-5:before,\n.wi-wmo4680-05:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-10:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-11:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-12:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-18:before {\n  content: \"\\f050\";\n}\n.wi-wmo4680-20:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-21:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-22:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-23:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-24:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-25:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-26:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-27:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-28:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-29:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-30:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-31:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-32:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-33:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-34:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-35:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-40:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-41:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-42:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-43:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-44:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-45:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-46:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-47:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-48:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-50:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-51:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-52:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-53:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-54:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-55:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-56:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-57:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-58:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-60:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-61:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-62:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-63:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-64:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-65:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-66:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-67:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-68:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-70:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-71:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-72:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-73:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-74:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-75:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-76:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-77:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-78:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-80:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-81:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-82:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-83:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-84:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-85:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-86:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-87:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-89:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-90:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-91:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-92:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-93:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-94:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-95:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-96:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-99:before {\n  content: \"\\f056\";\n}\n.wi-owm-200:before {\n  content: \"\\f01e\";\n}\n.wi-owm-201:before {\n  content: \"\\f01e\";\n}\n.wi-owm-202:before {\n  content: \"\\f01e\";\n}\n.wi-owm-210:before {\n  content: \"\\f016\";\n}\n.wi-owm-211:before {\n  content: \"\\f016\";\n}\n.wi-owm-212:before {\n  content: \"\\f016\";\n}\n.wi-owm-221:before {\n  content: \"\\f016\";\n}\n.wi-owm-230:before {\n  content: \"\\f01e\";\n}\n.wi-owm-231:before {\n  content: \"\\f01e\";\n}\n.wi-owm-232:before {\n  content: \"\\f01e\";\n}\n.wi-owm-300:before {\n  content: \"\\f01c\";\n}\n.wi-owm-301:before {\n  content: \"\\f01c\";\n}\n.wi-owm-302:before {\n  content: \"\\f019\";\n}\n.wi-owm-310:before {\n  content: \"\\f017\";\n}\n.wi-owm-311:before {\n  content: \"\\f019\";\n}\n.wi-owm-312:before {\n  content: \"\\f019\";\n}\n.wi-owm-313:before {\n  content: \"\\f01a\";\n}\n.wi-owm-314:before {\n  content: \"\\f019\";\n}\n.wi-owm-321:before {\n  content: \"\\f01c\";\n}\n.wi-owm-500:before {\n  content: \"\\f01c\";\n}\n.wi-owm-501:before {\n  content: \"\\f019\";\n}\n.wi-owm-502:before {\n  content: \"\\f019\";\n}\n.wi-owm-503:before {\n  content: \"\\f019\";\n}\n.wi-owm-504:before {\n  content: \"\\f019\";\n}\n.wi-owm-511:before {\n  content: \"\\f017\";\n}\n.wi-owm-520:before {\n  content: \"\\f01a\";\n}\n.wi-owm-521:before {\n  content: \"\\f01a\";\n}\n.wi-owm-522:before {\n  content: \"\\f01a\";\n}\n.wi-owm-531:before {\n  content: \"\\f01d\";\n}\n.wi-owm-600:before {\n  content: \"\\f01b\";\n}\n.wi-owm-601:before {\n  content: \"\\f01b\";\n}\n.wi-owm-602:before {\n  content: \"\\f0b5\";\n}\n.wi-owm-611:before {\n  content: \"\\f017\";\n}\n.wi-owm-612:before {\n  content: \"\\f017\";\n}\n.wi-owm-615:before {\n  content: \"\\f017\";\n}\n.wi-owm-616:before {\n  content: \"\\f017\";\n}\n.wi-owm-620:before {\n  content: \"\\f017\";\n}\n.wi-owm-621:before {\n  content: \"\\f01b\";\n}\n.wi-owm-622:before {\n  content: \"\\f01b\";\n}\n.wi-owm-701:before {\n  content: \"\\f014\";\n}\n.wi-owm-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-741:before {\n  content: \"\\f014\";\n}\n.wi-owm-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-771:before {\n  content: \"\\f011\";\n}\n.wi-owm-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-801:before {\n  content: \"\\f041\";\n}\n.wi-owm-802:before {\n  content: \"\\f041\";\n}\n.wi-owm-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-901:before {\n  content: \"\\f01d\";\n}\n.wi-owm-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-905:before {\n  content: \"\\f021\";\n}\n.wi-owm-906:before {\n  content: \"\\f015\";\n}\n.wi-owm-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-day-200:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-201:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-202:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-210:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-211:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-212:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-221:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-230:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-231:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-232:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-300:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-301:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-302:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-310:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-311:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-312:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-313:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-314:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-321:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-500:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-501:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-502:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-503:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-504:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-511:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-520:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-521:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-522:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-531:before {\n  content: \"\\f00e\";\n}\n.wi-owm-day-600:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-601:before {\n  content: \"\\f0b2\";\n}\n.wi-owm-day-602:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-611:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-612:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-615:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-616:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-620:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-621:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-622:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-701:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-day-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-day-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-741:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-day-801:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-802:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-day-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-day-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-day-906:before {\n  content: \"\\f004\";\n}\n.wi-owm-day-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-night-200:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-201:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-202:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-210:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-211:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-212:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-221:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-230:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-231:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-232:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-300:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-301:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-302:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-310:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-311:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-312:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-313:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-314:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-321:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-500:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-501:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-502:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-503:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-504:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-511:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-520:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-521:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-522:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-531:before {\n  content: \"\\f02c\";\n}\n.wi-owm-night-600:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-601:before {\n  content: \"\\f0b4\";\n}\n.wi-owm-night-602:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-611:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-612:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-615:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-616:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-620:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-621:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-622:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-701:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-night-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-night-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-741:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-800:before {\n  content: \"\\f02e\";\n}\n.wi-owm-night-801:before {\n  content: \"\\f081\";\n}\n.wi-owm-night-802:before {\n  content: \"\\f086\";\n}\n.wi-owm-night-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-night-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-night-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-night-906:before {\n  content: \"\\f024\";\n}\n.wi-owm-night-957:before {\n  content: \"\\f050\";\n}\n.wi-wu-chanceflurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-chancerain:before {\n  content: \"\\f019\";\n}\n.wi-wu-chancesleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-chancesnow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-chancetstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-clear:before {\n  content: \"\\f00d\";\n}\n.wi-wu-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-flurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-hazy:before {\n  content: \"\\f0b6\";\n}\n.wi-wu-mostlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-mostlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-partlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-partlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-rain:before {\n  content: \"\\f01a\";\n}\n.wi-wu-sleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-snow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-tstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-unknown:before {\n  content: \"\\f00d\";\n} /*# sourceMappingURL=weather-icons.min.css.map */\n", "",{"version":3,"sources":["webpack://./src/css/weather-icons.min.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;EAoBE;AACF;EACE,2BAA2B;EAC3B,4CAAoD;EACpD;;;;;;mBAMiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;EACd,mCAAmC;EACnC,kCAAkC;AACpC;AACA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,gEAAgE;EAChE,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;AAC1B;AACA;EACE,gEAAgE;EAChE,iCAAiC;EACjC,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,gEAAgE;EAChE,iCAAiC;EACjC,6BAA6B;EAC7B,yBAAyB;AAC3B;AACA;EACE,0EAA0E;EAC1E,+BAA+B;EAC/B,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,0EAA0E;EAC1E,+BAA+B;EAC/B,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB,EAAE,gDAAgD","sourcesContent":["/*!\n *  Weather Icons 2.0.10\n *  Updated November 1, 2020\n *  Weather themed icons for Bootstrap\n *  Author - Erik Flowers - erik@helloerik.com\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n *  ------------------------------------------------------------------------------\n *  Maintained at http://erikflowers.github.io/weather-icons\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Font licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS, SCSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n */\n@font-face {\n  font-family: \"weathericons\";\n  src: url(\"../font/weathericons-regular-webfont.eot\");\n  src: url(\"../font/weathericons-regular-webfont.eot?#iefix\")\n      format(\"embedded-opentype\"),\n    url(\"../font/weathericons-regular-webfont.woff2\") format(\"woff2\"),\n    url(\"../font/weathericons-regular-webfont.woff\") format(\"woff\"),\n    url(\"../font/weathericons-regular-webfont.ttf\") format(\"truetype\"),\n    url(\"../font/weathericons-regular-webfont.svg#weather_iconsregular\")\n      format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.wi {\n  display: inline-block;\n  font-family: \"weathericons\";\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wi-fw {\n  text-align: center;\n  width: 1.4em;\n}\n.wi-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.wi-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.wi-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.wi-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.wi-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n.wi-day-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-day-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-day-cloudy-gusts:before {\n  content: \"\\f000\";\n}\n.wi-day-cloudy-windy:before {\n  content: \"\\f001\";\n}\n.wi-day-fog:before {\n  content: \"\\f003\";\n}\n.wi-day-hail:before {\n  content: \"\\f004\";\n}\n.wi-day-haze:before {\n  content: \"\\f0b6\";\n}\n.wi-day-lightning:before {\n  content: \"\\f005\";\n}\n.wi-day-rain:before {\n  content: \"\\f008\";\n}\n.wi-day-rain-mix:before {\n  content: \"\\f006\";\n}\n.wi-day-rain-wind:before {\n  content: \"\\f007\";\n}\n.wi-day-showers:before {\n  content: \"\\f009\";\n}\n.wi-day-sleet:before {\n  content: \"\\f0b2\";\n}\n.wi-day-sleet-storm:before {\n  content: \"\\f068\";\n}\n.wi-day-snow:before {\n  content: \"\\f00a\";\n}\n.wi-day-snow-thunderstorm:before {\n  content: \"\\f06b\";\n}\n.wi-day-snow-wind:before {\n  content: \"\\f065\";\n}\n.wi-day-sprinkle:before {\n  content: \"\\f00b\";\n}\n.wi-day-storm-showers:before {\n  content: \"\\f00e\";\n}\n.wi-day-sunny-overcast:before {\n  content: \"\\f00c\";\n}\n.wi-day-thunderstorm:before {\n  content: \"\\f010\";\n}\n.wi-day-windy:before {\n  content: \"\\f085\";\n}\n.wi-solar-eclipse:before {\n  content: \"\\f06e\";\n}\n.wi-hot:before {\n  content: \"\\f072\";\n}\n.wi-day-cloudy-high:before {\n  content: \"\\f07d\";\n}\n.wi-day-light-wind:before {\n  content: \"\\f0c4\";\n}\n.wi-night-clear:before {\n  content: \"\\f02e\";\n}\n.wi-night-alt-cloudy:before {\n  content: \"\\f086\";\n}\n.wi-night-alt-cloudy-gusts:before {\n  content: \"\\f022\";\n}\n.wi-night-alt-cloudy-windy:before {\n  content: \"\\f023\";\n}\n.wi-night-alt-hail:before {\n  content: \"\\f024\";\n}\n.wi-night-alt-lightning:before {\n  content: \"\\f025\";\n}\n.wi-night-alt-rain:before {\n  content: \"\\f028\";\n}\n.wi-night-alt-rain-mix:before {\n  content: \"\\f026\";\n}\n.wi-night-alt-rain-wind:before {\n  content: \"\\f027\";\n}\n.wi-night-alt-showers:before {\n  content: \"\\f029\";\n}\n.wi-night-alt-sleet:before {\n  content: \"\\f0b4\";\n}\n.wi-night-alt-sleet-storm:before {\n  content: \"\\f06a\";\n}\n.wi-night-alt-snow:before {\n  content: \"\\f02a\";\n}\n.wi-night-alt-snow-thunderstorm:before {\n  content: \"\\f06d\";\n}\n.wi-night-alt-snow-wind:before {\n  content: \"\\f067\";\n}\n.wi-night-alt-sprinkle:before {\n  content: \"\\f02b\";\n}\n.wi-night-alt-storm-showers:before {\n  content: \"\\f02c\";\n}\n.wi-night-alt-thunderstorm:before {\n  content: \"\\f02d\";\n}\n.wi-night-cloudy:before {\n  content: \"\\f031\";\n}\n.wi-night-cloudy-gusts:before {\n  content: \"\\f02f\";\n}\n.wi-night-cloudy-windy:before {\n  content: \"\\f030\";\n}\n.wi-night-fog:before {\n  content: \"\\f04a\";\n}\n.wi-night-hail:before {\n  content: \"\\f032\";\n}\n.wi-night-lightning:before {\n  content: \"\\f033\";\n}\n.wi-night-partly-cloudy:before {\n  content: \"\\f083\";\n}\n.wi-night-rain:before {\n  content: \"\\f036\";\n}\n.wi-night-rain-mix:before {\n  content: \"\\f034\";\n}\n.wi-night-rain-wind:before {\n  content: \"\\f035\";\n}\n.wi-night-showers:before {\n  content: \"\\f037\";\n}\n.wi-night-sleet:before {\n  content: \"\\f0b3\";\n}\n.wi-night-sleet-storm:before {\n  content: \"\\f069\";\n}\n.wi-night-snow:before {\n  content: \"\\f038\";\n}\n.wi-night-snow-thunderstorm:before {\n  content: \"\\f06c\";\n}\n.wi-night-snow-wind:before {\n  content: \"\\f066\";\n}\n.wi-night-sprinkle:before {\n  content: \"\\f039\";\n}\n.wi-night-storm-showers:before {\n  content: \"\\f03a\";\n}\n.wi-night-thunderstorm:before {\n  content: \"\\f03b\";\n}\n.wi-lunar-eclipse:before {\n  content: \"\\f070\";\n}\n.wi-stars:before {\n  content: \"\\f077\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-night-alt-cloudy-high:before {\n  content: \"\\f07e\";\n}\n.wi-night-cloudy-high:before {\n  content: \"\\f080\";\n}\n.wi-night-alt-partly-cloudy:before {\n  content: \"\\f081\";\n}\n.wi-cloud:before {\n  content: \"\\f041\";\n}\n.wi-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-cloudy-gusts:before {\n  content: \"\\f011\";\n}\n.wi-cloudy-windy:before {\n  content: \"\\f012\";\n}\n.wi-fog:before {\n  content: \"\\f014\";\n}\n.wi-hail:before {\n  content: \"\\f015\";\n}\n.wi-rain:before {\n  content: \"\\f019\";\n}\n.wi-rain-mix:before {\n  content: \"\\f017\";\n}\n.wi-rain-wind:before {\n  content: \"\\f018\";\n}\n.wi-showers:before {\n  content: \"\\f01a\";\n}\n.wi-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-sprinkle:before {\n  content: \"\\f01c\";\n}\n.wi-storm-showers:before {\n  content: \"\\f01d\";\n}\n.wi-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-snow-wind:before {\n  content: \"\\f064\";\n}\n.wi-snow:before {\n  content: \"\\f01b\";\n}\n.wi-smog:before {\n  content: \"\\f074\";\n}\n.wi-smoke:before {\n  content: \"\\f062\";\n}\n.wi-lightning:before {\n  content: \"\\f016\";\n}\n.wi-raindrops:before {\n  content: \"\\f04e\";\n}\n.wi-raindrop:before {\n  content: \"\\f078\";\n}\n.wi-dust:before {\n  content: \"\\f063\";\n}\n.wi-snowflake-cold:before {\n  content: \"\\f076\";\n}\n.wi-windy:before {\n  content: \"\\f021\";\n}\n.wi-strong-wind:before {\n  content: \"\\f050\";\n}\n.wi-sandstorm:before {\n  content: \"\\f082\";\n}\n.wi-earthquake:before {\n  content: \"\\f0c6\";\n}\n.wi-fire:before {\n  content: \"\\f0c7\";\n}\n.wi-flood:before {\n  content: \"\\f07c\";\n}\n.wi-meteor:before {\n  content: \"\\f071\";\n}\n.wi-tsunami:before {\n  content: \"\\f0c5\";\n}\n.wi-volcano:before {\n  content: \"\\f0c8\";\n}\n.wi-hurricane:before {\n  content: \"\\f073\";\n}\n.wi-tornado:before {\n  content: \"\\f056\";\n}\n.wi-small-craft-advisory:before {\n  content: \"\\f0cc\";\n}\n.wi-gale-warning:before {\n  content: \"\\f0cd\";\n}\n.wi-storm-warning:before {\n  content: \"\\f0ce\";\n}\n.wi-hurricane-warning:before {\n  content: \"\\f0cf\";\n}\n.wi-wind-direction:before {\n  content: \"\\f0b1\";\n}\n.wi-alien:before {\n  content: \"\\f075\";\n}\n.wi-celsius:before {\n  content: \"\\f03c\";\n}\n.wi-fahrenheit:before {\n  content: \"\\f045\";\n}\n.wi-degrees:before {\n  content: \"\\f042\";\n}\n.wi-thermometer:before {\n  content: \"\\f055\";\n}\n.wi-thermometer-exterior:before {\n  content: \"\\f053\";\n}\n.wi-thermometer-internal:before {\n  content: \"\\f054\";\n}\n.wi-cloud-down:before {\n  content: \"\\f03d\";\n}\n.wi-cloud-up:before {\n  content: \"\\f040\";\n}\n.wi-cloud-refresh:before {\n  content: \"\\f03e\";\n}\n.wi-horizon:before {\n  content: \"\\f047\";\n}\n.wi-horizon-alt:before {\n  content: \"\\f046\";\n}\n.wi-sunrise:before {\n  content: \"\\f051\";\n}\n.wi-sunset:before {\n  content: \"\\f052\";\n}\n.wi-moonrise:before {\n  content: \"\\f0c9\";\n}\n.wi-moonset:before {\n  content: \"\\f0ca\";\n}\n.wi-refresh:before {\n  content: \"\\f04c\";\n}\n.wi-refresh-alt:before {\n  content: \"\\f04b\";\n}\n.wi-umbrella:before {\n  content: \"\\f084\";\n}\n.wi-barometer:before {\n  content: \"\\f079\";\n}\n.wi-humidity:before {\n  content: \"\\f07a\";\n}\n.wi-na:before {\n  content: \"\\f07b\";\n}\n.wi-train:before {\n  content: \"\\f0cb\";\n}\n.wi-moon-new:before {\n  content: \"\\f095\";\n}\n.wi-moon-waxing-crescent-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-waxing-crescent-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-waxing-crescent-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-waxing-crescent-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-waxing-crescent-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-waxing-crescent-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-first-quarter:before {\n  content: \"\\f09c\";\n}\n.wi-moon-waxing-gibbous-1:before {\n  content: \"\\f09d\";\n}\n.wi-moon-waxing-gibbous-2:before {\n  content: \"\\f09e\";\n}\n.wi-moon-waxing-gibbous-3:before {\n  content: \"\\f09f\";\n}\n.wi-moon-waxing-gibbous-4:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-waxing-gibbous-5:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-waxing-gibbous-6:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-full:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-waning-gibbous-1:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-waning-gibbous-2:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-waning-gibbous-3:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-waning-gibbous-4:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-waning-gibbous-5:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-waning-gibbous-6:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-third-quarter:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-waning-crescent-1:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-waning-crescent-2:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-waning-crescent-3:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-waning-crescent-4:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-waning-crescent-5:before {\n  content: \"\\f0af\";\n}\n.wi-moon-waning-crescent-6:before {\n  content: \"\\f0b0\";\n}\n.wi-moon-alt-new:before {\n  content: \"\\f0eb\";\n}\n.wi-moon-alt-waxing-crescent-1:before {\n  content: \"\\f0d0\";\n}\n.wi-moon-alt-waxing-crescent-2:before {\n  content: \"\\f0d1\";\n}\n.wi-moon-alt-waxing-crescent-3:before {\n  content: \"\\f0d2\";\n}\n.wi-moon-alt-waxing-crescent-4:before {\n  content: \"\\f0d3\";\n}\n.wi-moon-alt-waxing-crescent-5:before {\n  content: \"\\f0d4\";\n}\n.wi-moon-alt-waxing-crescent-6:before {\n  content: \"\\f0d5\";\n}\n.wi-moon-alt-first-quarter:before {\n  content: \"\\f0d6\";\n}\n.wi-moon-alt-waxing-gibbous-1:before {\n  content: \"\\f0d7\";\n}\n.wi-moon-alt-waxing-gibbous-2:before {\n  content: \"\\f0d8\";\n}\n.wi-moon-alt-waxing-gibbous-3:before {\n  content: \"\\f0d9\";\n}\n.wi-moon-alt-waxing-gibbous-4:before {\n  content: \"\\f0da\";\n}\n.wi-moon-alt-waxing-gibbous-5:before {\n  content: \"\\f0db\";\n}\n.wi-moon-alt-waxing-gibbous-6:before {\n  content: \"\\f0dc\";\n}\n.wi-moon-alt-full:before {\n  content: \"\\f0dd\";\n}\n.wi-moon-alt-waning-gibbous-1:before {\n  content: \"\\f0de\";\n}\n.wi-moon-alt-waning-gibbous-2:before {\n  content: \"\\f0df\";\n}\n.wi-moon-alt-waning-gibbous-3:before {\n  content: \"\\f0e0\";\n}\n.wi-moon-alt-waning-gibbous-4:before {\n  content: \"\\f0e1\";\n}\n.wi-moon-alt-waning-gibbous-5:before {\n  content: \"\\f0e2\";\n}\n.wi-moon-alt-waning-gibbous-6:before {\n  content: \"\\f0e3\";\n}\n.wi-moon-alt-third-quarter:before {\n  content: \"\\f0e4\";\n}\n.wi-moon-alt-waning-crescent-1:before {\n  content: \"\\f0e5\";\n}\n.wi-moon-alt-waning-crescent-2:before {\n  content: \"\\f0e6\";\n}\n.wi-moon-alt-waning-crescent-3:before {\n  content: \"\\f0e7\";\n}\n.wi-moon-alt-waning-crescent-4:before {\n  content: \"\\f0e8\";\n}\n.wi-moon-alt-waning-crescent-5:before {\n  content: \"\\f0e9\";\n}\n.wi-moon-alt-waning-crescent-6:before {\n  content: \"\\f0ea\";\n}\n.wi-moon-0:before {\n  content: \"\\f095\";\n}\n.wi-moon-1:before {\n  content: \"\\f096\";\n}\n.wi-moon-2:before {\n  content: \"\\f097\";\n}\n.wi-moon-3:before {\n  content: \"\\f098\";\n}\n.wi-moon-4:before {\n  content: \"\\f099\";\n}\n.wi-moon-5:before {\n  content: \"\\f09a\";\n}\n.wi-moon-6:before {\n  content: \"\\f09b\";\n}\n.wi-moon-7:before {\n  content: \"\\f09c\";\n}\n.wi-moon-8:before {\n  content: \"\\f09d\";\n}\n.wi-moon-9:before {\n  content: \"\\f09e\";\n}\n.wi-moon-10:before {\n  content: \"\\f09f\";\n}\n.wi-moon-11:before {\n  content: \"\\f0a0\";\n}\n.wi-moon-12:before {\n  content: \"\\f0a1\";\n}\n.wi-moon-13:before {\n  content: \"\\f0a2\";\n}\n.wi-moon-14:before {\n  content: \"\\f0a3\";\n}\n.wi-moon-15:before {\n  content: \"\\f0a4\";\n}\n.wi-moon-16:before {\n  content: \"\\f0a5\";\n}\n.wi-moon-17:before {\n  content: \"\\f0a6\";\n}\n.wi-moon-18:before {\n  content: \"\\f0a7\";\n}\n.wi-moon-19:before {\n  content: \"\\f0a8\";\n}\n.wi-moon-20:before {\n  content: \"\\f0a9\";\n}\n.wi-moon-21:before {\n  content: \"\\f0aa\";\n}\n.wi-moon-22:before {\n  content: \"\\f0ab\";\n}\n.wi-moon-23:before {\n  content: \"\\f0ac\";\n}\n.wi-moon-24:before {\n  content: \"\\f0ad\";\n}\n.wi-moon-25:before {\n  content: \"\\f0ae\";\n}\n.wi-moon-26:before {\n  content: \"\\f0af\";\n}\n.wi-moon-27:before {\n  content: \"\\f0b0\";\n}\n.wi-time-1:before {\n  content: \"\\f08a\";\n}\n.wi-time-2:before {\n  content: \"\\f08b\";\n}\n.wi-time-3:before {\n  content: \"\\f08c\";\n}\n.wi-time-4:before {\n  content: \"\\f08d\";\n}\n.wi-time-5:before {\n  content: \"\\f08e\";\n}\n.wi-time-6:before {\n  content: \"\\f08f\";\n}\n.wi-time-7:before {\n  content: \"\\f090\";\n}\n.wi-time-8:before {\n  content: \"\\f091\";\n}\n.wi-time-9:before {\n  content: \"\\f092\";\n}\n.wi-time-10:before {\n  content: \"\\f093\";\n}\n.wi-time-11:before {\n  content: \"\\f094\";\n}\n.wi-time-12:before {\n  content: \"\\f089\";\n}\n.wi-direction-up:before {\n  content: \"\\f058\";\n}\n.wi-direction-up-right:before {\n  content: \"\\f057\";\n}\n.wi-direction-right:before {\n  content: \"\\f04d\";\n}\n.wi-direction-down-right:before {\n  content: \"\\f088\";\n}\n.wi-direction-down:before {\n  content: \"\\f044\";\n}\n.wi-direction-down-left:before {\n  content: \"\\f043\";\n}\n.wi-direction-left:before {\n  content: \"\\f048\";\n}\n.wi-direction-up-left:before {\n  content: \"\\f087\";\n}\n.wi-wind-beaufort-0:before {\n  content: \"\\f0b7\";\n}\n.wi-wind-beaufort-1:before {\n  content: \"\\f0b8\";\n}\n.wi-wind-beaufort-2:before {\n  content: \"\\f0b9\";\n}\n.wi-wind-beaufort-3:before {\n  content: \"\\f0ba\";\n}\n.wi-wind-beaufort-4:before {\n  content: \"\\f0bb\";\n}\n.wi-wind-beaufort-5:before {\n  content: \"\\f0bc\";\n}\n.wi-wind-beaufort-6:before {\n  content: \"\\f0bd\";\n}\n.wi-wind-beaufort-7:before {\n  content: \"\\f0be\";\n}\n.wi-wind-beaufort-8:before {\n  content: \"\\f0bf\";\n}\n.wi-wind-beaufort-9:before {\n  content: \"\\f0c0\";\n}\n.wi-wind-beaufort-10:before {\n  content: \"\\f0c1\";\n}\n.wi-wind-beaufort-11:before {\n  content: \"\\f0c2\";\n}\n.wi-wind-beaufort-12:before {\n  content: \"\\f0c3\";\n}\n.wi-yahoo-0:before {\n  content: \"\\f056\";\n}\n.wi-yahoo-1:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-2:before {\n  content: \"\\f073\";\n}\n.wi-yahoo-3:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-4:before {\n  content: \"\\f01e\";\n}\n.wi-yahoo-5:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-6:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-7:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-8:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-9:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-10:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-11:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-12:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-13:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-14:before {\n  content: \"\\f00a\";\n}\n.wi-yahoo-15:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-16:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-17:before {\n  content: \"\\f015\";\n}\n.wi-yahoo-18:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-19:before {\n  content: \"\\f063\";\n}\n.wi-yahoo-20:before {\n  content: \"\\f014\";\n}\n.wi-yahoo-21:before {\n  content: \"\\f021\";\n}\n.wi-yahoo-22:before {\n  content: \"\\f062\";\n}\n.wi-yahoo-23:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-24:before {\n  content: \"\\f050\";\n}\n.wi-yahoo-25:before {\n  content: \"\\f076\";\n}\n.wi-yahoo-26:before {\n  content: \"\\f013\";\n}\n.wi-yahoo-27:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-28:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-29:before {\n  content: \"\\f031\";\n}\n.wi-yahoo-30:before {\n  content: \"\\f002\";\n}\n.wi-yahoo-31:before {\n  content: \"\\f02e\";\n}\n.wi-yahoo-32:before {\n  content: \"\\f00d\";\n}\n.wi-yahoo-33:before {\n  content: \"\\f083\";\n}\n.wi-yahoo-34:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-35:before {\n  content: \"\\f017\";\n}\n.wi-yahoo-36:before {\n  content: \"\\f072\";\n}\n.wi-yahoo-37:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-38:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-39:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-40:before {\n  content: \"\\f01a\";\n}\n.wi-yahoo-41:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-42:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-43:before {\n  content: \"\\f064\";\n}\n.wi-yahoo-44:before {\n  content: \"\\f00c\";\n}\n.wi-yahoo-45:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-46:before {\n  content: \"\\f01b\";\n}\n.wi-yahoo-47:before {\n  content: \"\\f00e\";\n}\n.wi-yahoo-3200:before {\n  content: \"\\f077\";\n}\n.wi-forecast-io-clear-day:before {\n  content: \"\\f00d\";\n}\n.wi-forecast-io-clear-night:before {\n  content: \"\\f02e\";\n}\n.wi-forecast-io-rain:before {\n  content: \"\\f019\";\n}\n.wi-forecast-io-snow:before {\n  content: \"\\f01b\";\n}\n.wi-forecast-io-sleet:before {\n  content: \"\\f0b5\";\n}\n.wi-forecast-io-wind:before {\n  content: \"\\f050\";\n}\n.wi-forecast-io-fog:before {\n  content: \"\\f014\";\n}\n.wi-forecast-io-cloudy:before {\n  content: \"\\f013\";\n}\n.wi-forecast-io-partly-cloudy-day:before {\n  content: \"\\f002\";\n}\n.wi-forecast-io-partly-cloudy-night:before {\n  content: \"\\f031\";\n}\n.wi-forecast-io-hail:before {\n  content: \"\\f015\";\n}\n.wi-forecast-io-thunderstorm:before {\n  content: \"\\f01e\";\n}\n.wi-forecast-io-tornado:before {\n  content: \"\\f056\";\n}\n.wi-wmo4680-0:before,\n.wi-wmo4680-00:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-1:before,\n.wi-wmo4680-01:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-2:before,\n.wi-wmo4680-02:before {\n  content: \"\\f055\";\n}\n.wi-wmo4680-3:before,\n.wi-wmo4680-03:before {\n  content: \"\\f013\";\n}\n.wi-wmo4680-4:before,\n.wi-wmo4680-04:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-5:before,\n.wi-wmo4680-05:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-10:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-11:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-12:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-18:before {\n  content: \"\\f050\";\n}\n.wi-wmo4680-20:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-21:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-22:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-23:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-24:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-25:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-26:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-27:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-28:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-29:before {\n  content: \"\\f063\";\n}\n.wi-wmo4680-30:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-31:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-32:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-33:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-34:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-35:before {\n  content: \"\\f014\";\n}\n.wi-wmo4680-40:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-41:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-42:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-43:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-44:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-45:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-46:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-47:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-48:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-50:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-51:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-52:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-53:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-54:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-55:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-56:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-57:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-58:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-60:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-61:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-62:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-63:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-64:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-65:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-66:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-67:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-68:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-70:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-71:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-72:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-73:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-74:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-75:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-76:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-77:before {\n  content: \"\\f01b\";\n}\n.wi-wmo4680-78:before {\n  content: \"\\f076\";\n}\n.wi-wmo4680-80:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-81:before {\n  content: \"\\f01c\";\n}\n.wi-wmo4680-82:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-83:before {\n  content: \"\\f019\";\n}\n.wi-wmo4680-84:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-85:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-86:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-87:before {\n  content: \"\\f017\";\n}\n.wi-wmo4680-89:before {\n  content: \"\\f015\";\n}\n.wi-wmo4680-90:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-91:before {\n  content: \"\\f01d\";\n}\n.wi-wmo4680-92:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-93:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-94:before {\n  content: \"\\f016\";\n}\n.wi-wmo4680-95:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-96:before {\n  content: \"\\f01e\";\n}\n.wi-wmo4680-99:before {\n  content: \"\\f056\";\n}\n.wi-owm-200:before {\n  content: \"\\f01e\";\n}\n.wi-owm-201:before {\n  content: \"\\f01e\";\n}\n.wi-owm-202:before {\n  content: \"\\f01e\";\n}\n.wi-owm-210:before {\n  content: \"\\f016\";\n}\n.wi-owm-211:before {\n  content: \"\\f016\";\n}\n.wi-owm-212:before {\n  content: \"\\f016\";\n}\n.wi-owm-221:before {\n  content: \"\\f016\";\n}\n.wi-owm-230:before {\n  content: \"\\f01e\";\n}\n.wi-owm-231:before {\n  content: \"\\f01e\";\n}\n.wi-owm-232:before {\n  content: \"\\f01e\";\n}\n.wi-owm-300:before {\n  content: \"\\f01c\";\n}\n.wi-owm-301:before {\n  content: \"\\f01c\";\n}\n.wi-owm-302:before {\n  content: \"\\f019\";\n}\n.wi-owm-310:before {\n  content: \"\\f017\";\n}\n.wi-owm-311:before {\n  content: \"\\f019\";\n}\n.wi-owm-312:before {\n  content: \"\\f019\";\n}\n.wi-owm-313:before {\n  content: \"\\f01a\";\n}\n.wi-owm-314:before {\n  content: \"\\f019\";\n}\n.wi-owm-321:before {\n  content: \"\\f01c\";\n}\n.wi-owm-500:before {\n  content: \"\\f01c\";\n}\n.wi-owm-501:before {\n  content: \"\\f019\";\n}\n.wi-owm-502:before {\n  content: \"\\f019\";\n}\n.wi-owm-503:before {\n  content: \"\\f019\";\n}\n.wi-owm-504:before {\n  content: \"\\f019\";\n}\n.wi-owm-511:before {\n  content: \"\\f017\";\n}\n.wi-owm-520:before {\n  content: \"\\f01a\";\n}\n.wi-owm-521:before {\n  content: \"\\f01a\";\n}\n.wi-owm-522:before {\n  content: \"\\f01a\";\n}\n.wi-owm-531:before {\n  content: \"\\f01d\";\n}\n.wi-owm-600:before {\n  content: \"\\f01b\";\n}\n.wi-owm-601:before {\n  content: \"\\f01b\";\n}\n.wi-owm-602:before {\n  content: \"\\f0b5\";\n}\n.wi-owm-611:before {\n  content: \"\\f017\";\n}\n.wi-owm-612:before {\n  content: \"\\f017\";\n}\n.wi-owm-615:before {\n  content: \"\\f017\";\n}\n.wi-owm-616:before {\n  content: \"\\f017\";\n}\n.wi-owm-620:before {\n  content: \"\\f017\";\n}\n.wi-owm-621:before {\n  content: \"\\f01b\";\n}\n.wi-owm-622:before {\n  content: \"\\f01b\";\n}\n.wi-owm-701:before {\n  content: \"\\f014\";\n}\n.wi-owm-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-741:before {\n  content: \"\\f014\";\n}\n.wi-owm-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-771:before {\n  content: \"\\f011\";\n}\n.wi-owm-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-801:before {\n  content: \"\\f041\";\n}\n.wi-owm-802:before {\n  content: \"\\f041\";\n}\n.wi-owm-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-901:before {\n  content: \"\\f01d\";\n}\n.wi-owm-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-905:before {\n  content: \"\\f021\";\n}\n.wi-owm-906:before {\n  content: \"\\f015\";\n}\n.wi-owm-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-day-200:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-201:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-202:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-210:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-211:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-212:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-221:before {\n  content: \"\\f005\";\n}\n.wi-owm-day-230:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-231:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-232:before {\n  content: \"\\f010\";\n}\n.wi-owm-day-300:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-301:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-302:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-310:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-311:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-312:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-313:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-314:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-321:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-500:before {\n  content: \"\\f00b\";\n}\n.wi-owm-day-501:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-502:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-503:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-504:before {\n  content: \"\\f008\";\n}\n.wi-owm-day-511:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-520:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-521:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-522:before {\n  content: \"\\f009\";\n}\n.wi-owm-day-531:before {\n  content: \"\\f00e\";\n}\n.wi-owm-day-600:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-601:before {\n  content: \"\\f0b2\";\n}\n.wi-owm-day-602:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-611:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-612:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-615:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-616:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-620:before {\n  content: \"\\f006\";\n}\n.wi-owm-day-621:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-622:before {\n  content: \"\\f00a\";\n}\n.wi-owm-day-701:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-day-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-day-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-741:before {\n  content: \"\\f003\";\n}\n.wi-owm-day-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-day-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-800:before {\n  content: \"\\f00d\";\n}\n.wi-owm-day-801:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-802:before {\n  content: \"\\f002\";\n}\n.wi-owm-day-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-day-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-day-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-day-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-day-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-day-906:before {\n  content: \"\\f004\";\n}\n.wi-owm-day-957:before {\n  content: \"\\f050\";\n}\n.wi-owm-night-200:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-201:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-202:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-210:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-211:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-212:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-221:before {\n  content: \"\\f025\";\n}\n.wi-owm-night-230:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-231:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-232:before {\n  content: \"\\f02d\";\n}\n.wi-owm-night-300:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-301:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-302:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-310:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-311:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-312:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-313:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-314:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-321:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-500:before {\n  content: \"\\f02b\";\n}\n.wi-owm-night-501:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-502:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-503:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-504:before {\n  content: \"\\f028\";\n}\n.wi-owm-night-511:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-520:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-521:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-522:before {\n  content: \"\\f029\";\n}\n.wi-owm-night-531:before {\n  content: \"\\f02c\";\n}\n.wi-owm-night-600:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-601:before {\n  content: \"\\f0b4\";\n}\n.wi-owm-night-602:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-611:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-612:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-615:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-616:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-620:before {\n  content: \"\\f026\";\n}\n.wi-owm-night-621:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-622:before {\n  content: \"\\f02a\";\n}\n.wi-owm-night-701:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-711:before {\n  content: \"\\f062\";\n}\n.wi-owm-night-721:before {\n  content: \"\\f0b6\";\n}\n.wi-owm-night-731:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-741:before {\n  content: \"\\f04a\";\n}\n.wi-owm-night-761:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-762:before {\n  content: \"\\f063\";\n}\n.wi-owm-night-781:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-800:before {\n  content: \"\\f02e\";\n}\n.wi-owm-night-801:before {\n  content: \"\\f081\";\n}\n.wi-owm-night-802:before {\n  content: \"\\f086\";\n}\n.wi-owm-night-803:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-804:before {\n  content: \"\\f013\";\n}\n.wi-owm-night-900:before {\n  content: \"\\f056\";\n}\n.wi-owm-night-902:before {\n  content: \"\\f073\";\n}\n.wi-owm-night-903:before {\n  content: \"\\f076\";\n}\n.wi-owm-night-904:before {\n  content: \"\\f072\";\n}\n.wi-owm-night-906:before {\n  content: \"\\f024\";\n}\n.wi-owm-night-957:before {\n  content: \"\\f050\";\n}\n.wi-wu-chanceflurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-chancerain:before {\n  content: \"\\f019\";\n}\n.wi-wu-chancesleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-chancesnow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-chancetstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-clear:before {\n  content: \"\\f00d\";\n}\n.wi-wu-cloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-flurries:before {\n  content: \"\\f064\";\n}\n.wi-wu-hazy:before {\n  content: \"\\f0b6\";\n}\n.wi-wu-mostlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-mostlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-partlycloudy:before {\n  content: \"\\f002\";\n}\n.wi-wu-partlysunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-rain:before {\n  content: \"\\f01a\";\n}\n.wi-wu-sleat:before {\n  content: \"\\f0b5\";\n}\n.wi-wu-snow:before {\n  content: \"\\f01b\";\n}\n.wi-wu-sunny:before {\n  content: \"\\f00d\";\n}\n.wi-wu-tstorms:before {\n  content: \"\\f01e\";\n}\n.wi-wu-unknown:before {\n  content: \"\\f00d\";\n} /*# sourceMappingURL=weather-icons.min.css.map */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function (pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function (pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/weather-icons.min.css":
/*!***************************************!*\
  !*** ./src/css/weather-icons.min.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./weather-icons.min.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/weather-icons.min.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.eot":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.eot ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb2ec001c20cf752f852.eot";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.svg":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c6b3460fac436ac9ea5.svg";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.ttf":
/*!***************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0942d1e1c447d6ce3ffc.ttf";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.woff":
/*!****************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "371511ddba5fdac0538c.woff";

/***/ }),

/***/ "./src/font/weathericons-regular-webfont.woff2":
/*!*****************************************************!*\
  !*** ./src/font/weathericons-regular-webfont.woff2 ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e218aee6928fe3da9ed6.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_weather_icons_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/weather-icons.min.css */ "./src/css/weather-icons.min.css");




//pass in city, then call display weather with fetched data//

let mapFlag;

async function getCurrentWeather(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  console.log(response);
  const weatherData = await response.json();
  console.log("current weather data");
  console.log(weatherData);
  displayWeather(weatherData);
  getMap(weatherData);
  //changeMap(weatherData);
}

//display the weather on the DOM//
function displayWeather(weatherData) {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const currentWeatherIconId = weatherData.weather[0].id;
  const temperature = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const humidity = weatherData.main.humidity;
  const weather = weatherData.weather[0].main;

  const cityDisplay = document.querySelector("#city");
  const currentWeatherIcon = document.querySelector("#currentWeatherIcon");
  const tempDisplay = document.querySelector("#temperature");
  const humidityDisplay = document.querySelector("#humidity");
  const feelsLikeDisplay = document.querySelector("#feels_like");
  const weatherDisplay = document.querySelector("#weather");

  cityDisplay.innerHTML = city + ", " + country;
  currentWeatherIcon.removeAttribute("class");
  currentWeatherIcon.classList.add("wi", "wi-owm-" + currentWeatherIconId); //edits weather icon pulling from current weather//
  tempDisplay.innerHTML = temperature + "\u00B0" + "F";
  humidityDisplay.innerHTML = humidity + "%";
  feelsLikeDisplay.innerHTML = feelsLike + "\u00B0" + "F";
  weatherDisplay.innerHTML = weather;
}

//change the city through text input, pass that info to getCurrentWeather//
function changeCity() {
  const textInput = document.querySelector("#textInput");
  let currentCity = textInput.value;
  textInput.value = "";
  getCurrentWeather(currentCity);
  getWeatherForecast(currentCity);
  getWeeklyForecast(currentCity);
}

//assign change city to the submit button//
function assignSubmitBtn() {
  const submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", changeCity);
}

async function getWeatherForecast(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    currentCity +
    "&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  const forecastData = await response.json();
  console.log("forecast");
  console.log(forecastData);
  displayDailyForecast(forecastData);
}

//inefficient, but was quick to throw together//
function displayDailyForecast(forecastData) {
  const time0 = document.querySelector("#time0");
  const forecastIcon0 = document.querySelector("#forecastIcon0");
  const temp0 = document.querySelector("#temp0");
  const rain0 = document.querySelector("#rain0");
  const time1 = document.querySelector("#time1");
  const forecastIcon1 = document.querySelector("#forecastIcon1");
  const temp1 = document.querySelector("#temp1");
  const rain1 = document.querySelector("#rain1");
  const time2 = document.querySelector("#time2");
  const forecastIcon2 = document.querySelector("#forecastIcon2");
  const temp2 = document.querySelector("#temp2");
  const rain2 = document.querySelector("#rain2");

  console.log(forecastData.list[0].dt_txt);
  time0.innerHTML = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(forecastData.list[0].dt_txt), "haaa");
  forecastIcon0.removeAttribute("class");
  forecastIcon0.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[0].weather[0].id
  );
  temp0.innerHTML = Math.round(forecastData.list[0].main.temp) + "\u00B0" + "F";
  rain0.innerHTML = Math.round(forecastData.list[0].pop * 100) + "%";

  time1.innerHTML = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(forecastData.list[1].dt_txt), "haaa");
  forecastIcon1.removeAttribute("class");
  forecastIcon1.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[1].weather[0].id
  );
  temp1.innerHTML = Math.round(forecastData.list[1].main.temp) + "\u00B0" + "F";
  rain1.innerHTML = Math.round(forecastData.list[1].pop * 100) + "%";

  time2.innerHTML = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(forecastData.list[2].dt_txt), "haaa");
  forecastIcon2.removeAttribute("class");
  forecastIcon2.classList.add(
    "forecastIcon",
    "wi",
    "wi-owm-" + forecastData.list[2].weather[0].id
  );
  temp2.innerHTML = Math.round(forecastData.list[2].main.temp) + "\u00B0" + "F";
  rain2.innerHTML = Math.round(forecastData.list[2].pop * 100) + "%";
}

//whoo boy, this one is not optimized//
async function getWeeklyForecast(currentCity) {
  let apiLink =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    currentCity +
    "&&units=imperial&appid=3dc68dfc31905e08624208e02dc62e0e";
  const response = await fetch(apiLink, { mode: "cors" });
  const weeklyForecastData = await response.json();
  // console.log(weeklyForecastData);

  const dateArray = [];
  const sortedDatesArray = [];
  const filteredFinalDatesArray = [];
  let highAndLowArray = [];

  for (let i = 0; i < weeklyForecastData.list.length; i++) {
    dateArray.push(weeklyForecastData.list[i].dt_txt);
  }

  const formattedDates = dateArray.map(function (e) {
    return (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(e), "d");
  });

  //console.log(formattedDates);

  for (let i = 0; i < dateArray.length; i++) {
    let tomorrowChecker = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(dateArray[i]));
    if (tomorrowChecker === true) {
      sortDays(i);
      break;
    }
  }

  //formatted dates is used for easy comparison, date array is the full date//
  function sortDays(i) {
    let tempArray = [];
    while (i < dateArray.length) {
      let incrementedVal = i + 1;
      if (formattedDates[i] === formattedDates[incrementedVal]) {
        tempArray.push(dateArray[i]);
      } else if (formattedDates[i] != formattedDates[incrementedVal]) {
        tempArray.push(dateArray[i]);

        const median = Math.floor(tempArray.length / 2);
        sortedDatesArray.push(tempArray[median]);
        console.log(tempArray);
        highAndLow(tempArray, highAndLowArray);
        tempArray = [];
      }
      i++;
    }
    console.log(highAndLowArray);
    filterMainList();
  }

  function highAndLow(tempArray, highAndLowArray) {
    let arr = [];
    let incrementedVal = 0;
    console.log(weeklyForecastData.list.length);
    for (let p = 0; p < weeklyForecastData.list.length; p++) {
      if (weeklyForecastData.list[p].dt_txt == tempArray[incrementedVal]) {
        arr.push(weeklyForecastData.list[p].main.temp);
        incrementedVal++;
      }
    } //insertion sort
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = curr;
    }
    console.log(arr);
    const highAndLowVals = {
      low: arr[0],
      high: arr[arr.length - 1],
    };
    highAndLowArray.push(highAndLowVals);
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
  }

  function filterMainList() {
    let incrementedVal = 0;
    for (let i = 0; i < weeklyForecastData.list.length; i++) {
      if (
        weeklyForecastData.list[i].dt_txt === sortedDatesArray[incrementedVal]
      ) {
        filteredFinalDatesArray.push(weeklyForecastData.list[i]);
        incrementedVal++;
      }
    }
    displayWeeklyForecast(filteredFinalDatesArray, highAndLowArray);
  }
}

function displayWeeklyForecast(filteredFinalDatesArray, highAndLowArray) {
  let weekForecast = document.getElementById("weekForecast");
  //clears every pass//
  while (weekForecast.childElementCount > 0) {
    weekForecast.removeChild(weekForecast.firstElementChild);
  }
  for (let i = 0; i < filteredFinalDatesArray.length; i++) {
    let weeklyForecastBox = document.createElement("div");
    weeklyForecastBox.classList.add = "weeklyForecastBox";

    let dayAndIconContainer = document.createElement("div");
    dayAndIconContainer.classList.add("dayAndIconContainer");
    let dayOfWeek = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(filteredFinalDatesArray[i].dt_txt), "iii");
    let dayOfWeekDisplay = document.createElement("p");
    dayOfWeekDisplay.classList.add("dayOfWeek");
    dayOfWeekDisplay.innerHTML = dayOfWeek;
    let weatherId = filteredFinalDatesArray[i].weather[0].id;
    let weatherDisplay = document.createElement("div");
    weatherDisplay.classList.add(
      "weatherIconWeekly",
      "wi",
      "wi-owm-" + weatherId
    );

    let highAndLowContainer = document.createElement("div");
    highAndLowContainer.classList.add("highAndLowContainer");
    console.log(highAndLowArray[i].low);
    let lowTemp = Math.round(highAndLowArray[i].low) + "\u00B0" + "F";
    let lowHeader = document.createElement("h3");
    lowHeader.classList.add("highAndLowHeader");
    lowHeader.innerHTML = "Low";
    let lowTempDisplay = document.createElement("p");
    lowTempDisplay.innerHTML = lowTemp;
    lowTempDisplay.classList.add("low");

    let highHeader = document.createElement("h3");
    highHeader.classList.add("highAndLowHeader");
    highHeader.innerHTML = "High";
    let highTemp = Math.round(highAndLowArray[i].high) + "\u00B0" + "F";
    let highTempDisplay = document.createElement("p");
    highTempDisplay.innerHTML = highTemp;
    highTempDisplay.classList.add("high");

    weekForecast.append(weeklyForecastBox);
    weeklyForecastBox.append(dayAndIconContainer);
    dayAndIconContainer.append(dayOfWeekDisplay);
    dayAndIconContainer.append(weatherDisplay);
    weeklyForecastBox.append(highAndLowContainer);
    highAndLowContainer.append(highHeader);
    highAndLowContainer.append(lowHeader);
    highAndLowContainer.append(highTempDisplay);
    highAndLowContainer.append(lowTempDisplay);
  }
}

//called in get current weather//
function getMap(weatherData) {
  console.log("mapFlag");
  console.log(map);
  let lat = weatherData.coord.lat;
  let lon = weatherData.coord.lon;
  if (mapFlag === true) {
    let mapToRemove = document.getElementById("map");
    mapToRemove.remove();
    let remake = document.createElement("div");
    remake.id = "map";
    inputWrapper.prepend(remake);
    let map = L.map("map").setView([lat, lon], 9);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
  } else {
    let map = L.map("map").setView([lat, lon], 9);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);
    mapFlag = true;
  }
}

getCurrentWeather("Tampa");
getWeatherForecast("Tampa");
getWeeklyForecast("Tampa");
assignSubmitBtn();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FB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R0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxpQ0FBaUMsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsa0NBQWtDLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDRDQUE0Qyx3QkFBd0IsR0FBRyw4Q0FBOEMsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLGdDQUFnQyx3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsSUFBSSwwREFBMEQsbUhBQW1ILE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZ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QXFDLHdCQUF3QixHQUFHLHFDQUFxQyx3QkFBd0IsR0FBRywyQkFBMkIsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUNBQXFDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxxQ0FBcUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLHlDQUF5Qyx3QkFBd0IsR0FBRyx5Q0FBeUMsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxxQkFBcUIsd0JBQXdCLEdBQUcscUJBQXFCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxpQ0FBaUMsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyw2QkFBNkIsd0JBQXdCLEdBQUcsa0NBQWtDLHdCQUF3QixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLDhCQUE4Qix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyxvQ0FBb0Msd0JBQXdCLEdBQUcsc0NBQXNDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRywrQkFBK0Isd0JBQXdCLEdBQUcsZ0NBQWdDLHdCQUF3QixHQUFHLCtCQUErQix3QkFBd0IsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLDRDQUE0Qyx3QkFBd0IsR0FBRyw4Q0FBOEMsd0JBQXdCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcsZ0RBQWdELHdCQUF3QixHQUFHLGdEQUFnRCx3QkFBd0IsR0FBRyxnREFBZ0Qsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHlCQUF5Qix3QkFBd0IsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcseUJBQXlCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLDBCQUEwQix3QkFBd0IsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRCQUE0Qix3QkFBd0IsR0FBRyw0QkFBNEIsd0JBQXdCLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDRC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QSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TG1DO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNw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QTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0NBQW9DO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwyREFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLGlEQUFpRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3dlYXRoZXItaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy93ZWF0aGVyLWljb25zLm1pbi5jc3M/Zjg3MSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWpvbnF1aWw6ICNmMGM4MDhmZjtcXG4gIC0tc3RlZWwtdGVhbDogIzYyOTI5ZWZmO1xcbiAgLS1kYXJrLXRlYWw6ICM0NjY5NzI7XFxuICAtLXBhcGF5YS13aGlwOiAjZmZmMWQwZmY7XFxuICAtLW9yYW5nZS1yZWQ6ICNmMjY0MTlmZjtcXG4gIC0tYmxhY2stY29mZmVlOiAjMmUxZjI3ZmY7XFxuICAtLW1hcmdpbi1sZWZ0LWxpbmU6IDUwcHg7XFxuICAtLW1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbmh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3RlZWwtdGVhbCk7XFxufVxcbmhlYWRlciB7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hlYWRlcldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW4tbGVmdC1saW5lKTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbiNoZWFkZXJXcmFwcGVyID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaXR5V3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAzLjNyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG4jY3VycmVudFdlYXRoZXJJY29uIHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtcmVkKTtcXG59XFxuI2NpdHlXcmFwcGVyID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbiN0ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogdmFyKC0tam9ucXVpbCk7XFxufVxcblxcbiN3ZWF0aGVyUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gIGdhcDogMjBweDtcXG59XFxuLyp0YXJnZXRpbmcganVzdCB0aGUgZGF0YSwgbm90IHRoZSBoMiAqL1xcbiN3ZWF0aGVyUm93ID4gKiA+IDpudGgtY2hpbGQoMm4pIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG4jaW5wdXRXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLW1hcmdpbi1sZWZ0LWxpbmUpO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG4jbWFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4jaW5wdXRSb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRlYWwpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3N1Ym1pdEJ0biB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzMlO1xcbiAgcmlnaHQ6IDIlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWpvbnF1aWwpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRlYWwpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jd2VhdGhlclJvdyA+ICogPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2hyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWpvbnF1aWwpO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGhlaWdodDogODAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxLjVmcjtcXG59XFxuXFxuI2RheV9mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20pO1xcbn1cXG4uZGFpbHlGb3JlY2FzdEJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWxpbmUpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uZGF5Rm9yZWNhc3RIZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50ZW1wUmFpbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGFpbHlGb3JlY2FzdEJveCA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uZGFpbHlGb3JlY2FzdEJveCA+ICogPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLnRlbXBSYWluQ29udGFpbmVyID4gKiA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uZm9yZWNhc3REZXRhaWxzRmxleCA+IDpudGgtY2hpbGQoMSkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGltZSB7XFxuICBmb250LXNpemU6IDMuM3JlbTtcXG59XFxuLmZvcmVjYXN0SWNvbiB7XFxuICBmb250LXNpemU6IDMuM3JlbTtcXG4gIG1hcmdpbi1yaWdodDogMjVweDtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtcmVkKTtcXG59XFxuLnRlbXAge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tam9ucXVpbCk7XFxufVxcbi5yYWluIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4jd2Vla0ZvcmVjYXN0IHtcXG4gIC8qXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLWxlZnQtbGluZSk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tKTtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBjb2x1bW4tZ2FwOiA0MHB4O1xcbiAgKi9cXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNDBweDtcXG5cXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLWxlZnQtbGluZSk7XFxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1tYXJnaW4tYm90dG9tKTtcXG59XFxuXFxuLmRheUFuZEljb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYXlBbmRJY29uQ29udGFpbmVyID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kYXlPZldlZWsge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tam9ucXVpbCk7XFxufVxcblxcbi53ZWF0aGVySWNvbldlZWtseSB7XFxuICBjb2xvcjogdmFyKC0tb3JhbmdlLXJlZCk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmhpZ2hBbmRMb3dDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDI1cHg7XFxufVxcblxcbi5oaWdoQW5kTG93Q29udGFpbmVyID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5oaWdoQW5kTG93SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmhpZ2gsXFxuLmxvdyB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1qb25xdWlsKTtcXG59XFxuXFxuLypcXG4uaGlnaCB7XFxuICBjb2xvcjogdmFyKC0tam9ucXVpbCk7XFxufVxcbi5sb3cge1xcbiAgY29sb3I6IHZhcigtLXBhcGF5YS13aGlwKTtcXG59XFxuKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFNBQVM7QUFDWDtBQUNBLHVDQUF1QztBQUN2QztFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTs7Ozs7Ozs7O0dBU0M7O0VBRUQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixTQUFTOztFQUVULFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Ozs7OztDQU9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tam9ucXVpbDogI2YwYzgwOGZmO1xcbiAgLS1zdGVlbC10ZWFsOiAjNjI5MjllZmY7XFxuICAtLWRhcmstdGVhbDogIzQ2Njk3MjtcXG4gIC0tcGFwYXlhLXdoaXA6ICNmZmYxZDBmZjtcXG4gIC0tb3JhbmdlLXJlZDogI2YyNjQxOWZmO1xcbiAgLS1ibGFjay1jb2ZmZWU6ICMyZTFmMjdmZjtcXG4gIC0tbWFyZ2luLWxlZnQtbGluZTogNTBweDtcXG4gIC0tbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuaHRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdGVlbC10ZWFsKTtcXG59XFxuaGVhZGVyIHtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaGVhZGVyV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpbi1sZWZ0LWxpbmUpO1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuI2hlYWRlcldyYXBwZXIgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NpdHlXcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXNpemU6IDMuM3JlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxufVxcbiNjdXJyZW50V2VhdGhlckljb24ge1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1yZWQpO1xcbn1cXG4jY2l0eVdyYXBwZXIgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuI3RlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1qb25xdWlsKTtcXG59XFxuXFxuI3dlYXRoZXJSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4vKnRhcmdldGluZyBqdXN0IHRoZSBkYXRhLCBub3QgdGhlIGgyICovXFxuI3dlYXRoZXJSb3cgPiAqID4gOm50aC1jaGlsZCgybikge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcbiNpbnB1dFdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tbWFyZ2luLWxlZnQtbGluZSk7XFxuICBnYXA6IDE1cHg7XFxufVxcbiNtYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcbiNpbnB1dFJvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGVhbCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jc3VibWl0QnRuIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxuICByaWdodDogMiU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tam9ucXVpbCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGVhbCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyUm93ID4gKiA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jaHIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tam9ucXVpbCk7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyO1xcbn1cXG5cXG4jZGF5X2ZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbWFyZ2luLWJvdHRvbSk7XFxufVxcbi5kYWlseUZvcmVjYXN0Qm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luLWxlZnQtbGluZSk7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5kYXlGb3JlY2FzdEhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnRlbXBSYWluQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5kYWlseUZvcmVjYXN0Qm94ID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5kYWlseUZvcmVjYXN0Qm94ID4gKiA+ICoge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4udGVtcFJhaW5Db250YWluZXIgPiAqID4gKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5mb3JlY2FzdERldGFpbHNGbGV4ID4gOm50aC1jaGlsZCgxKSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50aW1lIHtcXG4gIGZvbnQtc2l6ZTogMy4zcmVtO1xcbn1cXG4uZm9yZWNhc3RJY29uIHtcXG4gIGZvbnQtc2l6ZTogMy4zcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHZhcigtLW9yYW5nZS1yZWQpO1xcbn1cXG4udGVtcCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1qb25xdWlsKTtcXG59XFxuLnJhaW4ge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiN3ZWVrRm9yZWNhc3Qge1xcbiAgLypcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tbGVmdC1saW5lKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20pO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgYWxpZ24tY29udGVudDogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGVuZDtcXG4gIGNvbHVtbi1nYXA6IDQwcHg7XFxuICAqL1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA0MHB4O1xcblxcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1tYXJnaW4tbGVmdC1saW5lKTtcXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLW1hcmdpbi1ib3R0b20pO1xcbn1cXG5cXG4uZGF5QW5kSWNvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmRheUFuZEljb25Db250YWluZXIgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmRheU9mV2VlayB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1qb25xdWlsKTtcXG59XFxuXFxuLndlYXRoZXJJY29uV2Vla2x5IHtcXG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UtcmVkKTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4uaGlnaEFuZExvd0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgY29sdW1uLWdhcDogMjVweDtcXG59XFxuXFxuLmhpZ2hBbmRMb3dDb250YWluZXIgPiAqIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZ2hBbmRMb3dIZWFkZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaGlnaCxcXG4ubG93IHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWpvbnF1aWwpO1xcbn1cXG5cXG4vKlxcbi5oaWdoIHtcXG4gIGNvbG9yOiB2YXIoLS1qb25xdWlsKTtcXG59XFxuLmxvdyB7XFxuICBjb2xvcjogdmFyKC0tcGFwYXlhLXdoaXApO1xcbn1cXG4qL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LmVvdFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18sIHsgaGFzaDogXCI/I2llZml4XCIgfSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18sIHsgaGFzaDogXCIjd2VhdGhlcl9pY29uc3JlZ3VsYXJcIiB9KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIVxcbiAqICBXZWF0aGVyIEljb25zIDIuMC4xMFxcbiAqICBVcGRhdGVkIE5vdmVtYmVyIDEsIDIwMjBcXG4gKiAgV2VhdGhlciB0aGVtZWQgaWNvbnMgZm9yIEJvb3RzdHJhcFxcbiAqICBBdXRob3IgLSBFcmlrIEZsb3dlcnMgLSBlcmlrQGhlbGxvZXJpay5jb21cXG4gKiAgRW1haWw6IGVyaWtAaGVsbG9lcmlrLmNvbVxcbiAqICBUd2l0dGVyOiBodHRwOi8vdHdpdHRlci5jb20vRXJpa19VWFxcbiAqICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4gKiAgTWFpbnRhaW5lZCBhdCBodHRwOi8vZXJpa2Zsb3dlcnMuZ2l0aHViLmlvL3dlYXRoZXItaWNvbnNcXG4gKlxcbiAqICBMaWNlbnNlXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICAtIEZvbnQgbGljZW5zZWQgdW5kZXIgU0lMIE9GTCAxLjEgLVxcbiAqICAgIGh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMXFxuICogIC0gQ1NTLCBTQ1NTIGFuZCBMRVNTIGFyZSBsaWNlbnNlZCB1bmRlciBNSVQgTGljZW5zZSAtXFxuICogICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLmh0bWxcXG4gKiAgLSBEb2N1bWVudGF0aW9uIGxpY2Vuc2VkIHVuZGVyIENDIEJZIDMuMCAtXFxuICogICAgaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1xcbiAqICAtIEluc3BpcmVkIGJ5IGFuZCB3b3JrcyBncmVhdCBhcyBhIGNvbXBhbmlvbiB3aXRoIEZvbnQgQXdlc29tZVxcbiAqICAgIFxcXCJGb250IEF3ZXNvbWUgYnkgRGF2ZSBHYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pb1xcXCJcXG4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwid2VhdGhlcmljb25zXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKVxcbiAgICAgIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLFxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpXFxuICAgICAgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi53aSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIndlYXRoZXJpY29uc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi53aS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS40ZW07XFxufVxcbi53aS1yb3RhdGUtOTAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLndpLXJvdGF0ZS0xODAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLndpLXJvdGF0ZS0yNzAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuLndpLWZsaXAtaG9yaXpvbnRhbCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuLndpLWZsaXAtdmVydGljYWwge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcbi53aS1kYXktc3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktZGF5LWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAwXFxcIjtcXG59XFxuLndpLWRheS1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMVxcXCI7XFxufVxcbi53aS1kYXktZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDNcXFwiO1xcbn1cXG4ud2ktZGF5LWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNFxcXCI7XFxufVxcbi53aS1kYXktaGF6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLWRheS1saWdodG5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1kYXktcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLWRheS1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLWRheS1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwN1xcXCI7XFxufVxcbi53aS1kYXktc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLWRheS1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIyXFxcIjtcXG59XFxuLndpLWRheS1zbGVldC1zdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY4XFxcIjtcXG59XFxuLndpLWRheS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktZGF5LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmJcXFwiO1xcbn1cXG4ud2ktZGF5LXNub3ctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY1XFxcIjtcXG59XFxuLndpLWRheS1zcHJpbmtsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLWRheS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2ktZGF5LXN1bm55LW92ZXJjYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbn1cXG4ud2ktZGF5LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLWRheS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg1XFxcIjtcXG59XFxuLndpLXNvbGFyLWVjbGlwc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2ZVxcXCI7XFxufVxcbi53aS1ob3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5LWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3ZFxcXCI7XFxufVxcbi53aS1kYXktbGlnaHQtd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM0XFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg2XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtY2xvdWR5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcmFpbi13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjdcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc2xlZXQtc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2YVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZkXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbm93LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJjXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZlxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMFxcXCI7XFxufVxcbi53aS1uaWdodC1mb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi53aS1uaWdodC1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzJcXFwiO1xcbn1cXG4ud2ktbmlnaHQtbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtcGFydGx5LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgzXFxcIjtcXG59XFxuLndpLW5pZ2h0LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNlxcXCI7XFxufVxcbi53aS1uaWdodC1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM0XFxcIjtcXG59XFxuLndpLW5pZ2h0LXJhaW4td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM1XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzN1xcXCI7XFxufVxcbi53aS1uaWdodC1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIzXFxcIjtcXG59XFxuLndpLW5pZ2h0LXNsZWV0LXN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjlcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM4XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzOVxcXCI7XFxufVxcbi53aS1uaWdodC1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2FcXFwiO1xcbn1cXG4ud2ktbmlnaHQtdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2JcXFwiO1xcbn1cXG4ud2ktbHVuYXItZWNsaXBzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcwXFxcIjtcXG59XFxuLndpLXN0YXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzdcXFwiO1xcbn1cXG4ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHktaGlnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdlXFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsb3VkeS1oaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODBcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXBhcnRseS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MVxcXCI7XFxufVxcbi53aS1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjtcXG59XFxuLndpLWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDExXFxcIjtcXG59XFxuLndpLWNsb3VkeS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEyXFxcIjtcXG59XFxuLndpLWZvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOFxcXCI7XFxufVxcbi53aS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXNtb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NFxcXCI7XFxufVxcbi53aS1zbW9rZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLWxpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLXJhaW5kcm9wczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRlXFxcIjtcXG59XFxuLndpLXJhaW5kcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzhcXFwiO1xcbn1cXG4ud2ktZHVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXNub3dmbGFrZS1jb2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7XFxufVxcbi53aS1zdHJvbmctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXNhbmRzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgyXFxcIjtcXG59XFxuLndpLWVhcnRocXVha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNlxcXCI7XFxufVxcbi53aS1maXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzdcXFwiO1xcbn1cXG4ud2ktZmxvb2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3Y1xcXCI7XFxufVxcbi53aS1tZXRlb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MVxcXCI7XFxufVxcbi53aS10c3VuYW1pOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzVcXFwiO1xcbn1cXG4ud2ktdm9sY2FubzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM4XFxcIjtcXG59XFxuLndpLWh1cnJpY2FuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLXRvcm5hZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1zbWFsbC1jcmFmdC1hZHZpc29yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNjXFxcIjtcXG59XFxuLndpLWdhbGUtd2FybmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNkXFxcIjtcXG59XFxuLndpLXN0b3JtLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZVxcXCI7XFxufVxcbi53aS1odXJyaWNhbmUtd2FybmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNmXFxcIjtcXG59XFxuLndpLXdpbmQtZGlyZWN0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjFcXFwiO1xcbn1cXG4ud2ktYWxpZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NVxcXCI7XFxufVxcbi53aS1jZWxzaXVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2NcXFwiO1xcbn1cXG4ud2ktZmFocmVuaGVpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ1XFxcIjtcXG59XFxuLndpLWRlZ3JlZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MlxcXCI7XFxufVxcbi53aS10aGVybW9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU1XFxcIjtcXG59XFxuLndpLXRoZXJtb21ldGVyLWV4dGVyaW9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTNcXFwiO1xcbn1cXG4ud2ktdGhlcm1vbWV0ZXItaW50ZXJuYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7XFxufVxcbi53aS1jbG91ZC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2RcXFwiO1xcbn1cXG4ud2ktY2xvdWQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MFxcXCI7XFxufVxcbi53aS1jbG91ZC1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2VcXFwiO1xcbn1cXG4ud2ktaG9yaXpvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ3XFxcIjtcXG59XFxuLndpLWhvcml6b24tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDZcXFwiO1xcbn1cXG4ud2ktc3VucmlzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUxXFxcIjtcXG59XFxuLndpLXN1bnNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUyXFxcIjtcXG59XFxuLndpLW1vb25yaXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzlcXFwiO1xcbn1cXG4ud2ktbW9vbnNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNhXFxcIjtcXG59XFxuLndpLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0Y1xcXCI7XFxufVxcbi53aS1yZWZyZXNoLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRiXFxcIjtcXG59XFxuLndpLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODRcXFwiO1xcbn1cXG4ud2ktYmFyb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzlcXFwiO1xcbn1cXG4ud2ktaHVtaWRpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3YVxcXCI7XFxufVxcbi53aS1uYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdiXFxcIjtcXG59XFxuLndpLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2JcXFwiO1xcbn1cXG4ud2ktbW9vbi1uZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTZcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk3XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTlcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlhXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxufVxcbi53aS1tb29uLWZpcnN0LXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZlxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMlxcXCI7XFxufVxcbi53aS1tb29uLWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhM1xcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNVxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNlxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhN1xcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOVxcXCI7XFxufVxcbi53aS1tb29uLXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYVxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWJcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFmXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC1uZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQwXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDFcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQzXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDRcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC1maXJzdC1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ3XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkOFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDlcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRhXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkYlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGNcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRkXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUwXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTJcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUzXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlNFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU1XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlN1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU4XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTlcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYVxcXCI7XFxufVxcbi53aS1tb29uLTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxufVxcbi53aS1tb29uLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NlxcXCI7XFxufVxcbi53aS1tb29uLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5N1xcXCI7XFxufVxcbi53aS1tb29uLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OFxcXCI7XFxufVxcbi53aS1tb29uLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OVxcXCI7XFxufVxcbi53aS1tb29uLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YVxcXCI7XFxufVxcbi53aS1tb29uLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxufVxcbi53aS1tb29uLTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7XFxufVxcbi53aS1tb29uLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZFxcXCI7XFxufVxcbi53aS1tb29uLTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7XFxufVxcbi53aS1tb29uLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWZcXFwiO1xcbn1cXG4ud2ktbW9vbi0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEwXFxcIjtcXG59XFxuLndpLW1vb24tMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMVxcXCI7XFxufVxcbi53aS1tb29uLTEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTJcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEzXFxcIjtcXG59XFxuLndpLW1vb24tMTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNFxcXCI7XFxufVxcbi53aS1tb29uLTE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTVcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE2XFxcIjtcXG59XFxuLndpLW1vb24tMTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhN1xcXCI7XFxufVxcbi53aS1tb29uLTE5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYThcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE5XFxcIjtcXG59XFxuLndpLW1vb24tMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYVxcXCI7XFxufVxcbi53aS1tb29uLTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWJcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjtcXG59XFxuLndpLW1vb24tMjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZFxcXCI7XFxufVxcbi53aS1tb29uLTI1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiO1xcbn1cXG4ud2ktbW9vbi0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFmXFxcIjtcXG59XFxuLndpLW1vb24tMjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMFxcXCI7XFxufVxcbi53aS10aW1lLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4YVxcXCI7XFxufVxcbi53aS10aW1lLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4YlxcXCI7XFxufVxcbi53aS10aW1lLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4Y1xcXCI7XFxufVxcbi53aS10aW1lLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZFxcXCI7XFxufVxcbi53aS10aW1lLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZVxcXCI7XFxufVxcbi53aS10aW1lLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZlxcXCI7XFxufVxcbi53aS10aW1lLTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MFxcXCI7XFxufVxcbi53aS10aW1lLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7XFxufVxcbi53aS10aW1lLTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MlxcXCI7XFxufVxcbi53aS10aW1lLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTNcXFwiO1xcbn1cXG4ud2ktdGltZS0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk0XFxcIjtcXG59XFxuLndpLXRpbWUtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4OVxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1OFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tdXAtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0ZFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tZG93bi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg4XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDRcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLWRvd24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQzXFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDhcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLXVwLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4N1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiN1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiOFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiOVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiYVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiYlxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiY1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZlxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzFcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMyXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjM1xcXCI7XFxufVxcbi53aS15YWhvby0wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2kteWFob28tMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS15YWhvby0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2kteWFob28tNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXlhaG9vLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS15YWhvby05OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS15YWhvby0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXlhaG9vLTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby0xNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLXlhaG9vLTE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2kteWFob28tMTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby0xNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXlhaG9vLTE4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tMTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS15YWhvby0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXlhaG9vLTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiO1xcbn1cXG4ud2kteWFob28tMjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS15YWhvby0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXlhaG9vLTI0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2kteWFob28tMjU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS15YWhvby0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLXlhaG9vLTI3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2kteWFob28tMjg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS15YWhvby0yOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLndpLXlhaG9vLTMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2kteWFob28tMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxufVxcbi53aS15YWhvby0zMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXlhaG9vLTMzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODNcXFwiO1xcbn1cXG4ud2kteWFob28tMzQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxufVxcbi53aS15YWhvby0zNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTM2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2kteWFob28tMzc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby0zODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTM5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tNDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS15YWhvby00MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXlhaG9vLTQyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2kteWFob28tNDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS15YWhvby00NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG59XFxuLndpLXlhaG9vLTQ1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tNDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby00NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTMyMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3N1xcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1jbGVhci1kYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1jbGVhci1uaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1kYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LW5pZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8taGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXRvcm5hZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTA6YmVmb3JlLFxcbi53aS13bW80NjgwLTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xOmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NVxcXCI7XFxufVxcbi53aS13bW80NjgwLTM6YmVmb3JlLFxcbi53aS13bW80NjgwLTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00OmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS13bW80NjgwLTE4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTI1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS13bW80NjgwLTI4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTM0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTQ3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTUxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTU0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTcxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTg0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTg3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04OTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS13bW80NjgwLTkxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTk0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTk5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1vd20tMjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIzMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tMzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktb3dtLTMwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tMzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tMzE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLW93bS01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tNTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tNTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tNTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktb3dtLTUyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLW93bS01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS1vd20tNjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTYwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLW93bS02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1vd20tNjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1vd20tNjIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTcwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLW93bS03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tNzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktb3dtLTczMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS1vd20tNzYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLTc2MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS03NzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMVxcXCI7XFxufVxcbi53aS1vd20tNzgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLW93bS04MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MVxcXCI7XFxufVxcbi53aS1vd20tODAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDFcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS04MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tOTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTkwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLW93bS05MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS1vd20tOTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktb3dtLTkwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLW93bS05MDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7XFxufVxcbi53aS1vd20tOTA2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktb3dtLTk1NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLW93bS1kYXktMjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLW93bS1kYXktMzAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTcyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNzMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwM1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTc2MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzYyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03ODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLW93bS1kYXktODAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1kYXktODA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLW93bS1kYXktOTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA0XFxcIjtcXG59XFxuLndpLW93bS1kYXktOTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIzMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjlcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyY1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI0XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTcwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTczMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTc2MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03ODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgxXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTA2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTk1NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZWZsdXJyaWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXNsZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXRzdG9ybXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13dS1jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXd1LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXd1LWZsdXJyaWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktd3UtaGF6eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLXd1LW1vc3RseWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXd1LW1vc3RseXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktd3UtcGFydGx5Y2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktd3UtcGFydGx5c3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktd3Utc2xlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS13dS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd3Utc3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS10c3Rvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd3UtdW5rbm93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59IC8qIyBzb3VyY2VNYXBwaW5nVVJMPXdlYXRoZXItaWNvbnMubWluLmNzcy5tYXAgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3dlYXRoZXItaWNvbnMubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkU7QUFDRjtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBb0Q7RUFDcEQ7Ozs7OzttQkFNaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxnRUFBZ0U7RUFDaEUsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGdFQUFnRTtFQUNoRSxpQ0FBaUM7RUFDakMsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0VBQWdFO0VBQ2hFLGlDQUFpQztFQUNqQyw2QkFBNkI7RUFDN0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwRUFBMEU7RUFDMUUsK0JBQStCO0VBQy9CLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDBFQUEwRTtFQUMxRSwrQkFBK0I7RUFDL0IsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsRUFBRSxnREFBZ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohXFxuICogIFdlYXRoZXIgSWNvbnMgMi4wLjEwXFxuICogIFVwZGF0ZWQgTm92ZW1iZXIgMSwgMjAyMFxcbiAqICBXZWF0aGVyIHRoZW1lZCBpY29ucyBmb3IgQm9vdHN0cmFwXFxuICogIEF1dGhvciAtIEVyaWsgRmxvd2VycyAtIGVyaWtAaGVsbG9lcmlrLmNvbVxcbiAqICBFbWFpbDogZXJpa0BoZWxsb2VyaWsuY29tXFxuICogIFR3aXR0ZXI6IGh0dHA6Ly90d2l0dGVyLmNvbS9FcmlrX1VYXFxuICogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiAqICBNYWludGFpbmVkIGF0IGh0dHA6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29uc1xcbiAqXFxuICogIExpY2Vuc2VcXG4gKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuICogIC0gRm9udCBsaWNlbnNlZCB1bmRlciBTSUwgT0ZMIDEuMSAtXFxuICogICAgaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcXG4gKiAgLSBDU1MsIFNDU1MgYW5kIExFU1MgYXJlIGxpY2Vuc2VkIHVuZGVyIE1JVCBMaWNlbnNlIC1cXG4gKiAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UuaHRtbFxcbiAqICAtIERvY3VtZW50YXRpb24gbGljZW5zZWQgdW5kZXIgQ0MgQlkgMy4wIC1cXG4gKiAgICBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXFxuICogIC0gSW5zcGlyZWQgYnkgYW5kIHdvcmtzIGdyZWF0IGFzIGEgY29tcGFuaW9uIHdpdGggRm9udCBBd2Vzb21lXFxuICogICAgXFxcIkZvbnQgQXdlc29tZSBieSBEYXZlIEdhbmR5IC0gaHR0cDovL2ZvbnRhd2Vzb21lLmlvXFxcIlxcbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJ3ZWF0aGVyaWNvbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC5lb3RcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQuZW90PyNpZWZpeFxcXCIpXFxuICAgICAgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXG4gICAgdXJsKFxcXCIuLi9mb250L3dlYXRoZXJpY29ucy1yZWd1bGFyLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICB1cmwoXFxcIi4uL2ZvbnQvd2VhdGhlcmljb25zLXJlZ3VsYXItd2ViZm9udC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksXFxuICAgIHVybChcXFwiLi4vZm9udC93ZWF0aGVyaWNvbnMtcmVndWxhci13ZWJmb250LnN2ZyN3ZWF0aGVyX2ljb25zcmVndWxhclxcXCIpXFxuICAgICAgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi53aSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIndlYXRoZXJpY29uc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbi53aS1mdyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMS40ZW07XFxufVxcbi53aS1yb3RhdGUtOTAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLndpLXJvdGF0ZS0xODAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLndpLXJvdGF0ZS0yNzAge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0zKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuLndpLWZsaXAtaG9yaXpvbnRhbCB7XFxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTAsIG1pcnJvcj0xKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG59XFxuLndpLWZsaXAtdmVydGljYWwge1xcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcbi53aS1kYXktc3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktZGF5LWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAwXFxcIjtcXG59XFxuLndpLWRheS1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMVxcXCI7XFxufVxcbi53aS1kYXktZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDNcXFwiO1xcbn1cXG4ud2ktZGF5LWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNFxcXCI7XFxufVxcbi53aS1kYXktaGF6ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLWRheS1saWdodG5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1kYXktcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLWRheS1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLWRheS1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwN1xcXCI7XFxufVxcbi53aS1kYXktc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLWRheS1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIyXFxcIjtcXG59XFxuLndpLWRheS1zbGVldC1zdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY4XFxcIjtcXG59XFxuLndpLWRheS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGFcXFwiO1xcbn1cXG4ud2ktZGF5LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmJcXFwiO1xcbn1cXG4ud2ktZGF5LXNub3ctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY1XFxcIjtcXG59XFxuLndpLWRheS1zcHJpbmtsZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLWRheS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2ktZGF5LXN1bm55LW92ZXJjYXN0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbn1cXG4ud2ktZGF5LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLWRheS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg1XFxcIjtcXG59XFxuLndpLXNvbGFyLWVjbGlwc2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2ZVxcXCI7XFxufVxcbi53aS1ob3Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1kYXktY2xvdWR5LWhpZ2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3ZFxcXCI7XFxufVxcbi53aS1kYXktbGlnaHQtd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM0XFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsZWFyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg2XFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtY2xvdWR5LXdpbmR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtcmFpbi13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjdcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNFxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc2xlZXQtc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2YVxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJhXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbm93LXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDZkXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1zbm93LXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2N1xcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1uaWdodC1hbHQtc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJjXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC10aHVuZGVyc3Rvcm06YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMVxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHktZ3VzdHM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZlxcXCI7XFxufVxcbi53aS1uaWdodC1jbG91ZHktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzMFxcXCI7XFxufVxcbi53aS1uaWdodC1mb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi53aS1uaWdodC1oYWlsOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzJcXFwiO1xcbn1cXG4ud2ktbmlnaHQtbGlnaHRuaW5nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtcGFydGx5LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgzXFxcIjtcXG59XFxuLndpLW5pZ2h0LXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzNlxcXCI7XFxufVxcbi53aS1uaWdodC1yYWluLW1peDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM0XFxcIjtcXG59XFxuLndpLW5pZ2h0LXJhaW4td2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM1XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNob3dlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzN1xcXCI7XFxufVxcbi53aS1uaWdodC1zbGVldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGIzXFxcIjtcXG59XFxuLndpLW5pZ2h0LXNsZWV0LXN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjlcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDM4XFxcIjtcXG59XFxuLndpLW5pZ2h0LXNub3ctdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNmNcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjZcXFwiO1xcbn1cXG4ud2ktbmlnaHQtc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAzOVxcXCI7XFxufVxcbi53aS1uaWdodC1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2FcXFwiO1xcbn1cXG4ud2ktbmlnaHQtdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2JcXFwiO1xcbn1cXG4ud2ktbHVuYXItZWNsaXBzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcwXFxcIjtcXG59XFxuLndpLXN0YXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzdcXFwiO1xcbn1cXG4ud2ktc3Rvcm0tc2hvd2VyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW5pZ2h0LWFsdC1jbG91ZHktaGlnaDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdlXFxcIjtcXG59XFxuLndpLW5pZ2h0LWNsb3VkeS1oaWdoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODBcXFwiO1xcbn1cXG4ud2ktbmlnaHQtYWx0LXBhcnRseS1jbG91ZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4MVxcXCI7XFxufVxcbi53aS1jbG91ZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQxXFxcIjtcXG59XFxuLndpLWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLWNsb3VkeS1ndXN0czpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDExXFxcIjtcXG59XFxuLndpLWNsb3VkeS13aW5keTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEyXFxcIjtcXG59XFxuLndpLWZvZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLWhhaWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktcmFpbi1taXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1yYWluLXdpbmQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOFxcXCI7XFxufVxcbi53aS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktc3ByaW5rbGU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1zdG9ybS1zaG93ZXJzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktdGh1bmRlcnN0b3JtOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktc25vdy13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXNtb2c6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NFxcXCI7XFxufVxcbi53aS1zbW9rZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYyXFxcIjtcXG59XFxuLndpLWxpZ2h0bmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLXJhaW5kcm9wczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRlXFxcIjtcXG59XFxuLndpLXJhaW5kcm9wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzhcXFwiO1xcbn1cXG4ud2ktZHVzdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXNub3dmbGFrZS1jb2xkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd2luZHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7XFxufVxcbi53aS1zdHJvbmctd2luZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXNhbmRzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgyXFxcIjtcXG59XFxuLndpLWVhcnRocXVha2U6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjNlxcXCI7XFxufVxcbi53aS1maXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzdcXFwiO1xcbn1cXG4ud2ktZmxvb2Q6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3Y1xcXCI7XFxufVxcbi53aS1tZXRlb3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MVxcXCI7XFxufVxcbi53aS10c3VuYW1pOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzVcXFwiO1xcbn1cXG4ud2ktdm9sY2FubzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGM4XFxcIjtcXG59XFxuLndpLWh1cnJpY2FuZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLXRvcm5hZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1zbWFsbC1jcmFmdC1hZHZpc29yeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNjXFxcIjtcXG59XFxuLndpLWdhbGUtd2FybmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNkXFxcIjtcXG59XFxuLndpLXN0b3JtLXdhcm5pbmc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjZVxcXCI7XFxufVxcbi53aS1odXJyaWNhbmUtd2FybmluZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNmXFxcIjtcXG59XFxuLndpLXdpbmQtZGlyZWN0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjFcXFwiO1xcbn1cXG4ud2ktYWxpZW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NVxcXCI7XFxufVxcbi53aS1jZWxzaXVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2NcXFwiO1xcbn1cXG4ud2ktZmFocmVuaGVpdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ1XFxcIjtcXG59XFxuLndpLWRlZ3JlZXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MlxcXCI7XFxufVxcbi53aS10aGVybW9tZXRlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDU1XFxcIjtcXG59XFxuLndpLXRoZXJtb21ldGVyLWV4dGVyaW9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTNcXFwiO1xcbn1cXG4ud2ktdGhlcm1vbWV0ZXItaW50ZXJuYWw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NFxcXCI7XFxufVxcbi53aS1jbG91ZC1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2RcXFwiO1xcbn1cXG4ud2ktY2xvdWQtdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MFxcXCI7XFxufVxcbi53aS1jbG91ZC1yZWZyZXNoOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwM2VcXFwiO1xcbn1cXG4ud2ktaG9yaXpvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQ3XFxcIjtcXG59XFxuLndpLWhvcml6b24tYWx0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDZcXFwiO1xcbn1cXG4ud2ktc3VucmlzZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUxXFxcIjtcXG59XFxuLndpLXN1bnNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUyXFxcIjtcXG59XFxuLndpLW1vb25yaXNlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzlcXFwiO1xcbn1cXG4ud2ktbW9vbnNldDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGNhXFxcIjtcXG59XFxuLndpLXJlZnJlc2g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0Y1xcXCI7XFxufVxcbi53aS1yZWZyZXNoLWFsdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRiXFxcIjtcXG59XFxuLndpLXVtYnJlbGxhOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODRcXFwiO1xcbn1cXG4ud2ktYmFyb21ldGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzlcXFwiO1xcbn1cXG4ud2ktaHVtaWRpdHk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3YVxcXCI7XFxufVxcbi53aS1uYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDdiXFxcIjtcXG59XFxuLndpLXRyYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwY2JcXFwiO1xcbn1cXG4ud2ktbW9vbi1uZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTZcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk3XFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTlcXFwiO1xcbn1cXG4ud2ktbW9vbi13YXhpbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDlhXFxcIjtcXG59XFxuLndpLW1vb24td2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxufVxcbi53aS1tb29uLWZpcnN0LXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZlxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMFxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMVxcXCI7XFxufVxcbi53aS1tb29uLXdheGluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMlxcXCI7XFxufVxcbi53aS1tb29uLWZ1bGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhM1xcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNVxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNlxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhN1xcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1naWJib3VzLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhOVxcXCI7XFxufVxcbi53aS1tb29uLXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYVxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWJcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZFxcXCI7XFxufVxcbi53aS1tb29uLXdhbmluZy1jcmVzY2VudC00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiO1xcbn1cXG4ud2ktbW9vbi13YW5pbmctY3Jlc2NlbnQtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFmXFxcIjtcXG59XFxuLndpLW1vb24td2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC1uZXc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQwXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDFcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkMlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQzXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDRcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkNVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC1maXJzdC1xdWFydGVyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGQ3XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkOFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZDlcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2F4aW5nLWdpYmJvdXMtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRhXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdheGluZy1naWJib3VzLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkYlxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YXhpbmctZ2liYm91cy02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGNcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtZnVsbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGRkXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBkZVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZGZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUwXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1naWJib3VzLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlMVxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctZ2liYm91cy01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTJcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWdpYmJvdXMtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGUzXFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXRoaXJkLXF1YXJ0ZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlNFxcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU1XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC0yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTZcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlN1xcXCI7XFxufVxcbi53aS1tb29uLWFsdC13YW5pbmctY3Jlc2NlbnQtNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGU4XFxcIjtcXG59XFxuLndpLW1vb24tYWx0LXdhbmluZy1jcmVzY2VudC01OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwZTlcXFwiO1xcbn1cXG4ud2ktbW9vbi1hbHQtd2FuaW5nLWNyZXNjZW50LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBlYVxcXCI7XFxufVxcbi53aS1tb29uLTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NVxcXCI7XFxufVxcbi53aS1tb29uLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5NlxcXCI7XFxufVxcbi53aS1tb29uLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5N1xcXCI7XFxufVxcbi53aS1tb29uLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OFxcXCI7XFxufVxcbi53aS1tb29uLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5OVxcXCI7XFxufVxcbi53aS1tb29uLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YVxcXCI7XFxufVxcbi53aS1tb29uLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5YlxcXCI7XFxufVxcbi53aS1tb29uLTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5Y1xcXCI7XFxufVxcbi53aS1tb29uLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZFxcXCI7XFxufVxcbi53aS1tb29uLTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5ZVxcXCI7XFxufVxcbi53aS1tb29uLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOWZcXFwiO1xcbn1cXG4ud2ktbW9vbi0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEwXFxcIjtcXG59XFxuLndpLW1vb24tMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhMVxcXCI7XFxufVxcbi53aS1tb29uLTEzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTJcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGEzXFxcIjtcXG59XFxuLndpLW1vb24tMTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhNFxcXCI7XFxufVxcbi53aS1tb29uLTE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYTVcXFwiO1xcbn1cXG4ud2ktbW9vbi0xNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE2XFxcIjtcXG59XFxuLndpLW1vb24tMTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhN1xcXCI7XFxufVxcbi53aS1tb29uLTE5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYThcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGE5XFxcIjtcXG59XFxuLndpLW1vb24tMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhYVxcXCI7XFxufVxcbi53aS1tb29uLTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWJcXFwiO1xcbn1cXG4ud2ktbW9vbi0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFjXFxcIjtcXG59XFxuLndpLW1vb24tMjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBhZFxcXCI7XFxufVxcbi53aS1tb29uLTI1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYWVcXFwiO1xcbn1cXG4ud2ktbW9vbi0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGFmXFxcIjtcXG59XFxuLndpLW1vb24tMjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiMFxcXCI7XFxufVxcbi53aS10aW1lLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4YVxcXCI7XFxufVxcbi53aS10aW1lLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4YlxcXCI7XFxufVxcbi53aS10aW1lLTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4Y1xcXCI7XFxufVxcbi53aS10aW1lLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZFxcXCI7XFxufVxcbi53aS10aW1lLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZVxcXCI7XFxufVxcbi53aS10aW1lLTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4ZlxcXCI7XFxufVxcbi53aS10aW1lLTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MFxcXCI7XFxufVxcbi53aS10aW1lLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MVxcXCI7XFxufVxcbi53aS10aW1lLTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA5MlxcXCI7XFxufVxcbi53aS10aW1lLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwOTNcXFwiO1xcbn1cXG4ud2ktdGltZS0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDk0XFxcIjtcXG59XFxuLndpLXRpbWUtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4OVxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tdXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1OFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tdXAtcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1N1xcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tcmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0ZFxcXCI7XFxufVxcbi53aS1kaXJlY3Rpb24tZG93bi1yaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDg4XFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1kb3duOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDRcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLWRvd24tbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDQzXFxcIjtcXG59XFxuLndpLWRpcmVjdGlvbi1sZWZ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDhcXFwiO1xcbn1cXG4ud2ktZGlyZWN0aW9uLXVwLWxlZnQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4N1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiN1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiOFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiOVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiYVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiYlxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiY1xcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZVxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiZlxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjMFxcXCI7XFxufVxcbi53aS13aW5kLWJlYXVmb3J0LTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYzFcXFwiO1xcbn1cXG4ud2ktd2luZC1iZWF1Zm9ydC0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGMyXFxcIjtcXG59XFxuLndpLXdpbmQtYmVhdWZvcnQtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBjM1xcXCI7XFxufVxcbi53aS15YWhvby0wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2kteWFob28tMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS15YWhvby0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2kteWFob28tNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXlhaG9vLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS15YWhvby02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS15YWhvby05OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS15YWhvby0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLXlhaG9vLTEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2kteWFob28tMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby0xNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLXlhaG9vLTE1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2kteWFob28tMTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby0xNzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXlhaG9vLTE4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2kteWFob28tMTk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS15YWhvby0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXlhaG9vLTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjFcXFwiO1xcbn1cXG4ud2kteWFob28tMjI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS15YWhvby0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXlhaG9vLTI0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2kteWFob28tMjU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS15YWhvby0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLXlhaG9vLTI3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2kteWFob28tMjg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS15YWhvby0yOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDMxXFxcIjtcXG59XFxuLndpLXlhaG9vLTMwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2kteWFob28tMzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZVxcXCI7XFxufVxcbi53aS15YWhvby0zMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXlhaG9vLTMzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwODNcXFwiO1xcbn1cXG4ud2kteWFob28tMzQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxufVxcbi53aS15YWhvby0zNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXlhaG9vLTM2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzJcXFwiO1xcbn1cXG4ud2kteWFob28tMzc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS15YWhvby0zODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTM5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tNDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS15YWhvby00MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDY0XFxcIjtcXG59XFxuLndpLXlhaG9vLTQyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2kteWFob28tNDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2NFxcXCI7XFxufVxcbi53aS15YWhvby00NDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG59XFxuLndpLXlhaG9vLTQ1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGVcXFwiO1xcbn1cXG4ud2kteWFob28tNDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS15YWhvby00NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBlXFxcIjtcXG59XFxuLndpLXlhaG9vLTMyMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3N1xcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1jbGVhci1kYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1jbGVhci1uaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJlXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXJhaW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tc2xlZXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby13aW5kOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tZm9nOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tY2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8tcGFydGx5LWNsb3VkeS1kYXk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1mb3JlY2FzdC1pby1wYXJ0bHktY2xvdWR5LW5pZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMzFcXFwiO1xcbn1cXG4ud2ktZm9yZWNhc3QtaW8taGFpbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXRodW5kZXJzdG9ybTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLWZvcmVjYXN0LWlvLXRvcm5hZG86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTA6YmVmb3JlLFxcbi53aS13bW80NjgwLTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xOmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NVxcXCI7XFxufVxcbi53aS13bW80NjgwLTM6YmVmb3JlLFxcbi53aS13bW80NjgwLTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00OmJlZm9yZSxcXG4ud2ktd21vNDY4MC0wNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTpiZWZvcmUsXFxuLndpLXdtbzQ2ODAtMDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0xMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS13bW80NjgwLTE4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTI1OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMjc6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2M1xcXCI7XFxufVxcbi53aS13bW80NjgwLTI4OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0yOTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtMzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS13bW80NjgwLTM0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC0zNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTQ0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNDY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTQ3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC00ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTUxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTU0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC01ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS13bW80NjgwLTYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNjY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNVxcXCI7XFxufVxcbi53aS13bW80NjgwLTY3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC02ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTcxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtNzY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3NlxcXCI7XFxufVxcbi53aS13bW80NjgwLTc3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC03ODpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS13bW80NjgwLTg0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtODY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS13bW80NjgwLTg3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC04OTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE1XFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS13bW80NjgwLTkxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWRcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTk0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktd21vNDY4MC05NTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLXdtbzQ2ODAtOTY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13bW80NjgwLTk5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNlxcXCI7XFxufVxcbi53aS1vd20tMjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTZcXFwiO1xcbn1cXG4ud2ktb3dtLTIyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE2XFxcIjtcXG59XFxuLndpLW93bS0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS1vd20tMjMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktb3dtLTIzMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFlXFxcIjtcXG59XFxuLndpLW93bS0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tMzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWNcXFwiO1xcbn1cXG4ud2ktb3dtLTMwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tMzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tMzE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTMyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFjXFxcIjtcXG59XFxuLndpLW93bS01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxY1xcXCI7XFxufVxcbi53aS1vd20tNTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLW93bS01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxOVxcXCI7XFxufVxcbi53aS1vd20tNTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTlcXFwiO1xcbn1cXG4ud2ktb3dtLTUxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYVxcXCI7XFxufVxcbi53aS1vd20tNTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktb3dtLTUyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFhXFxcIjtcXG59XFxuLndpLW93bS01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZFxcXCI7XFxufVxcbi53aS1vd20tNjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTYwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLW93bS02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS1vd20tNjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxN1xcXCI7XFxufVxcbi53aS1vd20tNjE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTdcXFwiO1xcbn1cXG4ud2ktb3dtLTYyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE3XFxcIjtcXG59XFxuLndpLW93bS02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxYlxcXCI7XFxufVxcbi53aS1vd20tNjIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktb3dtLTcwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE0XFxcIjtcXG59XFxuLndpLW93bS03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tNzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktb3dtLTczMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxNFxcXCI7XFxufVxcbi53aS1vd20tNzYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLTc2MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS03NzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMVxcXCI7XFxufVxcbi53aS1vd20tNzgxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLW93bS04MDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0MVxcXCI7XFxufVxcbi53aS1vd20tODAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNDFcXFwiO1xcbn1cXG4ud2ktb3dtLTgwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS04MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxM1xcXCI7XFxufVxcbi53aS1vd20tOTAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTZcXFwiO1xcbn1cXG4ud2ktb3dtLTkwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFkXFxcIjtcXG59XFxuLndpLW93bS05MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3M1xcXCI7XFxufVxcbi53aS1vd20tOTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktb3dtLTkwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDcyXFxcIjtcXG59XFxuLndpLW93bS05MDU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyMVxcXCI7XFxufVxcbi53aS1vd20tOTA2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTVcXFwiO1xcbn1cXG4ud2ktb3dtLTk1NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjEwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA1XFxcIjtcXG59XFxuLndpLW93bS1kYXktMjIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDVcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxMFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTIzMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEwXFxcIjtcXG59XFxuLndpLW93bS1kYXktMjMyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTBcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBiXFxcIjtcXG59XFxuLndpLW93bS1kYXktMzAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTMxNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktMzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDhcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOFxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA4XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwOVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTUyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA5XFxcIjtcXG59XFxuLndpLW93bS1kYXktNTIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDlcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNjAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwNlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYxNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNjIwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwYVxcXCI7XFxufVxcbi53aS1vd20tZGF5LTYyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBhXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTcyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLW93bS1kYXktNzMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwM1xcXCI7XFxufVxcbi53aS1vd20tZGF5LTc2MTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1kYXktNzYyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS03ODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLW93bS1kYXktODAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS04MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwMlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTgwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1kYXktODA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDczXFxcIjtcXG59XFxuLndpLW93bS1kYXktOTAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzZcXFwiO1xcbn1cXG4ud2ktb3dtLWRheS05MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1vd20tZGF5LTkwNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDA0XFxcIjtcXG59XFxuLndpLW93bS1kYXktOTU3OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNTBcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIwMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIxMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjEyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI1XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0yMzA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyZFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMjMxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTIzMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJkXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmJcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC0zMTM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtMzE0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTMyMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDJiXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTAxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUwMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI4XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MDM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOFxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTA0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjhcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUxMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MjA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyOVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNTIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjlcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTUyMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI5XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC01MzE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyY1xcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI0XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjExOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYxMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyNlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjE2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTYyMDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDI2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC02MjE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAyYVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNjIyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmFcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTcwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDRhXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03MTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA2MlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzIxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjZcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTczMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03NDE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA0YVxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtNzYxOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTc2MjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDYzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC03ODE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAwOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMmVcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwMTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDgxXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC04MDI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA4NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtODAzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMTNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTgwNDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDEzXFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA1NlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTAyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNzNcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTkwMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDc2XFxcIjtcXG59XFxuLndpLW93bS1uaWdodC05MDQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjA3MlxcXCI7XFxufVxcbi53aS1vd20tbmlnaHQtOTA2OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMjRcXFwiO1xcbn1cXG4ud2ktb3dtLW5pZ2h0LTk1NzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDUwXFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZWZsdXJyaWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlcmFpbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDE5XFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXNsZWF0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwYjVcXFwiO1xcbn1cXG4ud2ktd3UtY2hhbmNlc25vdzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDFiXFxcIjtcXG59XFxuLndpLXd1LWNoYW5jZXRzdG9ybXM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAxZVxcXCI7XFxufVxcbi53aS13dS1jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59XFxuLndpLXd1LWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXd1LWZsdXJyaWVzOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwNjRcXFwiO1xcbn1cXG4ud2ktd3UtaGF6eTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMGI2XFxcIjtcXG59XFxuLndpLXd1LW1vc3RseWNsb3VkeTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDAyXFxcIjtcXG59XFxuLndpLXd1LW1vc3RseXN1bm55OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbn1cXG4ud2ktd3UtcGFydGx5Y2xvdWR5OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMDJcXFwiO1xcbn1cXG4ud2ktd3UtcGFydGx5c3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS1yYWluOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWFcXFwiO1xcbn1cXG4ud2ktd3Utc2xlYXQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjBiNVxcXCI7XFxufVxcbi53aS13dS1zbm93OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWJcXFwiO1xcbn1cXG4ud2ktd3Utc3Vubnk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxufVxcbi53aS13dS10c3Rvcm1zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGYwMWVcXFwiO1xcbn1cXG4ud2ktd3UtdW5rbm93bjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG59IC8qIyBzb3VyY2VNYXBwaW5nVVJMPXdlYXRoZXItaWNvbnMubWluLmNzcy5tYXAgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBhZGREYXlzIGZyb20gXCIuLi9hZGREYXlzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9tb3Jyb3dcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9tb3Jyb3c/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvbW9ycm93XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDcgT2N0b2JlciAxNDowMDowMCB0b21vcnJvdz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dlYXRoZXItaWNvbnMubWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2VhdGhlci1pY29ucy5taW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUb21vcnJvdywgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy93ZWF0aGVyLWljb25zLm1pbi5jc3NcIjtcbi8vcGFzcyBpbiBjaXR5LCB0aGVuIGNhbGwgZGlzcGxheSB3ZWF0aGVyIHdpdGggZmV0Y2hlZCBkYXRhLy9cblxubGV0IG1hcEZsYWc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKGN1cnJlbnRDaXR5KSB7XG4gIGxldCBhcGlMaW5rID1cbiAgICBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9XCIgK1xuICAgIGN1cnJlbnRDaXR5ICtcbiAgICBcIiZ1bml0cz1pbXBlcmlhbCZhcHBpZD0zZGM2OGRmYzMxOTA1ZTA4NjI0MjA4ZTAyZGM2MmUwZVwiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaUxpbmssIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKFwiY3VycmVudCB3ZWF0aGVyIGRhdGFcIik7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICBnZXRNYXAod2VhdGhlckRhdGEpO1xuICAvL2NoYW5nZU1hcCh3ZWF0aGVyRGF0YSk7XG59XG5cbi8vZGlzcGxheSB0aGUgd2VhdGhlciBvbiB0aGUgRE9NLy9cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IGNpdHkgPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICBjb25zdCBjb3VudHJ5ID0gd2VhdGhlckRhdGEuc3lzLmNvdW50cnk7XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbklkID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5pZDtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGgucm91bmQod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgY29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5O1xuICBjb25zdCB3ZWF0aGVyID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuXG4gIGNvbnN0IGNpdHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICBjb25zdCBjdXJyZW50V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnRXZWF0aGVySWNvblwiKTtcbiAgY29uc3QgdGVtcERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBlcmF0dXJlXCIpO1xuICBjb25zdCBodW1pZGl0eURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5XCIpO1xuICBjb25zdCBmZWVsc0xpa2VEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmZWVsc19saWtlXCIpO1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlclwiKTtcblxuICBjaXR5RGlzcGxheS5pbm5lckhUTUwgPSBjaXR5ICsgXCIsIFwiICsgY291bnRyeTtcbiAgY3VycmVudFdlYXRoZXJJY29uLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBjdXJyZW50V2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcIndpXCIsIFwid2ktb3dtLVwiICsgY3VycmVudFdlYXRoZXJJY29uSWQpOyAvL2VkaXRzIHdlYXRoZXIgaWNvbiBwdWxsaW5nIGZyb20gY3VycmVudCB3ZWF0aGVyLy9cbiAgdGVtcERpc3BsYXkuaW5uZXJIVE1MID0gdGVtcGVyYXR1cmUgKyBcIlxcdTAwQjBcIiArIFwiRlwiO1xuICBodW1pZGl0eURpc3BsYXkuaW5uZXJIVE1MID0gaHVtaWRpdHkgKyBcIiVcIjtcbiAgZmVlbHNMaWtlRGlzcGxheS5pbm5lckhUTUwgPSBmZWVsc0xpa2UgKyBcIlxcdTAwQjBcIiArIFwiRlwiO1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSB3ZWF0aGVyO1xufVxuXG4vL2NoYW5nZSB0aGUgY2l0eSB0aHJvdWdoIHRleHQgaW5wdXQsIHBhc3MgdGhhdCBpbmZvIHRvIGdldEN1cnJlbnRXZWF0aGVyLy9cbmZ1bmN0aW9uIGNoYW5nZUNpdHkoKSB7XG4gIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dElucHV0XCIpO1xuICBsZXQgY3VycmVudENpdHkgPSB0ZXh0SW5wdXQudmFsdWU7XG4gIHRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGdldEN1cnJlbnRXZWF0aGVyKGN1cnJlbnRDaXR5KTtcbiAgZ2V0V2VhdGhlckZvcmVjYXN0KGN1cnJlbnRDaXR5KTtcbiAgZ2V0V2Vla2x5Rm9yZWNhc3QoY3VycmVudENpdHkpO1xufVxuXG4vL2Fzc2lnbiBjaGFuZ2UgY2l0eSB0byB0aGUgc3VibWl0IGJ1dHRvbi8vXG5mdW5jdGlvbiBhc3NpZ25TdWJtaXRCdG4oKSB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUNpdHkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3QoY3VycmVudENpdHkpIHtcbiAgbGV0IGFwaUxpbmsgPVxuICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9XCIgK1xuICAgIGN1cnJlbnRDaXR5ICtcbiAgICBcIiYmdW5pdHM9aW1wZXJpYWwmYXBwaWQ9M2RjNjhkZmMzMTkwNWUwODYyNDIwOGUwMmRjNjJlMGVcIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlMaW5rLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKFwiZm9yZWNhc3RcIik7XG4gIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF0YSk7XG4gIGRpc3BsYXlEYWlseUZvcmVjYXN0KGZvcmVjYXN0RGF0YSk7XG59XG5cbi8vaW5lZmZpY2llbnQsIGJ1dCB3YXMgcXVpY2sgdG8gdGhyb3cgdG9nZXRoZXIvL1xuZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3QoZm9yZWNhc3REYXRhKSB7XG4gIGNvbnN0IHRpbWUwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lMFwiKTtcbiAgY29uc3QgZm9yZWNhc3RJY29uMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RJY29uMFwiKTtcbiAgY29uc3QgdGVtcDAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAwXCIpO1xuICBjb25zdCByYWluMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbjBcIik7XG4gIGNvbnN0IHRpbWUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lMVwiKTtcbiAgY29uc3QgZm9yZWNhc3RJY29uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RJY29uMVwiKTtcbiAgY29uc3QgdGVtcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAxXCIpO1xuICBjb25zdCByYWluMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbjFcIik7XG4gIGNvbnN0IHRpbWUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lMlwiKTtcbiAgY29uc3QgZm9yZWNhc3RJY29uMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RJY29uMlwiKTtcbiAgY29uc3QgdGVtcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXAyXCIpO1xuICBjb25zdCByYWluMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbjJcIik7XG5cbiAgY29uc29sZS5sb2coZm9yZWNhc3REYXRhLmxpc3RbMF0uZHRfdHh0KTtcbiAgdGltZTAuaW5uZXJIVE1MID0gZm9ybWF0KG5ldyBEYXRlKGZvcmVjYXN0RGF0YS5saXN0WzBdLmR0X3R4dCksIFwiaGFhYVwiKTtcbiAgZm9yZWNhc3RJY29uMC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgZm9yZWNhc3RJY29uMC5jbGFzc0xpc3QuYWRkKFxuICAgIFwiZm9yZWNhc3RJY29uXCIsXG4gICAgXCJ3aVwiLFxuICAgIFwid2ktb3dtLVwiICsgZm9yZWNhc3REYXRhLmxpc3RbMF0ud2VhdGhlclswXS5pZFxuICApO1xuICB0ZW1wMC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF0YS5saXN0WzBdLm1haW4udGVtcCkgKyBcIlxcdTAwQjBcIiArIFwiRlwiO1xuICByYWluMC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGZvcmVjYXN0RGF0YS5saXN0WzBdLnBvcCAqIDEwMCkgKyBcIiVcIjtcblxuICB0aW1lMS5pbm5lckhUTUwgPSBmb3JtYXQobmV3IERhdGUoZm9yZWNhc3REYXRhLmxpc3RbMV0uZHRfdHh0KSwgXCJoYWFhXCIpO1xuICBmb3JlY2FzdEljb24xLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBmb3JlY2FzdEljb24xLmNsYXNzTGlzdC5hZGQoXG4gICAgXCJmb3JlY2FzdEljb25cIixcbiAgICBcIndpXCIsXG4gICAgXCJ3aS1vd20tXCIgKyBmb3JlY2FzdERhdGEubGlzdFsxXS53ZWF0aGVyWzBdLmlkXG4gICk7XG4gIHRlbXAxLmlubmVySFRNTCA9IE1hdGgucm91bmQoZm9yZWNhc3REYXRhLmxpc3RbMV0ubWFpbi50ZW1wKSArIFwiXFx1MDBCMFwiICsgXCJGXCI7XG4gIHJhaW4xLmlubmVySFRNTCA9IE1hdGgucm91bmQoZm9yZWNhc3REYXRhLmxpc3RbMV0ucG9wICogMTAwKSArIFwiJVwiO1xuXG4gIHRpbWUyLmlubmVySFRNTCA9IGZvcm1hdChuZXcgRGF0ZShmb3JlY2FzdERhdGEubGlzdFsyXS5kdF90eHQpLCBcImhhYWFcIik7XG4gIGZvcmVjYXN0SWNvbjIucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gIGZvcmVjYXN0SWNvbjIuY2xhc3NMaXN0LmFkZChcbiAgICBcImZvcmVjYXN0SWNvblwiLFxuICAgIFwid2lcIixcbiAgICBcIndpLW93bS1cIiArIGZvcmVjYXN0RGF0YS5saXN0WzJdLndlYXRoZXJbMF0uaWRcbiAgKTtcbiAgdGVtcDIuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChmb3JlY2FzdERhdGEubGlzdFsyXS5tYWluLnRlbXApICsgXCJcXHUwMEIwXCIgKyBcIkZcIjtcbiAgcmFpbjIuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChmb3JlY2FzdERhdGEubGlzdFsyXS5wb3AgKiAxMDApICsgXCIlXCI7XG59XG5cbi8vd2hvbyBib3ksIHRoaXMgb25lIGlzIG5vdCBvcHRpbWl6ZWQvL1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2Vla2x5Rm9yZWNhc3QoY3VycmVudENpdHkpIHtcbiAgbGV0IGFwaUxpbmsgPVxuICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9XCIgK1xuICAgIGN1cnJlbnRDaXR5ICtcbiAgICBcIiYmdW5pdHM9aW1wZXJpYWwmYXBwaWQ9M2RjNjhkZmMzMTkwNWUwODYyNDIwOGUwMmRjNjJlMGVcIjtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlMaW5rLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICBjb25zdCB3ZWVrbHlGb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIGNvbnNvbGUubG9nKHdlZWtseUZvcmVjYXN0RGF0YSk7XG5cbiAgY29uc3QgZGF0ZUFycmF5ID0gW107XG4gIGNvbnN0IHNvcnRlZERhdGVzQXJyYXkgPSBbXTtcbiAgY29uc3QgZmlsdGVyZWRGaW5hbERhdGVzQXJyYXkgPSBbXTtcbiAgbGV0IGhpZ2hBbmRMb3dBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla2x5Rm9yZWNhc3REYXRhLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRlQXJyYXkucHVzaCh3ZWVrbHlGb3JlY2FzdERhdGEubGlzdFtpXS5kdF90eHQpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0ZXMgPSBkYXRlQXJyYXkubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShlKSwgXCJkXCIpO1xuICB9KTtcblxuICAvL2NvbnNvbGUubG9nKGZvcm1hdHRlZERhdGVzKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGVBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b21vcnJvd0NoZWNrZXIgPSBpc1RvbW9ycm93KHBhcnNlSVNPKGRhdGVBcnJheVtpXSkpO1xuICAgIGlmICh0b21vcnJvd0NoZWNrZXIgPT09IHRydWUpIHtcbiAgICAgIHNvcnREYXlzKGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy9mb3JtYXR0ZWQgZGF0ZXMgaXMgdXNlZCBmb3IgZWFzeSBjb21wYXJpc29uLCBkYXRlIGFycmF5IGlzIHRoZSBmdWxsIGRhdGUvL1xuICBmdW5jdGlvbiBzb3J0RGF5cyhpKSB7XG4gICAgbGV0IHRlbXBBcnJheSA9IFtdO1xuICAgIHdoaWxlIChpIDwgZGF0ZUFycmF5Lmxlbmd0aCkge1xuICAgICAgbGV0IGluY3JlbWVudGVkVmFsID0gaSArIDE7XG4gICAgICBpZiAoZm9ybWF0dGVkRGF0ZXNbaV0gPT09IGZvcm1hdHRlZERhdGVzW2luY3JlbWVudGVkVmFsXSkge1xuICAgICAgICB0ZW1wQXJyYXkucHVzaChkYXRlQXJyYXlbaV0pO1xuICAgICAgfSBlbHNlIGlmIChmb3JtYXR0ZWREYXRlc1tpXSAhPSBmb3JtYXR0ZWREYXRlc1tpbmNyZW1lbnRlZFZhbF0pIHtcbiAgICAgICAgdGVtcEFycmF5LnB1c2goZGF0ZUFycmF5W2ldKTtcblxuICAgICAgICBjb25zdCBtZWRpYW4gPSBNYXRoLmZsb29yKHRlbXBBcnJheS5sZW5ndGggLyAyKTtcbiAgICAgICAgc29ydGVkRGF0ZXNBcnJheS5wdXNoKHRlbXBBcnJheVttZWRpYW5dKTtcbiAgICAgICAgY29uc29sZS5sb2codGVtcEFycmF5KTtcbiAgICAgICAgaGlnaEFuZExvdyh0ZW1wQXJyYXksIGhpZ2hBbmRMb3dBcnJheSk7XG4gICAgICAgIHRlbXBBcnJheSA9IFtdO1xuICAgICAgfVxuICAgICAgaSsrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhoaWdoQW5kTG93QXJyYXkpO1xuICAgIGZpbHRlck1haW5MaXN0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWdoQW5kTG93KHRlbXBBcnJheSwgaGlnaEFuZExvd0FycmF5KSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGxldCBpbmNyZW1lbnRlZFZhbCA9IDA7XG4gICAgY29uc29sZS5sb2cod2Vla2x5Rm9yZWNhc3REYXRhLmxpc3QubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IHdlZWtseUZvcmVjYXN0RGF0YS5saXN0Lmxlbmd0aDsgcCsrKSB7XG4gICAgICBpZiAod2Vla2x5Rm9yZWNhc3REYXRhLmxpc3RbcF0uZHRfdHh0ID09IHRlbXBBcnJheVtpbmNyZW1lbnRlZFZhbF0pIHtcbiAgICAgICAgYXJyLnB1c2god2Vla2x5Rm9yZWNhc3REYXRhLmxpc3RbcF0ubWFpbi50ZW1wKTtcbiAgICAgICAgaW5jcmVtZW50ZWRWYWwrKztcbiAgICAgIH1cbiAgICB9IC8vaW5zZXJ0aW9uIHNvcnRcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGN1cnIgPSBhcnJbaV07XG4gICAgICBsZXQgaiA9IGkgLSAxO1xuXG4gICAgICB3aGlsZSAoaiA+PSAwICYmIGFycltqXSA+IGN1cnIpIHtcbiAgICAgICAgYXJyW2ogKyAxXSA9IGFycltqXTtcbiAgICAgICAgai0tO1xuICAgICAgfVxuICAgICAgYXJyW2ogKyAxXSA9IGN1cnI7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGFycik7XG4gICAgY29uc3QgaGlnaEFuZExvd1ZhbHMgPSB7XG4gICAgICBsb3c6IGFyclswXSxcbiAgICAgIGhpZ2g6IGFyclthcnIubGVuZ3RoIC0gMV0sXG4gICAgfTtcbiAgICBoaWdoQW5kTG93QXJyYXkucHVzaChoaWdoQW5kTG93VmFscyk7XG4gICAgY29uc29sZS5sb2coYXJyWzBdKTtcbiAgICBjb25zb2xlLmxvZyhhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlck1haW5MaXN0KCkge1xuICAgIGxldCBpbmNyZW1lbnRlZFZhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrbHlGb3JlY2FzdERhdGEubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICB3ZWVrbHlGb3JlY2FzdERhdGEubGlzdFtpXS5kdF90eHQgPT09IHNvcnRlZERhdGVzQXJyYXlbaW5jcmVtZW50ZWRWYWxdXG4gICAgICApIHtcbiAgICAgICAgZmlsdGVyZWRGaW5hbERhdGVzQXJyYXkucHVzaCh3ZWVrbHlGb3JlY2FzdERhdGEubGlzdFtpXSk7XG4gICAgICAgIGluY3JlbWVudGVkVmFsKys7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3BsYXlXZWVrbHlGb3JlY2FzdChmaWx0ZXJlZEZpbmFsRGF0ZXNBcnJheSwgaGlnaEFuZExvd0FycmF5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2Vla2x5Rm9yZWNhc3QoZmlsdGVyZWRGaW5hbERhdGVzQXJyYXksIGhpZ2hBbmRMb3dBcnJheSkge1xuICBsZXQgd2Vla0ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrRm9yZWNhc3RcIik7XG4gIC8vY2xlYXJzIGV2ZXJ5IHBhc3MvL1xuICB3aGlsZSAod2Vla0ZvcmVjYXN0LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgIHdlZWtGb3JlY2FzdC5yZW1vdmVDaGlsZCh3ZWVrRm9yZWNhc3QuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRGaW5hbERhdGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd2Vla2x5Rm9yZWNhc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlZWtseUZvcmVjYXN0Qm94LmNsYXNzTGlzdC5hZGQgPSBcIndlZWtseUZvcmVjYXN0Qm94XCI7XG5cbiAgICBsZXQgZGF5QW5kSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5QW5kSWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5QW5kSWNvbkNvbnRhaW5lclwiKTtcbiAgICBsZXQgZGF5T2ZXZWVrID0gZm9ybWF0KG5ldyBEYXRlKGZpbHRlcmVkRmluYWxEYXRlc0FycmF5W2ldLmR0X3R4dCksIFwiaWlpXCIpO1xuICAgIGxldCBkYXlPZldlZWtEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF5T2ZXZWVrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZGF5T2ZXZWVrXCIpO1xuICAgIGRheU9mV2Vla0Rpc3BsYXkuaW5uZXJIVE1MID0gZGF5T2ZXZWVrO1xuICAgIGxldCB3ZWF0aGVySWQgPSBmaWx0ZXJlZEZpbmFsRGF0ZXNBcnJheVtpXS53ZWF0aGVyWzBdLmlkO1xuICAgIGxldCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwid2VhdGhlckljb25XZWVrbHlcIixcbiAgICAgIFwid2lcIixcbiAgICAgIFwid2ktb3dtLVwiICsgd2VhdGhlcklkXG4gICAgKTtcblxuICAgIGxldCBoaWdoQW5kTG93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoaWdoQW5kTG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWdoQW5kTG93Q29udGFpbmVyXCIpO1xuICAgIGNvbnNvbGUubG9nKGhpZ2hBbmRMb3dBcnJheVtpXS5sb3cpO1xuICAgIGxldCBsb3dUZW1wID0gTWF0aC5yb3VuZChoaWdoQW5kTG93QXJyYXlbaV0ubG93KSArIFwiXFx1MDBCMFwiICsgXCJGXCI7XG4gICAgbGV0IGxvd0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsb3dIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhpZ2hBbmRMb3dIZWFkZXJcIik7XG4gICAgbG93SGVhZGVyLmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgbGV0IGxvd1RlbXBEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG93VGVtcERpc3BsYXkuaW5uZXJIVE1MID0gbG93VGVtcDtcbiAgICBsb3dUZW1wRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xuXG4gICAgbGV0IGhpZ2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGlnaEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlnaEFuZExvd0hlYWRlclwiKTtcbiAgICBoaWdoSGVhZGVyLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIGxldCBoaWdoVGVtcCA9IE1hdGgucm91bmQoaGlnaEFuZExvd0FycmF5W2ldLmhpZ2gpICsgXCJcXHUwMEIwXCIgKyBcIkZcIjtcbiAgICBsZXQgaGlnaFRlbXBEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGlnaFRlbXBEaXNwbGF5LmlubmVySFRNTCA9IGhpZ2hUZW1wO1xuICAgIGhpZ2hUZW1wRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlnaFwiKTtcblxuICAgIHdlZWtGb3JlY2FzdC5hcHBlbmQod2Vla2x5Rm9yZWNhc3RCb3gpO1xuICAgIHdlZWtseUZvcmVjYXN0Qm94LmFwcGVuZChkYXlBbmRJY29uQ29udGFpbmVyKTtcbiAgICBkYXlBbmRJY29uQ29udGFpbmVyLmFwcGVuZChkYXlPZldlZWtEaXNwbGF5KTtcbiAgICBkYXlBbmRJY29uQ29udGFpbmVyLmFwcGVuZCh3ZWF0aGVyRGlzcGxheSk7XG4gICAgd2Vla2x5Rm9yZWNhc3RCb3guYXBwZW5kKGhpZ2hBbmRMb3dDb250YWluZXIpO1xuICAgIGhpZ2hBbmRMb3dDb250YWluZXIuYXBwZW5kKGhpZ2hIZWFkZXIpO1xuICAgIGhpZ2hBbmRMb3dDb250YWluZXIuYXBwZW5kKGxvd0hlYWRlcik7XG4gICAgaGlnaEFuZExvd0NvbnRhaW5lci5hcHBlbmQoaGlnaFRlbXBEaXNwbGF5KTtcbiAgICBoaWdoQW5kTG93Q29udGFpbmVyLmFwcGVuZChsb3dUZW1wRGlzcGxheSk7XG4gIH1cbn1cblxuLy9jYWxsZWQgaW4gZ2V0IGN1cnJlbnQgd2VhdGhlci8vXG5mdW5jdGlvbiBnZXRNYXAod2VhdGhlckRhdGEpIHtcbiAgY29uc29sZS5sb2coXCJtYXBGbGFnXCIpO1xuICBjb25zb2xlLmxvZyhtYXApO1xuICBsZXQgbGF0ID0gd2VhdGhlckRhdGEuY29vcmQubGF0O1xuICBsZXQgbG9uID0gd2VhdGhlckRhdGEuY29vcmQubG9uO1xuICBpZiAobWFwRmxhZyA9PT0gdHJ1ZSkge1xuICAgIGxldCBtYXBUb1JlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpO1xuICAgIG1hcFRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgIGxldCByZW1ha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlbWFrZS5pZCA9IFwibWFwXCI7XG4gICAgaW5wdXRXcmFwcGVyLnByZXBlbmQocmVtYWtlKTtcbiAgICBsZXQgbWFwID0gTC5tYXAoXCJtYXBcIikuc2V0VmlldyhbbGF0LCBsb25dLCA5KTtcbiAgICBMLnRpbGVMYXllcihcImh0dHBzOi8vdGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIiwge1xuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICBhdHRyaWJ1dGlvbjogXCLCqSBPcGVuU3RyZWV0TWFwXCIsXG4gICAgfSkuYWRkVG8obWFwKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbWFwID0gTC5tYXAoXCJtYXBcIikuc2V0VmlldyhbbGF0LCBsb25dLCA5KTtcbiAgICBMLnRpbGVMYXllcihcImh0dHBzOi8vdGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIiwge1xuICAgICAgbWF4Wm9vbTogMTksXG4gICAgICBhdHRyaWJ1dGlvbjogXCLCqSBPcGVuU3RyZWV0TWFwXCIsXG4gICAgfSkuYWRkVG8obWFwKTtcbiAgICBtYXBGbGFnID0gdHJ1ZTtcbiAgfVxufVxuXG5nZXRDdXJyZW50V2VhdGhlcihcIlRhbXBhXCIpO1xuZ2V0V2VhdGhlckZvcmVjYXN0KFwiVGFtcGFcIik7XG5nZXRXZWVrbHlGb3JlY2FzdChcIlRhbXBhXCIpO1xuYXNzaWduU3VibWl0QnRuKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=