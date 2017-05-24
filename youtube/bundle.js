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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPaging;
function createPaging() {
    let divWrap = document.createElement('div');
    divWrap.className = 'paginWrapper';
    document.body.appendChild(divWrap);
    let divPaging = document.createElement('div');
    divPaging.className = 'pagination';
    divPaging.innerHTML = `<div id="previousPage">&laquo;</div>
     <div id="currentPage"></div>
     <div id="nextPage">&raquo;</div>`;
    document.getElementsByClassName('paginWrapper')[0].appendChild(divPaging);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSearchPanel;
function createSearchPanel() {
    let divSearch = document.createElement('div');
    divSearch.className = 'search';
    divSearch.innerHTML = `<input type="text" id="searchtext"><a href="#" id="searchbutton">search</a>`;
    document.body.appendChild(divSearch);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseDuration;


function parseDuration(duration) {
    let result = duration;
    let hours, minutes, seconds;
    if (result.indexOf('H') === -1) {
        if (result.indexOf('M') === -1) {
            minutes = '00';
            result = result.split('T')[1];
            seconds = result.split('S')[0];
            if (seconds.length === 1) seconds = '0' + seconds;
            return minutes + ':' + seconds;
        }
        if (result.indexOf('S') === -1) {
            seconds = '00';
            result = result.split('T')[1];
            minutes = result.split('M')[0];
            if (minutes.length === 1) minutes = '0' + minutes;
            return minutes + ':' + seconds;
        }
        result = result.split('T')[1];
        minutes = result.split('M')[0];
        seconds = result.split('M')[1];
        seconds = seconds.split('S')[0];
        if (seconds.length === 1) seconds = '0' + seconds;
        if (minutes.length === 1) minutes = '0' + minutes;
        return minutes + ':' + seconds;
    } else {
        if (result.indexOf('M') === -1) {
            minutes = '00';
            result = result.split('T')[1];
            hours = result.split('H')[0];
            result = result.split('H')[1];
            seconds = result.split('S')[0];
            if (seconds.length === 1) seconds = '0' + seconds;
            if (hours.length === 1) hours = '0' + hours;
            return hours + ':' + minutes + ':' + seconds;
        }
        if (result.indexOf('S') === -1) {
            seconds = '00';
            result = result.split('T')[1];
            hours = result.split('H')[0];
            result = result.split('H')[1];
            minutes = result.split('M')[0];
            if (minutes.length === 1) minutes = '0' + minutes;
            if (hours.length === 1) hours = '0' + hours;
            return hours + ':' + minutes + ':' + seconds;
        }
        result = result.split('T')[1];
        hours = result.split('H')[0];
        result = result.split('H')[1];
        minutes = result.split('M')[0];
        seconds = result.split('M')[1];
        seconds = seconds.split('S')[0];
        if (seconds.length === 1) seconds = '0' + seconds;
        if (minutes.length === 1) minutes = '0' + minutes;
        if (hours.length === 1) hours = '0' + hours;
        return hours + ':' + minutes + ':' + seconds;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parseDuration_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createPaging_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createSearchPanel_js__ = __webpack_require__(1);





let itemsPerPage;
let count = 1;
let nextPageToken, duration;
let items = [];
let startX = null;
let endX = null;
document.addEventListener('DOMContentLoaded', () => {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__createSearchPanel_js__["a" /* default */])();
    document.getElementById('searchbutton').onclick = () => {
        count = 1;
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    };
    if (screen.width > 1200) itemsPerPage = 3;
    if (screen.width > 768 && screen.width < 1200) itemsPerPage = 2;
    if (screen.width < 768) itemsPerPage = 1;

    window.addEventListener("resize", () => {
        if (screen.width > 1200) {
            itemsPerPage = 3;
            if (items.length) openPage();
        }
        if (screen.width > 768 && screen.width < 1200) {
            itemsPerPage = 2;
            if (items.length) openPage();
        }
        if (screen.width < 768) {
            itemsPerPage = 1;
            if (items.length) openPage();
        }
    });
    document.addEventListener('mousedown', handleMouseStart, false);
    document.addEventListener('mouseup', handleMouseEnd, false);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);
});

function onYouTubeApiLoad() {
    items = [];
    gapi.client.setApiKey('AIzaSyCjX0FAhrIluMx_nt99xgthQIZq9OFx7DU');
    searchYouTubeApi();
}

function searchYouTubeApi(PageToken) {

    let searchText = document.getElementById('searchtext').value;

    let request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: searchText,
        type: 'video',
        maxResults: 15,
        pageToken: PageToken
    });

    if (items.length === 0) request.execute(onSearch);else request.execute(onPreload);
}

