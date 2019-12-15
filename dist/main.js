/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper/animation.js */ "./src/helper/animation.js");
/* harmony import */ var _helper_animation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helper_animation_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_geolocation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/geolocation.js */ "./src/helper/geolocation.js");
/* harmony import */ var _helper_geolocation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_helper_geolocation_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper_country_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper/country.js */ "./src/helper/country.js");
/* harmony import */ var _helper_country_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helper_country_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper/preloader */ "./src/helper/preloader.js");
/* harmony import */ var _helper_preloader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helper_preloader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_skycons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper/skycons.js */ "./src/helper/skycons.js");
/* harmony import */ var _helper_skycons_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_helper_skycons_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_time_date_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper/time-date.js */ "./src/helper/time-date.js");
/* harmony import */ var _helper_time_date_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_helper_time_date_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helper_background_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helper/background.js */ "./src/helper/background.js");
/* harmony import */ var _helper_background_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helper_background_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helper_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helper/map.js */ "./src/helper/map.js");
/* harmony import */ var _helper_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_helper_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helper_language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper/language */ "./src/helper/language.js");
/* harmony import */ var _helper_language__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_helper_language__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helper_btn_temp_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helper/btn-temp-name */ "./src/helper/btn-temp-name.js");
/* harmony import */ var _helper_btn_temp_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_helper_btn_temp_name__WEBPACK_IMPORTED_MODULE_10__);













/***/ }),

/***/ "./src/helper/animation.js":
/*!*********************************!*\
  !*** ./src/helper/animation.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function btnclick() {
  activebtn.style.backgroundColor = disactiveclr;
  (activebtn = this).style.backgroundColor = activeclr;
}

var disactiveclr = "#F6F6f6";
var activeclr = "#fc0707";
var activebtn = null;

function ld() {
  activebtn = document.getElementById("b1");

  for (var i = 1; i < 5; ++i) {
    document.getElementsByClassName("b" + i).onclick = btnclick;
  }

  alert("ready");
}

/***/ }),

/***/ "./src/helper/background.js":
/*!**********************************!*\
  !*** ./src/helper/background.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  var textQ = monthBackground;
  var description = descriptionTemp.textContent;
  var url = "https://api.unsplash.com/photos/random?query=weather+".concat(textQ, "+").concat(description, "&client_id=e64afbfd7fbc9bbdd1c64c71179af1ff3596860bfebba4752f865c1dd5bd6baf");
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    var img = data.links.download;
    document.getElementsByTagName('main')[0].style.backgroundImage = "url(".concat(img, ")");
  });
});
document.getElementById('loader').addEventListener('click', function () {
  var search = document.getElementById('searchInput').value;
  var url = "https://api.unsplash.com/photos/random?query=weather+".concat(search, "&client_id=e64afbfd7fbc9bbdd1c64c71179af1ff3596860bfebba4752f865c1dd5bd6baf");
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    var img = data.links.download;
    document.getElementsByTagName('main')[0].style.backgroundImage = "url(".concat(img, ")");
  });
});

/***/ }),

/***/ "./src/helper/btn-temp-name.js":
/*!*************************************!*\
  !*** ./src/helper/btn-temp-name.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById('fahrenheit').addEventListener('click', function () {
  var degree = document.getElementById('temp').textContent;
  var degree0 = document.getElementById('temp0').textContent;
  var degreeT = document.getElementById('tempT').textContent;
  var degreeF = document.getElementById('tempF').textContent;
  temp.textContent = Math.ceil(degree * 9 / 5 + 32);
  temp0.textContent = Math.ceil(degree0 * 9 / 5 + 32);
  tempT.textContent = Math.ceil(degreeT * 9 / 5 + 32);
  tempF.textContent = Math.ceil(degreeF * 9 / 5 + 32);
  tempUnix.textContent = 'f';
  tempUnix1.textContent = 'f';
  tempUnix2.textContent = 'f';
  tempUnix3.textContent = 'f';
});

/***/ }),

/***/ "./src/helper/country.js":
/*!*******************************!*\
  !*** ./src/helper/country.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var fullCountry = {
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BF": "Burkina Faso",
  "BG": "Bulgaria",
  "BA": "Bosnia and Herzegovina",
  "BB": "Barbados",
  "WF": "Wallis and Futuna",
  "BL": "Saint Barthelemy",
  "BM": "Bermuda",
  "BN": "Brunei",
  "BO": "Bolivia",
  "BH": "Bahrain",
  "BI": "Burundi",
  "BJ": "Benin",
  "BT": "Bhutan",
  "JM": "Jamaica",
  "BV": "Bouvet Island",
  "BW": "Botswana",
  "WS": "Samoa",
  "BQ": "Bonaire, Saint Eustatius and Saba ",
  "BR": "Brazil",
  "BS": "Bahamas",
  "JE": "Jersey",
  "BY": "Belarus",
  "BZ": "Belize",
  "RU": "Russia",
  "RW": "Rwanda",
  "RS": "Serbia",
  "TL": "East Timor",
  "RE": "Reunion",
  "TM": "Turkmenistan",
  "TJ": "Tajikistan",
  "RO": "Romania",
  "TK": "Tokelau",
  "GW": "Guinea-Bissau",
  "GU": "Guam",
  "GT": "Guatemala",
  "GS": "South Georgia and the South Sandwich Islands",
  "GR": "Greece",
  "GQ": "Equatorial Guinea",
  "GP": "Guadeloupe",
  "JP": "Japan",
  "GY": "Guyana",
  "GG": "Guernsey",
  "GF": "French Guiana",
  "GE": "Georgia",
  "GD": "Grenada",
  "GB": "United Kingdom",
  "GA": "Gabon",
  "SV": "El Salvador",
  "GN": "Guinea",
  "GM": "Gambia",
  "GL": "Greenland",
  "GI": "Gibraltar",
  "GH": "Ghana",
  "OM": "Oman",
  "TN": "Tunisia",
  "JO": "Jordan",
  "HR": "Croatia",
  "HT": "Haiti",
  "HU": "Hungary",
  "HK": "Hong Kong",
  "HN": "Honduras",
  "HM": "Heard Island and McDonald Islands",
  "VE": "Venezuela",
  "PR": "Puerto Rico",
  "PS": "Palestinian Territory",
  "PW": "Palau",
  "PT": "Portugal",
  "SJ": "Svalbard and Jan Mayen",
  "PY": "Paraguay",
  "IQ": "Iraq",
  "PA": "Panama",
  "PF": "French Polynesia",
  "PG": "Papua New Guinea",
  "PE": "Peru",
  "PK": "Pakistan",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PM": "Saint Pierre and Miquelon",
  "ZM": "Zambia",
  "EH": "Western Sahara",
  "EE": "Estonia",
  "EG": "Egypt",
  "ZA": "South Africa",
  "EC": "Ecuador",
  "IT": "Italy",
  "VN": "Vietnam",
  "SB": "Solomon Islands",
  "ET": "Ethiopia",
  "SO": "Somalia",
  "ZW": "Zimbabwe",
  "SA": "Saudi Arabia",
  "ES": "Spain",
  "ER": "Eritrea",
  "ME": "Montenegro",
  "MD": "Moldova",
  "MG": "Madagascar",
  "MF": "Saint Martin",
  "MA": "Morocco",
  "MC": "Monaco",
  "UZ": "Uzbekistan",
  "MM": "Myanmar",
  "ML": "Mali",
  "MO": "Macao",
  "MN": "Mongolia",
  "MH": "Marshall Islands",
  "MK": "Macedonia",
  "MU": "Mauritius",
  "MT": "Malta",
  "MW": "Malawi",
  "MV": "Maldives",
  "MQ": "Martinique",
  "MP": "Northern Mariana Islands",
  "MS": "Montserrat",
  "MR": "Mauritania",
  "IM": "Isle of Man",
  "UG": "Uganda",
  "TZ": "Tanzania",
  "MY": "Malaysia",
  "MX": "Mexico",
  "IL": "Israel",
  "FR": "France",
  "IO": "British Indian Ocean Territory",
  "SH": "Saint Helena",
  "FI": "Finland",
  "FJ": "Fiji",
  "FK": "Falkland Islands",
  "FM": "Micronesia",
  "FO": "Faroe Islands",
  "NI": "Nicaragua",
  "NL": "Netherlands",
  "NO": "Norway",
  "NA": "Namibia",
  "VU": "Vanuatu",
  "NC": "New Caledonia",
  "NE": "Niger",
  "NF": "Norfolk Island",
  "NG": "Nigeria",
  "NZ": "New Zealand",
  "NP": "Nepal",
  "NR": "Nauru",
  "NU": "Niue",
  "CK": "Cook Islands",
  "XK": "Kosovo",
  "CI": "Ivory Coast",
  "CH": "Switzerland",
  "CO": "Colombia",
  "CN": "China",
  "CM": "Cameroon",
  "CL": "Chile",
  "CC": "Cocos Islands",
  "CA": "Canada",
  "CG": "Republic of the Congo",
  "CF": "Central African Republic",
  "CD": "Democratic Republic of the Congo",
  "CZ": "Czech Republic",
  "CY": "Cyprus",
  "CX": "Christmas Island",
  "CR": "Costa Rica",
  "CW": "Curacao",
  "CV": "Cape Verde",
  "CU": "Cuba",
  "SZ": "Swaziland",
  "SY": "Syria",
  "SX": "Sint Maarten",
  "KG": "Kyrgyzstan",
  "KE": "Kenya",
  "SS": "South Sudan",
  "SR": "Suriname",
  "KI": "Kiribati",
  "KH": "Cambodia",
  "KN": "Saint Kitts and Nevis",
  "KM": "Comoros",
  "ST": "Sao Tome and Principe",
  "SK": "Slovakia",
  "KR": "South Korea",
  "SI": "Slovenia",
  "KP": "North Korea",
  "KW": "Kuwait",
  "SN": "Senegal",
  "SM": "San Marino",
  "SL": "Sierra Leone",
  "SC": "Seychelles",
  "KZ": "Kazakhstan",
  "KY": "Cayman Islands",
  "SG": "Singapore",
  "SE": "Sweden",
  "SD": "Sudan",
  "DO": "Dominican Republic",
  "DM": "Dominica",
  "DJ": "Djibouti",
  "DK": "Denmark",
  "VG": "British Virgin Islands",
  "DE": "Germany",
  "YE": "Yemen",
  "DZ": "Algeria",
  "US": "United States",
  "UY": "Uruguay",
  "YT": "Mayotte",
  "UM": "United States Minor Outlying Islands",
  "LB": "Lebanon",
  "LC": "Saint Lucia",
  "LA": "Laos",
  "TV": "Tuvalu",
  "TW": "Taiwan",
  "TT": "Trinidad and Tobago",
  "TR": "Turkey",
  "LK": "Sri Lanka",
  "LI": "Liechtenstein",
  "LV": "Latvia",
  "TO": "Tonga",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "LR": "Liberia",
  "LS": "Lesotho",
  "TH": "Thailand",
  "TF": "French Southern Territories",
  "TG": "Togo",
  "TD": "Chad",
  "TC": "Turks and Caicos Islands",
  "LY": "Libya",
  "VA": "Vatican",
  "VC": "Saint Vincent and the Grenadines",
  "AE": "United Arab Emirates",
  "AD": "Andorra",
  "AG": "Antigua and Barbuda",
  "AF": "Afghanistan",
  "AI": "Anguilla",
  "VI": "U.S. Virgin Islands",
  "IS": "Iceland",
  "IR": "Iran",
  "AM": "Armenia",
  "AL": "Albania",
  "AO": "Angola",
  "AQ": "Antarctica",
  "AS": "American Samoa",
  "AR": "Argentina",
  "AU": "Australia",
  "AT": "Austria",
  "AW": "Aruba",
  "IN": "India",
  "AX": "Aland Islands",
  "AZ": "Azerbaijan",
  "IE": "Ireland",
  "ID": "Indonesia",
  "UA": "Ukraine",
  "QA": "Qatar",
  "MZ": "Mozambique"
};
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://ipinfo.io/json?token=c7ba98aa32674a';
fetch(proxyUrl + targetUrl).then(function (resp) {
  return resp.json();
}).then(function (data) {
  document.querySelector('.city-name').innerHTML = data.city + ',';

  for (var i in fullCountry) {
    if (data.country == i) {
      document.querySelector('.country-name').innerHTML = fullCountry[i];
    }
  }
})["catch"](function () {
  console.error('server not downloading');
});

/***/ }),

/***/ "./src/helper/geolocation.js":
/*!***********************************!*\
  !*** ./src/helper/geolocation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  var startPos;

  var geoSuccess = function geoSuccess(position) {
    startPos = position;
  };

  navigator.geolocation.getCurrentPosition(geoSuccess);
};

/***/ }),

/***/ "./src/helper/language.js":
/*!********************************!*\
  !*** ./src/helper/language.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var textQ = city.textContent;
var textCountry = country.textContent;
var description = descriptionTemp.textContent;
var language = {
  eng: {
    search: "search",
    lattitude: "Latitude: ",
    longitude: "Longitute: ",
    wind: "WIND: ",
    apparent: "FEELS LIKE: ",
    humidity: "HUMIDITY: "
  },
  ru: {
    search: "поиск",
    lattitude: "Широта: ",
    longitude: "Долгота: ",
    wind: "ВЕТЕР: ",
    apparent: "ЧУВСТВУЕТСЯ КАК: ",
    humidity: "ВЛАЖНОСТЬ: "
  },
  be: {
    search: "пошук",
    lattitude: "Шыраты: ",
    longitude: "Даўгата: ",
    wind: "ВЕЦЕР: ",
    apparent: "АДЧУВАЕ, ЯК: ",
    humidity: "СВЕТА: "
  }
};
navigator.geolocation.getCurrentPosition(function (position) {
  long = position.coords.longitude;
  lat = position.coords.latitude;
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  document.getElementById('language-ru').addEventListener('click', function () {
    searchButton.textContent = language.ru.search;
    lattitude.textContent = language.ru.lattitude + latitudeLang;
    longitude.textContent = language.ru.longitude + longitudeLang;
    apparentTemp.textContent = language.ru.apparent + apparent;
    speedWind.textContent = language.ru.wind + wind + " м/с";
    humidity.textContent = language.ru.humidity + hum + " %";
    dateO.textContent = date1Ru;
    dateT.textContent = date2Ru;
    dateF.textContent = date3Ru;
    dateName.textContent = monthR;
    fetch(proxyUrl + "https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/".concat(lat, ",").concat(long, "?units=si&lang=ru")).then(function (responce) {
      return responce.clone().json();
    }).then(function (data) {
      descriptionTemp.textContent = data.currently.summary;
    });
  });
  document.getElementById('language').addEventListener('click', function () {
    searchButton.textContent = language.eng.search;
    lattitude.textContent = language.eng.lattitude + latitudeLang;
    longitude.textContent = language.eng.longitude + longitudeLang;
    apparentTemp.textContent = language.eng.apparent + apparent;
    speedWind.textContent = language.eng.wind + wind + " m/s";
    humidity.textContent = language.eng.humidity + hum + " %";
    dateO.textContent = date1Eng;
    dateT.textContent = date2Eng;
    dateF.textContent = date3Eng;
    dateName.textContent = monthE;
    fetch(proxyUrl + "https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/".concat(lat, ",").concat(long, "?units=si&lang=en")).then(function (responce) {
      return responce.clone().json();
    }).then(function (data) {
      descriptionTemp.textContent = data.currently.summary;
    });
  });
  document.getElementById('language-be').addEventListener('click', function () {
    searchButton.textContent = language.be.search;
    lattitude.textContent = language.be.lattitude + latitudeLang;
    longitude.textContent = language.be.longitude + longitudeLang;
    apparentTemp.textContent = language.be.apparent + apparent;
    speedWind.textContent = language.be.wind + wind + " м/с";
    humidity.textContent = language.be.humidity + hum + " %";
    dateO.textContent = date1Be;
    dateT.textContent = date2Be;
    dateF.textContent = date3Be;
    dateName.textContent = monthB;
    fetch(proxyUrl + "https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/".concat(lat, ",").concat(long, "?units=si&lang=be")).then(function (responce) {
      return responce.clone().json();
    }).then(function (data) {
      descriptionTemp.textContent = data.currently.summary;
    });
  });
});

/***/ }),

/***/ "./src/helper/map.js":
/*!***************************!*\
  !*** ./src/helper/map.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  var _long;

  var lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      _long = position.coords.longitude.toFixed(2);
      lat = position.coords.latitude.toFixed(2);
      mapboxgl.accessToken = 'pk.eyJ1Ijoia2lzYW9seWEiLCJhIjoiY2sza2R5em04MGk5aTNtbnQyZWR5Y3FuOSJ9.pmEwBnlQ9vKOOvf4mx5unA';
      var map = new mapboxgl.Map({
        container: 'map',
        // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [_long, lat],
        // starting position
        zoom: 10 // starting zoom

      });
    });
  }
});

/***/ }),

/***/ "./src/helper/preloader.js":
/*!*********************************!*\
  !*** ./src/helper/preloader.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadData() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 7000);
  });
}

loadData().then(function () {
  var preloaderEl = document.getElementById('preloader');
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
});

/***/ }),

