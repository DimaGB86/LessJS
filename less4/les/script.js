/*
* for(инициализация; проверка; инкремент) {
* инструкция
* }
*
*
*
*
* */


// for (let i = 0; i < 3; i++) {
//     console.log('HElllllll');
// }

// let pass;
// let count = 0;
// do {
//     pass = +prompt('pass')
//     count++
//
//     if (count >= 3) {
//         alert('не верный')
//     }
//
// } while (pass !== 123);

// let count = 0;
// alert(`Нажали: ${count}`)
//
// function countClick() {
//     alert(++count)
//     console.log(count)
// }


//массивы создаем через const

// const arr = [1, 2, 3, 4, 5, 'hjp'];
// console.log(arr)
// console.log(arr.length) // длина массива
// console.log(arr[arr.length - 1]) // последний элемент
//

// const user = [];
// const userName = prompt();
// user.push(userName); // добавляем элемент
// user.push(+prompt()) // можно сразу добовлять с клаиатуры
// console.log(user);

// POP Метод pop позволяет извлечь из массива последний элемент, при этом он удаляется из массива, а если
// массив пустой, то вернется undefined. Этот метод часто используется чтобы получить последний элемент массива,

// const numbers = [1, 2, 3, 4, 5, 6, 7, 89]
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers);

// const word = 'exmplez'
// const arrWord = word.split('');
// const upWord = arrWord.pop()
// console.log(upWord.toLocaleUpperCase());
// arrWord.push(upWord.toLocaleUpperCase())
// console.log(arrWord.join(''));


// shift - Этот метод произошел от английского слова shift — сдвигать. Данный метод извлекает нулевой элемент из
// массива, при этом сдвигает все оставшиеся элементы массива на одну ячейку влево. Получим первого
// студента, записавшегося на курс.

// const student = ['Иван', 'Петр', 'Сентя'];
// const  first = student.shift()
// console.log(first);
// console.log(student);
//
// const fileName = 'C://JavaScript//Основы Javascript'
// const diskName = fileName.split('//').shift(); // Разделим строку на стоствляющие и превратим
//                                 // ее в масив по средставм split('/') а потом уже вызовим метод shift
// console.log(diskName); // 'c'


// slice - Помимо копирования массивов, метод slice (с английского — отрезать) позволяет отрезать от исходного
// массива часть, при этом исходный массив остается целым, а метод возвращает новый массив. Например
// когда нам нужно получить 2-х первых студентов группы, мы можем сделать так:
//
// const student = ['Иван', 'Петр', 'Сентя', 'fdjda'];
// const firstTwoS = student.slice(0, 2); // берем 0 и до 2(не включительно)
// console.log(firstTwoS); // ['Иван', 'Петр']


// indexOf - Метод indexOf вычисляет индекс определенного элемента, совпадающего со значением, переданным в качестве
// аргумента. Проще говоря, выполняет поиск элемента. В случае успеха метод возвращает
// индекс первого найденного элемента, в  противном случае возвращается значение -1.

// const arr = [1, 5, 321, 6542, 4213, 65432123, 543, 11, 2, 3, 4, 5, 5]
//
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     if (element <= 3) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }




























