'use strict';
import parseDuration from './parseDuration.js';
import createPaging from './createPaging.js';
import createSearchPanel from './createSearchPanel.js';
let itemsPerPage;
let count = 1;
let nextPageToken, duration;
let items = [];
let startX = null;
let endX = null;
document.addEventListener('DOMContentLoaded', () => {
    createSearchPanel();
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

    if (items.length === 0) request.execute(onSearch);
    else request.execute(onPreload);
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
        videoRequest.execute((videoResponse) => {
            duration = videoResponse.items[0].contentDetails.duration;
            div.innerHTML = "<a id='itemPreview' href='http://www.youtube.com/watch?v=" + videoID + "'>" +
                "<img src=\"" + preview + "\" width='100%' height='100%'/>" +
                "</a>" +
                "<div class='itemTitle'><p>" + title + "</p></div>" +
                "<div class='itemPublished'><p>Uploaded " + publishedAt + "</p></div>" +
                "<div class='itemDuration'><p>" + parseDuration(duration) + "</p></div>" +
                "<div class='itemChannelTitle'><p><b>Channel:<b> " + channelTitle + "</p></div>" +
                "<div class='itemDescription'><p>" + description + "</p></div>";
            items.push(div);
        });
    }
    let interval = setInterval(() => {
        if (items.length === 15) {
            if (document.getElementsByClassName('paginWrapper')[0]) {
                document.getElementsByClassName('paginWrapper')[0].parentNode.removeChild(document.getElementsByClassName('paginWrapper')[0]);
            }
            openPage();
            createPaging();
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
        videoRequest.execute((videoResponse) => {
            duration = videoResponse.items[0].contentDetails.duration;
            div.innerHTML = "<a id='itemPreview' href='http://www.youtube.com/watch?v=" + videoID + "'>" +
                "<img src=\"" + preview + "\" width='100%' height='100%'/>" +
                "</a>" +
                "<div class='itemTitle'><p>" + title + "</p></div>" +
                "<div class='itemPublished'><p>Uploaded " + publishedAt + "</p></div>" +
                "<div class='itemDuration'><p>" + parseDuration(duration) + "</p></div>" +
                "<div class='itemChannelTitle'><b>Channel : </b><p>" + channelTitle + "</p></div>" +
                "<div class='itemDescription'><b>About</b><p>" + description + "</p></div>";
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
    if ((startX - endX) > 50) {
        if (items.length !== 0) {
            count++;
            openPage();
        }
    }
    if ((endX - startX) > 50) {
        if (items.length !== 0 && count !== 1) {
            count--;
            openPage();
        }
    }
}
