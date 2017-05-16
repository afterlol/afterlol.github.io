export default function createSearchPanel() {
    let divSearch = document.createElement('div');
    divSearch.className = 'search';
    divSearch.innerHTML = `<input type="text" id="searchtext"><a href="#" id="searchbutton">search</a>`;
    document.body.appendChild(divSearch);
}