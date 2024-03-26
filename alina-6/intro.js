// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив,    //     состоящий из квадратов этих чисел.
// let arr = [4, 54, 49]
// let arr2 = arr.map((el) => {
//     return el**2
// })
// console.log(arr2);

// let arr = [1,2,3,4,5]
// let arr2 = arr.map((el) => {
//     return el + 1
// })
// console.log(arr2);

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.// let arr = [3134, 4, -143, -245, -214]
// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.map((el) => {
//     if (el < 0){
//       return  el
//     }
//     else {
//         return "положит число"
//     }
// })
// console.log(newArr);

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].//     Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Саша', 'Юля']
// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Юля']
// let newArr = arr.map ((el) => {
//     if (el.length > 5) {
//         return el
//     }
//     else {
//         return "длина меньше 5"
//     }
// })
// console.log(newArr);

// task 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
//     Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000, 567, 50];
// let newArr = arr.map((el) => {
//   if (
//     el.toString()[0] === "1" || el.toString()[0] === "2" || el.toString()[0] === "3"
//   ) {
//     return el;
//   } else {
//     return "no";
//   }
// });
// console.log(newArr);

// task 12 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arr2 = arr.map((el) => {
//     return "-" + el 
// }).join("")
// console.log(arr2);

// task 20 Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let str = 'jzvzszrzpz'
// let arr2 = str.split("").map((el, idx) => {
//     if (idx % 2 ===0) {
//     return el
//     }
//     else {
//         el.toUpperCase()
//     }
// }).join("")
// console.log(arr2);

// task 19 Вам дан массив  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].//     Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// let newArr = arr.map((el) => {
//     if ( el > 10 && el % 2 === 1){
//         return el
//     } else {
//         return "меньше 10"
//     }
// }).join(" ")
// console.log(newArr);


// let arr = [1,2,3,4]
// console.log(arr.reverse());

// Напишите функцию которая принимает строку “яблоко” и заменяет все буквы “o” на  “a”// let str = "головоломка"
// let arr = "яблоко"
// console.log(arr.replaceAll("о", "а"));

// let str = "головоломка"
// console.log(str.replaceAll("о", "а"));

// let arr = "anna"
// if (arr.toString().split("").reverse().join("") === arr.toString()){
//     console.log("true");
// } else {
//     console.log("false");
// }

// let str = "anna"
// console.log(str.split("").reverse().join("") === "anna" );

// let str = "замок"
// let str1 = str.split("")
// let str2 = str1.map((el) => {
//     return el + el
// }).join("")
// console.log(str2);

// task 1  Напишите функцию, которая принимает массив чисел, // строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]
// let arr = [1,2,3,4,"string", "hello", true, false] 
// let newArr = arr.map((el) => {
//     console.log(typeof el);
//     if (typeof el === "boolean"){
//       return !el  
//     }  else {
//         return el
//     } 
// })
// console.log(newArr);
// ! - это означает НЕ

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
// let arr = [1,2,3,4, "Argentina", "Moscow"]
// let arr1 = arr.map((el) => {
//     if (typeof el === "number"){
//       return el   
//     } else {
//         return "не число"
//     }   
// })
// console.log(arr1);


// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// let arr = [3,6,9,25,50,15,30,1]
// let arr1 = arr.map((el) =>{
//     if (el % 3 === 0 && el % 5 === 0){
//         return "FizzBuzz"
//     } 
//     else if (el % 5 === 0){
//         return "Buzz"
//     }
//     else if (el % 3 === 0){
//         return "Fizz"
//     } else {
//         return el
//     }
// })
// console.log(arr1);

// 04.01
// let arr = [1,2,3]
// let newArr = arr.map((el,idx,arr) => {
//     console.log(el);
// })

// let age = [25,26,27,28]
// let age1 = age.map((el) => {
//     return "мне " + el + " лет"
// })
// console.log(age1);

// let age = [25,26,27,28]
// let age1 = age.map((el) => {
//     return `мне ${el} лет`
// })
// console.log(age1);

