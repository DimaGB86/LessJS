// Задание 1
// 1.1
// function helloName(name, firstName, age) {
//     return console.log(`Привет ${name} ${firstName} с возрастом ${age}`);
// }
//
// helloName('Иван','Петров', 17)

// 1.2
// function square(num) {
//     return console.log(num ** 2);
// }
// const square = (num) => console.log(num ** 2)
//
// square(3);

// 1.3

// function examination(num) {
//     (num >= 0) ? console.log('+++') : console.log('---');
// }
//
// examination(-1);

// Задание 2.

// function summ(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
//
//
// summ(param1, param2, param3);

// Задание 3

// function gol(num) {
//     return Math.sqrt(num);
// }
//
// let num1 = gol(3);
// let num2 = gol(4)
//
// console.log(Math.round(num1 + num2))
//
// function min(num1, num2) {
//     (num1 < num2) ? console.log('первое меньше') : console.log('второе меньше');
//
// }
//
// min(1, 2);
// min(2, 1);

// Задание 4

// function dayWeek(day) {
//     switch (day) {
//         case 1:
//             return 'Понедельник';
//             break;
//         case 2:
//             return 'Вторник';
//             break;
//         case 3:
//             return 'Среда';
//             break;
//         case 4:
//             return 'Четверг';
//             break;
//         case 5:
//             return 'пятница';
//             break;
//         case 6:
//             return 'Суббота';
//             break;
//         case 7:
//             return 'Воскресенье';
//             break;
//         default: return 'Вы ввели что-то не то';
//             break;
//     }
// }
//
// console.log(dayWeek(1));
// console.log(dayWeek(2));
// console.log(dayWeek(3));
// console.log(dayWeek(4));
// console.log(dayWeek(5));
// console.log(dayWeek(6));
// console.log(dayWeek(7));
// console.log(dayWeek(40));

// function helloTime(time, name) {
//     if (time >= 5 && time <= 11) {
//         console.log(`Доброе утро ${name}`);
//     } else if (time >= 12 && time <= 16) {
//         console.log(`Добрый день ${name}`);
//     } else if (time >= 17 && time <= 23) {
//         console.log(`Доброго вечера ${name}`);
//     } else {
//         console.log(`Доброй ночи ${name}`);
//
//     }
// }
//
// helloTime(10, 'jdon');
// helloTime(13, 'jdon');
// helloTime(18, 'jdon');
// helloTime(1, 'jdon');
