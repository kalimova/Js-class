// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел. Используйте reduce

//   let arr = [4,54,49]
// let newArr = arr.reduce((acc, rec) => {
//     return acc = [...acc, Math.sqrt(rec)];
// }, [])
// console.log(newArr);

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Выведите первое отрицательное число

// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.find((acc, rec) => {
// if (acc < 0){
// return acc      без элсе можно, редьюс элс должен быть
// }
// })
// console.log(newArr);


// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа. Используйте reduce
// let arr = [3, 51, 30, 54, 60]
// let newArr = arr.reduce((acc, rec) => {
//     if(rec % 2 === 0){
//       return acc = [...acc, rec]  
//     } else {
//         return acc
//     }
// }, [])
// console.log(newArr);

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].

//     Оставьте в нем  строку, длина которой больше 5-ти символов.

// let arr = ['Бегимай', 'Баяман', 'Калмамат','Саша']
// let newArr = arr.reduce((acc, rec) => {
//     if(rec.length > 5){
//       return acc = [...acc, rec];  
//     } else {
//         return acc  - пустой массив
//     }
// }, [])
// console.log(newArr);  - фильтром лучше

// task5  Вам дан массив [-13, 96, -41, -28, 40].

//     Посчитайте количество отрицательных чисел в этом массиве. Используйте foreach
// let arr = [-13, 96, -41, -28, 40]
// let newArr = arr.reduce((acc, rec) => {
//     if(rec < 0){
//       return acc = [...acc, rec];   
//     } else { 
//         return acc}
       
// }, [])
// console.log(newArr.length);


// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.

//     Затем возведите в третью степень Используйте foreach

// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.reduce((acc, rec) => {
//     if(rec > 0){
//     return acc = [...acc, rec ** 3]; 
//     } else {
//         return acc
//     }
       
// }, [])
// console.log(newArr);

// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем первое неповторяющееся число.

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.find((el) => {
//     return arr.indexOf(el) === arr.lastIndexOf(el)
// })
// console.log(newArr);

// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки. Используйте foreach
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// let newArr = arr.reduce((acc,rec) => {
//     return acc = [...acc, rec.length]
// }, [])
// console.log(newArr);

// let a = [1,2,3,4]  
// let newArr = a.reduce((acc,rec,idx,arr) => {
// return acc + rec
// },0)
// console.log(newArr);

// вам дан массив, найти сумму отрицательных чисел
// let arr = [-1,2,-3,5,6,-6]
// let newArr = arr.reduce((acc, rec) => {
//     if(rec < 0){
//      return acc + rec
//     } else {
//         return acc
//     }
// }, 0)
// console.log(newArr);

// task 1  Напишите функцию, которая принимает массив чисел, // строк и булеан если тип булеан сделайте противоположное значение.
// принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]
// let arr = [1,2,3,4,"string", "hell", true, false]
// let newArr = arr.reduce((acc, rec) => {
//     if(typeof rec === "boolean"){
//      return acc = [...acc,!rec]
//     } else {
//         return acc = [...acc,rec]
//     }
// }, [])
// console.log(newArr);


// task 2// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
//     Результат: "tteesstt"

// получить tteesstt
// let str = "test"
// let arr = str.split("")
// let newArr = arr.reduce((acc, rec, idx) => {
//      return acc + rec + rec
// }, "")
// console.log(newArr);

// task 3// Напишите функцию, которая принимает массив и выводит индекс каждого символа
// let str = [1,2,3,4,5]

// let arr = [1,2,3,4,5]
// let newArr = arr.reduce((acc, rec, idx) => {
// return acc = [...acc, idx]
// }, [])
// console.log(newArr);

// function getSum (a) {
// return a.reduce((acc,rec) => {
//     return acc + rec
// }, 0)
// }
// console.log(getSum([11,23]));
// function getUmn (b) {
//     return b.reduce((acc,rec) => {
//         return acc * rec
//     }, 1)
// }
// console.log(getUmn([23,24]));
