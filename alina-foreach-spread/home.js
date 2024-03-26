// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел. Используйте foreach

// let arr = [4, 54, 49]
// arr.forEach((el) => {
//     console.log(Math.sqrt(el));
//     })    

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Выведите первое отрицательное число

// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.find((el) => {
//     return el < 0
// })
// console.log(newArr);


// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа. Используйте foreach
// let arr = [3, 51, 30, 54, 60]
// let even = []
// arr.forEach((el) => {
//     if(el % 2 == 0){
//         even = [...even, el]
//     }
// })
// console.log(even);

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].

//     Оставьте в нем  строку, длина которой больше 5-ти символов.

// let arr = ['Бегимай', 'Баяман', 'Калмамат','Саша']
// let newArr = []
// arr.forEach((el,idx,arr) => {
//     if(el.length > 5) {
//        newArr = [...newArr, el]  
//     }
// })
// console.log(newArr);   фильтром нужно

// task5  Вам дан массив [-13, 96, -41, -28, 40].

//     Посчитайте количество отрицательных чисел в этом массиве. Используйте foreach
// let arr = [-13, 96, -41, -28, 40]
// let newArr = []
// arr.forEach((el) => {
//     if(el < 0) {
//         newArr = [...newArr, el]
//     }
// })
//  console.log(newArr.length);

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.

//     Затем возведите в третью степень Используйте foreach

// let arr = [3, 51, -30, -54, 60]
// newArr = []
// arr.forEach((el) => {
//   if(el > 0) {
//     newArr = [...newArr, el]
//   }
// })
// console.log(newArr)
// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем первое неповторяющееся число.

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.find((el) => {
//     return arr.indexOf(el) === arr.lastIndexOf(el)
// })
// console.log(newArr);

// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки. Используйте foreach
// let arr = ['Бегимай', 'Баяман', 'Калмамат']
// let newArr = []
// arr.forEach((el,idx,arr) => {
//  newArr = [...newArr, el.length]
// })
// console.log(newArr);


// вам дана строка и массив

// let str = "hello"
// let arr = ["world", "test", "hi"]
// arr.forEach((el) => {
//     str = str + " " + el
// })
// console.log(str);

// вам дан массив, найти среднее арифметическое
// let arr = [1,2,3,4,5,6]
// newArr = 0
// arr.forEach((el) => {
//     newArr = newArr + el / arr.length
//     })
// console.log(newArr);   

// вам дан массив, найти произведение чисел

// let arr = [1,2,3,4]
// newArr = 1
// arr.forEach((el) => {
//     newArr = newArr * el
//     })
// console.log(newArr); 

// reduce
// let arr = [1,3,4,5]
// let newArr = arr.reduce((acc, rec) => {
//     return acc = [...acc, rec + 1];
// }, [])
// console.log(newArr);

// вам дан массив, найти результат логического сложения
// let arr = [true,false,false,true]
// let newArr = arr.reduce((acc, rec) => {
//     return acc || rec
// }, true)
// console.log(newArr);

// let arr = [false,false,false,false]
// let newArr = arr.reduce((acc, rec) => {
//     return acc && rec
// }, false)
// console.log(newArr);


