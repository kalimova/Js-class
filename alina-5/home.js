// task 1 Напишите функцию, которая принимает массив чисел,
// строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false]
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]

// let arr = [1, 2, 3, 4, "string", "hello", true, false];
// let newArr = arr.map((el) => {
//   if (el === true) {
//     return "false";
//   } else if (el === false) {
//     return "true";
//   } else {
//     return el;
//   }
// });
// console.log(newArr);

// task 2
// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
// Пример входных данных: "test"
// Результат: "tteesstt"
// let str = "test"
// let str2 = str.split("")
// let arr = str2.map((el) => {
//     return el + el
// }).join("")
// console.log(arr);

// task 3
// Напишите функцию, которая принимает строку и выводит индекс каждого символа

// let arr = "hello"
// let result = arr.split("").map((el,index)=>{
//     return index
// })
// console.log(result);

// task 4
// Напишите функцию которая принимает массив с четными и нечетными числами
//и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let arr = [1,2,3,4,5,6,7,8]
// let arr2 = arr.map((el) => {
// if (el % 2 === 0){
//  return "even";
// }
// else {
//    return "odd";
// }
// })
// console.log(arr2);

// task-5 // Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str = 'Максимально Ужасно'

// let str = "максимально ужасно"
// const task5 = str.split(" ").map((el)=>{
//     let firstChar = el[0].toUpperCase()
//     const result = el.replace(el[0], firstChar)
//     return result
// }) .join(" ")
    
// console.log(task5);

// .filter(el=> el!=="")

// let str = "максимально ужасно"
// let str2 = str.split(" ")
// let sup = str2.map((el) => {
//     return el[0].toUpperCase().slice(0)
// })
// console.log(sup);


// 4 Напишите функцию, которая принимает массив и возвращает:
//     Минимальный элемент
//     Максимальный элемент
//     Длину массива
// let str = [1,2,3,4,5,6];
// console.log('max: ', Math.max(1,2,3,4,5));
// console.log('min: ', Math.min(1,2,3,4,5));
// let str2 = [1,3,7,8,9,13,20,4000]
// let str3 =["hello", true, 1,2,3]
// console.log('min: ', Math.min(...str2));
// console.log('max: ', Math.max(...str2));
// console.log(["hello", true, 1,2,3].length);
// console.log(str3.length);


// Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str = 'Максимально Ужасно'


// let str = "максимально ужасно"
// let str2 = str.split(" ") 
// let str3 = str2.map ((el) => 
//     el.charAt(0).toUpperCase()+el.slice(1)
// )
// console.log(str3);