// alert всплывающяя подсказака
// alert("Привет, мир!");
// prompt всплывающее окно с текстовым полем для ввода данных
// prompt("введите ваше имя");

// confirm("Вам есть 18?"); // всплывающее окно с вопросом да или нет

// операторы if if-else

let userAnswer = prompt("Введите ваше имя");
// if (userAnswer === '') {
//     console.log('Пусто');
//     alert(`вы не ввели имя`);
// } else {
//     if ( userAnswer === 'витя') {
//         alert('значит вы тракторист');
//         console.log(userAnswer);
//
//     } else {
//         alert('Значит вы не витя')
//         console.log(userAnswer);
//         alert(`Привет ${userAnswer}!`);
//     }
// }

// if (userAnswer === '') {
//     console.log('Пусто');
//     alert(`вы не ввели имя`);
// } else if (userAnswer === 'Витя') {
//     alert('значит вы тракторист');
//     console.log(userAnswer);
// } else {
//     alert('Значит вы не витя');
//     console.log(userAnswer);
//     alert(`Привет ${userAnswer}!`);
// }

// (условие) ? ДА : НЕТ тернарный оператор

// (userAnswer.toLowerCase() === '') ? (console.log('Пусто'), alert(`вы не ввели имя`)) :
//     (userAnswer === 'Витя') ? (alert('значит вы тракторист'), console.log(userAnswer)) :
//         (alert('Значит вы не витя'), alert(`Привет ${userAnswer}!`));

let pass = prompt("Введите пароль:"); /// '123'
pass = Number(pass); // преобразовываем в число

// let pass = Number(prompt('Введите ')) // преобразовываем сразу в число
