let app = {
	const : {
		pathSession : 'sessions.json',
		pathUsers : 'users.json',
		lengthOfUsers : '',  
		container : document.getElementById('container'),
		sessionFirst : document.getElementById('sessionFirst'),
		sessionSecond : document.getElementById('sessionSecond'),
		arrayOfBtns : document.getElementsByTagName('input'),
		arrayOfUsers : '',
		arrayOfSessionOne : '',
		temp : '',
		summa : 0,
		elementSession : ''
	},
	mainFunc(){
		app.eventForFirstBtn();
	},
	getJsonInfo(pathForFile){
		let promise = new Promise(function(resolve, reject){
			let xhr = new XMLHttpRequest;
			xhr.open("GET", pathForFile, true);
			xhr.onload = function(){
				resolve(this.responseText);
			}
			xhr.onerror = function(){
				reject('error');
			}
			xhr.send(null);
		});
		return promise;
	},
	eventPromise(num){
		app.getJsonInfo('sessions.json').then(function(data){
			let str = JSON.parse(data);
			if( num == '1'){
				app.const.arrayOfSessionOne = str.session1.rounds;
				app.const.elementSession = str.session1;
			}else if( num == '2'){
				app.const.arrayOfSessionOne = str.session2.rounds;
				app.const.elementSession = str.session2;
			}


			app.getMainLineBlock(str);
		});
		app.getJsonInfo('users.json').then(function(data){
			let str = JSON.parse(data);
			app.const.lengthOfUsers = str.users.length;
			app.const.arrayOfUsers = str.users;
		});
	},
	getMainLineBlock(str){
		let output = `<table id='table' class='mainTable'>
			<tr class='mainLine' id='mainLine'><td>Display Name</td>`
			for(let elem of app.const.elementSession.puzzles){
				output += `<td>${elem.name}</td>`;
			}

			output += `<td>Total Time</td></tr>`;

			for( let user of app.const.arrayOfUsers ){
				output += `<tr><td>${user.displayName}</td>`;
				app.const.summa = 0;
				for( let time of app.const.arrayOfSessionOne ){
					if( time.solutions[user['uid']] ){
						output += `<td>${time.solutions[user['uid']].time.$numberLong}</td>`;
						app.const.summa += +time.solutions[user['uid']].time.$numberLong;
					}else{
						output += `<td>${150}</td>`;
						app.const.summa += +150;
					}
				}
				output += `<td>${app.const.summa}</td></tr>`;
			}
		output += `</table>`;
		app.const.container.innerHTML = output;
	},
	eventForFirstBtn(){
		sessionFirst.addEventListener('click', function(e){
			for( let btn of app.const.arrayOfBtns ){
				if( btn.checked && btn.getAttribute('id') == 'sessionFirst' ){
					app.eventPromise(1);				
				}
			}
		});
		sessionSecond.addEventListener('click', function(e){
			for( let btn of app.const.arrayOfBtns ){
				if( btn.checked && btn.getAttribute('id') == 'sessionSecond' ){
					app.eventPromise(2);				
				}
			}
		});
	}
}
app.mainFunc();
