// --------------------------------------------------- Task 1-----------------------------------------------------
/* Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() ); */


let calculator = {
	read() {
		let x = +prompt('Enter first value' , '5');
		let y = +prompt('Enter second value' , '5');
		if(!isNaN(x) && typeof !isNaN(y)){
			return this.x = x, this.y = y;
		} else {
			return alert('Wrong value');
		}

	},
	sum() {
		return this.x + this.y;
	},
	multi() {
		return this.x * this.y;
	},
	diff(){
		return this.x - this.y;
	},
	div(){
		return this.x / this.y;
	}
}
calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());
console.log( calculator );

// -------------------------------------------------------- Task 2 ------------------------------------------------------------
/* Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и
 методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с 
 сообщением, записанным в свойстве объекта message. */

 let coffeeMachine = {
	 message: 'Your coffee is ready!',
	 start() {
		 setTimeout( () => {alert(this.message)}, 2000);
	 }
 }
 coffeeMachine.start();

// ----------------------------------------------------------- Task 3 -------------------------------------------------------------

/* Создайте объект array с методом инициализации начального значения массива, 
c методами добавления, удаления последнего элемента массива и методом возврата 
текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3] */

let array = {
	setValue( [x] ) {
		this.array = [x];
		return this;
	},
	getValue() {
		return this.array;
	},
	push( y ) {
		this.array.push( y );
		return this;
	},
	pop( ) {
		this.array.pop();
		return this;
	}
}

array
.setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue);

// ------------------------------------------------------------------Task 4 ---------------------------------------------------------

/* Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. 
Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.
 */
var hello = function() {
	alert(this.firstname + ' ' + this.lastname);
};

var firstPerson = {
	firstname:'Ivan',
	lastname:'Ivanov'
};
var secondPerson = {
	firstname:'Petr',
	lastname:'Petrov'
}

hello.call(firstPerson); 
hello.call(secondPerson); 

// ---------------------------------------------------------------------Task 5-----------------------------------------------------------------
/* Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. 
Для расчетов все методы используют функционал ранее созданного калькулятора.

alert(me.getSum());
alert(me.getDiv());
 */

let me = {
	x: 10,
	y: 5,
	getSum () {
		this.getSum = calculator.sum.bind(this);
		let gettingSum = this.getSum();
		return alert(`${this.x}+${this.y} = ${gettingSum}`);
	},
	getDiff () {
		this.getDiff = calculator.diff.bind(this);
		let gettingDiff = this.getDiff();
		return alert(`${this.x}-${this.y} = ${gettingDiff}`)
	},
	getMulti() {
		this.getMulti = calculator.multi.bind(this);
		let gettingMulti = this.getMulti();
		return alert(`${this.x}*${this.y} = ${gettingMulti}`)
	},
	getDiv() {
		this.getDiv = calculator.div.bind(this);
		let gettingDiv = this.getDiv();
		return alert(`${this.x}/${this.y} = ${gettingDiv}`)
	}
}

console.log(me.getSum());
console.log(me.getDiff());
console.log(me.getMulti());
console.log(me.getDiv());

// --------------------------------------------------------------------Task 6-------------------------------------------------------------


/* “Пишущая машинка”. Создайте объект со свойством delay и методами appendTo и appendText. 
Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. 
Метод appendText может дописывать текст в добавленный элемент. 
Создайте массив строк и запустите цикл по этому массиву. 
С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. 
Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву. */


let typeWriter = {
	delay: 2000,
	appendTo( $container = 'body') {
		this.container = $container;
		return this.$p = $( '<p>' ).appendTo(this.container);
	},
	appendText( value ) {
		return this.$text = this.$p.append( value );
	}
};

let arrOfStrings = ['abs', 'def', 'ghi', 'jklm', 'nop', 'qrst','uvw', 'xyz'];
let addStrings = ( array) => {
	array.forEach((element, index) => {
		setTimeout(()=>{
			typeWriter.appendText(element);
		}, typeWriter.delay * index)
	});

};
typeWriter.appendTo();
addStrings( arrOfStrings);


// -------------------------------------------------------------------Task 7-----------------------------------------------------------------


// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:



var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
	},
	city: {
		population: 250000
	}
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '',''); // Kyiv
format.apply(country.capital, ['','']); // Kyiv
format.apply(country.city,['','']); // undefined

// -------------------------------------------------------------------Task 8----------------------------------------------------------------------
/* Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
    console.log(start + this.name + end);
}
Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().
 */

 let user = {
	 name: 'Harley'
 }

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat_a = () => {
	format.call(user, '<<<', '>>>');
}
userFormat_a();

let userFormat_b = format.bind(user);
userFormat_b('<<<', '>>>');

// -----------------------------------------------------------------Task 9 -----------------------------------------------------------------------------

/* Напишите функцию concat, которая соединяет две строки, разделенные каким-то 
символом: разделитель и строки передаются в параметрах функции. Используя карринг, 
создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John */

function concat(startPart, middlePart, endPart  ) {
	console.log( startPart + middlePart + endPart );
}

var hello = concat.bind(null, 'Hello', ' ');

hello('World'); // Hello World
hello('John'); // Hello John 