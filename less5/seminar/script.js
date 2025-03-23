// Задание 1 (тайминг 20 минут)
// Текст задания:
//  1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на экран “Вторник”
//  2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
//  3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
//  4. Удалите свойство surname
//
// const week = {
//     1:'Понедельник',
//     2:'Вторник',
//     3:'Среда',
//     4:'Четверг',
//     5:'Пятница',
//     6:'суббота',
//     7:'воскресенье',
// }
// console.log(week["2"]);
//
// const user = {
//     name: 'Java',
//     surname: 'Script',
//     age: 30,
// };
// console.log(`${user.surname} - ${user.name} - ${user.age}`);
//
// user.patronymic = prompt('Очество');
// console.log(user);
//
// delete user.surname;
// console.log(user);


// Задание 2 (тайминг 25 минут)
//  1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
//     const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//     const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
//  1. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
//
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
//
// const week = {};
//
// if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         week[arr1[i]] = arr2[i]
//     }
// } else {
//     console.log('Разные массивы!!');
// }
// console.log(week);
//
// const obj = {x: 1, y: 2, z: 3};
// for (const key in obj) {
//     obj[key] = obj[key] ** 2
// }
// console.log(obj)


// Задание 3 (тайминг 15 минут)
// Найдите сумму элементов приведенного объекта.
//
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// let sum = 0;
// for (const keyUp in obj) {
//     for (const keyIn in obj[keyUp]) {
//         sum += obj[keyUp][keyIn];
//     }
// }
// console.log(sum)


// Задание 4 (тайминг 30 минут)
//  1. Создайте объект riddles
//  2. Добавьте свойства question, answer
//  3. создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
//  4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
//  5. * По желанию, создать 2 подсказки, если пользователь ответил неверно
//
// const riddles = {
//     question: 'Зимой и лет один цвет',
//     answer: 'елка',
//     askQuestion() {
//         let userAnswer = prompt(this.question).toLowerCase()
//         if (userAnswer === this.answer) {
//             console.log('Молодец!');
//         } else {
//             console.log('Вы проиграли!');
//         }
//     }
// }
//
// riddles.askQuestion()
//


const numbers = [1, 2, 3, 4, 5];

const chemElements = ["Гелий", "Литий", "Бериллий", "Бор", "Углерод"]

console.log(chemElements[numbers.pop()])