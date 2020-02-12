
// -------------------------------------------Task 1-------------------------------------
alert ('Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.');
var person = {
    firstname: 'James',
    lastname: 'Bond',
    age: 40,
    height: 185,
    eyescolor: 'green',
    weight: 80

};

while (true) {    
    let key = prompt('what do you want to know about the person?' , ' ');
    if (key === null || key.trim() === ''){
        break;
    }

    if (key in person) {        
        alert(person[key]);
    } else {
        person[key] = prompt('Please enter a property value' , 'black');
        console.log(key, person[key]);    
    }
} 

console.log(person);

// -------------------------------------------Task 2-------------------------------------
// alert('Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.');

var cellPhone = {
    brand: prompt('Enter brand name', ''),
    model: prompt('Enter model', ''),
    resolution: prompt('Enter screen resolution ', ''),
    color: prompt('Enter phone color', ''),
    screeSize: prompt('Enter phone screen size', '')

};

console.log(cellPhone);


person.cellPhone = cellPhone;

console.log(person);
//  -------------------------------------------- Task 3----------------------------------
alert('Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.');


while (true) {
    let  method = prompt('What are want me to do with person?' , 'update or delete'),
        personProperty,
        condition = method && method.trim().toLowerCase(); 
    switch ( condition) {
        case 'delete': 
            personProperty = prompt('Wtat person property do you want to delete?');
            if ( personProperty in person) {
                delete person[personProperty];
            } else {
                alert('This property does not exist in person');
            }
            break;
        case 'update':
            personProperty = prompt('What person property do you want to update?');
            if ( personProperty && personProperty.trim() !== '') {
                person[personProperty] = prompt('Enter new property value');                
            } else {
                alert('Try again');
            }
            break;
        default: 
            alert('Try again later');   
    }
    if (!condition) {
        break;
    }   
}


console.log(person);

// -------------------------------------------------Task 4----------------------------
alert('Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS');


let container = document.querySelector('.container'),
    dl = document.createElement('dl');    

for ( let key in person){
    let dt = document.createElement('dt');    
    let dd = document.createElement('dd');

    if(typeof person[key] !== 'object') {
        dt.innerText = key;
        dd.innerText = person[key];
    } else {    
        for (let keyF in person[key]) {
            let dt = document.createElement('dt');    
            let dd = document.createElement('dd');
            dt.innerText = keyF;
            dd.innerText = person[key][keyF];
            dl.appendChild(dt);
            dl.appendChild(dd);
        } 
    }
    dl.appendChild(dt);
    dl.appendChild(dd);      
}
container.appendChild(dl);
// -----------------------------------------------Task5---------------------------------------
alert('Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.');

let dates = {
    today: new Date(),
};

let dayBeforeYesterday =  new Date();
    dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);

let dayYearAgo =  new Date();
    dayYearAgo.setDate(dayYearAgo.getDate() - 365);

    dates.dayBeforeYesterday = dayBeforeYesterday;
    dates.dayYearAgo = dayYearAgo;
    console.log(dates);

let date = prompt('Please enter date', 'yyyy-mm-dd');
    randomDate = Date.parse(date);
    

if (dates.dayYearAgo.getTime() <= randomDate && randomDate <= dates.dayBeforeYesterday.getTime() ){
    alert('Hello');
} else{
    alert('bye');
}
// ------------------------------------------------Task6---------------------------------------------
alert('Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.');

let body = document.querySelector('body');
let img = document.createElement('img');    

let  imgObj = {
    src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
    srtyle: "border: 1px solid #ccc",
    width: 200,
    alt : ""
}
for ( let key in imgObj){
    img.setAttribute(key, imgObj[key]);
}
body.appendChild(img);



