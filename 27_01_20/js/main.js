// ------------------------------------------- Ex.1 -------------------------------------------------

alert('Создайте три переменные. Присвойте первой переменной случайное целочисленное значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Распечатайте все три.');


var a = Math.floor(Math.random() * 10),
    b = a * 3,
    c = a + b;
alert(a);
alert(b);
alert(c);

	// -------------------------------------------- Ex.2 ----------------------------------------------

alert('Создайте переменные firstName и lastName для хранение имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие (“What’s up John Doe”), используя конкатенацию и экранирование символов. Имя и фамилию выводите заглавными буквами независимо от того, как они были введены.');

var firstName = prompt('What\'s your firstname?');
var lastName = prompt('What\'s your lastname?');
alert(`What's up ${firstName.toUpperCase()} ${lastName.toUpperCase()}?`);


	// ----------------------------------------------- Ex.3 -----------------------------------------------

alert('Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне. (Процесс вычисления посмотрите в debugger');

var x = prompt('Insert the first number x');
var y = prompt('Insert the second number y');
alert( x * y);
alert( x / y);
alert(x - y);
alert(+x + (+y));


    // ------------------------------------------------- Ex.4 -----------------------------------------------
    
alert('Космический корабль летит с Земли на Луну. Расстояние равно 384 400 км. Скорость полета корабля определяется в prompt. Рассчитайте, за какое время ваш космический корабль доберется до Луны.');

var distanceToTheMoon = 384000;
var SpacecraftSpeed = prompt('Enter the speed of your spaceship in kilometers per hour');
alert('in' +' ' +(distanceToTheMoon/SpacecraftSpeed) + 'hours');

	// ------------------------------------------------ Ex.5------------------------------------------------
alert('Напишите программу, которая без использования оператора сравнения определяет, является ли целое число, введенное пользователем, нечётным (true/false). Результат отобразите в alert.');

var number = prompt('Please enter an integer'),
    testNumber = number % 2;
    
alert(Boolean(testNumber));


	// ------------------------------------------------ Ex.6 -----------------------------------------------
alert('Напишите программу, которая проверяет (true/false), является ли значение, введенное пользователем, числом. ');

var randomType = prompt('Enter text or number');
alert(!Number.isNaN(+randomType));

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

	// ------------------------------------------------- Ex.7 ------------------------------------------------
alert('Напишите калькулятор для конвертации единиц измерения количества информации (байт, килобайт, мегабайт, гигабайт).');

var b = prompt('enter bytes'),
    kb = +b / 1024,
    mb = kb / 1024,
    gb = mb / 1024;
alert(kb +'Кб' + ' , ' + mb +'Мв' + ' , ' + gb + 'Гб'); 

var kb = prompt('enter kilobytes'),
    b = +kb * 1024,
    mb = kb / 1024,
    gb = mb / 1024;
alert(b +'байт' + ' , ' + mb +'Мв' + ' , ' + gb + 'Гб'); 

var mb = prompt('enter megabytes'),
    kb = +mb * 1024,			
    gb = + mb / 1024,
    b = kb * 1024;			
alert(b +'байт' + ' , ' + kb +'Кв' + ' , ' + gb + 'Гб');

var gb = prompt('enter gygabytes'),
    mb = + gb * 1024,
    kb = mb * 1024,
    b = kb * 1024;			
alert(b +'байт' + ' , ' + kb +'Кв' + ' , ' + mb + 'Мб');

// ------------------------------------------------------ Ex.8 ------------------------------------
alert('У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.');

var a = prompt('how many apples did you have?'),
    b = prompt ('how many apples did you eat?'),
    c = Number(a) - Number(b);
    alert(Boolean(c));
// ---------------------------------------------------- Ex.9 ----------------------------------
alert('На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.');

var firstColumn = prompt('Enter the height of the first column'),
    secondColumn = prompt('Enter the height of the second column'),
    thirdColumn = prompt('Enter the height of the third column'),
    firstNumber = parseInt(firstColumn , 10),
    secondNumber = parseInt(secondColumn , 10),
    thirdNumber = parseInt(thirdColumn , 10),
    max_value = Math.max(firstNumber , secondNumber , thirdNumber);
alert('max value=' + max_value + 'px');

	// --------------------------------------------------- Ex.10-----------------------------------------
alert('Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения. Расчеты сделайте в одном выражении! (То есть в скобках метода alert.)');

var x = Math.floor(Math.random() * 100),
    y = prompt('Enter nuber' , 10)
    d = x < y;
alert('x < y = '+ d + ' , ' + 'x =' + x + ' , ' + 'y =' + y)
