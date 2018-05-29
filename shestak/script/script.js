let button = document.querySelector("input[value='Submit']");
let radioButton = document.querySelector('.radioButton');
let rsschoolDemo = document.querySelector('#rsschool-demo');
let rsschool = document.querySelector('#rsschool');
button.addEventListener('click',function(){
  if (rsschool.checked || rsschoolDemo.checked){
  radioButton.style.display = 'none';
  let damp = 0;
  if (rsschoolDemo.checked){
    damp = 1;
  }
  fetch('script/users.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(users) {
      fetch('script/sessions.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(sessions) {
          let table = document.createElement('table');
          let body = document.querySelector('body');
          body.appendChild(table);
          
          body.children[1].style.width = '100%';
          body.children[1].style.height = '100%';
          body.children[1].style.backgroundColor = 'green';
          for (let j = 0; j < users.length + 1; j++){
            let tr = document.createElement('tr');
            table.appendChild(tr);
            table.children[j].style.width = '100vw';
            table.children[j].style.height = '5vh';
            table.style.borderSpacing = '0';
            
            for(let i = 0; i < sessions[damp].puzzles.length + 2;i++){

              let td = document.createElement('td');
              td.classList.add('tooltip');
              table.children[j].appendChild(td);
              
              if (!i) {
                table.children[j].children[i].style.width = '20vw';
                j ? table.children[j].children[i].textContent = users[j - 1].displayName: null;
              } else {
                  table.children[j].children[i].style.width = 80 / sessions[damp].puzzles.length + 1 + 'vw';
              }
                  
              table.children[j].children[i].style.height = '5vh';
              table.children[j].children[i].style.border = '2px solid gray';
              table.children[j].children[i].style.backgroundColor = 'darkgray';
              table.children[j].children[i].style.boxSizing = 'border-box';
                  
              if (j && i !== 0 && i <= sessions[damp].puzzles.length){
                if (sessions[damp].rounds[i - 1].solutions[users[j - 1].uid] !== undefined){
                  table.children[j].children[i].textContent = 
                  sessions[damp].rounds[i - 1].solutions[users[j - 1].uid].time.$numberLong;
                } else {
                  table.children[j].children[i].textContent = '150'
                }
              }

            }
                      
            let score = 0;
            for(let i = 1; i < sessions[damp].puzzles.length + 1;i++){
              score += table.children[j].children[i].textContent*1;
            }
            if (j) {table.children[j].children[sessions[damp].puzzles.length + 1].textContent = score;}
          }

        let array = ['GitHub'];
        for(let i = 0; i < sessions[damp].puzzles.length; i++){
            array.push(sessions[damp].puzzles[i].name)
        }
        array.push('score')
        for (let i = 0; i < array.length; i++){
            table.children[0].children[i].textContent = array[i];
        }

        for (let i = 1; i < sessions[damp].puzzles.length + 1; i++){
          for (let j = 1; j <= users.length; j++){
            if (sessions[damp].rounds[i - 1].solutions[users[j - 1].uid] !== undefined){
              let span = document.createElement('span');
              span.classList.add('tooltiptext');
              table.children[j].children[i].appendChild(span);
              table.children[j].children[i].children[0].textContent = 
              sessions[damp].rounds[i - 1].solutions[users[j - 1].uid].code;
            }
          }
        }
      
      })
      .catch(  );
    })
  .catch(  );}
});