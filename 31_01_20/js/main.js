// -------------------------------Task 1----------------------------------------------
alert('Task 1');

var a = 52,
b = 14,
c = 89;
if (a < b){
    if ( a < c){
        alert('min = ' + a);
    }else{
        alert('min = ' + c);
    }

}else if ( b < c ){
    alert('min = ' + b);
}else{
    alert('min = ' + c);
}

// -------------------------------Task 2----------------------------------------------

alert('Task 2'); 

var snailSpeed = +prompt('Tell me what the snail speed? ( -x or +x)');
if(snailSpeed > 0){
    alert('улитка ползет вперед');
} else if (snailSpeed == 0){
    alert('улитка не движется');
} else {
    alert('улитка ползет назад');
}

// -------------------------------Task 3----------------------------------------------

alert('Task 3');
 
var alexBudget = +prompt('How many maney do you have Alex?'),
johnBudget = +prompt('How many money do you have John?');
if ( alexBudget + johnBudget >= 6400 ){
    alert('You can go on Malta to studdy English');
}else{
    alert('Drink some beer');
}

// -------------------------------Task 4----------------------------------------------

alert('Task 4');
var age = +prompt('How old are you?');
if (age >= 20 && age < 30){
    alert ('Выслать повестку');
    alert('Your in the army now!');

}else {
    alert('Lucky boy!');
}

// -------------------------------Task 5----------------------------------------------

alert('Task 5');
var busNumber = prompt('What the bus number?'), 
say;

switch (busNumber) {
	case '7':
	case '225':
	case '255':
        say = 'You can go home';
        break;
	default:
        say = 'You have to wait another bus';

}
alert(say);

// -------------------------------Task 6----------------------------------------------


alert('Task 6');
var day = prompt('What day is it today?');
if (day == 'saturday' || day == 'sunday') {
    alert('you can sleep');
} else {
    alert('Sorry, you have to go to work ;(');
}

// -------------------------------Task 7----------------------------------------------


alert('Task 7');

var userName = prompt('What is your name?');
userName && alert(`Hello ${userName}`);

// -------------------------------Task 8----------------------------------------------


alert('Task 8');

var transactionType = prompt('Enter  type of transaction (uah-usd or usd-uah)'),
    toChange = +prompt('Enter the amount to exchange'),
    exchande = 25,
    result;

if (transactionType && toChange) {
    transactionTypeUp = transactionType.toUpperCase();
    switch (transactionTypeUp) {
        case 'UAH-USD':
            result = '$' + toChange / 25;
            break;
        case 'USD-UAH': 
            result = toChange * 25 + ' UAH'; 
            break;
        
        default:  result = 'try again later';
    }
    alert(result);
} else {
    alert('try again');
}

// -------------------------------Task 9----------------------------------------------


alert('Task 9');

var lang = prompt('Chose language ( ru, en, de)'),
    greeting;

if (lang) {
    switch (lang.toLowerCase()) {
        case 'ru':
            greeting = 'Здравствуйте';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'de':
            greeting = 'Guten Tag';
            break;
        default:
            greeting = 'error';
            break;
    }
    alert(greeting);
} else {
    alert('Error');
}

// -------------------------------Task 10----------------------------------------------


alert('Task 10');
var month = new Date().getMonth(),
    timeOfTheYear;

if( month < 2 || month===11){
    timeOfTheYear = 'winter';
} else if (  month < 4 ) {
    timeOfTheYear = 'spring';
} else if ( month < 7 ){
    timeOfTheYear = 'summer';
} else{
    timeOfTheYear = 'autumn';
}
alert(timeOfTheYear);
switch (true) {
    case 11 === month:
    case  month < 2:
        timeOfTheYear = 'winter';
        break;
    case 5 > month:
        timeOfTheYear = 'spring';
        break
    case 8 > month:
        timeOfTheYear = 'summer';
        break;
    case 11 > month:
        timeOfTheYear = 'autumn';
        break;
    default:
        timeOfTheYear = 'try again';
}

alert(timeOfTheYear);
// -------------------------------Task 11----------------------------------------------


alert('Task 11');
var lang = prompt('Chose language ( ru or en)'),
    day = prompt ('Chose number from 0 to 6'),
    resultDay;
if (lang && day){
    if ( lang === 'ru'){
        switch (day) {
            case '0':
                resultDay = 'воскресенье';
                break;
            case '1':
                resultDay = 'понедельник';
                break;
            case '2':
                resultDay = 'вторник';
                break;
            case '3':
                resultDay = 'среда';
                break;
            case '4':
                resultDay = 'четверг';
                break;
            case '5':
                resultDay = 'пятница';
                break;
            case '6':
                resultDay = 'суббота';
                break;
            default:
                resultDay = 'try again';
        }
    } else if ( lang = 'en'){
        switch (day) {
            case '0':
                resultDay = 'sunday';
                break;
            case '1':
                resultDay = 'monday';
                break;
            case '2':
                resultDay = 'tuesday';
                break;
            case '3':
                resultDay = 'wednesday';
                break;
            case '4':
                resultDay = 'thursday';
                break;
            case '5':
                resultDay = 'friday';
                break;
            case '6':
                resultDay = 'saturday';
                break;
            default:
                resultDay = 'try again';
        }
    }
    alert(resultDay);
}

// -------------------------------Task 12----------------------------------------------


alert('Task 12');
var x = prompt('x', 0);
var error = null;

switch (isNaN(x) || parseInt(x, 10)) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
    case true: error = 'Не математическая операция'; break;
    default:
        alert(100 / x);
}

if (error) {
    alert(error);
}
