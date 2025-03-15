// let =
// const =
// Array массив
// function функция
// Null по логике false
// Symbol(симмвол) создавать уникальные ключи для свойств
// BigInt большие числа или при использовании меток времени с микросекундами (только целые числа)
let lil = []; // массив
let sss = 1234;
let mass = [1, 2, 3, 'fdfd']
console.log(`Число: ${sss}`)

let jon = {
    Name: 'Jon',
    age: 33
}
console.log(mass[0]);
console.log(jon.age);

const add = function (x) { // функция
    return x + 2
}
console.log(add.toString());
console.log(add(10))

const uniKey = Symbol('test')
const uniKey2 = Symbol('test')
console.log(uniKey == uniKey2) // будет false так как символы уникальны

let bigNum = 44444555555555555n; // записывается как обычное число только в конце литера "n"
console.log(bigNum);