export default function createPaging(){
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