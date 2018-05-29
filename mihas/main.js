

const selectionSection = document.querySelector('.selection');


displayScoreboard = (users,sessions) => {
    const target = event.target;
    if (target.tagName != 'LABEL' && target.tagName != 'INPUT') return;
    document.querySelector('.data').innerHTML='';
    const checkedButton = target;
    switcher = +checkedButton.id;
    let Scoreboard = document.createElement('table');
    let ScoreboardHeader = document.createElement('tr');
    let head = document.createElement('th');
    head.innerHTML = 'Display Name';
    ScoreboardHeader.appendChild(head);
    sessions[switcher].puzzles.forEach(element => {
        let head = document.createElement('th');
        head.innerHTML = element.name;
        ScoreboardHeader.appendChild(head);
    });
    Scoreboard.appendChild(ScoreboardHeader);
    for(let i = 0; i < users.length; i++){
        let tr = document.createElement('tr');
        let cellA = document.createElement('td');
        let cellB;
        cellA.innerHTML=users[i].displayName;
        tr.appendChild(cellA);
        for (let j = 0; j < sessions[switcher].rounds.length; j++) {
            cellB = document.createElement('td');
            if(sessions[switcher].rounds[j].solutions[users[i].uid] === undefined) {
                cellB.innerHTML='150';
            }
            else {
                cellB.innerHTML=sessions[switcher].rounds[j].solutions[users[i].uid].time.$numberLong;
            }
            tr.appendChild(cellB);
        }                           
        Scoreboard.appendChild(tr);
    }
    document.querySelector('.data').appendChild(Scoreboard);
};


async function displayOutcome(){
    let usersUrl="https://cors.io/?https://drive.google.com/uc?export=download&id=1hwpGlJkCVaKG6s0EdHGtoD6Gfb3DG-vl";
    let sessionsUrl="https://cors.io/?https://drive.google.com/uc?export=download&id=1rGVP1CfPpOWItylNNqqdqEhrH7le-vf3";

        let replySessions = await fetch(sessionsUrl);
        let replyUsers= await fetch(usersUrl);
        if(replyUsers.ok && replySessions.ok){
            document.querySelector('.loading').style.display='none';
            let users= await replyUsers.json();
            let sessions= await replySessions.json();
        
            selectionSection.addEventListener('click', ()=>{displayScoreboard(users,sessions)});
        }
        else{
          console.log(error);
        }
}
displayOutcome();  