// let age = [25,26,27,28]
// let name = "Sasha"
// let age1 = age.map((el) => {
//     return `hello ${name}`
// })
// console.log(age1);

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map((el) => {
//     if (el % 2 === 0){
//         return el
//     } else {
//         return "not"
//     }
// })
// console.log(newArr);

// let arr = [1,2,3,4,5,6]
// let newArr = arr.filter((el) => {
//     return el % 2 === 0
// })
// console.log(newArr);

// let arr = [1,-2,3,-3,5,-6,7,-8,10]
// let newArr = arr.filter((el) => {
//     return el < 0
// }).length
// console.log(newArr)

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.//     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr = [3, 51, -30, -54, 60]

// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter((el) => {
//         return el > 0 
//     })
//     let arr1 = newArr.map((el) => {
//     return Math.sqrt(el)
//     })
//     console.log(newArr)
//     console.log(arr1)

    // task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.// let arr = [55, 44, 55, 44, 15, 49]
    // let arr = [55, 44, 55, 44, 15, 49]
    // let newArr = arr.filter((el) => {
    //     return arr.indexOf(el) === arr.lastIndexOf(el)
    // })
    // console.log(newArr);

    // / task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
    // let arr = ['Бегимай', 'Баяман', 'Калмамат']
    // let newArr = arr.map((el) => {
    //     return el.length
    // })
    // console.log(newArr);


//  вам дан массив, оставьте только четные числа
// let arr = [1,2,3,4,5,6]
// let newArr = arr.filter((el) => {
//     return el % 2 === 0
// })
// console.log(newArr);


// непонятно
// let str = "hello"
// let str2 = str.split("")
// let arr = str2.map((el,idx) => {
//     let result = 0
//     if (result < idx) 
//     {
//         return el
//     } else if (result < idx) {
//         return idx
//     } else if (idx[1] < idx[2]) {
//         return idx
//     } else if (idx[2] < idx[3]) {
//         return idx
//     } else if (idx < idx) {
//         return idx
//     }
    
// })
// console.log(arr);


// let str = "hello"
// let res = str.split("")
// let newArr = res.map((el,idx,arr) => {
// return arr[arr.length -1 - idx];
// }).join("")
// console.log(newArr);

// let arr = ["a","d", "b"]
// let arr2 = arr.sort();
// console.log(arr.reverse())

// let str = "toffee"
// let str2 = "foefett"
// let arr1 = str.split("").sort().join("")
// let arr = str.split("").sort().join("")
// if (arr1 === arr){
//     console.log("true");
// } else {
//     console.log("false");
// } 
// console.log(arr);


// удалить каждое второе слово
// let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]
// let sup = arr.filter((el,idx) => {
//     return idx % 2 === 0
// })
// console.log(sup);

//  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат', "Алия"]. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// let arr = ['Аскар', 'Баяман', 'Калмамат']
// let arr1 = arr.map((el) => {
//    return el.split("а").join("я")  
// })
// console.log(arr1);

// task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
// let arr = [1,2,3,4,"dog",6,7,"popcorn"]
// let newArr = arr.filter((el) => {
//     return el >= 0 || el < 0
// })
// console.log(newArr);

// Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?
// Пример (Ввод -> Выход)
// "бан яблока" --> ["яблоко 5", "бан 3"]
// "ты выиграешь" -->["ты 3", "выиграешь 4", "выиграешь 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу.
// Примечание. В строке будет хотя бы один элемент; слова всегда будут разделены пробелом.
// let str="you will win"
// let str2=str.split(" ").map((el)=>{
//     return el + " " + el.length
// })
// console.log(str2);

// FIND
// let arr = [1,-2,3,-6,7, true]
// let newArr = arr.find((el) => {
//     return el === "boolean"
// })
// console.log(newArr);

// let arr = [1,-2,3,-6,7, true, "sasha"]
// let newArr = arr.find((el) => {
//     return el === "sasha"
// })
// console.log(newArr);

// найти булеан и сделать противоположным
// let arr = [1,2,true,"hello","test",false]
// let newArr = arr.find((el) => { 
//     return typeof el === "boolean"
// }) 
// let a = !newArr
// console.log(a);

// найти значение с четным количеством символов и повтрить это значение : "testtest"
// let arr = [1,2,4,"test", "hello", "world"]
// let newArr = arr.find((el) => {                              четное кол символов
//     return el.length % 2 === 0 
// })
// console.log(newArr + newArr);

// let newArr = arr.find((el) => {                              здесь нечетное кол символов
//     return el.length % 2 === 1 
// })
// console.log(newArr + newArr);


// let arr = [1,2,4,"test", "hello", "world"]
// let newArr = arr.find((el,idx,a) => {                              
//    return idx + 1
// })
// console.log(newArr);

// let arr = [1,2,4,"test", "hello", "world"]
// let newArr = arr.find((el) => {                              
//     return el.length % 2 === 0 
// })
// // console.log(newArr +  " " + newArr);
// console.log(`${newArr}      ${newArr}`);

// let name = "sasha"
// console.log(`hello ${name}`);

// spread operator
// let arr = [1,2,3]
// let newArr = [4,5,6]
// let a = [...arr,...newArr]
// console.log(a);

// вам дан массив, найдите максимальное число
// let arr = [1,2,3,4,5,6,7]
// let newArr = Math.max(...arr)
// console.log(newArr);

// возьмите пустой массив, внутрь массива занести 1,2,3,4
// let arr = []
// let newArr = [1,2,3,4]
// let result = [...newArr, "hello"]
// console.log(result);


// let name = "ivan ivanov"
// let arr = name.split(" ")
// let newName = arr.map((el) => {
//     return el[0].toUpperCase() + el.slice(1)
// }).join(" ")
//     console.log(newName);

let arr = [1,2,3,4]
let newArr = [1,2,3]
arr.forEach((el,idx,arr) => {
 newArr = [...newArr, el + 1]
})
console.log(newArr);