/***/ "./src/helper/skycons.js":
/*!*******************************!*\
  !*** ./src/helper/skycons.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (global) {
  "use strict";
  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */

  var requestInterval, cancelInterval;

  (function () {
    var raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame,
        caf = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame;

    if (raf && caf) {
      requestInterval = function requestInterval(fn) {
        var handle = {
          value: null
        };

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function cancelInterval(handle) {
        caf(handle.value);
      };
    } else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  })();
  /* Catmull-rom spline stuffs. */

  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;
      for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;
        ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;
        for(j = 0; j !== n; ++j) {
        t = j / n;
          polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }
      polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );
      return polyline;
  }
    function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;
      for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }
      len /= n;
      var small = [],
        target = len,
        min = 0,
        max, t;
      small.push(polyline[0], polyline[1]);
      for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);
        if(max > target) {
        t = (target - min) / (max - min);
          small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );
          target += len;
      }
        min = max;
    }
      small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);
      return small;
  }
  */

  /* Define skycon things. */

  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */


  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);
    rmax -= rmin;
    circle(ctx, cx - s * rx, cy + c * ry + rmax * 0.5, rmin + (1 - c * 0.5) * rmax);
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for (i = 5; i--;) {
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
    }
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;
    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;
    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);
    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;
    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i,
        p,
        cos,
        sin;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for (i = 8; i--;) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;
    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    cx += c * b;
    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;
    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU * 7 / 12,
        i,
        p,
        x,
        y;
    ctx.fillStyle = color;

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = cx + (i - 1.5) / 1.5 * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;
    var a = cw * 0.1875,
        i,
        p,
        x,
        y;
    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + (i - 1.5) / 1.5 * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;
    var a = cw * 0.16,
        b = s * 0.75,
        u = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i,
        p,
        x,
        y;
    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (i = 4; i--;) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;
      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;
    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;
    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);
    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }
  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */


  var WIND_PATHS = [[-0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225, -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262, -0.6083, 0.0065, -0.5868, 0.0396, -0.5643, 0.0731, -0.5372, 0.1041, -0.5033, 0.1259, -0.4662, 0.1406, -0.4275, 0.1493, -0.3881, 0.1530, -0.3487, 0.1526, -0.3095, 0.1488, -0.2708, 0.1421, -0.2319, 0.1342, -0.1943, 0.1217, -0.1600, 0.1025, -0.1290, 0.0785, -0.1012, 0.0509, -0.0764, 0.0206, -0.0547, -0.0120, -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241, -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964, -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453, -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317, -0.2064, 0.0033, -0.1853, 0.0362, -0.1613, 0.0672, -0.1350, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397, -0.0332, 0.1512, 0.0053, 0.1580, 0.0442, 0.1624, 0.0833, 0.1636, 0.1224, 0.1615, 0.1613, 0.1565, 0.1999, 0.1500, 0.2378, 0.1402, 0.2749, 0.1279, 0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892, 0.4236, 0.0787, 0.4621, 0.0715, 0.5012, 0.0702, 0.5398, 0.0766, 0.5768, 0.0890, 0.6123, 0.1055, 0.6466, 0.1244, 0.6805, 0.1440, 0.7147, 0.1630, 0.7500, 0.1800], [-0.7500, 0.0000, -0.7033, 0.0195, -0.6569, 0.0399, -0.6104, 0.0600, -0.5634, 0.0789, -0.5155, 0.0954, -0.4667, 0.1089, -0.4174, 0.1206, -0.3676, 0.1299, -0.3174, 0.1365, -0.2669, 0.1398, -0.2162, 0.1391, -0.1658, 0.1347, -0.1157, 0.1271, -0.0661, 0.1169, -0.0170, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728, 0.1259, 0.0534, 0.1723, 0.0331, 0.2188, 0.0129, 0.2656, -0.0064, 0.3122, -0.0263, 0.3586, -0.0466, 0.4052, -0.0665, 0.4525, -0.0847, 0.5007, -0.1002, 0.5497, -0.1130, 0.5991, -0.1240, 0.6491, -0.1325, 0.6994, -0.1380, 0.7500, -0.1400]],
      WIND_OFFSETS = [{
    start: 0.36,
    end: 0.11
  }, {
    start: 0.56,
    end: 0.16
  }];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = t % 1 * TAU,
        e = Math.cos(d),
        f = Math.sin(d);
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.arc(x, y, a, d, d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;
    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end) % total,
        e = (t + index) % total,
        b,
        d,
        f,
        i;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (a < 1) {
      ctx.beginPath();
      a *= path.length / 2 - 1;
      b = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;
      ctx.moveTo(cx + (path[b - 2] * (1 - a) + path[b] * a) * cw, cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw);

      if (c < 1) {
        c *= path.length / 2 - 1;
        d = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for (i = b; i !== d; i += 2) {
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
        }

        ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
      } else for (i = b; i !== path.length; i += 2) {
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
      }

      ctx.stroke();
    } else if (c < 1) {
      ctx.beginPath();
      c *= path.length / 2 - 1;
      d = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;
      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for (i = 2; i !== d; i += 2) {
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
      }

      ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
      ctx.stroke();
    }

    if (e < 1) {
      e *= path.length / 2 - 1;
      f = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;
      leaf(ctx, t, cx + (path[f - 2] * (1 - e) + path[f] * e) * cw, cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw, cw, s, color);
    }
  }

  var Skycons = function Skycons(opts) {
    this.list = [];
    this.interval = null;
    this.color = opts && opts.color ? opts.color : "black";
    this.resizeClear = !!(opts && opts.resizeClear);
  };

  Skycons.CLEAR_DAY = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function (ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;
    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);
    t /= 5000;
    var a = Math.cos(t * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;
    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function _determineDrawingFunction(draw) {
      if (typeof draw === "string") draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;
      return draw;
    },
    add: function add(el, draw) {
      var obj;
      if (typeof el === "string") el = document.getElementById(el); // Does nothing if canvas name doesn't exists

      if (el === null || el === undefined) return;
      draw = this._determineDrawingFunction(draw); // Does nothing if the draw function isn't actually a function

      if (typeof draw !== "function") return;
      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };
      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function set(el, draw) {
      var i;
      if (typeof el === "string") el = document.getElementById(el);

      for (i = this.list.length; i--;) {
        if (this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }
      }

      this.add(el, draw);
    },
    remove: function remove(el) {
      var i;
      if (typeof el === "string") el = document.getElementById(el);

      for (i = this.list.length; i--;) {
        if (this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
      }
    },
    draw: function draw(obj, time) {
      var canvas = obj.context.canvas;
      if (this.resizeClear) canvas.width = canvas.width;else obj.context.clearRect(0, 0, canvas.width, canvas.height);
      obj.drawing(obj.context, time, this.color);
    },
    play: function play() {
      var self = this;
      this.pause();
      this.interval = requestInterval(function () {
        var now = Date.now(),
            i;

        for (i = self.list.length; i--;) {
          self.draw(self.list[i], now);
        }
      }, 1000 / 60);
    },
    pause: function pause() {
      if (this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  }; //Set weather

  window.addEventListener('load', function () {
    var _long;

    var lat;
    var temperatureDescription = document.querySelector('.temperature-description');
    var temperatureDegree = document.querySelector('.temperature-degree');
    var apparentTemp = document.querySelector('.apparent-temperature');
    var wind = document.querySelector('.speed-wind');
    var humidi = document.querySelector('.humidity');
    var longit = document.querySelector('.longitude');
    var latti = document.querySelector('.lattitude'); //tommorow

    var temperatureTomorrow = document.querySelector('.temperature-tomorrow-degree'); //tommorow1

    var temperatureTomorrow1 = document.querySelector('.temperature-tomorrow-degree1'); //tommorow2

    var temperatureTomorrow2 = document.querySelector('.temperature-tomorrow-degree2');

    if (navigator.geolocation) {
      var setIcons = function setIcons(icon, iconID) {
        var skycons = new Skycons({
          color: "rgb(234, 171, 240)"
        });
        var currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
      };

      navigator.geolocation.getCurrentPosition(function (position) {
        _long = position.coords.longitude;
        lat = position.coords.latitude;
        var api = "https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/".concat(lat, ",").concat(_long, "?units=si&lang=en");
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyUrl + api, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then(function (responce) {
          return responce.json();
        }).then(function (data) {
          var _data$currently = data.currently,
              temperature = _data$currently.temperature,
              summary = _data$currently.summary,
              icon = _data$currently.icon,
              apparentTemperature = _data$currently.apparentTemperature,
              windSpeed = _data$currently.windSpeed,
              humidity = _data$currently.humidity; //language count

          window['longitudeLang'] = data.longitude.toFixed(2).replace('.', '°');
          window['latitudeLang'] = data.latitude.toFixed(2).replace('.', '°');
          window['wind'] = Math.ceil(data.currently.windSpeed);
          window['apparent'] = Math.ceil(data.currently.apparentTemperature);
          window['hum'] = data.currently.humidity * 100;
          window['summar'] = data.currently.summary;
          document.getElementById('celsius').addEventListener('click', function () {
            temp.textContent = Math.ceil(data.currently.temperature);
            temp0.textContent = Math.ceil(temperatureTomorrowHourly);
            tempT.textContent = Math.ceil(temperatureTomorrowHourly1);
            tempF.textContent = Math.ceil(temperatureTomorrowHourly2);
            tempUnix.textContent = '°';
            tempUnix1.textContent = '°';
            tempUnix2.textContent = '°';
            tempUnix3.textContent = '°';
          }); //tommorow

          var temperatureTomorrowHourly = (data.daily.data[1].temperatureMax + data.daily.data[1].temperatureMin) / 2;
          var iconTom = data.daily.data[1].icon; //tommorow1

          var temperatureTomorrowHourly1 = (data.daily.data[2].temperatureMax + data.daily.data[2].temperatureMin) / 2;
          var iconTom1 = data.daily.data[2].icon; //tommorow2

          var temperatureTomorrowHourly2 = (data.daily.data[3].temperatureMax + data.daily.data[3].temperatureMin) / 2;
          var iconTom2 = data.daily.data[3].icon; //Set DOM

          temperatureDegree.textContent = Math.ceil(temperature);
          temperatureDescription.textContent = summary;
          apparentTemp.textContent = 'FEELS LIKE: ' + Math.ceil(apparentTemperature);
          wind.textContent = 'WIND: ' + Math.ceil(windSpeed) + ' m/s';
          humidi.textContent = 'HUMIDITY: ' + humidity * 100 + ' %';
          temperatureTomorrow.textContent = Math.ceil(temperatureTomorrowHourly);
          temperatureTomorrow1.textContent = Math.ceil(temperatureTomorrowHourly1);
          temperatureTomorrow2.textContent = Math.ceil(temperatureTomorrowHourly2);
          longit.textContent = 'Longitute: ' + data.longitude.toFixed(2).replace('.', '°');
          latti.textContent = 'Latitude: ' + data.latitude.toFixed(2).replace('.', '°'); //Set Icon

          setIcons(icon, document.querySelector('.icon'));
          setIcons(iconTom, document.querySelector('.icon-tomorrow'));
          setIcons(iconTom1, document.querySelector('.icon-tomorrow1'));
          setIcons(iconTom2, document.querySelector('.icon-tomorrow2'));
        });
      });
    }
  });
})(this);

var appKey = '7c406ea637b616db43ae38c301d6cb81';
var units = 'imperial';
var saerchMethod;
var fullCountry = {
  "BD": "Bangladesh",
  "BE": "Belgium",
  "BF": "Burkina Faso",
  "BG": "Bulgaria",
  "BA": "Bosnia and Herzegovina",
  "BB": "Barbados",
  "WF": "Wallis and Futuna",
  "BL": "Saint Barthelemy",
  "BM": "Bermuda",
  "BN": "Brunei",
  "BO": "Bolivia",
  "BH": "Bahrain",
  "BI": "Burundi",
  "BJ": "Benin",
  "BT": "Bhutan",
  "JM": "Jamaica",
  "BV": "Bouvet Island",
  "BW": "Botswana",
  "WS": "Samoa",
  "BQ": "Bonaire, Saint Eustatius and Saba ",
  "BR": "Brazil",
  "BS": "Bahamas",
  "JE": "Jersey",
  "BY": "Belarus",
  "BZ": "Belize",
  "RU": "Russia",
  "RW": "Rwanda",
  "RS": "Serbia",
  "TL": "East Timor",
  "RE": "Reunion",
  "TM": "Turkmenistan",
  "TJ": "Tajikistan",
  "RO": "Romania",
  "TK": "Tokelau",
  "GW": "Guinea-Bissau",
  "GU": "Guam",
  "GT": "Guatemala",
  "GS": "South Georgia and the South Sandwich Islands",
  "GR": "Greece",
  "GQ": "Equatorial Guinea",
  "GP": "Guadeloupe",
  "JP": "Japan",
  "GY": "Guyana",
  "GG": "Guernsey",
  "GF": "French Guiana",
  "GE": "Georgia",
  "GD": "Grenada",
  "GB": "United Kingdom",
  "GA": "Gabon",
  "SV": "El Salvador",
  "GN": "Guinea",
  "GM": "Gambia",
  "GL": "Greenland",
  "GI": "Gibraltar",
  "GH": "Ghana",
  "OM": "Oman",
  "TN": "Tunisia",
  "JO": "Jordan",
  "HR": "Croatia",
  "HT": "Haiti",
  "HU": "Hungary",
  "HK": "Hong Kong",
  "HN": "Honduras",
  "HM": "Heard Island and McDonald Islands",
  "VE": "Venezuela",
  "PR": "Puerto Rico",
  "PS": "Palestinian Territory",
  "PW": "Palau",
  "PT": "Portugal",
  "SJ": "Svalbard and Jan Mayen",
  "PY": "Paraguay",
  "IQ": "Iraq",
  "PA": "Panama",
  "PF": "French Polynesia",
  "PG": "Papua New Guinea",
  "PE": "Peru",
  "PK": "Pakistan",
  "PH": "Philippines",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PM": "Saint Pierre and Miquelon",
  "ZM": "Zambia",
  "EH": "Western Sahara",
  "EE": "Estonia",
  "EG": "Egypt",
  "ZA": "South Africa",
  "EC": "Ecuador",
  "IT": "Italy",
  "VN": "Vietnam",
  "SB": "Solomon Islands",
  "ET": "Ethiopia",
  "SO": "Somalia",
  "ZW": "Zimbabwe",
  "SA": "Saudi Arabia",
  "ES": "Spain",
  "ER": "Eritrea",
  "ME": "Montenegro",
  "MD": "Moldova",
  "MG": "Madagascar",
  "MF": "Saint Martin",
  "MA": "Morocco",
  "MC": "Monaco",
  "UZ": "Uzbekistan",
  "MM": "Myanmar",
  "ML": "Mali",
  "MO": "Macao",
  "MN": "Mongolia",
  "MH": "Marshall Islands",
  "MK": "Macedonia",
  "MU": "Mauritius",
  "MT": "Malta",
  "MW": "Malawi",
  "MV": "Maldives",
  "MQ": "Martinique",
  "MP": "Northern Mariana Islands",
  "MS": "Montserrat",
  "MR": "Mauritania",
  "IM": "Isle of Man",
  "UG": "Uganda",
  "TZ": "Tanzania",
  "MY": "Malaysia",
  "MX": "Mexico",
  "IL": "Israel",
  "FR": "France",
  "IO": "British Indian Ocean Territory",
  "SH": "Saint Helena",
  "FI": "Finland",
  "FJ": "Fiji",
  "FK": "Falkland Islands",
  "FM": "Micronesia",
  "FO": "Faroe Islands",
  "NI": "Nicaragua",
  "NL": "Netherlands",
  "NO": "Norway",
  "NA": "Namibia",
  "VU": "Vanuatu",
  "NC": "New Caledonia",
  "NE": "Niger",
  "NF": "Norfolk Island",
  "NG": "Nigeria",
  "NZ": "New Zealand",
  "NP": "Nepal",
  "NR": "Nauru",
  "NU": "Niue",
  "CK": "Cook Islands",
  "XK": "Kosovo",
  "CI": "Ivory Coast",
  "CH": "Switzerland",
  "CO": "Colombia",
  "CN": "China",
  "CM": "Cameroon",
  "CL": "Chile",
  "CC": "Cocos Islands",
  "CA": "Canada",
  "CG": "Republic of the Congo",
  "CF": "Central African Republic",
  "CD": "Democratic Republic of the Congo",
  "CZ": "Czech Republic",
  "CY": "Cyprus",
  "CX": "Christmas Island",
  "CR": "Costa Rica",
  "CW": "Curacao",
  "CV": "Cape Verde",
  "CU": "Cuba",
  "SZ": "Swaziland",
  "SY": "Syria",
  "SX": "Sint Maarten",
  "KG": "Kyrgyzstan",
  "KE": "Kenya",
  "SS": "South Sudan",
  "SR": "Suriname",
  "KI": "Kiribati",
  "KH": "Cambodia",
  "KN": "Saint Kitts and Nevis",
  "KM": "Comoros",
  "ST": "Sao Tome and Principe",
  "SK": "Slovakia",
  "KR": "South Korea",
  "SI": "Slovenia",
  "KP": "North Korea",
  "KW": "Kuwait",
  "SN": "Senegal",
  "SM": "San Marino",
  "SL": "Sierra Leone",
  "SC": "Seychelles",
  "KZ": "Kazakhstan",
  "KY": "Cayman Islands",
  "SG": "Singapore",
  "SE": "Sweden",
  "SD": "Sudan",
  "DO": "Dominican Republic",
  "DM": "Dominica",
  "DJ": "Djibouti",
  "DK": "Denmark",
  "VG": "British Virgin Islands",
  "DE": "Germany",
  "YE": "Yemen",
  "DZ": "Algeria",
  "US": "United States",
  "UY": "Uruguay",
  "YT": "Mayotte",
  "UM": "United States Minor Outlying Islands",
  "LB": "Lebanon",
  "LC": "Saint Lucia",
  "LA": "Laos",
  "TV": "Tuvalu",
  "TW": "Taiwan",
  "TT": "Trinidad and Tobago",
  "TR": "Turkey",
  "LK": "Sri Lanka",
  "LI": "Liechtenstein",
  "LV": "Latvia",
  "TO": "Tonga",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "LR": "Liberia",
  "LS": "Lesotho",
  "TH": "Thailand",
  "TF": "French Southern Territories",
  "TG": "Togo",
  "TD": "Chad",
  "TC": "Turks and Caicos Islands",
  "LY": "Libya",
  "VA": "Vatican",
  "VC": "Saint Vincent and the Grenadines",
  "AE": "United Arab Emirates",
  "AD": "Andorra",
  "AG": "Antigua and Barbuda",
  "AF": "Afghanistan",
  "AI": "Anguilla",
  "VI": "U.S. Virgin Islands",
  "IS": "Iceland",
  "IR": "Iran",
  "AM": "Armenia",
  "AL": "Albania",
  "AO": "Angola",
  "AQ": "Antarctica",
  "AS": "American Samoa",
  "AR": "Argentina",
  "AU": "Australia",
  "AT": "Austria",
  "AW": "Aruba",
  "IN": "India",
  "AX": "Aland Islands",
  "AZ": "Azerbaijan",
  "IE": "Ireland",
  "ID": "Indonesia",
  "UA": "Ukraine",
  "QA": "Qatar",
  "MZ": "Mozambique"
};

function getSearchMethod(searchTerm) {
  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) saerchMethod = 'zip';else saerchMethod = 'q';
}

function searchWeather(searchTerm) {
  getSearchMethod(searchTerm);
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + "http://api.openweathermap.org/data/2.5/weather?".concat(saerchMethod, "=").concat(searchTerm, "&APPID=").concat(appKey, "&units=").concat(units)).then(function (result) {
    return result.json();
  }).then(function (resulti) {
    init(resulti);
  });
}

function init(resultfromserver) {
  var _long2 = resultfromserver.coord.lon;
  var lat = resultfromserver.coord.lat;
  var temperatureDescription = document.querySelector('.temperature-description');
  var temperatureDegree = document.querySelector('.temperature-degree');
  var apparentTemp = document.querySelector('.apparent-temperature');
  var wind = document.querySelector('.speed-wind');
  var humidi = document.querySelector('.humidity');
  var longit = document.querySelector('.longitude');
  var latti = document.querySelector('.lattitude'); //tommorow

  var temperatureTomorrow = document.querySelector('.temperature-tomorrow-degree'); //tommorow1

  var temperatureTomorrow1 = document.querySelector('.temperature-tomorrow-degree1'); //tommorow2

  var temperatureTomorrow2 = document.querySelector('.temperature-tomorrow-degree2');
  var city = document.querySelector('.city-name');
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2lzYW9seWEiLCJhIjoiY2sza2R5em04MGk5aTNtbnQyZWR5Y3FuOSJ9.pmEwBnlQ9vKOOvf4mx5unA';
  var map = new mapboxgl.Map({
    container: 'map',
    // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [_long2, lat],
    // starting position
    zoom: 10 // starting zoom

  });
  city.textContent = resultfromserver.name + ', ';

  for (var i in fullCountry) {
    if (resultfromserver.sys.country == i) {
      document.querySelector('.country-name').innerHTML = fullCountry[i];
    }
  }

  var api = "https://api.darksky.net/forecast/5d8e47a0af37f840684d8c0e0564a77c/".concat(lat, ",").concat(_long2, "?units=si&lang=en");
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  fetch(proxyUrl + api).then(function (responce) {
    return responce.json();
  }).then(function (data) {
    var _data$currently2 = data.currently,
        temperature = _data$currently2.temperature,
        summary = _data$currently2.summary,
        apparentTemperature = _data$currently2.apparentTemperature,
        windSpeed = _data$currently2.windSpeed,
        humidity = _data$currently2.humidity; //tommorow

    var temperatureTomorrowHourly = (data.daily.data[1].temperatureMax + data.daily.data[1].temperatureMin) / 2; //tommorow1

    var temperatureTomorrowHourly1 = (data.daily.data[2].temperatureMax + data.daily.data[2].temperatureMin) / 2; //tommorow2

    var temperatureTomorrowHourly2 = (data.daily.data[3].temperatureMax + data.daily.data[3].temperatureMin) / 2; //Set DOM

    temperatureDegree.textContent = Math.ceil(temperature);
    temperatureDescription.textContent = summary;
    apparentTemp.textContent = 'FEELS LIKE: ' + Math.ceil(apparentTemperature);
    wind.textContent = 'WIND: ' + Math.ceil(windSpeed) + ' m/s';
    humidi.textContent = 'HUMIDITY: ' + humidity * 100 + ' %';
    temperatureTomorrow.textContent = Math.ceil(temperatureTomorrowHourly);
    temperatureTomorrow1.textContent = Math.ceil(temperatureTomorrowHourly1);
    temperatureTomorrow2.textContent = Math.ceil(temperatureTomorrowHourly2);
    longit.textContent = 'Longitute: ' + data.longitude.toFixed(2).replace('.', '°');
    latti.textContent = 'Latitude: ' + data.latitude.toFixed(2).replace('.', '°');
  });
}

document.getElementById('searchButton').addEventListener('click', function () {
  var searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) searchWeather(searchTerm);
});

/***/ }),

