// ------------------------------------- Task1----------------------------------------------------------------------
alert(`Создайте функцию p и a, которые будут служить короткими именами
 для prompt и alert соответственно, то есть запрашивать окно с
  полем ввода и выводить любое пользовательское сообщение в стандартном
   модальном окне. Напишите функцию d, которая 
   будет служить коротким именем для debugger, то 
   есть запускать процесс отладки. Используя эти псевдонимы 
   получите значение из prompt и отобразите в alert. А процесс работы
    скрипта проконтролируйте с помощью функции, которая служит для 
    дебага`);

function p(message, defaultValue) {
    return prompt(message, defaultValue);
}

function a(message) {
    alert(message);
}

function d() {
    debugger;
}
d();
let abs = p('How old are you?', 25);

a(abs);


// ------------------------------------- Task2-------------------------------------------------------------------------
alert('Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max), которая сравнивает два числа и возвращает большее:');

let max = (a, b) => a > b ? a : b;
console.log(max(8, 12));
console.log(max(5, 5));
console.log(max(110, 10));

// ------------------------------------- Task3----------------------------------------------------------------------------
alert('Используя синтаксис ES5, напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:');

function min(numbers) {
    let minNumber = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (minNumber > arguments[i]) {
            minNumber = arguments[i];
        }
    }
    return minNumber;
}
console.log(min(10, 58, 2, 125, 8, -1));


// ------------------------------------- Task4-------------------------------------------------------------------------------------
alert(`Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
Отфильтруйте пользователей младше 18 лет
Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
Сформируйте новый массив, который содержит только полное имя пользователей
`);
let users = [
    {
        firstName: 'John',
        lastName: 'Snow',
        age: 15
    },
    {
        firstName: 'Arya',
        middleName: 'Eddardovna',
        lastName: 'Stark',
        age: 9
    },
    {
        firstName: 'Thirion',
        middleName: 'Halfmen',
        lastName: 'Lanister',
        age: 28
    },
    {
        firstName: 'Theon',
        middleName: 'Balonovich',
        lastName: 'Greyjoy',
        age: 16
    },
    {
        firstName: 'Brienne',
        lastName: 'Tarth',
        age: 15
    },
    {
        firstName: 'Daenerys',
        middleName: 'Aerysovna',
        lastName: 'Targaryen',
        age: 12
    },
    {
        firstName: 'Oberyn',
        lastName: 'Martell',
        age: 42
    },
    {
        firstName: 'Rhaegar',
        lastName: 'Targaryen',
        age: 24
    },
    {
        firstName: 'Margaery',
        lastName: 'Tyrell',
        age: 13
    },
    {
        firstName: 'Stannis',
        lastName: 'Baratheon',
        age: 38
    }
];
console.log(users.filter(item => item.age < 18));
users.forEach((item) => {
    let { firstName, lastName, middleName } = item;
    if (firstName && lastName && middleName) {
        item.fullName = `${firstName} ${middleName} ${lastName}`;
    } else {
        item.fullName = `${firstName} ${lastName}`;
    }
});
console.log(users);

console.log(users.map(item =>item.fullName));


// ------------------------------------- Task5-----------------------------------------------------------------------------------------
alert('Не используя методы массива, напишите функцию аналог метода shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.');


let arrForChange = [1, 2, 3, 4, 5];

let delFirstElement = ( arr = [] ) => {
    let [, ...rest] = arr;
    return rest;
};
console.log(delFirstElement(arrForChange));


// ------------------------------------- Task6----------------------------------------------------------------------------------------
alert('Не используя методы массива, напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.');


// для задачи использовала исходный массив из task5
let addLastElements = (arr = [], ...elements) => {
    let resultArr = [...arr, ...elements];
    return resultArr;
}
console.log(addLastElements(arrForChange, 6,7,8,9));


// ------------------------------------- Task7---------------------------------------------------------------------------------------
alert('Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.');


let cat = {
    catName : 'Silver',
    color: 'grey',
    age: 1
},
catProperty = {
    breed: 'maine coon'
},
otherCatProperty = {
    food: 'chiken'
}

// первый вариант решения:
let puchPropertyToObj_1 = (objN, ...objects) => {
    let resultObj = { ...objN };
    objects.forEach(item => {
        resultObj = {...resultObj, ...item};
    });
    return resultObj;
}; 
console.log(puchPropertyToObj_1(cat, catProperty, otherCatProperty));


//второй вариант
let puchPropertyToObj_2 = (objN, ...objects) => {
    let resultObj = { ...objN };
    for (let i = 0; i < objects.length; i++) {
        for (let key in objects[i]) {
            resultObj[key] = objects[i][key];
        }
    }
    return resultObj;
};
console.log(puchPropertyToObj_2(cat, catProperty, otherCatProperty));


// ------------------------------------- Task8--------------------------------------------------------------------------------------

alert('Напишите функцию ask с тремя параметрами: question, defaultValue, callback. Функция ask запрашивает с помощью prompt вопрос question, ответ по умолчанию - defaultValue. Что делать с полученным значением - определяет callback');

let ask = (question, defaultValue, callback) => {
    let q = prompt(question, defaultValue);
    callback(q);
};
ask('How old are you?', '10', function(response) {
	console.log(response);
});

// ------------------------------------- Task9-------------------------------------------------------------------------------------
alert('Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их ');


//в исходных данных "строка, состоящая из чисел", позволила себе предположить что пользователь
//введет не только числа
let highAndLow = (stringOfnumbers) => {
    let separator = ' ';
    let arrOfNumbers = stringOfnumbers.split(separator);
    let maxNum, minNum;
    for (let i = 0; i< arrOfNumbers.length; i++){
        let newValue = parseInt(arrOfNumbers[i]);
        if ( !isNaN(newValue)){
            if (typeof maxNum === 'number' && typeof minNum ==='number'){
                minNum = minNum > newValue ? newValue : minNum;
                maxNum = maxNum < newValue ? newValue : maxNum;
            } else {
                maxNum = newValue;
                minNum = newValue;
            }
        }
    }
    return `максимальное число = ${maxNum}, минимальное число = ${minNum}`

}
console.log(highAndLow("4 5 29 54 4 cat 0 -214 542 -64 dog 1 -3 6 -6"));


// ------------------------------------- Task10----------------------------------------------------------------------------------
alert('Напишите функцию checkNumber, которая получает на вход как параметр массив любых значений и возвращает true, если все элементы - числа, и false - если в массиве хотя бы  одно не число. Для проверки массива используйте метод every или some');


let checkNumber = (randomArr) => {
    return randomArr.every(elem => {
       let randNumber =  parseInt( elem );
        return !isNaN(randNumber);
    });
};

console.log( checkNumber([1, 2, '3', 'a']) );
console.log( checkNumber([1, 2, '3', '4']) );

