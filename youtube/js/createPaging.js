export default function createPaging(){
    let divWrap = document.createElement('div');
    divWrap.className = 'paginWrapper';
    document.body.appendChild(divWrap);
    let divPaging = document.createElement('div');
    divPaging.className = 'pagination';
    divPaging.innerHTML = `<a href="" id="previousPage">&laquo;</a>
     <a href="" id="currentPage"></a>
     <a href="" id="nextPage">&raquo;</a>`;
    document.getElementsByClassName('paginWrapper')[0].appendChild(divPaging);
}