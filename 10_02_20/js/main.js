// ---------------------------------------------------Task1--------------------------------------------
alert('Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.');
let arr = [10, 24, 36, 42, 58, 'a', 'b', 'c', '67', '83', '110'];
let sum = 0;
for (let i = 0; i< arr.length; i++){
    let newValue = parseInt(arr[i]);

    if ( !isNaN(newValue)){
        sum += newValue;
    }
}
alert(sum);

// ---------------------------------------------------Task2--------------------------------------------
alert(`Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее`);

let arrFrameworks = ['AngularJS', 'JQuery'];
console.log(arrFrameworks);
arrFrameworks.unshift('Backbone');
console.log(arrFrameworks);
arrFrameworks.push('ReactJS', 'Vue.js');
console.log(arrFrameworks);
arrFrameworks.splice(2, 0, 'CommonJS');
console.log(arrFrameworks);

for (let i = 0; i < arrFrameworks.length; i++) {
    if (arrFrameworks[i] === 'JQuery') {
        let found = arrFrameworks.splice(i, 1);
        alert(`${found[0]} - Это здесь лишнее!`);
        break;
    }
}
console.log(arrFrameworks);



// ---------------------------------------------------Task3--------------------------------------------
alert('Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте на его основе новый, который содержит только уникальные (неповторяющиеся) значения исходного массива. Решите, используя только цикл for.');

let randomNumbers = [];
let uniqeNumbers = [];
let objNumbers = {};
let allNumbers = 100;

for (let i = 0; i < allNumbers; i++){
    let newValue = Math.floor(Math.random()*100);
    randomNumbers.push(newValue);
}
console.log(randomNumbers);

/* for (let j = 0; j < randomNumbers.length; j++){
    let df = randomNumbers[j];
    let abs = 0;
    for(let k = 0; k < randomNumbers.length; k++){
        if( df == randomNumbers[k]){
            abs++;
        }
    }
    if (abs == 1){
        uniqeNumbers.push(df);
    }
}
console.log(uniqeNumbers); */

for (let j = 0; j < randomNumbers.length; j++) {
    let currentNumber = randomNumbers[j];
    if (currentNumber in objNumbers) {
        continue;
    }
    objNumbers[currentNumber] = currentNumber;
    uniqeNumbers.push(currentNumber);
}

console.log(uniqeNumbers);

// ---------------------------------------------------Task4--------------------------------------------
alert('Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.');

let uncorrectString = 'Как однажды Жак звонарь сломал городской фонарь',
    separator = ' ';

originalString = uncorrectString.split(separator);
console.log(originalString);

let indexOfword = originalString.indexOf('городской');

let [word] = originalString.splice(indexOfword, 1);
console.log(word);

let indexOfwordToinsert = originalString.indexOf('сломал');
originalString.splice(indexOfwordToinsert, 0, word);


console.log(originalString.join(' '));

alert(originalString.join(' '));

// ---------------------------------------------------Task5--------------------------------------------
alert('Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат');
let anyNumbers = [],
    sumOfNumbers = 0;
let n = +prompt('Enter elements number', 10);


for(i = 0; i < n; i++){
    let valueFromPrompt = prompt('Enter any value');
        anyNumbers.push(valueFromPrompt);
}
for(let j = 0; j < anyNumbers.length; j++){
    let newValue = parseInt(anyNumbers[j]);

    if( !isNaN(newValue)){
        sumOfNumbers += newValue;
    }
 }
console.log(anyNumbers);
console.log(sumOfNumbers);
alert(`сумма значений = ${sumOfNumbers}`);

// ---------------------------------------------------Task6--------------------------------------------
alert('Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:');


let table = [],
    limit = 11;

for( let i = 1; i < limit; i++){

    let Array = [];

    for(let j = 1; j < limit; j++){
        Array.push(`${i} x ${j} = ${i*j}`);
    }
    table.push(Array);
}
console.log(table);
