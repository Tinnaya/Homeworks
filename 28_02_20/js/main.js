// ----------------------------------------- Task1-----------------------------------------------------------------------
/* Расширьте глобальный объект Date методом getWeek, с 
помощью которого можно узнать номер недели в году. 
А также добавьте в прототип метод getQuarter - для получения номера годового квартала

var date = new Date();
console.log( date.getWeek() ); // 9
console.log( date.getQuarter() ); // 1 */



Date.prototype.getWeek = function() {
// время начала года, в миллисекундах
	var startTimeOfYear = (new Date(this.getFullYear(), 0, 1)).getTime();
// текущее время в миллисекундах
	var currentTime = this.getTime();
// прошедшее время с начала года, в миллисекундах
	var timePastFromYearStart = currentTime - startTimeOfYear;
// количество миллисекунд в одном дне
	var millisecsInOneDay = 3600000*24;
//"порядковый номер дня"
	var dayNumber = timePastFromYearStart/millisecsInOneDay;

	var weekNumber= Math.round((dayNumber - 1) / 7 + 1);
	return weekNumber;
}

Date.prototype.getQuarter = function() {
	var month = this.getMonth();
	switch (month) {
		case 0:
		case 1:
		case 2: return `1`;

		case 3:
		case 4:
		case 5: return `2`;

		case 6:
		case 7:
		case 8: return `3`;

		case 9:
		case 10:
		case 11: return `4`;

		default:
			break;
	}
}

var date = new Date (2019, 3, 15);
console.log( date.getWeek() ); // 9
console.log( date.getQuarter() ); // 1 */


// ----------------------------------------- Task2-----------------------------------------------------------------------
/* Добавьте в прототип конструктора Array метод, позволяющий поменять 
элементы массива местами по индексам. Метод изменяет исходный массив

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c] */

Array.prototype.swap = function (x, y) {
	let number1 = this[x];

	let number2 = this[y];

	this[x] = number2;

	this[y] = number1;
	return this;

}

var data = ['a', 'c', 'b'];
data = data.swap(1, 2);
console.log(data); // ['a', 'b', 'c]


// ----------------------------------------- Task3-----------------------------------------------------------------------

/* В прототипном стиле напишите класс Warrior для создания игроков “файтинга”. 
Игроки должны иметь свойство health - которое определяет базовые боевые возможности игрока (выносливость), 
и power - сила удара. Оба свойства определяются при создании экземпляра класса. 
Также игрок должен иметь метод hit для нанесения удара другому игроку. 
При нанесении удара “жертва” теряет энергии (health) соответственно значению power игрока, который наносит удар. 
Также все игроки имеют возможность лечиться - метод heal.
Добавляйте другие методы и свойства на свое усмотрение - что считаете нужным.
Создайте несколько (минимум два) экземпляров класса Warrior с разными способностями и возможностями. 
И напишите пример боя, используя соответствующие методы и свойства. */

var fight_list = document.querySelector('.fight_list');
var Warrior = {
	health: 600,
	power: 100,
	hit(item) {
		let abs = item;
		let abz = this.health - abs;
		this.health = abz;
	},
	heal() {
		let timerId = setInterval(() => {
			do {
				this.health += 100;
				let li_heal = document.createElement('li'),
					log_heal = document.createTextNode(`${this.name} излечивается до  ${this.health}`);
					li_heal.style.color = 'navy';
					li_heal.append(log_heal);
					fight_list.appendChild(li_heal);
			} while (this.health < 1100);
			if (this.health >= 1100) {
				clearInterval(timerId);
			};
		}, 2000);

	}

}

var Paladin = {
	name: 'Paladin',
	shield: 100,
	extraPower: 200,
	suckerPunch(item) {
		let random = Math.random();
		if (0.5 <= random <= 0.55 && item.health >0){
			let extraHealh = this.health + this.shield,
				extraPunch = this.power + this.extraPower;
			item.health -= extraPunch;
			let li_punch = document.createElement('li'),
			log_punch = document.createTextNode(`${this.name} применил способность к игроку ${item.name}, излечился на ${extraHealh} и нанес урон ${extraPunch}`);
			li_punch.style.color = 'magenta';
			li_punch.append(log_punch);
			fight_list.appendChild(li_punch);
		};
	}
}

var Necromancer = {
	name:'Necromancer',
	selfHeal: 200,
	suckerPunch(item) {
		let random = Math.random();
		if (0.5 <=  random <= 0.75){
			this.health += this.selfHeal;
			item.health -= this.selfHeal;
			let li_punch = document.createElement('li'),
			log_punch =(`${this.name} применил способность к игроку ${item.name}, излечился на ${this.selfHeal} и нанес урон ${this.selfHeal}`);
			li_punch.style.color = 'magenta';
			li_punch.append(log_punch);
			fight_list.appendChild(li_punch);
		};
	}
}

Paladin.__proto__ = Warrior;
Necromancer.__proto__ = Warrior;


function fight(item1, item2) {

	let intervalId = setInterval(() => {
		let li_hit = document.createElement('li'),
			li_health = document.createElement('li');
			li_hit.style.color = 'red';
			li_health.style.color = 'blue'
		if (Math.random() < 0.5) {
			item1.hit(item2.power);
			let hit_log = document.createTextNode(item2.name +' ' + 'Наносит удар игроку'+ ' ' + item1.name),
				hit_log_health = document.createTextNode(item1.name+':'+item1.health + ' ' + item2.name+':'+item2.health);
				li_hit.append(hit_log);
				li_health.append(hit_log_health);
				fight_list.appendChild(li_hit);
				fight_list.appendChild(li_health);

		} else {
			item2.hit(item1.power);
			let hit_log_2 = document.createTextNode(item1.name + ' ' +'Наносит удар игроку' + ' ' + item2.name),
				hit_log_health_2 = document.createTextNode(item1.name+':'+item1.health + ' '+ item2.name+':' + item2.health);

				li_hit.append(hit_log_2);
				li_health.append(hit_log_health_2);
				fight_list.appendChild(li_hit);
				fight_list.appendChild(li_health);
		};
		item1.suckerPunch(item2);
		item2.suckerPunch(item1);

		if (item1.health <= 0 || item2.health <= 0) {
			var winner = document.querySelector('.container');
			let finalElem = document.createElement('div');
			finalElem.style.color = 'green';
			finalElem.style.fontSize = '2.5rem';
			finalElem.style.border = '0.5rem solid rgb(139, 38, 38)';

			clearInterval(intervalId);

			if (item1.health <=0){
				let hit_log_victory = document.createTextNode(`${item2.name} Одержал победу над ${item1.name}`);
				finalElem.appendChild(hit_log_victory);
				winner.appendChild(finalElem);
			} else if (item2.health <=0){
				let hit_log_victory_2 = document.createTextNode(`${item1.name} Одержал победу над ${item2.name}`);
				finalElem.appendChild(hit_log_victory_2);
				winner.appendChild(finalElem);
			}
		}

	}, 1000);
	item1.heal();
	item2.heal();
}

let button = document.getElementById('auto_fight');

button.addEventListener('click', () => {
	button.style.backgroundColor = 'red';
	fight(Paladin, Necromancer);
});