function onSearch(response) {
    if (document.getElementById('items')) document.body.removeChild(document.getElementById('items'));
    let divItems = document.createElement('div');
    divItems.setAttribute('id', 'items');
    document.body.appendChild(divItems);

    nextPageToken = response.nextPageToken;

    for (let i = 0; i < response.items.length; i++) {
        let publishedAt = response.items[i].snippet.publishedAt.split('T')[0];
        let title = response.items[i].snippet.title;
        let description = response.items[i].snippet.description;
        let preview = response.items[i].snippet.thumbnails.high.url;
        let channelTitle = response.items[i].snippet.channelTitle;
        let videoID = response.items[i].id.videoId;

        let div = document.createElement('div');
        div.className = 'searchItem';
        let videoRequest = gapi.client.youtube.videos.list({
            part: 'contentDetails',
            id: videoID
        });
        videoRequest.execute(videoResponse => {
            duration = videoResponse.items[0].contentDetails.duration;
            div.innerHTML = "<a id='itemPreview'>" + "<img src=\"" + preview + "\" width='100%' height='100%'/>" + "</a>" + "<div class='itemTitle'><a href='http://www.youtube.com/watch?v=" + videoID + "'>" + title + "</a></div>" + "<div class='itemPublished'><p>Uploaded " + publishedAt + "</p></div>" + "<div class='itemDuration'><p>" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDuration_js__["a" /* default */])(duration) + "</p></div>" + "<div class='itemChannelTitle'><p><b>Channel:<b> " + channelTitle + "</p></div>" + "<div class='itemDescription'><p>" + description + "</p></div>";
            items.push(div);
        });
    }
    let interval = setInterval(() => {
        if (items.length === 15) {
            if (document.getElementsByClassName('paginWrapper')[0]) {
                document.getElementsByClassName('paginWrapper')[0].parentNode.removeChild(document.getElementsByClassName('paginWrapper')[0]);
            }
            openPage();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createPaging_js__["a" /* default */])();
            document.getElementById('previousPage').onclick = () => {
                if (items.length !== 0 && count !== 1) {
                    count--;
                    openPage();
                }
            };
            document.getElementById('nextPage').onclick = () => {
                if (items.length !== 0) {
                    count++;
                    openPage();
                }
            };
            clearInterval(interval);
        }
    }, 200);
}

function openPage() {
    let upBorder = count * itemsPerPage;
    let downBorder = count * itemsPerPage - itemsPerPage;
    if (document.getElementById('items')) document.getElementById('items').innerHTML = '';
    for (let i = downBorder; i < upBorder; i++) {
        document.getElementById('items').appendChild(items[i]);
    }
    if (items.length - count * itemsPerPage < items.length / 2) searchYouTubeApi(nextPageToken);
}

function onPreload(response) {
    nextPageToken = response.nextPageToken;
    for (let i = 0; i < response.items.length; i++) {
        let publishedAt = response.items[i].snippet.publishedAt.split('T')[0];
        let title = response.items[i].snippet.title;
        let description = response.items[i].snippet.description;
        let preview = response.items[i].snippet.thumbnails.high.url;
        let channelTitle = response.items[i].snippet.channelTitle;
        let videoID = response.items[i].id.videoId;

        let div = document.createElement('div');
        div.className = 'searchItem';
        let videoRequest = gapi.client.youtube.videos.list({
            part: 'contentDetails',
            id: videoID
        });
        videoRequest.execute(videoResponse => {
            duration = videoResponse.items[0].contentDetails.duration;
            div.innerHTML = "<a id='itemPreview'>" + "<img src=\"" + preview + "\" width='100%' height='100%'/>" + "</a>" + "<div class='itemTitle'><a href='http://www.youtube.com/watch?v=" + videoID + "'>" + title + "</a></div>" + "<div class='itemPublished'><p>Uploaded " + publishedAt + "</p></div>" + "<div class='itemDuration'><p>" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parseDuration_js__["a" /* default */])(duration) + "</p></div>" + "<div class='itemChannelTitle'><b>Channel : </b><p>" + channelTitle + "</p></div>" + "<div class='itemDescription'><b>About</b><p>" + description + "</p></div>";
            items.push(div);
        });
    }
}

function handleMouseStart(event) {
    startX = event.pageX;
    if (document.getElementById('currentPage')) {
        document.getElementById('currentPage').innerHTML = count;
        document.getElementById('currentPage').classList.add("active");
    }
}

function handleMouseEnd(event) {
    endX = event.pageX;
    handleMove();
    if (document.getElementById('currentPage')) {
        document.getElementById('currentPage').innerHTML = '';
        document.getElementById('currentPage').classList.remove("active");
    }
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    if (document.getElementById('currentPage')) {
        document.getElementById('currentPage').innerHTML = count;
        document.getElementById('currentPage').classList.add("active");
    }
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleMove();
    if (document.getElementById('currentPage')) {
        document.getElementById('currentPage').innerHTML = '';
        document.getElementById('currentPage').classList.remove("active");
    }
}

function handleMove() {
    if (startX - endX > 50) {
        if (items.length !== 0) {
            count++;
            openPage();
        }
    }
    if (endX - startX > 50) {
        if (items.length !== 0 && count !== 1) {
            count--;
            openPage();
        }
    }
}

/***/ })
/******/ ]);