/***/ "./src/helper/time-date.js":
/*!*********************************!*\
  !*** ./src/helper/time-date.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.onload = function () {
  (function () {
    var date = new Date();
    var time = date.getHours() + ':' + date.getMinutes();
    document.getElementById('time-name').innerHTML = time;
    window.setTimeout(arguments.callee, 1000);
  })();

  (function () {
    var d = new Date();
    var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var monthRu = new Array('Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь');
    var monthBe = new Array('Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Май', 'Червень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань');
    var days = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat');
    var daysEng = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var daysLangRu = new Array('Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота');
    var daysLangBe = new Array('Нядзеля', 'Панядзелак', 'Аўторак', ' Серада', 'Чацвер', 'Пятніца', 'Субота');
    var daysR = new Array('ВСК', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ');
    var daysB = new Array('НЯ', 'ПА', 'АТ', 'СР', 'ЧЦ', 'ПТ', 'СБ'); //set language

    window['monthE'] = days[d.getDay()] + ' ' + d.getDate() + " " + month[d.getMonth()];
    window['monthR'] = daysR[d.getDay()] + ' ' + d.getDate() + " " + monthRu[d.getMonth()];
    window['monthB'] = daysB[d.getDay()] + ' ' + d.getDate() + " " + monthBe[d.getMonth()];
    window['monthBackground'] = month[d.getMonth()];
    document.getElementById('dateName').innerHTML = days[d.getDay()] + ' ' + d.getDate() + " " + month[d.getMonth()];
    document.querySelector('.date-name_tomorrow').innerHTML = daysEng[(d.getDay() + 1) % 7];
    document.querySelector('.date-name_tomorrow1').innerHTML = daysEng[(d.getDay() + 2) % 7];
    document.querySelector('.date-name_tomorrow2').innerHTML = daysEng[(d.getDay() + 3) % 7]; //date language

    window['date1Ru'] = daysLangRu[(d.getDay() + 1) % 7];
    window['date2Ru'] = daysLangRu[(d.getDay() + 2) % 7];
    window['date3Ru'] = daysLangRu[(d.getDay() + 3) % 7];
    window['date1Be'] = daysLangBe[(d.getDay() + 1) % 7];
    window['date2Be'] = daysLangBe[(d.getDay() + 2) % 7];
    window['date3Be'] = daysLangBe[(d.getDay() + 3) % 7];
    window['date1Eng'] = daysEng[(d.getDay() + 1) % 7];
    window['date2Eng'] = daysEng[(d.getDay() + 2) % 7];
    window['date3Eng'] = daysEng[(d.getDay() + 3) % 7];
  })();
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9idG4tdGVtcC1uYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvY291bnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVyL2dlb2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlci9za3ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvdGltZS1kYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/YzQwZCJdLCJuYW1lcyI6WyJidG5jbGljayIsImFjdGl2ZWJ0biIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzYWN0aXZlY2xyIiwiYWN0aXZlY2xyIiwibGQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvbmNsaWNrIiwiYWxlcnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dFEiLCJtb250aEJhY2tncm91bmQiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uVGVtcCIsInRleHRDb250ZW50IiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJpbWciLCJsaW5rcyIsImRvd25sb2FkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZWFyY2giLCJ2YWx1ZSIsImRlZ3JlZSIsImRlZ3JlZTAiLCJkZWdyZWVUIiwiZGVncmVlRiIsInRlbXAiLCJNYXRoIiwiY2VpbCIsInRlbXAwIiwidGVtcFQiLCJ0ZW1wRiIsInRlbXBVbml4IiwidGVtcFVuaXgxIiwidGVtcFVuaXgyIiwidGVtcFVuaXgzIiwiZnVsbENvdW50cnkiLCJwcm94eVVybCIsInRhcmdldFVybCIsInJlc3AiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiY2l0eSIsImNvdW50cnkiLCJjb25zb2xlIiwiZXJyb3IiLCJvbmxvYWQiLCJzdGFydFBvcyIsImdlb1N1Y2Nlc3MiLCJwb3NpdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwidGV4dENvdW50cnkiLCJsYW5ndWFnZSIsImVuZyIsImxhdHRpdHVkZSIsImxvbmdpdHVkZSIsIndpbmQiLCJhcHBhcmVudCIsImh1bWlkaXR5IiwicnUiLCJiZSIsImxvbmciLCJjb29yZHMiLCJsYXQiLCJsYXRpdHVkZSIsInNlYXJjaEJ1dHRvbiIsImxhdGl0dWRlTGFuZyIsImxvbmdpdHVkZUxhbmciLCJhcHBhcmVudFRlbXAiLCJzcGVlZFdpbmQiLCJodW0iLCJkYXRlTyIsImRhdGUxUnUiLCJkYXRlVCIsImRhdGUyUnUiLCJkYXRlRiIsImRhdGUzUnUiLCJkYXRlTmFtZSIsIm1vbnRoUiIsInJlc3BvbmNlIiwiY2xvbmUiLCJjdXJyZW50bHkiLCJzdW1tYXJ5IiwiZGF0ZTFFbmciLCJkYXRlMkVuZyIsImRhdGUzRW5nIiwibW9udGhFIiwiZGF0ZTFCZSIsImRhdGUyQmUiLCJkYXRlM0JlIiwibW9udGhCIiwidG9GaXhlZCIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJjZW50ZXIiLCJ6b29tIiwibG9hZERhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJwcmVsb2FkZXJFbCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdsb2JhbCIsInJlcXVlc3RJbnRlcnZhbCIsImNhbmNlbEludGVydmFsIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FmIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxBbmltYXRpb25GcmFtZSIsImZuIiwiaGFuZGxlIiwibG9vcCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIktFWUZSQU1FIiwiU1RST0tFIiwiVEFVIiwiUEkiLCJUV09fT1ZFUl9TUVJUXzIiLCJzcXJ0IiwiY2lyY2xlIiwiY3R4IiwieCIsInkiLCJyIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsImxpbmUiLCJheCIsImF5IiwiYngiLCJieSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInB1ZmYiLCJ0IiwiY3giLCJjeSIsInJ4IiwicnkiLCJybWluIiwicm1heCIsImMiLCJjb3MiLCJzIiwic2luIiwicHVmZnMiLCJjbG91ZCIsImN3IiwiY29sb3IiLCJhIiwiYiIsImQiLCJmaWxsU3R5bGUiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJzdW4iLCJwIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtb29uIiwiY2xvc2VQYXRoIiwicmFpbiIsInNsZWV0IiwiZmxvb3IiLCJzbm93IiwidSIsInV4IiwidXkiLCJ2IiwidngiLCJ2eSIsInciLCJ3eCIsInd5IiwiZm9nYmFuayIsIldJTkRfUEFUSFMiLCJXSU5EX09GRlNFVFMiLCJzdGFydCIsImVuZCIsImxlYWYiLCJlIiwiZiIsInN3b29zaCIsImluZGV4IiwidG90YWwiLCJwYXRoIiwibGVuZ3RoIiwiU2t5Y29ucyIsIm9wdHMiLCJsaXN0IiwiaW50ZXJ2YWwiLCJyZXNpemVDbGVhciIsIkNMRUFSX0RBWSIsImNhbnZhcyIsIndpZHRoIiwiaCIsImhlaWdodCIsIm1pbiIsIkNMRUFSX05JR0hUIiwiUEFSVExZX0NMT1VEWV9EQVkiLCJQQVJUTFlfQ0xPVURZX05JR0hUIiwiQ0xPVURZIiwiUkFJTiIsIlNMRUVUIiwiU05PVyIsIldJTkQiLCJGT0ciLCJrIiwibiIsInByb3RvdHlwZSIsIl9kZXRlcm1pbmVEcmF3aW5nRnVuY3Rpb24iLCJkcmF3IiwidG9VcHBlckNhc2UiLCJyZXBsYWNlIiwiZWwiLCJvYmoiLCJ1bmRlZmluZWQiLCJlbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmF3aW5nIiwicHVzaCIsInNldCIsInNwbGljZSIsInRpbWUiLCJjbGVhclJlY3QiLCJwbGF5Iiwic2VsZiIsInBhdXNlIiwibm93IiwiRGF0ZSIsInRlbXBlcmF0dXJlRGVzY3JpcHRpb24iLCJ0ZW1wZXJhdHVyZURlZ3JlZSIsImh1bWlkaSIsImxvbmdpdCIsImxhdHRpIiwidGVtcGVyYXR1cmVUb21vcnJvdyIsInRlbXBlcmF0dXJlVG9tb3Jyb3cxIiwidGVtcGVyYXR1cmVUb21vcnJvdzIiLCJzZXRJY29ucyIsImljb24iLCJpY29uSUQiLCJza3ljb25zIiwiY3VycmVudEljb24iLCJhcGkiLCJoZWFkZXJzIiwidGVtcGVyYXR1cmUiLCJhcHBhcmVudFRlbXBlcmF0dXJlIiwid2luZFNwZWVkIiwidGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseSIsInRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkxIiwidGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseTIiLCJkYWlseSIsInRlbXBlcmF0dXJlTWF4IiwidGVtcGVyYXR1cmVNaW4iLCJpY29uVG9tIiwiaWNvblRvbTEiLCJpY29uVG9tMiIsImFwcEtleSIsInVuaXRzIiwic2FlcmNoTWV0aG9kIiwiZ2V0U2VhcmNoTWV0aG9kIiwic2VhcmNoVGVybSIsIk51bWJlciIsInBhcnNlSW50Iiwic2VhcmNoV2VhdGhlciIsInJlc3VsdCIsInJlc3VsdGkiLCJpbml0IiwicmVzdWx0ZnJvbXNlcnZlciIsImNvb3JkIiwibG9uIiwibmFtZSIsInN5cyIsImRhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJhcmd1bWVudHMiLCJjYWxsZWUiLCJtb250aCIsIkFycmF5IiwibW9udGhSdSIsIm1vbnRoQmUiLCJkYXlzIiwiZGF5c0VuZyIsImRheXNMYW5nUnUiLCJkYXlzTGFuZ0JlIiwiZGF5c1IiLCJkYXlzQiIsImdldERheSIsImdldERhdGUiLCJnZXRNb250aCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LENBQXBCLENBQTlCO0FBQ0FuVCxVQUFNLENBQUMsU0FBRCxDQUFOLEdBQW9CZ1QsVUFBVSxDQUFDLENBQUN4SSxDQUFDLENBQUMySSxNQUFGLEtBQWEsQ0FBZCxJQUFtQixDQUFwQixDQUE5QjtBQUNBblQsVUFBTSxDQUFDLFVBQUQsQ0FBTixHQUFxQjhTLE9BQU8sQ0FBQyxDQUFDdEksQ0FBQyxDQUFDMkksTUFBRixLQUFhLENBQWQsSUFBbUIsQ0FBcEIsQ0FBNUI7QUFDQW5ULFVBQU0sQ0FBQyxVQUFELENBQU4sR0FBcUI4UyxPQUFPLENBQUMsQ0FBQ3RJLENBQUMsQ0FBQzJJLE1BQUYsS0FBYSxDQUFkLElBQW1CLENBQXBCLENBQTVCO0FBQ0FuVCxVQUFNLENBQUMsVUFBRCxDQUFOLEdBQXFCOFMsT0FBTyxDQUFDLENBQUN0SSxDQUFDLENBQUMySSxNQUFGLEtBQWEsQ0FBZCxJQUFtQixDQUFwQixDQUE1QjtBQUNMLEdBaENEO0FBaUNILENBeENELEM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5pbXBvcnQgJy4vaGVscGVyL2FuaW1hdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9oZWxwZXIvZ2VvbG9jYXRpb24uanMnO1xyXG5pbXBvcnQgJy4vaGVscGVyL2NvdW50cnkuanMnO1xyXG5pbXBvcnQgJy4vaGVscGVyL3ByZWxvYWRlcic7XHJcbmltcG9ydCAnLi9oZWxwZXIvc2t5Y29ucy5qcyc7XHJcbmltcG9ydCAnLi9oZWxwZXIvdGltZS1kYXRlLmpzJztcclxuaW1wb3J0ICcuL2hlbHBlci9iYWNrZ3JvdW5kLmpzJztcclxuaW1wb3J0ICcuL2hlbHBlci9tYXAuanMnO1xyXG5pbXBvcnQgJy4vaGVscGVyL2xhbmd1YWdlJztcclxuaW1wb3J0ICcuL2hlbHBlci9nZW9sb2NhdGlvbi5qcyc7XHJcbmltcG9ydCAnLi9oZWxwZXIvYnRuLXRlbXAtbmFtZSc7XHJcblxyXG5cclxuXHJcbiIsImZ1bmN0aW9uIGJ0bmNsaWNrKCkge1xyXG4gICAgYWN0aXZlYnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRpc2FjdGl2ZWNscjtcclxuICAgIChhY3RpdmVidG4gPSB0aGlzKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3RpdmVjbHI7XHJcbn1cclxudmFyIGRpc2FjdGl2ZWNsciA9IFwiI0Y2RjZmNlwiO1xyXG52YXIgYWN0aXZlY2xyID0gXCIjZmMwNzA3XCI7XHJcbnZhciBhY3RpdmVidG4gPSBudWxsO1xyXG5mdW5jdGlvbiBsZCgpe1xyXG4gICAgYWN0aXZlYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiMVwiKTtcclxuICAgIGZvcih2YXIgaT0xOyBpPDU7ICsraSkgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJcIitpKS5vbmNsaWNrPWJ0bmNsaWNrO1xyXG4gICAgYWxlcnQoXCJyZWFkeVwiKTtcclxufSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PiB7XHJcbiAgICB2YXIgdGV4dFEgPSBtb250aEJhY2tncm91bmQ7XHJcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRlbXAudGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/cXVlcnk9d2VhdGhlciske3RleHRRfSske2Rlc2NyaXB0aW9ufSZjbGllbnRfaWQ9ZTY0YWZiZmQ3ZmJjOWJiZGQxYzY0YzcxMTc5YWYxZmYzNTk2ODYwYmZlYmJhNDc1MmY4NjVjMWRkNWJkNmJhZmA7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBkYXRhLmxpbmtzLmRvd25sb2FkO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWd9KWA7XHJcbiAgICAgICAgfSk7IFxyXG59KTsgXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0JykudmFsdWU7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3Bob3Rvcy9yYW5kb20/cXVlcnk9d2VhdGhlciske3NlYXJjaH0mY2xpZW50X2lkPWU2NGFmYmZkN2ZiYzliYmRkMWM2NGM3MTE3OWFmMWZmMzU5Njg2MGJmZWJiYTQ3NTJmODY1YzFkZDViZDZiYWZgO1xyXG4gICAgZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW1nID0gZGF0YS5saW5rcy5kb3dubG9hZDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1nfSlgO1xyXG4gICAgICAgIH0pOyAgIFxyXG59KVxyXG5cclxuIiwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhaHJlbmhlaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBkZWdyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpLnRleHRDb250ZW50O1xyXG4gICAgbGV0IGRlZ3JlZTAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcDAnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCBkZWdyZWVUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXBUJykudGV4dENvbnRlbnQ7XHJcbiAgICBsZXQgZGVncmVlRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wRicpLnRleHRDb250ZW50O1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGguY2VpbChkZWdyZWUgKiA5IC8gNSArIDMyKTtcclxuICAgIHRlbXAwLnRleHRDb250ZW50ID0gTWF0aC5jZWlsKGRlZ3JlZTAgKiA5IC8gNSArIDMyKTtcclxuICAgIHRlbXBULnRleHRDb250ZW50ID0gTWF0aC5jZWlsKGRlZ3JlZVQgKiA5IC8gNSArIDMyKTtcclxuICAgIHRlbXBGLnRleHRDb250ZW50ID0gTWF0aC5jZWlsKGRlZ3JlZUYgKiA5IC8gNSArIDMyKTtcclxuICAgIHRlbXBVbml4LnRleHRDb250ZW50ID0gJ2YnO1xyXG4gICAgdGVtcFVuaXgxLnRleHRDb250ZW50ID0gJ2YnO1xyXG4gICAgdGVtcFVuaXgyLnRleHRDb250ZW50ID0gJ2YnO1xyXG4gICAgdGVtcFVuaXgzLnRleHRDb250ZW50ID0gJ2YnO1xyXG59KVxyXG5cclxuIiwiY29uc3QgZnVsbENvdW50cnkgPSB7XCJCRFwiOiBcIkJhbmdsYWRlc2hcIiwgXCJCRVwiOiBcIkJlbGdpdW1cIiwgXCJCRlwiOiBcIkJ1cmtpbmEgRmFzb1wiLCBcIkJHXCI6IFwiQnVsZ2FyaWFcIiwgXCJCQVwiOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJCQlwiOiBcIkJhcmJhZG9zXCIsIFwiV0ZcIjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBcIkJMXCI6IFwiU2FpbnQgQmFydGhlbGVteVwiLCBcIkJNXCI6IFwiQmVybXVkYVwiLCBcIkJOXCI6IFwiQnJ1bmVpXCIsIFwiQk9cIjogXCJCb2xpdmlhXCIsIFwiQkhcIjogXCJCYWhyYWluXCIsIFwiQklcIjogXCJCdXJ1bmRpXCIsIFwiQkpcIjogXCJCZW5pblwiLCBcIkJUXCI6IFwiQmh1dGFuXCIsIFwiSk1cIjogXCJKYW1haWNhXCIsIFwiQlZcIjogXCJCb3V2ZXQgSXNsYW5kXCIsIFwiQldcIjogXCJCb3Rzd2FuYVwiLCBcIldTXCI6IFwiU2Ftb2FcIiwgXCJCUVwiOiBcIkJvbmFpcmUsIFNhaW50IEV1c3RhdGl1cyBhbmQgU2FiYSBcIiwgXCJCUlwiOiBcIkJyYXppbFwiLCBcIkJTXCI6IFwiQmFoYW1hc1wiLCBcIkpFXCI6IFwiSmVyc2V5XCIsIFwiQllcIjogXCJCZWxhcnVzXCIsIFwiQlpcIjogXCJCZWxpemVcIiwgXCJSVVwiOiBcIlJ1c3NpYVwiLCBcIlJXXCI6IFwiUndhbmRhXCIsIFwiUlNcIjogXCJTZXJiaWFcIiwgXCJUTFwiOiBcIkVhc3QgVGltb3JcIiwgXCJSRVwiOiBcIlJldW5pb25cIiwgXCJUTVwiOiBcIlR1cmttZW5pc3RhblwiLCBcIlRKXCI6IFwiVGFqaWtpc3RhblwiLCBcIlJPXCI6IFwiUm9tYW5pYVwiLCBcIlRLXCI6IFwiVG9rZWxhdVwiLCBcIkdXXCI6IFwiR3VpbmVhLUJpc3NhdVwiLCBcIkdVXCI6IFwiR3VhbVwiLCBcIkdUXCI6IFwiR3VhdGVtYWxhXCIsIFwiR1NcIjogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBcIkdSXCI6IFwiR3JlZWNlXCIsIFwiR1FcIjogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcIkdQXCI6IFwiR3VhZGVsb3VwZVwiLCBcIkpQXCI6IFwiSmFwYW5cIiwgXCJHWVwiOiBcIkd1eWFuYVwiLCBcIkdHXCI6IFwiR3Vlcm5zZXlcIiwgXCJHRlwiOiBcIkZyZW5jaCBHdWlhbmFcIiwgXCJHRVwiOiBcIkdlb3JnaWFcIiwgXCJHRFwiOiBcIkdyZW5hZGFcIiwgXCJHQlwiOiBcIlVuaXRlZCBLaW5nZG9tXCIsIFwiR0FcIjogXCJHYWJvblwiLCBcIlNWXCI6IFwiRWwgU2FsdmFkb3JcIiwgXCJHTlwiOiBcIkd1aW5lYVwiLCBcIkdNXCI6IFwiR2FtYmlhXCIsIFwiR0xcIjogXCJHcmVlbmxhbmRcIiwgXCJHSVwiOiBcIkdpYnJhbHRhclwiLCBcIkdIXCI6IFwiR2hhbmFcIiwgXCJPTVwiOiBcIk9tYW5cIiwgXCJUTlwiOiBcIlR1bmlzaWFcIiwgXCJKT1wiOiBcIkpvcmRhblwiLCBcIkhSXCI6IFwiQ3JvYXRpYVwiLCBcIkhUXCI6IFwiSGFpdGlcIiwgXCJIVVwiOiBcIkh1bmdhcnlcIiwgXCJIS1wiOiBcIkhvbmcgS29uZ1wiLCBcIkhOXCI6IFwiSG9uZHVyYXNcIiwgXCJITVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBcIlZFXCI6IFwiVmVuZXp1ZWxhXCIsIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLCBcIlBTXCI6IFwiUGFsZXN0aW5pYW4gVGVycml0b3J5XCIsIFwiUFdcIjogXCJQYWxhdVwiLCBcIlBUXCI6IFwiUG9ydHVnYWxcIiwgXCJTSlwiOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgXCJQWVwiOiBcIlBhcmFndWF5XCIsIFwiSVFcIjogXCJJcmFxXCIsIFwiUEFcIjogXCJQYW5hbWFcIiwgXCJQRlwiOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgXCJQR1wiOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgXCJQRVwiOiBcIlBlcnVcIiwgXCJQS1wiOiBcIlBha2lzdGFuXCIsIFwiUEhcIjogXCJQaGlsaXBwaW5lc1wiLCBcIlBOXCI6IFwiUGl0Y2Fpcm5cIiwgXCJQTFwiOiBcIlBvbGFuZFwiLCBcIlBNXCI6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBcIlpNXCI6IFwiWmFtYmlhXCIsIFwiRUhcIjogXCJXZXN0ZXJuIFNhaGFyYVwiLCBcIkVFXCI6IFwiRXN0b25pYVwiLCBcIkVHXCI6IFwiRWd5cHRcIiwgXCJaQVwiOiBcIlNvdXRoIEFmcmljYVwiLCBcIkVDXCI6IFwiRWN1YWRvclwiLCBcIklUXCI6IFwiSXRhbHlcIiwgXCJWTlwiOiBcIlZpZXRuYW1cIiwgXCJTQlwiOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBcIkVUXCI6IFwiRXRoaW9waWFcIiwgXCJTT1wiOiBcIlNvbWFsaWFcIiwgXCJaV1wiOiBcIlppbWJhYndlXCIsIFwiU0FcIjogXCJTYXVkaSBBcmFiaWFcIiwgXCJFU1wiOiBcIlNwYWluXCIsIFwiRVJcIjogXCJFcml0cmVhXCIsIFwiTUVcIjogXCJNb250ZW5lZ3JvXCIsIFwiTURcIjogXCJNb2xkb3ZhXCIsIFwiTUdcIjogXCJNYWRhZ2FzY2FyXCIsIFwiTUZcIjogXCJTYWludCBNYXJ0aW5cIiwgXCJNQVwiOiBcIk1vcm9jY29cIiwgXCJNQ1wiOiBcIk1vbmFjb1wiLCBcIlVaXCI6IFwiVXpiZWtpc3RhblwiLCBcIk1NXCI6IFwiTXlhbm1hclwiLCBcIk1MXCI6IFwiTWFsaVwiLCBcIk1PXCI6IFwiTWFjYW9cIiwgXCJNTlwiOiBcIk1vbmdvbGlhXCIsIFwiTUhcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiTUtcIjogXCJNYWNlZG9uaWFcIiwgXCJNVVwiOiBcIk1hdXJpdGl1c1wiLCBcIk1UXCI6IFwiTWFsdGFcIiwgXCJNV1wiOiBcIk1hbGF3aVwiLCBcIk1WXCI6IFwiTWFsZGl2ZXNcIiwgXCJNUVwiOiBcIk1hcnRpbmlxdWVcIiwgXCJNUFwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBcIk1TXCI6IFwiTW9udHNlcnJhdFwiLCBcIk1SXCI6IFwiTWF1cml0YW5pYVwiLCBcIklNXCI6IFwiSXNsZSBvZiBNYW5cIiwgXCJVR1wiOiBcIlVnYW5kYVwiLCBcIlRaXCI6IFwiVGFuemFuaWFcIiwgXCJNWVwiOiBcIk1hbGF5c2lhXCIsIFwiTVhcIjogXCJNZXhpY29cIiwgXCJJTFwiOiBcIklzcmFlbFwiLCBcIkZSXCI6IFwiRnJhbmNlXCIsIFwiSU9cIjogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgXCJTSFwiOiBcIlNhaW50IEhlbGVuYVwiLCBcIkZJXCI6IFwiRmlubGFuZFwiLCBcIkZKXCI6IFwiRmlqaVwiLCBcIkZLXCI6IFwiRmFsa2xhbmQgSXNsYW5kc1wiLCBcIkZNXCI6IFwiTWljcm9uZXNpYVwiLCBcIkZPXCI6IFwiRmFyb2UgSXNsYW5kc1wiLCBcIk5JXCI6IFwiTmljYXJhZ3VhXCIsIFwiTkxcIjogXCJOZXRoZXJsYW5kc1wiLCBcIk5PXCI6IFwiTm9yd2F5XCIsIFwiTkFcIjogXCJOYW1pYmlhXCIsIFwiVlVcIjogXCJWYW51YXR1XCIsIFwiTkNcIjogXCJOZXcgQ2FsZWRvbmlhXCIsIFwiTkVcIjogXCJOaWdlclwiLCBcIk5GXCI6IFwiTm9yZm9sayBJc2xhbmRcIiwgXCJOR1wiOiBcIk5pZ2VyaWFcIiwgXCJOWlwiOiBcIk5ldyBaZWFsYW5kXCIsIFwiTlBcIjogXCJOZXBhbFwiLCBcIk5SXCI6IFwiTmF1cnVcIiwgXCJOVVwiOiBcIk5pdWVcIiwgXCJDS1wiOiBcIkNvb2sgSXNsYW5kc1wiLCBcIlhLXCI6IFwiS29zb3ZvXCIsIFwiQ0lcIjogXCJJdm9yeSBDb2FzdFwiLCBcIkNIXCI6IFwiU3dpdHplcmxhbmRcIiwgXCJDT1wiOiBcIkNvbG9tYmlhXCIsIFwiQ05cIjogXCJDaGluYVwiLCBcIkNNXCI6IFwiQ2FtZXJvb25cIiwgXCJDTFwiOiBcIkNoaWxlXCIsIFwiQ0NcIjogXCJDb2NvcyBJc2xhbmRzXCIsIFwiQ0FcIjogXCJDYW5hZGFcIiwgXCJDR1wiOiBcIlJlcHVibGljIG9mIHRoZSBDb25nb1wiLCBcIkNGXCI6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIFwiQ0RcIjogXCJEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nb1wiLCBcIkNaXCI6IFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJDWVwiOiBcIkN5cHJ1c1wiLCBcIkNYXCI6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBcIkNSXCI6IFwiQ29zdGEgUmljYVwiLCBcIkNXXCI6IFwiQ3VyYWNhb1wiLCBcIkNWXCI6IFwiQ2FwZSBWZXJkZVwiLCBcIkNVXCI6IFwiQ3ViYVwiLCBcIlNaXCI6IFwiU3dhemlsYW5kXCIsIFwiU1lcIjogXCJTeXJpYVwiLCBcIlNYXCI6IFwiU2ludCBNYWFydGVuXCIsIFwiS0dcIjogXCJLeXJneXpzdGFuXCIsIFwiS0VcIjogXCJLZW55YVwiLCBcIlNTXCI6IFwiU291dGggU3VkYW5cIiwgXCJTUlwiOiBcIlN1cmluYW1lXCIsIFwiS0lcIjogXCJLaXJpYmF0aVwiLCBcIktIXCI6IFwiQ2FtYm9kaWFcIiwgXCJLTlwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBcIktNXCI6IFwiQ29tb3Jvc1wiLCBcIlNUXCI6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIFwiU0tcIjogXCJTbG92YWtpYVwiLCBcIktSXCI6IFwiU291dGggS29yZWFcIiwgXCJTSVwiOiBcIlNsb3ZlbmlhXCIsIFwiS1BcIjogXCJOb3J0aCBLb3JlYVwiLCBcIktXXCI6IFwiS3V3YWl0XCIsIFwiU05cIjogXCJTZW5lZ2FsXCIsIFwiU01cIjogXCJTYW4gTWFyaW5vXCIsIFwiU0xcIjogXCJTaWVycmEgTGVvbmVcIiwgXCJTQ1wiOiBcIlNleWNoZWxsZXNcIiwgXCJLWlwiOiBcIkthemFraHN0YW5cIiwgXCJLWVwiOiBcIkNheW1hbiBJc2xhbmRzXCIsIFwiU0dcIjogXCJTaW5nYXBvcmVcIiwgXCJTRVwiOiBcIlN3ZWRlblwiLCBcIlNEXCI6IFwiU3VkYW5cIiwgXCJET1wiOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBcIkRNXCI6IFwiRG9taW5pY2FcIiwgXCJESlwiOiBcIkRqaWJvdXRpXCIsIFwiREtcIjogXCJEZW5tYXJrXCIsIFwiVkdcIjogXCJCcml0aXNoIFZpcmdpbiBJc2xhbmRzXCIsIFwiREVcIjogXCJHZXJtYW55XCIsIFwiWUVcIjogXCJZZW1lblwiLCBcIkRaXCI6IFwiQWxnZXJpYVwiLCBcIlVTXCI6IFwiVW5pdGVkIFN0YXRlc1wiLCBcIlVZXCI6IFwiVXJ1Z3VheVwiLCBcIllUXCI6IFwiTWF5b3R0ZVwiLCBcIlVNXCI6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIFwiTEJcIjogXCJMZWJhbm9uXCIsIFwiTENcIjogXCJTYWludCBMdWNpYVwiLCBcIkxBXCI6IFwiTGFvc1wiLCBcIlRWXCI6IFwiVHV2YWx1XCIsIFwiVFdcIjogXCJUYWl3YW5cIiwgXCJUVFwiOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgXCJUUlwiOiBcIlR1cmtleVwiLCBcIkxLXCI6IFwiU3JpIExhbmthXCIsIFwiTElcIjogXCJMaWVjaHRlbnN0ZWluXCIsIFwiTFZcIjogXCJMYXR2aWFcIiwgXCJUT1wiOiBcIlRvbmdhXCIsIFwiTFRcIjogXCJMaXRodWFuaWFcIiwgXCJMVVwiOiBcIkx1eGVtYm91cmdcIiwgXCJMUlwiOiBcIkxpYmVyaWFcIiwgXCJMU1wiOiBcIkxlc290aG9cIiwgXCJUSFwiOiBcIlRoYWlsYW5kXCIsIFwiVEZcIjogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgXCJUR1wiOiBcIlRvZ29cIiwgXCJURFwiOiBcIkNoYWRcIiwgXCJUQ1wiOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBcIkxZXCI6IFwiTGlieWFcIiwgXCJWQVwiOiBcIlZhdGljYW5cIiwgXCJWQ1wiOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIFwiQUVcIjogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBcIkFEXCI6IFwiQW5kb3JyYVwiLCBcIkFHXCI6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcIkFGXCI6IFwiQWZnaGFuaXN0YW5cIiwgXCJBSVwiOiBcIkFuZ3VpbGxhXCIsIFwiVklcIjogXCJVLlMuIFZpcmdpbiBJc2xhbmRzXCIsIFwiSVNcIjogXCJJY2VsYW5kXCIsIFwiSVJcIjogXCJJcmFuXCIsIFwiQU1cIjogXCJBcm1lbmlhXCIsIFwiQUxcIjogXCJBbGJhbmlhXCIsIFwiQU9cIjogXCJBbmdvbGFcIiwgXCJBUVwiOiBcIkFudGFyY3RpY2FcIiwgXCJBU1wiOiBcIkFtZXJpY2FuIFNhbW9hXCIsIFwiQVJcIjogXCJBcmdlbnRpbmFcIiwgXCJBVVwiOiBcIkF1c3RyYWxpYVwiLCBcIkFUXCI6IFwiQXVzdHJpYVwiLCBcIkFXXCI6IFwiQXJ1YmFcIiwgXCJJTlwiOiBcIkluZGlhXCIsIFwiQVhcIjogXCJBbGFuZCBJc2xhbmRzXCIsIFwiQVpcIjogXCJBemVyYmFpamFuXCIsIFwiSUVcIjogXCJJcmVsYW5kXCIsIFwiSURcIjogXCJJbmRvbmVzaWFcIiwgXCJVQVwiOiBcIlVrcmFpbmVcIiwgXCJRQVwiOiBcIlFhdGFyXCIsIFwiTVpcIjogXCJNb3phbWJpcXVlXCJ9XHJcblxyXG52YXIgcHJveHlVcmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJyxcclxuICAgIHRhcmdldFVybCA9ICdodHRwczovL2lwaW5mby5pby9qc29uP3Rva2VuPWM3YmE5OGFhMzI2NzRhJ1xyXG5mZXRjaChwcm94eVVybCArIHRhcmdldFVybClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcCkgeyByZXR1cm4gcmVzcC5qc29uKCkgfSlcclxuICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHktbmFtZScpLmlubmVySFRNTCA9IGRhdGEuY2l0eSArICcsJztcclxuICAgIGZvciAodmFyIGkgaW4gZnVsbENvdW50cnkpIHtcclxuICAgICAgICBpZihkYXRhLmNvdW50cnkgPT0gaSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1uYW1lJykuaW5uZXJIVE1MID0gZnVsbENvdW50cnlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdzZXJ2ZXIgbm90IGRvd25sb2FkaW5nJylcclxuICB9KTsiLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3RhcnRQb3M7XHJcbiAgICB2YXIgZ2VvU3VjY2VzcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICAgIHN0YXJ0UG9zID0gcG9zaXRpb247XHJcblxyXG4gICAgfTtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZ2VvU3VjY2Vzcyk7XHJcbiAgfTsiLCJ2YXIgdGV4dFEgPSBjaXR5LnRleHRDb250ZW50O1xyXG52YXIgdGV4dENvdW50cnkgPSBjb3VudHJ5LnRleHRDb250ZW50O1xyXG52YXIgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRlbXAudGV4dENvbnRlbnQ7XHJcblxyXG52YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBlbmc6IHtcclxuICAgICAgICBzZWFyY2g6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgbGF0dGl0dWRlOiBcIkxhdGl0dWRlOiBcIixcclxuICAgICAgICBsb25naXR1ZGU6IFwiTG9uZ2l0dXRlOiBcIixcclxuICAgICAgICB3aW5kOiBcIldJTkQ6IFwiLFxyXG4gICAgICAgIGFwcGFyZW50OiBcIkZFRUxTIExJS0U6IFwiLFxyXG4gICAgICAgIGh1bWlkaXR5OiBcIkhVTUlESVRZOiBcIlxyXG4gICAgfSxcclxuICAgIHJ1OiB7XHJcbiAgICAgICAgc2VhcmNoOiBcItC/0L7QuNGB0LpcIixcclxuICAgICAgICBsYXR0aXR1ZGU6IFwi0KjQuNGA0L7RgtCwOiBcIixcclxuICAgICAgICBsb25naXR1ZGU6IFwi0JTQvtC70LPQvtGC0LA6IFwiLFxyXG4gICAgICAgIHdpbmQ6IFwi0JLQldCi0JXQoDogXCIsXHJcbiAgICAgICAgYXBwYXJlbnQ6IFwi0KfQo9CS0KHQotCS0KPQldCi0KHQryDQmtCQ0Jo6IFwiLFxyXG4gICAgICAgIGh1bWlkaXR5OiBcItCS0JvQkNCW0J3QntCh0KLQrDogXCJcclxuICAgIH0sXHJcbiAgICBiZToge1xyXG4gICAgICAgIHNlYXJjaDogXCLQv9C+0YjRg9C6XCIsXHJcbiAgICAgICAgbGF0dGl0dWRlOiBcItCo0YvRgNCw0YLRizogXCIsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBcItCU0LDRntCz0LDRgtCwOiBcIixcclxuICAgICAgICB3aW5kOiBcItCS0JXQptCV0KA6IFwiLFxyXG4gICAgICAgIGFwcGFyZW50OiBcItCQ0JTQp9Cj0JLQkNCVLCDQr9CaOiBcIixcclxuICAgICAgICBodW1pZGl0eTogXCLQodCS0JXQotCQOiBcIlxyXG5cclxuICAgIH1cclxufTtcclxubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XHJcbiAgICBsb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgIGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgIHZhciBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZ3VhZ2UtcnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBsYW5ndWFnZS5ydS5zZWFyY2g7XHJcbiAgICAgICAgbGF0dGl0dWRlLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UucnUubGF0dGl0dWRlICsgbGF0aXR1ZGVMYW5nO1xyXG4gICAgICAgIGxvbmdpdHVkZS50ZXh0Q29udGVudCA9IGxhbmd1YWdlLnJ1LmxvbmdpdHVkZSArIGxvbmdpdHVkZUxhbmc7XHJcbiAgICAgICAgYXBwYXJlbnRUZW1wLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UucnUuYXBwYXJlbnQgKyBhcHBhcmVudDtcclxuICAgICAgICBzcGVlZFdpbmQudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5ydS53aW5kICsgd2luZCArIFwiINC8L9GBXCI7XHJcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5ydS5odW1pZGl0eSArIGh1bSArIFwiICVcIjtcclxuICAgICAgICBkYXRlTy50ZXh0Q29udGVudCA9IGRhdGUxUnU7XHJcbiAgICAgICAgZGF0ZVQudGV4dENvbnRlbnQgPSBkYXRlMlJ1O1xyXG4gICAgICAgIGRhdGVGLnRleHRDb250ZW50ID0gZGF0ZTNSdTtcclxuICAgICAgICBkYXRlTmFtZS50ZXh0Q29udGVudCA9IG1vbnRoUjtcclxuICAgICAgICBmZXRjaChwcm94eVVybCArIGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC81ZDhlNDdhMGFmMzdmODQwNjg0ZDhjMGUwNTY0YTc3Yy8ke2xhdH0sJHtsb25nfT91bml0cz1zaSZsYW5nPXJ1YClcclxuICAgICAgICAudGhlbihyZXNwb25jZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25jZS5jbG9uZSgpLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblRlbXAudGV4dENvbnRlbnQgID0gZGF0YS5jdXJyZW50bHkuc3VtbWFyeTtcclxuICAgICAgICB9KTtcclxufSlcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5ndWFnZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UuZW5nLnNlYXJjaDtcclxuICAgIGxhdHRpdHVkZS50ZXh0Q29udGVudCA9IGxhbmd1YWdlLmVuZy5sYXR0aXR1ZGUgKyBsYXRpdHVkZUxhbmc7XHJcbiAgICBsb25naXR1ZGUudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5lbmcubG9uZ2l0dWRlICsgbG9uZ2l0dWRlTGFuZztcclxuICAgIGFwcGFyZW50VGVtcC50ZXh0Q29udGVudCA9IGxhbmd1YWdlLmVuZy5hcHBhcmVudCArIGFwcGFyZW50O1xyXG4gICAgc3BlZWRXaW5kLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UuZW5nLndpbmQgKyB3aW5kICsgIFwiIG0vc1wiO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5lbmcuaHVtaWRpdHkgKyBodW0gKyBcIiAlXCI7XHJcbiAgICBkYXRlTy50ZXh0Q29udGVudCA9IGRhdGUxRW5nO1xyXG4gICAgZGF0ZVQudGV4dENvbnRlbnQgPSBkYXRlMkVuZztcclxuICAgIGRhdGVGLnRleHRDb250ZW50ID0gZGF0ZTNFbmc7XHJcbiAgICBkYXRlTmFtZS50ZXh0Q29udGVudCA9IG1vbnRoRTtcclxuICAgIGZldGNoKHByb3h5VXJsICsgYGh0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0LzVkOGU0N2EwYWYzN2Y4NDA2ODRkOGMwZTA1NjRhNzdjLyR7bGF0fSwke2xvbmd9P3VuaXRzPXNpJmxhbmc9ZW5gKVxyXG4gICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25jZS5jbG9uZSgpLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvblRlbXAudGV4dENvbnRlbnQgID0gZGF0YS5jdXJyZW50bHkuc3VtbWFyeTtcclxuICAgIH0pO1xyXG59KVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhbmd1YWdlLWJlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSBsYW5ndWFnZS5iZS5zZWFyY2g7XHJcbiAgICBsYXR0aXR1ZGUudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5iZS5sYXR0aXR1ZGUgKyBsYXRpdHVkZUxhbmc7XHJcbiAgICBsb25naXR1ZGUudGV4dENvbnRlbnQgPSBsYW5ndWFnZS5iZS5sb25naXR1ZGUgKyBsb25naXR1ZGVMYW5nO1xyXG4gICAgYXBwYXJlbnRUZW1wLnRleHRDb250ZW50ID0gbGFuZ3VhZ2UuYmUuYXBwYXJlbnQgKyBhcHBhcmVudDtcclxuICAgIHNwZWVkV2luZC50ZXh0Q29udGVudCA9IGxhbmd1YWdlLmJlLndpbmQgKyB3aW5kICsgXCIg0Lwv0YFcIjtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gbGFuZ3VhZ2UuYmUuaHVtaWRpdHkgKyBodW0gKyBcIiAlXCI7XHJcbiAgICBkYXRlTy50ZXh0Q29udGVudCA9IGRhdGUxQmU7XHJcbiAgICBkYXRlVC50ZXh0Q29udGVudCA9IGRhdGUyQmU7XHJcbiAgICBkYXRlRi50ZXh0Q29udGVudCA9IGRhdGUzQmU7XHJcbiAgICBkYXRlTmFtZS50ZXh0Q29udGVudCA9IG1vbnRoQjtcclxuICAgIGZldGNoKHByb3h5VXJsICsgYGh0dHBzOi8vYXBpLmRhcmtza3kubmV0L2ZvcmVjYXN0LzVkOGU0N2EwYWYzN2Y4NDA2ODRkOGMwZTA1NjRhNzdjLyR7bGF0fSwke2xvbmd9P3VuaXRzPXNpJmxhbmc9YmVgKVxyXG4gICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25jZS5jbG9uZSgpLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvblRlbXAudGV4dENvbnRlbnQgID0gZGF0YS5jdXJyZW50bHkuc3VtbWFyeTtcclxuICAgIH0pO1xyXG59KVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+IHtcclxuICAgIGxldCBsb25nO1xyXG4gICAgbGV0IGxhdDtcclxuICAgIGlmKG5hdmlnYXRvci5nZW9sb2NhdGlvbil7XHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XHJcbiAgICAgICAgICBsb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYTJsellXOXNlV0VpTENKaElqb2lZMnN6YTJSNWVtMDRNR2s1YVROdGJuUXlaV1I1WTNGdU9TSjkucG1Fd0JubFE5dktPT3ZmNG14NXVuQSc7XHJcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiAnbWFwJywgLy8gY29udGFpbmVyIGlkXHJcbiAgICAgICAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXHJcbiAgICAgICAgICAgIGNlbnRlcjogW2xvbmcsIGxhdF0sIC8vIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIHpvb206IDEwIC8vIHN0YXJ0aW5nIHpvb21cclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9KTtcclxufVxyXG59KTtcclxuXHJcbiIsImZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCA3MDAwKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGxvYWREYXRhKClcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbGV0IHByZWxvYWRlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWxvYWRlcicpO1xyXG4gICAgICBwcmVsb2FkZXJFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgcHJlbG9hZGVyRWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfSk7IiwiKGZ1bmN0aW9uKGdsb2JhbCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAvKiBTZXQgdXAgYSBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgc2hpbSBzbyB3ZSBjYW4gYW5pbWF0ZSBlZmZpY2llbnRseSBGT1JcclxuICAgKiBHUkVBVCBKVVNUSUNFLiAqL1xyXG4gIHZhciByZXF1ZXN0SW50ZXJ2YWwsIGNhbmNlbEludGVydmFsO1xyXG5cclxuICAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmFmID0gZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgICB8fFxyXG4gICAgICAgICAgICAgIGdsb2JhbC53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgICBnbG9iYWwubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcbiAgICAgICAgICAgICAgZ2xvYmFsLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxyXG4gICAgICAgICAgICAgIGdsb2JhbC5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgLFxyXG4gICAgICAgIGNhZiA9IGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICAgfHxcclxuICAgICAgICAgICAgICBnbG9iYWwud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgIHx8XHJcbiAgICAgICAgICAgICAgZ2xvYmFsLm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lICAgICB8fFxyXG4gICAgICAgICAgICAgIGdsb2JhbC5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuICAgICAgICAgICAgICBnbG9iYWwubXNDYW5jZWxBbmltYXRpb25GcmFtZSAgICAgIDtcclxuXHJcbiAgICBpZihyYWYgJiYgY2FmKSB7XHJcbiAgICAgIHJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZSA9IHt2YWx1ZTogbnVsbH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgICAgICBoYW5kbGUudmFsdWUgPSByYWYobG9vcCk7XHJcbiAgICAgICAgICBmbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9vcCgpO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjYW5jZWxJbnRlcnZhbCA9IGZ1bmN0aW9uKGhhbmRsZSkge1xyXG4gICAgICAgIGNhZihoYW5kbGUudmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXF1ZXN0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbDtcclxuICAgICAgY2FuY2VsSW50ZXJ2YWwgPSBjbGVhckludGVydmFsO1xyXG4gICAgfVxyXG4gIH0oKSk7XHJcblxyXG4gIC8qIENhdG11bGwtcm9tIHNwbGluZSBzdHVmZnMuICovXHJcbiAgLypcclxuICBmdW5jdGlvbiB1cHNhbXBsZShuLCBzcGxpbmUpIHtcclxuICAgIHZhciBwb2x5bGluZSA9IFtdLFxyXG4gICAgICAgIGxlbiA9IHNwbGluZS5sZW5ndGgsXHJcbiAgICAgICAgYnggID0gc3BsaW5lWzBdLFxyXG4gICAgICAgIGJ5ICA9IHNwbGluZVsxXSxcclxuICAgICAgICBjeCAgPSBzcGxpbmVbMl0sXHJcbiAgICAgICAgY3kgID0gc3BsaW5lWzNdLFxyXG4gICAgICAgIGR4ICA9IHNwbGluZVs0XSxcclxuICAgICAgICBkeSAgPSBzcGxpbmVbNV0sXHJcbiAgICAgICAgaSwgaiwgYXgsIGF5LCBweCwgcXgsIHJ4LCBzeCwgcHksIHF5LCByeSwgc3ksIHQ7XHJcblxyXG4gICAgZm9yKGkgPSA2OyBpICE9PSBzcGxpbmUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgYXggPSBieDtcclxuICAgICAgYnggPSBjeDtcclxuICAgICAgY3ggPSBkeDtcclxuICAgICAgZHggPSBzcGxpbmVbaSAgICBdO1xyXG4gICAgICBweCA9IC0wLjUgKiBheCArIDEuNSAqIGJ4IC0gMS41ICogY3ggKyAwLjUgKiBkeDtcclxuICAgICAgcXggPSAgICAgICAgYXggLSAyLjUgKiBieCArIDIuMCAqIGN4IC0gMC41ICogZHg7XHJcbiAgICAgIHJ4ID0gLTAuNSAqIGF4ICAgICAgICAgICAgKyAwLjUgKiBjeCAgICAgICAgICAgO1xyXG4gICAgICBzeCA9ICAgICAgICAgICAgICAgICAgIGJ4ICAgICAgICAgICAgICAgICAgICAgIDtcclxuXHJcbiAgICAgIGF5ID0gYnk7XHJcbiAgICAgIGJ5ID0gY3k7XHJcbiAgICAgIGN5ID0gZHk7XHJcbiAgICAgIGR5ID0gc3BsaW5lW2kgKyAxXTtcclxuICAgICAgcHkgPSAtMC41ICogYXkgKyAxLjUgKiBieSAtIDEuNSAqIGN5ICsgMC41ICogZHk7XHJcbiAgICAgIHF5ID0gICAgICAgIGF5IC0gMi41ICogYnkgKyAyLjAgKiBjeSAtIDAuNSAqIGR5O1xyXG4gICAgICByeSA9IC0wLjUgKiBheSAgICAgICAgICAgICsgMC41ICogY3kgICAgICAgICAgIDtcclxuICAgICAgc3kgPSAgICAgICAgICAgICAgICAgICBieSAgICAgICAgICAgICAgICAgICAgICA7XHJcblxyXG4gICAgICBmb3IoaiA9IDA7IGogIT09IG47ICsraikge1xyXG4gICAgICAgIHQgPSBqIC8gbjtcclxuXHJcbiAgICAgICAgcG9seWxpbmUucHVzaChcclxuICAgICAgICAgICgocHggKiB0ICsgcXgpICogdCArIHJ4KSAqIHQgKyBzeCxcclxuICAgICAgICAgICgocHkgKiB0ICsgcXkpICogdCArIHJ5KSAqIHQgKyBzeVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwb2x5bGluZS5wdXNoKFxyXG4gICAgICBweCArIHF4ICsgcnggKyBzeCxcclxuICAgICAgcHkgKyBxeSArIHJ5ICsgc3lcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHBvbHlsaW5lO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZG93bnNhbXBsZShuLCBwb2x5bGluZSkge1xyXG4gICAgdmFyIGxlbiA9IDAsXHJcbiAgICAgICAgaSwgZHgsIGR5O1xyXG5cclxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgZHggPSBwb2x5bGluZVtpICAgIF0gLSBwb2x5bGluZVtpIC0gMl07XHJcbiAgICAgIGR5ID0gcG9seWxpbmVbaSArIDFdIC0gcG9seWxpbmVbaSAtIDFdO1xyXG4gICAgICBsZW4gKz0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcbiAgICBsZW4gLz0gbjtcclxuXHJcbiAgICB2YXIgc21hbGwgPSBbXSxcclxuICAgICAgICB0YXJnZXQgPSBsZW4sXHJcbiAgICAgICAgbWluID0gMCxcclxuICAgICAgICBtYXgsIHQ7XHJcblxyXG4gICAgc21hbGwucHVzaChwb2x5bGluZVswXSwgcG9seWxpbmVbMV0pO1xyXG5cclxuICAgIGZvcihpID0gMjsgaSAhPT0gcG9seWxpbmUubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgZHggPSBwb2x5bGluZVtpICAgIF0gLSBwb2x5bGluZVtpIC0gMl07XHJcbiAgICAgIGR5ID0gcG9seWxpbmVbaSArIDFdIC0gcG9seWxpbmVbaSAtIDFdO1xyXG4gICAgICBtYXggPSBtaW4gKyBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG5cclxuICAgICAgaWYobWF4ID4gdGFyZ2V0KSB7XHJcbiAgICAgICAgdCA9ICh0YXJnZXQgLSBtaW4pIC8gKG1heCAtIG1pbik7XHJcblxyXG4gICAgICAgIHNtYWxsLnB1c2goXHJcbiAgICAgICAgICBwb2x5bGluZVtpIC0gMl0gKyBkeCAqIHQsXHJcbiAgICAgICAgICBwb2x5bGluZVtpIC0gMV0gKyBkeSAqIHRcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0YXJnZXQgKz0gbGVuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtaW4gPSBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgc21hbGwucHVzaChwb2x5bGluZVtwb2x5bGluZS5sZW5ndGggLSAyXSwgcG9seWxpbmVbcG9seWxpbmUubGVuZ3RoIC0gMV0pO1xyXG5cclxuICAgIHJldHVybiBzbWFsbDtcclxuICB9XHJcbiAgKi9cclxuXHJcbiAgLyogRGVmaW5lIHNreWNvbiB0aGluZ3MuICovXHJcbiAgLyogRklYTUU6IEknbSAqcmVhbGx5IHJlYWxseSogc29ycnkgdGhhdCB0aGlzIGNvZGUgaXMgc28gZ3Jvc3MuIFJlYWxseSwgSSBhbS5cclxuICAgKiBJJ2xsIHRyeSB0byBjbGVhbiBpdCB1cCBldmVudHVhbGx5ISBQcm9taXNlISAqL1xyXG4gIHZhciBLRVlGUkFNRSA9IDUwMCxcclxuICAgICAgU1RST0tFID0gMC4wOCxcclxuICAgICAgVEFVID0gMi4wICogTWF0aC5QSSxcclxuICAgICAgVFdPX09WRVJfU1FSVF8yID0gMi4wIC8gTWF0aC5zcXJ0KDIpO1xyXG5cclxuICBmdW5jdGlvbiBjaXJjbGUoY3R4LCB4LCB5LCByKSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHgsIHksIHIsIDAsIFRBVSwgZmFsc2UpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxpbmUoY3R4LCBheCwgYXksIGJ4LCBieSkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhheCwgYXkpO1xyXG4gICAgY3R4LmxpbmVUbyhieCwgYnkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcHVmZihjdHgsIHQsIGN4LCBjeSwgcngsIHJ5LCBybWluLCBybWF4KSB7XHJcbiAgICB2YXIgYyA9IE1hdGguY29zKHQgKiBUQVUpLFxyXG4gICAgICAgIHMgPSBNYXRoLnNpbih0ICogVEFVKTtcclxuXHJcbiAgICBybWF4IC09IHJtaW47XHJcblxyXG4gICAgY2lyY2xlKFxyXG4gICAgICBjdHgsXHJcbiAgICAgIGN4IC0gcyAqIHJ4LFxyXG4gICAgICBjeSArIGMgKiByeSArIHJtYXggKiAwLjUsXHJcbiAgICAgIHJtaW4gKyAoMSAtIGMgKiAwLjUpICogcm1heFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCByeCwgcnksIHJtaW4sIHJtYXgpIHtcclxuICAgIHZhciBpO1xyXG5cclxuICAgIGZvcihpID0gNTsgaS0tOyApXHJcbiAgICAgIHB1ZmYoY3R4LCB0ICsgaSAvIDUsIGN4LCBjeSwgcngsIHJ5LCBybWluLCBybWF4KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3VkKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcclxuICAgIHQgLz0gMzAwMDA7XHJcblxyXG4gICAgdmFyIGEgPSBjdyAqIDAuMjEsXHJcbiAgICAgICAgYiA9IGN3ICogMC4xMixcclxuICAgICAgICBjID0gY3cgKiAwLjI0LFxyXG4gICAgICAgIGQgPSBjdyAqIDAuMjg7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgcHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMsIGQpO1xyXG5cclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgIHB1ZmZzKGN0eCwgdCwgY3gsIGN5LCBhLCBiLCBjIC0gcywgZCAtIHMpO1xyXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdW4oY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xyXG4gICAgdCAvPSAxMjAwMDA7XHJcblxyXG4gICAgdmFyIGEgPSBjdyAqIDAuMjUgLSBzICogMC41LFxyXG4gICAgICAgIGIgPSBjdyAqIDAuMzIgKyBzICogMC41LFxyXG4gICAgICAgIGMgPSBjdyAqIDAuNTAgLSBzICogMC41LFxyXG4gICAgICAgIGksIHAsIGNvcywgc2luO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XHJcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGN4LCBjeSwgYSwgMCwgVEFVLCBmYWxzZSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgZm9yKGkgPSA4OyBpLS07ICkge1xyXG4gICAgICBwID0gKHQgKyBpIC8gOCkgKiBUQVU7XHJcbiAgICAgIGNvcyA9IE1hdGguY29zKHApO1xyXG4gICAgICBzaW4gPSBNYXRoLnNpbihwKTtcclxuICAgICAgbGluZShjdHgsIGN4ICsgY29zICogYiwgY3kgKyBzaW4gKiBiLCBjeCArIGNvcyAqIGMsIGN5ICsgc2luICogYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb29uKGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcclxuICAgIHQgLz0gMTUwMDA7XHJcblxyXG4gICAgdmFyIGEgPSBjdyAqIDAuMjkgLSBzICogMC41LFxyXG4gICAgICAgIGIgPSBjdyAqIDAuMDUsXHJcbiAgICAgICAgYyA9IE1hdGguY29zKHQgKiBUQVUpLFxyXG4gICAgICAgIHAgPSBjICogVEFVIC8gLTE2O1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XHJcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcclxuXHJcbiAgICBjeCArPSBjICogYjtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGN4LCBjeSwgYSwgcCArIFRBVSAvIDgsIHAgKyBUQVUgKiA3IC8gOCwgZmFsc2UpO1xyXG4gICAgY3R4LmFyYyhjeCArIE1hdGguY29zKHApICogYSAqIFRXT19PVkVSX1NRUlRfMiwgY3kgKyBNYXRoLnNpbihwKSAqIGEgKiBUV09fT1ZFUl9TUVJUXzIsIGEsIHAgKyBUQVUgKiA1IC8gOCwgcCArIFRBVSAqIDMgLyA4LCB0cnVlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJhaW4oY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xyXG4gICAgdCAvPSAxMzUwO1xyXG5cclxuICAgIHZhciBhID0gY3cgKiAwLjE2LFxyXG4gICAgICAgIGIgPSBUQVUgKiAxMSAvIDEyLFxyXG4gICAgICAgIGMgPSBUQVUgKiAgNyAvIDEyLFxyXG4gICAgICAgIGksIHAsIHgsIHk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG5cclxuICAgIGZvcihpID0gNDsgaS0tOyApIHtcclxuICAgICAgcCA9ICh0ICsgaSAvIDQpICUgMTtcclxuICAgICAgeCA9IGN4ICsgKChpIC0gMS41KSAvIDEuNSkgKiAoaSA9PT0gMSB8fCBpID09PSAyID8gLTEgOiAxKSAqIGE7XHJcbiAgICAgIHkgPSBjeSArIHAgKiBwICogY3c7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbyh4LCB5IC0gcyAqIDEuNSk7XHJcbiAgICAgIGN0eC5hcmMoeCwgeSwgcyAqIDAuNzUsIGIsIGMsIGZhbHNlKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNsZWV0KGN0eCwgdCwgY3gsIGN5LCBjdywgcywgY29sb3IpIHtcclxuICAgIHQgLz0gNzUwO1xyXG5cclxuICAgIHZhciBhID0gY3cgKiAwLjE4NzUsXHJcbiAgICAgICAgaSwgcCwgeCwgeTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5saW5lV2lkdGggPSBzICogMC41O1xyXG4gICAgY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XHJcblxyXG4gICAgZm9yKGkgPSA0OyBpLS07ICkge1xyXG4gICAgICBwID0gKHQgKyBpIC8gNCkgJSAxO1xyXG4gICAgICB4ID0gTWF0aC5mbG9vcihjeCArICgoaSAtIDEuNSkgLyAxLjUpICogKGkgPT09IDEgfHwgaSA9PT0gMiA/IC0xIDogMSkgKiBhKSArIDAuNTtcclxuICAgICAgeSA9IGN5ICsgcCAqIGN3O1xyXG4gICAgICBsaW5lKGN0eCwgeCwgeSAtIHMgKiAxLjUsIHgsIHkgKyBzICogMS41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNub3coY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xyXG4gICAgdCAvPSAzMDAwO1xyXG5cclxuICAgIHZhciBhICA9IGN3ICogMC4xNixcclxuICAgICAgICBiICA9IHMgKiAwLjc1LFxyXG4gICAgICAgIHUgID0gdCAqIFRBVSAqIDAuNyxcclxuICAgICAgICB1eCA9IE1hdGguY29zKHUpICogYixcclxuICAgICAgICB1eSA9IE1hdGguc2luKHUpICogYixcclxuICAgICAgICB2ICA9IHUgKyBUQVUgLyAzLFxyXG4gICAgICAgIHZ4ID0gTWF0aC5jb3ModikgKiBiLFxyXG4gICAgICAgIHZ5ID0gTWF0aC5zaW4odikgKiBiLFxyXG4gICAgICAgIHcgID0gdSArIFRBVSAqIDIgLyAzLFxyXG4gICAgICAgIHd4ID0gTWF0aC5jb3ModykgKiBiLFxyXG4gICAgICAgIHd5ID0gTWF0aC5zaW4odykgKiBiLFxyXG4gICAgICAgIGksIHAsIHgsIHk7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICBjdHgubGluZVdpZHRoID0gcyAqIDAuNTtcclxuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xyXG5cclxuICAgIGZvcihpID0gNDsgaS0tOyApIHtcclxuICAgICAgcCA9ICh0ICsgaSAvIDQpICUgMTtcclxuICAgICAgeCA9IGN4ICsgTWF0aC5zaW4oKHAgKyBpIC8gNCkgKiBUQVUpICogYTtcclxuICAgICAgeSA9IGN5ICsgcCAqIGN3O1xyXG5cclxuICAgICAgbGluZShjdHgsIHggLSB1eCwgeSAtIHV5LCB4ICsgdXgsIHkgKyB1eSk7XHJcbiAgICAgIGxpbmUoY3R4LCB4IC0gdngsIHkgLSB2eSwgeCArIHZ4LCB5ICsgdnkpO1xyXG4gICAgICBsaW5lKGN0eCwgeCAtIHd4LCB5IC0gd3ksIHggKyB3eCwgeSArIHd5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvZ2JhbmsoY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBjb2xvcikge1xyXG4gICAgdCAvPSAzMDAwMDtcclxuXHJcbiAgICB2YXIgYSA9IGN3ICogMC4yMSxcclxuICAgICAgICBiID0gY3cgKiAwLjA2LFxyXG4gICAgICAgIGMgPSBjdyAqIDAuMjEsXHJcbiAgICAgICAgZCA9IGN3ICogMC4yODtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICBwdWZmcyhjdHgsIHQsIGN4LCBjeSwgYSwgYiwgYywgZCk7XHJcblxyXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xyXG4gICAgcHVmZnMoY3R4LCB0LCBjeCwgY3ksIGEsIGIsIGMgLSBzLCBkIC0gcyk7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgdmFyIFdJTkRfUEFUSFMgPSBbXHJcbiAgICAgICAgZG93bnNhbXBsZSg2MywgdXBzYW1wbGUoOCwgW1xyXG4gICAgICAgICAgLTEuMDAsIC0wLjI4LFxyXG4gICAgICAgICAgLTAuNzUsIC0wLjE4LFxyXG4gICAgICAgICAgLTAuNTAsICAwLjEyLFxyXG4gICAgICAgICAgLTAuMjAsICAwLjEyLFxyXG4gICAgICAgICAgLTAuMDQsIC0wLjA0LFxyXG4gICAgICAgICAgLTAuMDcsIC0wLjE4LFxyXG4gICAgICAgICAgLTAuMTksIC0wLjE4LFxyXG4gICAgICAgICAgLTAuMjMsIC0wLjA1LFxyXG4gICAgICAgICAgLTAuMTIsICAwLjExLFxyXG4gICAgICAgICAgIDAuMDIsICAwLjE2LFxyXG4gICAgICAgICAgIDAuMjAsICAwLjE1LFxyXG4gICAgICAgICAgIDAuNTAsICAwLjA3LFxyXG4gICAgICAgICAgIDAuNzUsICAwLjE4LFxyXG4gICAgICAgICAgIDEuMDAsICAwLjI4XHJcbiAgICAgICAgXSkpLFxyXG4gICAgICAgIGRvd25zYW1wbGUoMzEsIHVwc2FtcGxlKDE2LCBbXHJcbiAgICAgICAgICAtMS4wMCwgLTAuMTAsXHJcbiAgICAgICAgICAtMC43NSwgIDAuMDAsXHJcbiAgICAgICAgICAtMC41MCwgIDAuMTAsXHJcbiAgICAgICAgICAtMC4yNSwgIDAuMTQsXHJcbiAgICAgICAgICAgMC4wMCwgIDAuMTAsXHJcbiAgICAgICAgICAgMC4yNSwgIDAuMDAsXHJcbiAgICAgICAgICAgMC41MCwgLTAuMTAsXHJcbiAgICAgICAgICAgMC43NSwgLTAuMTQsXHJcbiAgICAgICAgICAgMS4wMCwgLTAuMTBcclxuICAgICAgICBdKSlcclxuICAgICAgXTtcclxuICAqL1xyXG5cclxuICB2YXIgV0lORF9QQVRIUyA9IFtcclxuICAgICAgICBbXHJcbiAgICAgICAgICAtMC43NTAwLCAtMC4xODAwLCAtMC43MjE5LCAtMC4xNTI3LCAtMC42OTcxLCAtMC4xMjI1LFxyXG4gICAgICAgICAgLTAuNjczOSwgLTAuMDkxMCwgLTAuNjUxNiwgLTAuMDU4OCwgLTAuNjI5OCwgLTAuMDI2MixcclxuICAgICAgICAgIC0wLjYwODMsICAwLjAwNjUsIC0wLjU4NjgsICAwLjAzOTYsIC0wLjU2NDMsICAwLjA3MzEsXHJcbiAgICAgICAgICAtMC41MzcyLCAgMC4xMDQxLCAtMC41MDMzLCAgMC4xMjU5LCAtMC40NjYyLCAgMC4xNDA2LFxyXG4gICAgICAgICAgLTAuNDI3NSwgIDAuMTQ5MywgLTAuMzg4MSwgIDAuMTUzMCwgLTAuMzQ4NywgIDAuMTUyNixcclxuICAgICAgICAgIC0wLjMwOTUsICAwLjE0ODgsIC0wLjI3MDgsICAwLjE0MjEsIC0wLjIzMTksICAwLjEzNDIsXHJcbiAgICAgICAgICAtMC4xOTQzLCAgMC4xMjE3LCAtMC4xNjAwLCAgMC4xMDI1LCAtMC4xMjkwLCAgMC4wNzg1LFxyXG4gICAgICAgICAgLTAuMTAxMiwgIDAuMDUwOSwgLTAuMDc2NCwgIDAuMDIwNiwgLTAuMDU0NywgLTAuMDEyMCxcclxuICAgICAgICAgIC0wLjAzNzgsIC0wLjA0NzIsIC0wLjAzMjQsIC0wLjA4NTcsIC0wLjAzODksIC0wLjEyNDEsXHJcbiAgICAgICAgICAtMC4wNTQ2LCAtMC4xNTk5LCAtMC4wODE0LCAtMC4xODc2LCAtMC4xMTkzLCAtMC4xOTY0LFxyXG4gICAgICAgICAgLTAuMTU4MiwgLTAuMTkzNSwgLTAuMTkzMSwgLTAuMTc2OSwgLTAuMjE1NywgLTAuMTQ1MyxcclxuICAgICAgICAgIC0wLjIyOTAsIC0wLjEwODUsIC0wLjIzMjcsIC0wLjA2OTcsIC0wLjIyNDAsIC0wLjAzMTcsXHJcbiAgICAgICAgICAtMC4yMDY0LCAgMC4wMDMzLCAtMC4xODUzLCAgMC4wMzYyLCAtMC4xNjEzLCAgMC4wNjcyLFxyXG4gICAgICAgICAgLTAuMTM1MCwgIDAuMDk2MSwgLTAuMTA1MSwgIDAuMTIxMywgLTAuMDcwNiwgIDAuMTM5NyxcclxuICAgICAgICAgIC0wLjAzMzIsICAwLjE1MTIsICAwLjAwNTMsICAwLjE1ODAsICAwLjA0NDIsICAwLjE2MjQsXHJcbiAgICAgICAgICAgMC4wODMzLCAgMC4xNjM2LCAgMC4xMjI0LCAgMC4xNjE1LCAgMC4xNjEzLCAgMC4xNTY1LFxyXG4gICAgICAgICAgIDAuMTk5OSwgIDAuMTUwMCwgIDAuMjM3OCwgIDAuMTQwMiwgIDAuMjc0OSwgIDAuMTI3OSxcclxuICAgICAgICAgICAwLjMxMTgsICAwLjExNDcsICAwLjM0ODcsICAwLjEwMTUsICAwLjM4NTgsICAwLjA4OTIsXHJcbiAgICAgICAgICAgMC40MjM2LCAgMC4wNzg3LCAgMC40NjIxLCAgMC4wNzE1LCAgMC41MDEyLCAgMC4wNzAyLFxyXG4gICAgICAgICAgIDAuNTM5OCwgIDAuMDc2NiwgIDAuNTc2OCwgIDAuMDg5MCwgIDAuNjEyMywgIDAuMTA1NSxcclxuICAgICAgICAgICAwLjY0NjYsICAwLjEyNDQsICAwLjY4MDUsICAwLjE0NDAsICAwLjcxNDcsICAwLjE2MzAsXHJcbiAgICAgICAgICAgMC43NTAwLCAgMC4xODAwXHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAtMC43NTAwLCAgMC4wMDAwLCAtMC43MDMzLCAgMC4wMTk1LCAtMC42NTY5LCAgMC4wMzk5LFxyXG4gICAgICAgICAgLTAuNjEwNCwgIDAuMDYwMCwgLTAuNTYzNCwgIDAuMDc4OSwgLTAuNTE1NSwgIDAuMDk1NCxcclxuICAgICAgICAgIC0wLjQ2NjcsICAwLjEwODksIC0wLjQxNzQsICAwLjEyMDYsIC0wLjM2NzYsICAwLjEyOTksXHJcbiAgICAgICAgICAtMC4zMTc0LCAgMC4xMzY1LCAtMC4yNjY5LCAgMC4xMzk4LCAtMC4yMTYyLCAgMC4xMzkxLFxyXG4gICAgICAgICAgLTAuMTY1OCwgIDAuMTM0NywgLTAuMTE1NywgIDAuMTI3MSwgLTAuMDY2MSwgIDAuMTE2OSxcclxuICAgICAgICAgIC0wLjAxNzAsICAwLjEwNDYsICAwLjAzMTYsICAwLjA5MDMsICAwLjA3OTEsICAwLjA3MjgsXHJcbiAgICAgICAgICAgMC4xMjU5LCAgMC4wNTM0LCAgMC4xNzIzLCAgMC4wMzMxLCAgMC4yMTg4LCAgMC4wMTI5LFxyXG4gICAgICAgICAgIDAuMjY1NiwgLTAuMDA2NCwgIDAuMzEyMiwgLTAuMDI2MywgIDAuMzU4NiwgLTAuMDQ2NixcclxuICAgICAgICAgICAwLjQwNTIsIC0wLjA2NjUsICAwLjQ1MjUsIC0wLjA4NDcsICAwLjUwMDcsIC0wLjEwMDIsXHJcbiAgICAgICAgICAgMC41NDk3LCAtMC4xMTMwLCAgMC41OTkxLCAtMC4xMjQwLCAgMC42NDkxLCAtMC4xMzI1LFxyXG4gICAgICAgICAgIDAuNjk5NCwgLTAuMTM4MCwgIDAuNzUwMCwgLTAuMTQwMFxyXG4gICAgICAgIF1cclxuICAgICAgXSxcclxuICAgICAgV0lORF9PRkZTRVRTID0gW1xyXG4gICAgICAgIHtzdGFydDogMC4zNiwgZW5kOiAwLjExfSxcclxuICAgICAgICB7c3RhcnQ6IDAuNTYsIGVuZDogMC4xNn1cclxuICAgICAgXTtcclxuXHJcbiAgZnVuY3Rpb24gbGVhZihjdHgsIHQsIHgsIHksIGN3LCBzLCBjb2xvcikge1xyXG4gICAgdmFyIGEgPSBjdyAvIDgsXHJcbiAgICAgICAgYiA9IGEgLyAzLFxyXG4gICAgICAgIGMgPSAyICogYixcclxuICAgICAgICBkID0gKHQgJSAxKSAqIFRBVSxcclxuICAgICAgICBlID0gTWF0aC5jb3MoZCksXHJcbiAgICAgICAgZiA9IE1hdGguc2luKGQpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XHJcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKHggICAgICAgICwgeSAgICAgICAgLCBhLCBkICAgICAgICAgICwgZCArIE1hdGguUEksIGZhbHNlKTtcclxuICAgIGN0eC5hcmMoeCAtIGIgKiBlLCB5IC0gYiAqIGYsIGMsIGQgKyBNYXRoLlBJLCBkICAgICAgICAgICwgZmFsc2UpO1xyXG4gICAgY3R4LmFyYyh4ICsgYyAqIGUsIHkgKyBjICogZiwgYiwgZCArIE1hdGguUEksIGQgICAgICAgICAgLCB0cnVlICk7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzd29vc2goY3R4LCB0LCBjeCwgY3ksIGN3LCBzLCBpbmRleCwgdG90YWwsIGNvbG9yKSB7XHJcbiAgICB0IC89IDI1MDA7XHJcblxyXG4gICAgdmFyIHBhdGggPSBXSU5EX1BBVEhTW2luZGV4XSxcclxuICAgICAgICBhID0gKHQgKyBpbmRleCAtIFdJTkRfT0ZGU0VUU1tpbmRleF0uc3RhcnQpICUgdG90YWwsXHJcbiAgICAgICAgYyA9ICh0ICsgaW5kZXggLSBXSU5EX09GRlNFVFNbaW5kZXhdLmVuZCAgKSAlIHRvdGFsLFxyXG4gICAgICAgIGUgPSAodCArIGluZGV4ICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJSB0b3RhbCxcclxuICAgICAgICBiLCBkLCBmLCBpO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IHM7XHJcbiAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgIGN0eC5saW5lSm9pbiA9IFwicm91bmRcIjtcclxuXHJcbiAgICBpZihhIDwgMSkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICBhICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XHJcbiAgICAgIGIgID0gTWF0aC5mbG9vcihhKTtcclxuICAgICAgYSAtPSBiO1xyXG4gICAgICBiICo9IDI7XHJcbiAgICAgIGIgKz0gMjtcclxuXHJcbiAgICAgIGN0eC5tb3ZlVG8oXHJcbiAgICAgICAgY3ggKyAocGF0aFtiIC0gMl0gKiAoMSAtIGEpICsgcGF0aFtiICAgIF0gKiBhKSAqIGN3LFxyXG4gICAgICAgIGN5ICsgKHBhdGhbYiAtIDFdICogKDEgLSBhKSArIHBhdGhbYiArIDFdICogYSkgKiBjd1xyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYoYyA8IDEpIHtcclxuICAgICAgICBjICo9IHBhdGgubGVuZ3RoIC8gMiAtIDE7XHJcbiAgICAgICAgZCAgPSBNYXRoLmZsb29yKGMpO1xyXG4gICAgICAgIGMgLT0gZDtcclxuICAgICAgICBkICo9IDI7XHJcbiAgICAgICAgZCArPSAyO1xyXG5cclxuICAgICAgICBmb3IoaSA9IGI7IGkgIT09IGQ7IGkgKz0gMilcclxuICAgICAgICAgIGN0eC5saW5lVG8oY3ggKyBwYXRoW2ldICogY3csIGN5ICsgcGF0aFtpICsgMV0gKiBjdyk7XHJcblxyXG4gICAgICAgIGN0eC5saW5lVG8oXHJcbiAgICAgICAgICBjeCArIChwYXRoW2QgLSAyXSAqICgxIC0gYykgKyBwYXRoW2QgICAgXSAqIGMpICogY3csXHJcbiAgICAgICAgICBjeSArIChwYXRoW2QgLSAxXSAqICgxIC0gYykgKyBwYXRoW2QgKyAxXSAqIGMpICogY3dcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgZm9yKGkgPSBiOyBpICE9PSBwYXRoLmxlbmd0aDsgaSArPSAyKVxyXG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcclxuXHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGMgPCAxKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgIGMgKj0gcGF0aC5sZW5ndGggLyAyIC0gMTtcclxuICAgICAgZCAgPSBNYXRoLmZsb29yKGMpO1xyXG4gICAgICBjIC09IGQ7XHJcbiAgICAgIGQgKj0gMjtcclxuICAgICAgZCArPSAyO1xyXG5cclxuICAgICAgY3R4Lm1vdmVUbyhjeCArIHBhdGhbMF0gKiBjdywgY3kgKyBwYXRoWzFdICogY3cpO1xyXG5cclxuICAgICAgZm9yKGkgPSAyOyBpICE9PSBkOyBpICs9IDIpXHJcbiAgICAgICAgY3R4LmxpbmVUbyhjeCArIHBhdGhbaV0gKiBjdywgY3kgKyBwYXRoW2kgKyAxXSAqIGN3KTtcclxuXHJcbiAgICAgIGN0eC5saW5lVG8oXHJcbiAgICAgICAgY3ggKyAocGF0aFtkIC0gMl0gKiAoMSAtIGMpICsgcGF0aFtkICAgIF0gKiBjKSAqIGN3LFxyXG4gICAgICAgIGN5ICsgKHBhdGhbZCAtIDFdICogKDEgLSBjKSArIHBhdGhbZCArIDFdICogYykgKiBjd1xyXG4gICAgICApO1xyXG5cclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGUgPCAxKSB7XHJcbiAgICAgIGUgKj0gcGF0aC5sZW5ndGggLyAyIC0gMTtcclxuICAgICAgZiAgPSBNYXRoLmZsb29yKGUpO1xyXG4gICAgICBlIC09IGY7XHJcbiAgICAgIGYgKj0gMjtcclxuICAgICAgZiArPSAyO1xyXG5cclxuICAgICAgbGVhZihcclxuICAgICAgICBjdHgsXHJcbiAgICAgICAgdCxcclxuICAgICAgICBjeCArIChwYXRoW2YgLSAyXSAqICgxIC0gZSkgKyBwYXRoW2YgICAgXSAqIGUpICogY3csXHJcbiAgICAgICAgY3kgKyAocGF0aFtmIC0gMV0gKiAoMSAtIGUpICsgcGF0aFtmICsgMV0gKiBlKSAqIGN3LFxyXG4gICAgICAgIGN3LFxyXG4gICAgICAgIHMsXHJcbiAgICAgICAgY29sb3JcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBTa3ljb25zID0gZnVuY3Rpb24ob3B0cykge1xyXG4gICAgICAgIHRoaXMubGlzdCAgICAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLmludGVydmFsICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbG9yICAgICAgID0gb3B0cyAmJiBvcHRzLmNvbG9yID8gb3B0cy5jb2xvciA6IFwiYmxhY2tcIjtcclxuICAgICAgICB0aGlzLnJlc2l6ZUNsZWFyID0gISEob3B0cyAmJiBvcHRzLnJlc2l6ZUNsZWFyKTtcclxuICAgICAgfTtcclxuXHJcbiAgU2t5Y29ucy5DTEVBUl9EQVkgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcclxuXHJcbiAgICBzdW4oY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgU2t5Y29ucy5DTEVBUl9OSUdIVCA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcclxuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcclxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xyXG5cclxuICAgIG1vb24oY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgU2t5Y29ucy5QQVJUTFlfQ0xPVURZX0RBWSA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcclxuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcclxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xyXG5cclxuICAgIHN1bihjdHgsIHQsIHcgKiAwLjYyNSwgaCAqIDAuMzc1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xyXG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC4zNzUsIGggKiAwLjYyNSwgcyAqIDAuNzUsIHMgKiBTVFJPS0UsIGNvbG9yKTtcclxuICB9O1xyXG5cclxuICBTa3ljb25zLlBBUlRMWV9DTE9VRFlfTklHSFQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcclxuXHJcbiAgICBtb29uKGN0eCwgdCwgdyAqIDAuNjY3LCBoICogMC4zNzUsIHMgKiAwLjc1LCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjM3NSwgaCAqIDAuNjI1LCBzICogMC43NSwgcyAqIFNUUk9LRSwgY29sb3IpO1xyXG4gIH07XHJcblxyXG4gIFNreWNvbnMuQ0xPVURZID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xyXG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxyXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcclxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XHJcblxyXG4gICAgY2xvdWQoY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgU2t5Y29ucy5SQUlOID0gZnVuY3Rpb24oY3R4LCB0LCBjb2xvcikge1xyXG4gICAgdmFyIHcgPSBjdHguY2FudmFzLndpZHRoLFxyXG4gICAgICAgIGggPSBjdHguY2FudmFzLmhlaWdodCxcclxuICAgICAgICBzID0gTWF0aC5taW4odywgaCk7XHJcblxyXG4gICAgcmFpbihjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgICBjbG91ZChjdHgsIHQsIHcgKiAwLjUsIGggKiAwLjM3LCBzICogMC45LCBzICogU1RST0tFLCBjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgU2t5Y29ucy5TTEVFVCA9IGZ1bmN0aW9uKGN0eCwgdCwgY29sb3IpIHtcclxuICAgIHZhciB3ID0gY3R4LmNhbnZhcy53aWR0aCxcclxuICAgICAgICBoID0gY3R4LmNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgcyA9IE1hdGgubWluKHcsIGgpO1xyXG5cclxuICAgIHNsZWV0KGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcclxuICAgIGNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcclxuICB9O1xyXG5cclxuICBTa3ljb25zLlNOT1cgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcclxuXHJcbiAgICBzbm93KGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcclxuICAgIGNsb3VkKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzcsIHMgKiAwLjksIHMgKiBTVFJPS0UsIGNvbG9yKTtcclxuICB9O1xyXG5cclxuICBTa3ljb25zLldJTkQgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKTtcclxuXHJcbiAgICBzd29vc2goY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCAwLCAyLCBjb2xvcik7XHJcbiAgICBzd29vc2goY3R4LCB0LCB3ICogMC41LCBoICogMC41LCBzLCBzICogU1RST0tFLCAxLCAyLCBjb2xvcik7XHJcbiAgfTtcclxuXHJcbiAgU2t5Y29ucy5GT0cgPSBmdW5jdGlvbihjdHgsIHQsIGNvbG9yKSB7XHJcbiAgICB2YXIgdyA9IGN0eC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgaCA9IGN0eC5jYW52YXMuaGVpZ2h0LFxyXG4gICAgICAgIHMgPSBNYXRoLm1pbih3LCBoKSxcclxuICAgICAgICBrID0gcyAqIFNUUk9LRTtcclxuXHJcbiAgICBmb2diYW5rKGN0eCwgdCwgdyAqIDAuNSwgaCAqIDAuMzIsIHMgKiAwLjc1LCBrLCBjb2xvcik7XHJcblxyXG4gICAgdCAvPSA1MDAwO1xyXG5cclxuICAgIHZhciBhID0gTWF0aC5jb3MoKHQgICAgICAgKSAqIFRBVSkgKiBzICogMC4wMixcclxuICAgICAgICBiID0gTWF0aC5jb3MoKHQgKyAwLjI1KSAqIFRBVSkgKiBzICogMC4wMixcclxuICAgICAgICBjID0gTWF0aC5jb3MoKHQgKyAwLjUwKSAqIFRBVSkgKiBzICogMC4wMixcclxuICAgICAgICBkID0gTWF0aC5jb3MoKHQgKyAwLjc1KSAqIFRBVSkgKiBzICogMC4wMixcclxuICAgICAgICBuID0gaCAqIDAuOTM2LFxyXG4gICAgICAgIGUgPSBNYXRoLmZsb29yKG4gLSBrICogMC41KSArIDAuNSxcclxuICAgICAgICBmID0gTWF0aC5mbG9vcihuIC0gayAqIDIuNSkgKyAwLjU7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICBjdHgubGluZVdpZHRoID0gaztcclxuICAgIGN0eC5saW5lQ2FwID0gXCJyb3VuZFwiO1xyXG4gICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xyXG5cclxuICAgIGxpbmUoY3R4LCBhICsgdyAqIDAuMiArIGsgKiAwLjUsIGUsIGIgKyB3ICogMC44IC0gayAqIDAuNSwgZSk7XHJcbiAgICBsaW5lKGN0eCwgYyArIHcgKiAwLjIgKyBrICogMC41LCBmLCBkICsgdyAqIDAuOCAtIGsgKiAwLjUsIGYpO1xyXG4gIH07XHJcblxyXG4gIFNreWNvbnMucHJvdG90eXBlID0ge1xyXG4gICAgX2RldGVybWluZURyYXdpbmdGdW5jdGlvbjogZnVuY3Rpb24oZHJhdykge1xyXG4gICAgICBpZih0eXBlb2YgZHJhdyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBkcmF3ID0gU2t5Y29uc1tkcmF3LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCBcIl9cIildIHx8IG51bGw7XHJcblxyXG4gICAgICByZXR1cm4gZHJhdztcclxuICAgIH0sXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKGVsLCBkcmF3KSB7XHJcbiAgICAgIHZhciBvYmo7XHJcblxyXG4gICAgICBpZih0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbCk7XHJcblxyXG4gICAgICAvLyBEb2VzIG5vdGhpbmcgaWYgY2FudmFzIG5hbWUgZG9lc24ndCBleGlzdHNcclxuICAgICAgaWYoZWwgPT09IG51bGwgfHwgZWwgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBkcmF3ID0gdGhpcy5fZGV0ZXJtaW5lRHJhd2luZ0Z1bmN0aW9uKGRyYXcpO1xyXG5cclxuICAgICAgLy8gRG9lcyBub3RoaW5nIGlmIHRoZSBkcmF3IGZ1bmN0aW9uIGlzbid0IGFjdHVhbGx5IGEgZnVuY3Rpb25cclxuICAgICAgaWYodHlwZW9mIGRyYXcgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICBvYmogPSB7XHJcbiAgICAgICAgZWxlbWVudDogZWwsXHJcbiAgICAgICAgY29udGV4dDogZWwuZ2V0Q29udGV4dChcIjJkXCIpLFxyXG4gICAgICAgIGRyYXdpbmc6IGRyYXdcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubGlzdC5wdXNoKG9iaik7XHJcbiAgICAgIHRoaXMuZHJhdyhvYmosIEtFWUZSQU1FKTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGVsLCBkcmF3KSB7XHJcbiAgICAgIHZhciBpO1xyXG5cclxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpO1xyXG5cclxuICAgICAgZm9yKGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07IClcclxuICAgICAgICBpZih0aGlzLmxpc3RbaV0uZWxlbWVudCA9PT0gZWwpIHtcclxuICAgICAgICAgIHRoaXMubGlzdFtpXS5kcmF3aW5nID0gdGhpcy5fZGV0ZXJtaW5lRHJhd2luZ0Z1bmN0aW9uKGRyYXcpO1xyXG4gICAgICAgICAgdGhpcy5kcmF3KHRoaXMubGlzdFtpXSwgS0VZRlJBTUUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWRkKGVsLCBkcmF3KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIHZhciBpO1xyXG5cclxuICAgICAgaWYodHlwZW9mIGVsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwpO1xyXG5cclxuICAgICAgZm9yKGkgPSB0aGlzLmxpc3QubGVuZ3RoOyBpLS07IClcclxuICAgICAgICBpZih0aGlzLmxpc3RbaV0uZWxlbWVudCA9PT0gZWwpIHtcclxuICAgICAgICAgIHRoaXMubGlzdC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRyYXc6IGZ1bmN0aW9uKG9iaiwgdGltZSkge1xyXG4gICAgICB2YXIgY2FudmFzID0gb2JqLmNvbnRleHQuY2FudmFzO1xyXG5cclxuICAgICAgaWYodGhpcy5yZXNpemVDbGVhcilcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMud2lkdGg7XHJcblxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgb2JqLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICBvYmouZHJhd2luZyhvYmouY29udGV4dCwgdGltZSwgdGhpcy5jb2xvcik7XHJcbiAgICB9LFxyXG4gICAgcGxheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgdGhpcy5pbnRlcnZhbCA9IHJlcXVlc3RJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgaTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSBzZWxmLmxpc3QubGVuZ3RoOyBpLS07IClcclxuICAgICAgICAgIHNlbGYuZHJhdyhzZWxmLmxpc3RbaV0sIG5vdyk7XHJcbiAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICB9LFxyXG4gICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZih0aGlzLmludGVydmFsKSB7XHJcbiAgICAgICAgY2FuY2VsSW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4vL1NldCB3ZWF0aGVyXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+IHtcclxuICAgIGxldCBsb25nO1xyXG4gICAgbGV0IGxhdDtcclxuICAgIGxldCB0ZW1wZXJhdHVyZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLWRlc2NyaXB0aW9uJyk7XHJcbiAgICBsZXQgdGVtcGVyYXR1cmVEZWdyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtZGVncmVlJyk7XHJcbiAgICBsZXQgYXBwYXJlbnRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcGFyZW50LXRlbXBlcmF0dXJlJyk7XHJcbiAgICBsZXQgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVlZC13aW5kJyk7XHJcbiAgICBsZXQgaHVtaWRpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XHJcbiAgICBsZXQgbG9uZ2l0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvbmdpdHVkZScpO1xyXG4gICAgbGV0IGxhdHRpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdHRpdHVkZScpO1xyXG4gICAgLy90b21tb3Jvd1xyXG4gICAgbGV0IHRlbXBlcmF0dXJlVG9tb3Jyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtdG9tb3Jyb3ctZGVncmVlJyk7XHJcbiAgIFxyXG4gICAgLy90b21tb3JvdzFcclxuICAgIGxldCB0ZW1wZXJhdHVyZVRvbW9ycm93MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS10b21vcnJvdy1kZWdyZWUxJyk7XHJcbiAgICAvL3RvbW1vcm93MlxyXG4gICAgbGV0IHRlbXBlcmF0dXJlVG9tb3Jyb3cyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXRvbW9ycm93LWRlZ3JlZTInKTtcclxuXHJcbiAgICBpZihuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pe1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uID0+IHtcclxuICAgICAgICBsb25nID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICBsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgdmFyIGFwaSA9IGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC81ZDhlNDdhMGFmMzdmODQwNjg0ZDhjMGUwNTY0YTc3Yy8ke2xhdH0sJHtsb25nfT91bml0cz1zaSZsYW5nPWVuYDtcclxuICAgICAgICB2YXIgcHJveHlVcmwgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJztcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChwcm94eVVybCArICBhcGksIHtcclxuICAgICAgICAgIGhlYWRlcnMgOiB7IFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbmNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgY29uc3Qge3RlbXBlcmF0dXJlLCBzdW1tYXJ5LCBpY29uLCBhcHBhcmVudFRlbXBlcmF0dXJlLCB3aW5kU3BlZWQsIGh1bWlkaXR5fSA9IGRhdGEuY3VycmVudGx5O1xyXG4gICAgICAgICAgLy9sYW5ndWFnZSBjb3VudFxyXG4gICAgICAgICAgd2luZG93Wydsb25naXR1ZGVMYW5nJ10gPSBkYXRhLmxvbmdpdHVkZS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnwrAnKTtcclxuICAgICAgICAgIHdpbmRvd1snbGF0aXR1ZGVMYW5nJ10gPSBkYXRhLmxhdGl0dWRlLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICfCsCcpO1xyXG4gICAgICAgICAgd2luZG93Wyd3aW5kJ10gPSBNYXRoLmNlaWwoZGF0YS5jdXJyZW50bHkud2luZFNwZWVkKTtcclxuICAgICAgICAgIHdpbmRvd1snYXBwYXJlbnQnXSA9IE1hdGguY2VpbChkYXRhLmN1cnJlbnRseS5hcHBhcmVudFRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgIHdpbmRvd1snaHVtJ10gPSBkYXRhLmN1cnJlbnRseS5odW1pZGl0eSAqIDEwMDtcclxuICAgICAgICAgIHdpbmRvd1snc3VtbWFyJ10gPSBkYXRhLmN1cnJlbnRseS5zdW1tYXJ5O1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbHNpdXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGguY2VpbChkYXRhLmN1cnJlbnRseS50ZW1wZXJhdHVyZSk7XHJcbiAgICAgICAgICAgIHRlbXAwLnRleHRDb250ZW50ID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkpO1xyXG4gICAgICAgICAgICB0ZW1wVC50ZXh0Q29udGVudCA9IE1hdGguY2VpbCh0ZW1wZXJhdHVyZVRvbW9ycm93SG91cmx5MSk7XHJcbiAgICAgICAgICAgIHRlbXBGLnRleHRDb250ZW50ID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkyKTtcclxuICAgICAgICAgICAgdGVtcFVuaXgudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgICAgICAgICB0ZW1wVW5peDEudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgICAgICAgICB0ZW1wVW5peDIudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgICAgICAgICB0ZW1wVW5peDMudGV4dENvbnRlbnQgPSAnwrAnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAvL3RvbW1vcm93XHJcbiAgICAgICAgICB2YXIgdGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseSA9IChkYXRhLmRhaWx5LmRhdGFbMV0udGVtcGVyYXR1cmVNYXggKyBkYXRhLmRhaWx5LmRhdGFbMV0udGVtcGVyYXR1cmVNaW4pLzI7XHJcbiAgICAgICAgICB2YXIgaWNvblRvbSA9IGRhdGEuZGFpbHkuZGF0YVsxXS5pY29uO1xyXG4gICAgICAgICAgLy90b21tb3JvdzFcclxuICAgICAgICAgIHZhciB0ZW1wZXJhdHVyZVRvbW9ycm93SG91cmx5MSA9IChkYXRhLmRhaWx5LmRhdGFbMl0udGVtcGVyYXR1cmVNYXggKyBkYXRhLmRhaWx5LmRhdGFbMl0udGVtcGVyYXR1cmVNaW4pLzI7XHJcbiAgICAgICAgICBsZXQgaWNvblRvbTEgPSBkYXRhLmRhaWx5LmRhdGFbMl0uaWNvbjtcclxuICAgICAgICAgIC8vdG9tbW9yb3cyXHJcbiAgICAgICAgICB2YXIgdGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseTIgPSAoZGF0YS5kYWlseS5kYXRhWzNdLnRlbXBlcmF0dXJlTWF4ICsgZGF0YS5kYWlseS5kYXRhWzNdLnRlbXBlcmF0dXJlTWluKS8yO1xyXG4gICAgICAgICAgbGV0IGljb25Ub20yID0gZGF0YS5kYWlseS5kYXRhWzNdLmljb247XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vU2V0IERPTVxyXG4gICAgICAgICAgdGVtcGVyYXR1cmVEZWdyZWUudGV4dENvbnRlbnQgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmUpO1xyXG4gICAgICAgICAgdGVtcGVyYXR1cmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHN1bW1hcnk7XHJcbiAgICAgICAgICBhcHBhcmVudFRlbXAudGV4dENvbnRlbnQgPSAnRkVFTFMgTElLRTogJyArIE1hdGguY2VpbChhcHBhcmVudFRlbXBlcmF0dXJlKTtcclxuICAgICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSAnV0lORDogJyArIE1hdGguY2VpbCh3aW5kU3BlZWQpICsgJyBtL3MnO1xyXG4gICAgICAgICAgaHVtaWRpLnRleHRDb250ZW50ID0gJ0hVTUlESVRZOiAnICsgaHVtaWRpdHkgKiAxMDAgKyAnICUnO1xyXG4gICAgICAgICAgdGVtcGVyYXR1cmVUb21vcnJvdy50ZXh0Q29udGVudCAgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseSk7XHJcbiAgICAgICAgICB0ZW1wZXJhdHVyZVRvbW9ycm93MS50ZXh0Q29udGVudCAgPSBNYXRoLmNlaWwodGVtcGVyYXR1cmVUb21vcnJvd0hvdXJseTEpO1xyXG4gICAgICAgICAgdGVtcGVyYXR1cmVUb21vcnJvdzIudGV4dENvbnRlbnQgID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkyKTtcclxuICAgICAgICAgIGxvbmdpdC50ZXh0Q29udGVudCA9ICdMb25naXR1dGU6ICcgKyBkYXRhLmxvbmdpdHVkZS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnwrAnKTtcclxuICAgICAgICAgIGxhdHRpLnRleHRDb250ZW50ID0gJ0xhdGl0dWRlOiAnICsgZGF0YS5sYXRpdHVkZS50b0ZpeGVkKDIpLnJlcGxhY2UoJy4nLCAnwrAnKTtcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgIC8vU2V0IEljb25cclxuICAgICAgICAgIHNldEljb25zKGljb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uJykpO1xyXG4gICAgICAgICAgc2V0SWNvbnMoaWNvblRvbSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tdG9tb3Jyb3cnKSk7XHJcbiAgICAgICAgICBzZXRJY29ucyhpY29uVG9tMSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tdG9tb3Jyb3cxJykpO1xyXG4gICAgICAgICAgc2V0SWNvbnMoaWNvblRvbTIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uLXRvbW9ycm93MicpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGZ1bmN0aW9uIHNldEljb25zKGljb24sIGljb25JRCkge1xyXG4gICAgICAgIGNvbnN0IHNreWNvbnMgPSBuZXcgU2t5Y29ucyh7Y29sb3I6IFwicmdiKDIzNCwgMTcxLCAyNDApXCJ9KTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SWNvbiA9IGljb24ucmVwbGFjZSgvLS9nLCBcIl9cIikudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBza3ljb25zLnBsYXkoKTtcclxuICAgICAgICByZXR1cm4gc2t5Y29ucy5zZXQoaWNvbklELCBTa3ljb25zW2N1cnJlbnRJY29uXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTsgIFxyXG59KHRoaXMpKTtcclxuXHJcbmxldCBhcHBLZXkgPSAnN2M0MDZlYTYzN2I2MTZkYjQzYWUzOGMzMDFkNmNiODEnO1xyXG5sZXQgdW5pdHMgPSAnaW1wZXJpYWwnO1xyXG5sZXQgc2FlcmNoTWV0aG9kO1xyXG5jb25zdCBmdWxsQ291bnRyeSA9IHtcIkJEXCI6IFwiQmFuZ2xhZGVzaFwiLCBcIkJFXCI6IFwiQmVsZ2l1bVwiLCBcIkJGXCI6IFwiQnVya2luYSBGYXNvXCIsIFwiQkdcIjogXCJCdWxnYXJpYVwiLCBcIkJBXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcIkJCXCI6IFwiQmFyYmFkb3NcIiwgXCJXRlwiOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIFwiQkxcIjogXCJTYWludCBCYXJ0aGVsZW15XCIsIFwiQk1cIjogXCJCZXJtdWRhXCIsIFwiQk5cIjogXCJCcnVuZWlcIiwgXCJCT1wiOiBcIkJvbGl2aWFcIiwgXCJCSFwiOiBcIkJhaHJhaW5cIiwgXCJCSVwiOiBcIkJ1cnVuZGlcIiwgXCJCSlwiOiBcIkJlbmluXCIsIFwiQlRcIjogXCJCaHV0YW5cIiwgXCJKTVwiOiBcIkphbWFpY2FcIiwgXCJCVlwiOiBcIkJvdXZldCBJc2xhbmRcIiwgXCJCV1wiOiBcIkJvdHN3YW5hXCIsIFwiV1NcIjogXCJTYW1vYVwiLCBcIkJRXCI6IFwiQm9uYWlyZSwgU2FpbnQgRXVzdGF0aXVzIGFuZCBTYWJhIFwiLCBcIkJSXCI6IFwiQnJhemlsXCIsIFwiQlNcIjogXCJCYWhhbWFzXCIsIFwiSkVcIjogXCJKZXJzZXlcIiwgXCJCWVwiOiBcIkJlbGFydXNcIiwgXCJCWlwiOiBcIkJlbGl6ZVwiLCBcIlJVXCI6IFwiUnVzc2lhXCIsIFwiUldcIjogXCJSd2FuZGFcIiwgXCJSU1wiOiBcIlNlcmJpYVwiLCBcIlRMXCI6IFwiRWFzdCBUaW1vclwiLCBcIlJFXCI6IFwiUmV1bmlvblwiLCBcIlRNXCI6IFwiVHVya21lbmlzdGFuXCIsIFwiVEpcIjogXCJUYWppa2lzdGFuXCIsIFwiUk9cIjogXCJSb21hbmlhXCIsIFwiVEtcIjogXCJUb2tlbGF1XCIsIFwiR1dcIjogXCJHdWluZWEtQmlzc2F1XCIsIFwiR1VcIjogXCJHdWFtXCIsIFwiR1RcIjogXCJHdWF0ZW1hbGFcIiwgXCJHU1wiOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIFwiR1JcIjogXCJHcmVlY2VcIiwgXCJHUVwiOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIFwiR1BcIjogXCJHdWFkZWxvdXBlXCIsIFwiSlBcIjogXCJKYXBhblwiLCBcIkdZXCI6IFwiR3V5YW5hXCIsIFwiR0dcIjogXCJHdWVybnNleVwiLCBcIkdGXCI6IFwiRnJlbmNoIEd1aWFuYVwiLCBcIkdFXCI6IFwiR2VvcmdpYVwiLCBcIkdEXCI6IFwiR3JlbmFkYVwiLCBcIkdCXCI6IFwiVW5pdGVkIEtpbmdkb21cIiwgXCJHQVwiOiBcIkdhYm9uXCIsIFwiU1ZcIjogXCJFbCBTYWx2YWRvclwiLCBcIkdOXCI6IFwiR3VpbmVhXCIsIFwiR01cIjogXCJHYW1iaWFcIiwgXCJHTFwiOiBcIkdyZWVubGFuZFwiLCBcIkdJXCI6IFwiR2licmFsdGFyXCIsIFwiR0hcIjogXCJHaGFuYVwiLCBcIk9NXCI6IFwiT21hblwiLCBcIlROXCI6IFwiVHVuaXNpYVwiLCBcIkpPXCI6IFwiSm9yZGFuXCIsIFwiSFJcIjogXCJDcm9hdGlhXCIsIFwiSFRcIjogXCJIYWl0aVwiLCBcIkhVXCI6IFwiSHVuZ2FyeVwiLCBcIkhLXCI6IFwiSG9uZyBLb25nXCIsIFwiSE5cIjogXCJIb25kdXJhc1wiLCBcIkhNXCI6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIFwiVkVcIjogXCJWZW5lenVlbGFcIiwgXCJQUlwiOiBcIlB1ZXJ0byBSaWNvXCIsIFwiUFNcIjogXCJQYWxlc3RpbmlhbiBUZXJyaXRvcnlcIiwgXCJQV1wiOiBcIlBhbGF1XCIsIFwiUFRcIjogXCJQb3J0dWdhbFwiLCBcIlNKXCI6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBcIlBZXCI6IFwiUGFyYWd1YXlcIiwgXCJJUVwiOiBcIklyYXFcIiwgXCJQQVwiOiBcIlBhbmFtYVwiLCBcIlBGXCI6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBcIlBHXCI6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBcIlBFXCI6IFwiUGVydVwiLCBcIlBLXCI6IFwiUGFraXN0YW5cIiwgXCJQSFwiOiBcIlBoaWxpcHBpbmVzXCIsIFwiUE5cIjogXCJQaXRjYWlyblwiLCBcIlBMXCI6IFwiUG9sYW5kXCIsIFwiUE1cIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIFwiWk1cIjogXCJaYW1iaWFcIiwgXCJFSFwiOiBcIldlc3Rlcm4gU2FoYXJhXCIsIFwiRUVcIjogXCJFc3RvbmlhXCIsIFwiRUdcIjogXCJFZ3lwdFwiLCBcIlpBXCI6IFwiU291dGggQWZyaWNhXCIsIFwiRUNcIjogXCJFY3VhZG9yXCIsIFwiSVRcIjogXCJJdGFseVwiLCBcIlZOXCI6IFwiVmlldG5hbVwiLCBcIlNCXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsIFwiRVRcIjogXCJFdGhpb3BpYVwiLCBcIlNPXCI6IFwiU29tYWxpYVwiLCBcIlpXXCI6IFwiWmltYmFid2VcIiwgXCJTQVwiOiBcIlNhdWRpIEFyYWJpYVwiLCBcIkVTXCI6IFwiU3BhaW5cIiwgXCJFUlwiOiBcIkVyaXRyZWFcIiwgXCJNRVwiOiBcIk1vbnRlbmVncm9cIiwgXCJNRFwiOiBcIk1vbGRvdmFcIiwgXCJNR1wiOiBcIk1hZGFnYXNjYXJcIiwgXCJNRlwiOiBcIlNhaW50IE1hcnRpblwiLCBcIk1BXCI6IFwiTW9yb2Njb1wiLCBcIk1DXCI6IFwiTW9uYWNvXCIsIFwiVVpcIjogXCJVemJla2lzdGFuXCIsIFwiTU1cIjogXCJNeWFubWFyXCIsIFwiTUxcIjogXCJNYWxpXCIsIFwiTU9cIjogXCJNYWNhb1wiLCBcIk1OXCI6IFwiTW9uZ29saWFcIiwgXCJNSFwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgXCJNS1wiOiBcIk1hY2Vkb25pYVwiLCBcIk1VXCI6IFwiTWF1cml0aXVzXCIsIFwiTVRcIjogXCJNYWx0YVwiLCBcIk1XXCI6IFwiTWFsYXdpXCIsIFwiTVZcIjogXCJNYWxkaXZlc1wiLCBcIk1RXCI6IFwiTWFydGluaXF1ZVwiLCBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwiTVNcIjogXCJNb250c2VycmF0XCIsIFwiTVJcIjogXCJNYXVyaXRhbmlhXCIsIFwiSU1cIjogXCJJc2xlIG9mIE1hblwiLCBcIlVHXCI6IFwiVWdhbmRhXCIsIFwiVFpcIjogXCJUYW56YW5pYVwiLCBcIk1ZXCI6IFwiTWFsYXlzaWFcIiwgXCJNWFwiOiBcIk1leGljb1wiLCBcIklMXCI6IFwiSXNyYWVsXCIsIFwiRlJcIjogXCJGcmFuY2VcIiwgXCJJT1wiOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBcIlNIXCI6IFwiU2FpbnQgSGVsZW5hXCIsIFwiRklcIjogXCJGaW5sYW5kXCIsIFwiRkpcIjogXCJGaWppXCIsIFwiRktcIjogXCJGYWxrbGFuZCBJc2xhbmRzXCIsIFwiRk1cIjogXCJNaWNyb25lc2lhXCIsIFwiRk9cIjogXCJGYXJvZSBJc2xhbmRzXCIsIFwiTklcIjogXCJOaWNhcmFndWFcIiwgXCJOTFwiOiBcIk5ldGhlcmxhbmRzXCIsIFwiTk9cIjogXCJOb3J3YXlcIiwgXCJOQVwiOiBcIk5hbWliaWFcIiwgXCJWVVwiOiBcIlZhbnVhdHVcIiwgXCJOQ1wiOiBcIk5ldyBDYWxlZG9uaWFcIiwgXCJORVwiOiBcIk5pZ2VyXCIsIFwiTkZcIjogXCJOb3Jmb2xrIElzbGFuZFwiLCBcIk5HXCI6IFwiTmlnZXJpYVwiLCBcIk5aXCI6IFwiTmV3IFplYWxhbmRcIiwgXCJOUFwiOiBcIk5lcGFsXCIsIFwiTlJcIjogXCJOYXVydVwiLCBcIk5VXCI6IFwiTml1ZVwiLCBcIkNLXCI6IFwiQ29vayBJc2xhbmRzXCIsIFwiWEtcIjogXCJLb3Nvdm9cIiwgXCJDSVwiOiBcIkl2b3J5IENvYXN0XCIsIFwiQ0hcIjogXCJTd2l0emVybGFuZFwiLCBcIkNPXCI6IFwiQ29sb21iaWFcIiwgXCJDTlwiOiBcIkNoaW5hXCIsIFwiQ01cIjogXCJDYW1lcm9vblwiLCBcIkNMXCI6IFwiQ2hpbGVcIiwgXCJDQ1wiOiBcIkNvY29zIElzbGFuZHNcIiwgXCJDQVwiOiBcIkNhbmFkYVwiLCBcIkNHXCI6IFwiUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsIFwiQ0ZcIjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgXCJDRFwiOiBcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCIsIFwiQ1pcIjogXCJDemVjaCBSZXB1YmxpY1wiLCBcIkNZXCI6IFwiQ3lwcnVzXCIsIFwiQ1hcIjogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIFwiQ1JcIjogXCJDb3N0YSBSaWNhXCIsIFwiQ1dcIjogXCJDdXJhY2FvXCIsIFwiQ1ZcIjogXCJDYXBlIFZlcmRlXCIsIFwiQ1VcIjogXCJDdWJhXCIsIFwiU1pcIjogXCJTd2F6aWxhbmRcIiwgXCJTWVwiOiBcIlN5cmlhXCIsIFwiU1hcIjogXCJTaW50IE1hYXJ0ZW5cIiwgXCJLR1wiOiBcIkt5cmd5enN0YW5cIiwgXCJLRVwiOiBcIktlbnlhXCIsIFwiU1NcIjogXCJTb3V0aCBTdWRhblwiLCBcIlNSXCI6IFwiU3VyaW5hbWVcIiwgXCJLSVwiOiBcIktpcmliYXRpXCIsIFwiS0hcIjogXCJDYW1ib2RpYVwiLCBcIktOXCI6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIFwiS01cIjogXCJDb21vcm9zXCIsIFwiU1RcIjogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgXCJTS1wiOiBcIlNsb3Zha2lhXCIsIFwiS1JcIjogXCJTb3V0aCBLb3JlYVwiLCBcIlNJXCI6IFwiU2xvdmVuaWFcIiwgXCJLUFwiOiBcIk5vcnRoIEtvcmVhXCIsIFwiS1dcIjogXCJLdXdhaXRcIiwgXCJTTlwiOiBcIlNlbmVnYWxcIiwgXCJTTVwiOiBcIlNhbiBNYXJpbm9cIiwgXCJTTFwiOiBcIlNpZXJyYSBMZW9uZVwiLCBcIlNDXCI6IFwiU2V5Y2hlbGxlc1wiLCBcIktaXCI6IFwiS2F6YWtoc3RhblwiLCBcIktZXCI6IFwiQ2F5bWFuIElzbGFuZHNcIiwgXCJTR1wiOiBcIlNpbmdhcG9yZVwiLCBcIlNFXCI6IFwiU3dlZGVuXCIsIFwiU0RcIjogXCJTdWRhblwiLCBcIkRPXCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIFwiRE1cIjogXCJEb21pbmljYVwiLCBcIkRKXCI6IFwiRGppYm91dGlcIiwgXCJES1wiOiBcIkRlbm1hcmtcIiwgXCJWR1wiOiBcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIiwgXCJERVwiOiBcIkdlcm1hbnlcIiwgXCJZRVwiOiBcIlllbWVuXCIsIFwiRFpcIjogXCJBbGdlcmlhXCIsIFwiVVNcIjogXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVlcIjogXCJVcnVndWF5XCIsIFwiWVRcIjogXCJNYXlvdHRlXCIsIFwiVU1cIjogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgXCJMQlwiOiBcIkxlYmFub25cIiwgXCJMQ1wiOiBcIlNhaW50IEx1Y2lhXCIsIFwiTEFcIjogXCJMYW9zXCIsIFwiVFZcIjogXCJUdXZhbHVcIiwgXCJUV1wiOiBcIlRhaXdhblwiLCBcIlRUXCI6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBcIlRSXCI6IFwiVHVya2V5XCIsIFwiTEtcIjogXCJTcmkgTGFua2FcIiwgXCJMSVwiOiBcIkxpZWNodGVuc3RlaW5cIiwgXCJMVlwiOiBcIkxhdHZpYVwiLCBcIlRPXCI6IFwiVG9uZ2FcIiwgXCJMVFwiOiBcIkxpdGh1YW5pYVwiLCBcIkxVXCI6IFwiTHV4ZW1ib3VyZ1wiLCBcIkxSXCI6IFwiTGliZXJpYVwiLCBcIkxTXCI6IFwiTGVzb3Rob1wiLCBcIlRIXCI6IFwiVGhhaWxhbmRcIiwgXCJURlwiOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBcIlRHXCI6IFwiVG9nb1wiLCBcIlREXCI6IFwiQ2hhZFwiLCBcIlRDXCI6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIFwiTFlcIjogXCJMaWJ5YVwiLCBcIlZBXCI6IFwiVmF0aWNhblwiLCBcIlZDXCI6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgXCJBRVwiOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIFwiQURcIjogXCJBbmRvcnJhXCIsIFwiQUdcIjogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIFwiQUZcIjogXCJBZmdoYW5pc3RhblwiLCBcIkFJXCI6IFwiQW5ndWlsbGFcIiwgXCJWSVwiOiBcIlUuUy4gVmlyZ2luIElzbGFuZHNcIiwgXCJJU1wiOiBcIkljZWxhbmRcIiwgXCJJUlwiOiBcIklyYW5cIiwgXCJBTVwiOiBcIkFybWVuaWFcIiwgXCJBTFwiOiBcIkFsYmFuaWFcIiwgXCJBT1wiOiBcIkFuZ29sYVwiLCBcIkFRXCI6IFwiQW50YXJjdGljYVwiLCBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIiwgXCJBUlwiOiBcIkFyZ2VudGluYVwiLCBcIkFVXCI6IFwiQXVzdHJhbGlhXCIsIFwiQVRcIjogXCJBdXN0cmlhXCIsIFwiQVdcIjogXCJBcnViYVwiLCBcIklOXCI6IFwiSW5kaWFcIiwgXCJBWFwiOiBcIkFsYW5kIElzbGFuZHNcIiwgXCJBWlwiOiBcIkF6ZXJiYWlqYW5cIiwgXCJJRVwiOiBcIklyZWxhbmRcIiwgXCJJRFwiOiBcIkluZG9uZXNpYVwiLCBcIlVBXCI6IFwiVWtyYWluZVwiLCBcIlFBXCI6IFwiUWF0YXJcIiwgXCJNWlwiOiBcIk1vemFtYmlxdWVcIn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlYXJjaE1ldGhvZChzZWFyY2hUZXJtKSB7XHJcbiAgICBpZihzZWFyY2hUZXJtLmxlbmd0aCA9PT0gNSAmJiBOdW1iZXIucGFyc2VJbnQoc2VhcmNoVGVybSkgKyAnJyA9PT0gc2VhcmNoVGVybSlcclxuICAgICAgICBzYWVyY2hNZXRob2QgPSAnemlwJztcclxuICAgIGVsc2VcclxuICAgICAgICBzYWVyY2hNZXRob2QgPSAncSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoc2VhcmNoVGVybSkge1xyXG4gICAgZ2V0U2VhcmNoTWV0aG9kKHNlYXJjaFRlcm0pO1xyXG4gICAgdmFyIHByb3h5VXJsID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XHJcbiAgICBmZXRjaChwcm94eVVybCArIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyR7c2FlcmNoTWV0aG9kfT0ke3NlYXJjaFRlcm19JkFQUElEPSR7YXBwS2V5fSZ1bml0cz0ke3VuaXRzfWApXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xyXG4gICAgfSkudGhlbihyZXN1bHRpID0+IHtcclxuICAgICAgICBpbml0KHJlc3VsdGkpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdChyZXN1bHRmcm9tc2VydmVyKSB7XHJcbiAgICBsZXQgbG9uZyA9IHJlc3VsdGZyb21zZXJ2ZXIuY29vcmQubG9uO1xyXG4gICAgbGV0IGxhdCA9IHJlc3VsdGZyb21zZXJ2ZXIuY29vcmQubGF0O1xyXG4gICAgbGV0IHRlbXBlcmF0dXJlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtZGVzY3JpcHRpb24nKTtcclxuICAgIGxldCB0ZW1wZXJhdHVyZURlZ3JlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1kZWdyZWUnKTtcclxuICAgIGxldCBhcHBhcmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwYXJlbnQtdGVtcGVyYXR1cmUnKTtcclxuICAgIGxldCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWVkLXdpbmQnKTtcclxuICAgIGxldCBodW1pZGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcclxuICAgIGxldCBsb25naXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9uZ2l0dWRlJyk7XHJcbiAgICBsZXQgbGF0dGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF0dGl0dWRlJyk7XHJcbiAgICAvL3RvbW1vcm93XHJcbiAgICBsZXQgdGVtcGVyYXR1cmVUb21vcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS10b21vcnJvdy1kZWdyZWUnKTtcclxuICAgIC8vdG9tbW9yb3cxXHJcbiAgICBsZXQgdGVtcGVyYXR1cmVUb21vcnJvdzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUtdG9tb3Jyb3ctZGVncmVlMScpO1xyXG4gICAgLy90b21tb3JvdzJcclxuICAgIGxldCB0ZW1wZXJhdHVyZVRvbW9ycm93MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS10b21vcnJvdy1kZWdyZWUyJyk7XHJcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcclxuICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pYTJsellXOXNlV0VpTENKaElqb2lZMnN6YTJSNWVtMDRNR2s1YVROdGJuUXlaV1I1WTNGdU9TSjkucG1Fd0JubFE5dktPT3ZmNG14NXVuQSc7XHJcbiAgICB2YXIgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XHJcbiAgICBjb250YWluZXI6ICdtYXAnLCAvLyBjb250YWluZXIgaWRcclxuICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXHJcbiAgICBjZW50ZXI6IFtsb25nLCBsYXRdLCAvLyBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgem9vbTogMTAgLy8gc3RhcnRpbmcgem9vbVxyXG4gIH0pO1xyXG5cclxuICAgIGNpdHkudGV4dENvbnRlbnQgPSByZXN1bHRmcm9tc2VydmVyLm5hbWUgKyAnLCAnO1xyXG4gICAgZm9yICh2YXIgaSBpbiBmdWxsQ291bnRyeSkge1xyXG4gICAgICAgIGlmKHJlc3VsdGZyb21zZXJ2ZXIuc3lzLmNvdW50cnkgPT0gaSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1uYW1lJykuaW5uZXJIVE1MID0gZnVsbENvdW50cnlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGFwaSA9IGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC81ZDhlNDdhMGFmMzdmODQwNjg0ZDhjMGUwNTY0YTc3Yy8ke2xhdH0sJHtsb25nfT91bml0cz1zaSZsYW5nPWVuYDtcclxuICAgIHZhciBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xyXG4gICAgZmV0Y2gocHJveHlVcmwgKyAgYXBpKVxyXG4gICAgLnRoZW4ocmVzcG9uY2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uY2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG5cclxuICAgICAgY29uc3Qge3RlbXBlcmF0dXJlLCBzdW1tYXJ5LCBhcHBhcmVudFRlbXBlcmF0dXJlLCB3aW5kU3BlZWQsIGh1bWlkaXR5fSA9IGRhdGEuY3VycmVudGx5O1xyXG4gICAgICAvL3RvbW1vcm93XHJcbiAgICAgIGxldCB0ZW1wZXJhdHVyZVRvbW9ycm93SG91cmx5ID0gKGRhdGEuZGFpbHkuZGF0YVsxXS50ZW1wZXJhdHVyZU1heCArIGRhdGEuZGFpbHkuZGF0YVsxXS50ZW1wZXJhdHVyZU1pbikvMjtcclxuICAgICAgLy90b21tb3JvdzFcclxuICAgICAgbGV0IHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkxID0gKGRhdGEuZGFpbHkuZGF0YVsyXS50ZW1wZXJhdHVyZU1heCArIGRhdGEuZGFpbHkuZGF0YVsyXS50ZW1wZXJhdHVyZU1pbikvMjtcclxuICAgICAgLy90b21tb3JvdzJcclxuICAgICAgbGV0IHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkyID0gKGRhdGEuZGFpbHkuZGF0YVszXS50ZW1wZXJhdHVyZU1heCArIGRhdGEuZGFpbHkuZGF0YVszXS50ZW1wZXJhdHVyZU1pbikvMjtcclxuICAgICAgLy9TZXQgRE9NXHJcbiAgICAgIHRlbXBlcmF0dXJlRGVncmVlLnRleHRDb250ZW50ID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlKTtcclxuICAgICAgdGVtcGVyYXR1cmVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHN1bW1hcnk7XHJcbiAgICAgIGFwcGFyZW50VGVtcC50ZXh0Q29udGVudCA9ICdGRUVMUyBMSUtFOiAnICsgTWF0aC5jZWlsKGFwcGFyZW50VGVtcGVyYXR1cmUpO1xyXG4gICAgICB3aW5kLnRleHRDb250ZW50ID0gJ1dJTkQ6ICcgKyBNYXRoLmNlaWwod2luZFNwZWVkKSArICcgbS9zJztcclxuICAgICAgaHVtaWRpLnRleHRDb250ZW50ID0gJ0hVTUlESVRZOiAnICsgaHVtaWRpdHkgKiAxMDAgKyAnICUnO1xyXG4gICAgICB0ZW1wZXJhdHVyZVRvbW9ycm93LnRleHRDb250ZW50ICA9IE1hdGguY2VpbCh0ZW1wZXJhdHVyZVRvbW9ycm93SG91cmx5KTtcclxuICAgICAgdGVtcGVyYXR1cmVUb21vcnJvdzEudGV4dENvbnRlbnQgID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkxKTtcclxuICAgICAgdGVtcGVyYXR1cmVUb21vcnJvdzIudGV4dENvbnRlbnQgID0gTWF0aC5jZWlsKHRlbXBlcmF0dXJlVG9tb3Jyb3dIb3VybHkyKTtcclxuICAgICAgbG9uZ2l0LnRleHRDb250ZW50ID0gJ0xvbmdpdHV0ZTogJyArIGRhdGEubG9uZ2l0dWRlLnRvRml4ZWQoMikucmVwbGFjZSgnLicsICfCsCcpO1xyXG4gICAgICBsYXR0aS50ZXh0Q29udGVudCA9ICdMYXRpdHVkZTogJyArIGRhdGEubGF0aXR1ZGUudG9GaXhlZCgyKS5yZXBsYWNlKCcuJywgJ8KwJyk7XHJcbiAgICB9KTtcclxufSAgIFxyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBzZWFyY2hUZXJtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0JykudmFsdWU7XHJcbiAgICBpZihzZWFyY2hUZXJtKVxyXG4gICAgICAgIHNlYXJjaFdlYXRoZXIoc2VhcmNoVGVybSk7XHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBkYXRlLmdldEhvdXJzKCkgKyAnOicgKyBkYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZS1uYW1lJykuaW5uZXJIVE1MID0gdGltZTtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHMuY2FsbGVlLCAxMDAwKTtcclxuICAgIH0pKCk7XHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheShcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFxyXG4gICAgICAgICAgICBcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIik7XHJcbiAgICAgICAgdmFyIG1vbnRoUnUgPSAgbmV3IEFycmF5KCfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnKTsgICBcclxuICAgICAgICB2YXIgbW9udGhCZSA9IG5ldyBBcnJheSgn0KHRgtGD0LTQt9C10L3RjCcsICfQm9GO0YLRiycsICfQodCw0LrQsNCyadC6JywgJ9Ca0YDQsNGB0LDQsmnQuicsICfQnNCw0LknLCAn0KfQtdGA0LLQtdC90YwnLCAn0Jtp0L/QtdC90YwnLCAn0JbQvWnQstC10L3RjCcsICfQktC10YDQsNGB0LXQvdGMJywgJ9Ca0LDRgdGC0YDRi9GH0L1p0LonLCAn0Jtp0YHRgtCw0L/QsNC0JywgJ9Ch0L3QtdC20LDQvdGMJyk7XHJcbiAgICAgICAgdmFyIGRheXMgPSBuZXcgQXJyYXkoICdTdW4nLCdNb24nLCdUdWVzJywnV2VkJywnVGh1cnMnLCdGcmknLCdTYXQnKTtcclxuICAgICAgICB2YXIgZGF5c0VuZyA9IG5ldyBBcnJheSggJ1N1bmRheScsJ01vbmRheScsJ1R1ZXNkYXknLCdXZWRuZXNkYXknLCdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5Jyk7XHJcbiAgICAgICAgdmFyIGRheXNMYW5nUnUgPSBuZXcgQXJyYXkoICfQktC+0YHQutGA0LXRgdC10L3RjNC1JywgJ9Cf0L7QvdC10LTQtdC70YzQvdC40LonLCAn0JLRgtC+0YDQvdC40LonLCAn0KHRgNC10LTQsCcsICfQp9C10YLQstC10YDQsycsICfQn9GP0YLQvdC40YbQsCcsICfQodGD0LHQsdC+0YLQsCcpO1xyXG4gICAgICAgIHZhciBkYXlzTGFuZ0JlID0gbmV3IEFycmF5KCAn0J3Rj9C00LfQtdC70Y8nLCAn0J/QsNC90Y/QtNC30LXQu9Cw0LonLCAn0JDRntGC0L7RgNCw0LonLCcg0KHQtdGA0LDQtNCwJywgJ9Cn0LDRhtCy0LXRgCcsICfQn9GP0YLQvdGW0YbQsCcsICfQodGD0LHQvtGC0LAnKTtcclxuICAgICAgICB2YXIgZGF5c1IgPSBuZXcgQXJyYXkoICfQktCh0JonLCfQn9CdJywn0JLQoicsJ9Ch0KAnLCfQp9CiJywn0J/QoicsJ9Ch0JEnKTtcclxuICAgICAgICB2YXIgZGF5c0IgPSBuZXcgQXJyYXkoICfQndCvJywn0J/QkCcsJ9CQ0KInLCfQodCgJywn0KfQpicsJ9Cf0KInLCfQodCRJyk7XHJcbiAgICAgICAgLy9zZXQgbGFuZ3VhZ2VcclxuICAgICAgICB3aW5kb3dbJ21vbnRoRSddID0gKGRheXNbZC5nZXREYXkoKV0gKyAnICcgKyBkLmdldERhdGUoKSArIFwiIFwiICsgbW9udGhbZC5nZXRNb250aCgpXSk7XHJcbiAgICAgICAgd2luZG93Wydtb250aFInXSA9IChkYXlzUltkLmdldERheSgpXSArICcgJyArIGQuZ2V0RGF0ZSgpICsgXCIgXCIgKyBtb250aFJ1W2QuZ2V0TW9udGgoKV0pO1xyXG4gICAgICAgIHdpbmRvd1snbW9udGhCJ10gPSAoZGF5c0JbZC5nZXREYXkoKV0gKyAnICcgKyBkLmdldERhdGUoKSArIFwiIFwiICsgbW9udGhCZVtkLmdldE1vbnRoKCldKTtcclxuICAgICAgICB3aW5kb3dbJ21vbnRoQmFja2dyb3VuZCddID0gbW9udGhbZC5nZXRNb250aCgpXTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZU5hbWUnKS5pbm5lckhUTUwgPSAoZGF5c1tkLmdldERheSgpXSArICcgJyArIGQuZ2V0RGF0ZSgpICsgXCIgXCIgKyBtb250aFtkLmdldE1vbnRoKCldKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1uYW1lX3RvbW9ycm93JykuaW5uZXJIVE1MID0gZGF5c0VuZ1soZC5nZXREYXkoKSArIDEpICUgN107XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtbmFtZV90b21vcnJvdzEnKS5pbm5lckhUTUwgPSBkYXlzRW5nWyhkLmdldERheSgpICsgMikgJSA3XTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS1uYW1lX3RvbW9ycm93MicpLmlubmVySFRNTCA9IGRheXNFbmdbKGQuZ2V0RGF5KCkgKyAzKSAlIDddO1xyXG5cclxuICAgICAgICAvL2RhdGUgbGFuZ3VhZ2VcclxuICAgICAgICAgIHdpbmRvd1snZGF0ZTFSdSddID0gZGF5c0xhbmdSdVsoZC5nZXREYXkoKSArIDEpICUgN107XHJcbiAgICAgICAgICB3aW5kb3dbJ2RhdGUyUnUnXSA9IGRheXNMYW5nUnVbKGQuZ2V0RGF5KCkgKyAyKSAlIDddO1xyXG4gICAgICAgICAgd2luZG93WydkYXRlM1J1J10gPSBkYXlzTGFuZ1J1WyhkLmdldERheSgpICsgMykgJSA3XTtcclxuICAgICAgICAgIHdpbmRvd1snZGF0ZTFCZSddID0gZGF5c0xhbmdCZVsoZC5nZXREYXkoKSArIDEpICUgN107XHJcbiAgICAgICAgICB3aW5kb3dbJ2RhdGUyQmUnXSA9IGRheXNMYW5nQmVbKGQuZ2V0RGF5KCkgKyAyKSAlIDddO1xyXG4gICAgICAgICAgd2luZG93WydkYXRlM0JlJ10gPSBkYXlzTGFuZ0JlWyhkLmdldERheSgpICsgMykgJSA3XTtcclxuICAgICAgICAgIHdpbmRvd1snZGF0ZTFFbmcnXSA9IGRheXNFbmdbKGQuZ2V0RGF5KCkgKyAxKSAlIDddO1xyXG4gICAgICAgICAgd2luZG93WydkYXRlMkVuZyddID0gZGF5c0VuZ1soZC5nZXREYXkoKSArIDIpICUgN107XHJcbiAgICAgICAgICB3aW5kb3dbJ2RhdGUzRW5nJ10gPSBkYXlzRW5nWyhkLmdldERheSgpICsgMykgJSA3XTtcclxuICAgIH0pKCk7XHJcbn07XHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=