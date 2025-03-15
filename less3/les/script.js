//
//
// // именнованая функция
// function getMax() { // декларативное объявлениe
// }
//
// function (result) { //анонимная функция
//     return result;
// }

// function helloName(name) {
//   console.log(name);
// }
//
// helloName("ggggg");
//
//
// let  count = 4;
// console.log(count);
// function counter() {
//     return count++;
// }
// counter()
// console.log(count);
//

// let age = +prompt("Age&");

// const lvlup = () => age + 5;

// console.log(lvlup());





function askQut(answer, qwest) {
    const userAnswer = prompt(qwest);

    (userAnswer.toLowerCase() === answer) ? console.log('угадал') : console.log('не угадал');
}
function puzzle() {
    askQut('лук', "дед");
    askQut('елка', "цвет");
}










