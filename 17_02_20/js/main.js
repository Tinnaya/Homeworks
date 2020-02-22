// --------------------------------------------------------------Task 1-----------------------------------------------------------------
// alert(`Напишите функцию setComment с параметрами: date, message, author. 
// Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, 
// то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, 
// что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр 
// не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает на странице текст в формате: 
// <имя_автора>, <дата>
// <текст_сообщения>`);

let setComment = ( date, message, author ) => {
    author = author || 'Anonymous';
    if ( typeof date == 'undefined' || typeof message == 'undefined'){
        alert('Wrong data try again');
    } else {
    return `${author}, ${date}\n${message}`
    }
};

console.log(setComment('2016-11-02', 'Everything is ok', 'John'));
console.log(setComment('2016-11-02', 'You could do it better!'));
console.log(setComment('2016-11-02', undefined,'John'));
// --------------------------------------------------------------Task 2 -----------------------------------------------------------------
// alert(`Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) –
//  a) используя цикл b) используя рекурсию:`);

let degreeOfnumber_a = (x, degree) => {
    let result = x;
    for (let i = 1; i < degree; i++) {
        result *= x;
    }
    return result;
}
console.log(degreeOfnumber_a(2, 3));



// _______________________________________________Вариант 1

// let degree = 3;
// function cube ( x ) {

//     if (degree == 1){
//         return x;
//     }else{
//         --degree;
//         return x * cube(x);
//     }
// }

// _______________________________________________ Вариант 2 этот, пожалуй, лучше всего подходит по условию

let cube = (number) => {
    let degree = 3;
    let func = () => {
        if (degree === 1) {
            return number;
        }
        degree--;
        return number * func();
    };
    return func();
};
console.log(cube(2));

// _______________________________________________Вариант 3


// function cube (x , degree) {
//     // let degree = 3;

//     if (degree == 1){
//         return x;
//     }else{
//         return x * cube(x, --degree);
//     }
// }


// console.log(cube(2));
// --------------------------------------------------------------Task 3 ----------------------------------------------------------------
// alert(`Напишите функцию extraCube, которая принимает в качестве параметра или число, 
// или массив числовых значений и возвращает либо куб числа, либо массив кубов, в зависимости от 
// типа входящего параметра (typeof). Для расчета куба числа вместо встроенного метода Math.pow используйте собственную функцию.`);

let extraCube = (value) => {
    if (typeof value === 'number' ) {
        return cube(value);
    }else{
        let result = [];
        for (let i = 0; i < value.length; i++) {
           result[i] =  cube(value[i]);
        }
        return result
    }
};

console.log(extraCube(25));
console.log(extraCube([1, 2, 3]));


// --------------------------------------------------------------Task 4 ---------------------------------------------------------------
// alert(`Напишите функцию, которая вызывается и работает следующим образом:`);

let multi = (a) => {
    return (b) => {
        return (c) => {
        return a * b * c;
        };
    };
};

console.log( multi(2)(3)(4) );


// --------------------------------------------------------------Task 5 --------------------------------------------------------------------
// alert(`Создайте объект, описывающий html-разметку. Напишите функцию, которая добавляет разметку в произвольный контейнер на странице.`);

const tree = [
    {
        tag: 'section',
        children:[
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.every()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.'
                    }

                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.some()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.'
                    }

                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.reduce()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.'
                    }

                ]
            },
            {
                tag: 'article',
                children: [
                    {
                        tag: 'h1',
                        content: 'Array.prototype.reduceRight()'
                    },
                    {
                        tag: 'p',
                        content: 'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.'
                    }

                ]
            },
        ]
    }
];

function buildTree(data = [], target = document.body) {
	data.forEach((item) => {
		const node = document.createElement(item.tag);
		
		if ('content' in item) {
			node.innerText = item.content;
		}
		
		if ('children' in item && item.children.length) {
			buildTree(item.children, node);
        }
        
        target.appendChild(node);
	});
}

buildTree(tree);

// --------------------------------------------------------------Task 6 ---------------------------------------------------------------
// alert(`Дан массив, элементами которого могут быть любые значения, включая другие массивы. 
// Напишите функцию flat, которая рекурсивно “разворачивает” переданный массив на глубину depth, 
// указанную в параметре функции. По умолчанию flat поднимает элементы на одну глубину (то есть если depth не указан).`);

let flat = (data, depth = 1) => {
	let arr = [];
	data.forEach(element => {
		if(Array.isArray(element)) {
			arr.push(...element);
		} else {
			arr.push(element);
		}
	});
	if (depth === 1) {
		return arr;
	} else {
		return flat( arr, depth-1 )
	}
}
var data1 = [1, 2, [3, 4, [5, 6]]];
console.log(flat(data1));

var data2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log( flat(data2, 1) );
console.log( flat(data2, 3) );



// --------------------------------------------------------------Task 8 --------------------------------------------------------------
// alert(`Найдите и исправьте ошибки в коде:`);

function foo() {
	function bar(a) {
		let i = 3;
		return i + a;
	}
	
	for (var i = 0; i < 10; i++) {
		console.log( bar(i * 2) );
	}
}

foo(); 

// --------------------------------------------------------------Task 9 --------------------------------------------------------------
// alert(`Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() 
// для получения текущей временной метки и служит для замера времени выполнения другого кода`);

let createTimer = () => {
    let start = performance.now();

    return () => {
        let end = performance.now();
        return end - start;
    };
};

let timer = createTimer();

alert('!');

alert( timer() );

// --------------------------------------------------------------Task 10 --------------------------------------------------------------
// alert(`Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой 
// примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. 
// Функция работает по следующему принципу:`);

let createAdder = (z) => {
	return (d) => {
		return z + d;
	}
};

var hello = createAdder('Hello, ');
alert( hello('John') );
alert( hello('Harry') );

var plus = createAdder(5);
alert( plus(1) );
alert( plus(5) );

// --------------------------------------------------------------Task 7 ----------------------------------------------------------------
// alert(`“История в картинках”. Создайте массив тематически связанных строковых картинок. 
// Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из 
// элементов массива (одну из картинок). Тема - свободная, ограничена только набором доступных строковых картинок.`);

let arrHomeWork = ['😕', '😳', '😥', '😭', '🤔', '🤯', '🙂', '😄', '🥳', '😴'];
let myHomework = (data, target = document.body ) => {
	let smile = document.createElement('div');
		smile.style.zoom = 10;
	data.forEach((element,index) => {
		setTimeout(() => {
			smile.innerText = element
		}, 1000 * index);
		
	});
	target.appendChild(smile);
}
myHomework(arrHomeWork);
