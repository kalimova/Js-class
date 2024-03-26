// Учитывая массив целых чисел, верните новый массив, в котором каждое значение удвоено.

// Например:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x){
//     return x.map((el) => {
//       return el + el
//     })
//     }

//   \\\\\\\\\\\\\\\\\
// Учитывая непустой массив целых чисел, верните результат умножения значений по порядку. Пример:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// function grow(x){
//     return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
//   }
// \\\\\\\\\\\\\\\\\\\
// function addLength(str) {
//     let newArr = str.split(" ")
//     return newArr.map((el) => {
//         el + " " + el.length
//     })
//     }
//     console.log(newArr);
// \\\\\\\\\\\\\\\\\\\\\\
//     Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?

// Пример (Ввод -> Выход)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленного к каждому элементу.

// Примечание. В строке будет хотя бы один элемент; слова всегда будут разделены пробелом.
//     function addLength(str) {
//         let newArr = str.split(" ")
//         return newArr.map((el) => {
//          return  el + " " + el.length
//         })
//         }
// \\\\\\\\\\\\\\\\\\\\\\\\\\
// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo" 
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.

// function areYouPlayingBanjo(name) {
//   if(name[0] === "R" || name[0] === "r"){
//     return name + " plays banjo" 
//   } else {
//     return name + " does not play banjo"
//   }
//  }
// \\\\\\\\\\\\\\\\\\\\\\\\
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
// function digitize(n) {
//   let str = n.toString()
//   let arr = str.split("")
//   return arr.map(Number).reverse()
// }

// строки
// 9. Вам даны переменные а , b. 
// Если переменная a равна или меньше 0, 
// а переменная b больше или равна 5,
//  то выведите сумму этих переменных, 
//  иначе выведите их разность (результат вычитания).

// const getNum = (a,b) => {
//   if (a <= 0 && b >=5){
//     return a + b
//   } else {
//     return a - b
//   }
// }
// console.log(getNum(1,4));

// 7. Вам дана переменная а. Если переменная 
// a больше одного и меньше 9-ти, то выведите 
// 'Верно', иначе выведите 'Неверно'.

// const getNum = (a,b) => {
//   if (a > 1 && a < 9){
//     return "true"
//   } else {
//     return "false"
//   }
// }
// console.log(getNum(1,4));

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. 
// Выведите в консоль соединенные строки
//  const getStr = (str1,str2) => {
//   return str1 + str2
//  }
//  console.log(getStr('Максимально','Ужасно'));


// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let arr = [3134, 4, -143, -245, -214]

// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.filter((el) => {
//   return el < 0
// })
// console.log(newArr);

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.filter((el) => {
//     if(arr.indexOf(el) === arr.lastIndexOf(el)){
//       return el
//     }
// })
// console.log(newArr);

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.reduce((acc,rec,idx,arr) => {
// if(arr.indexOf(rec) === arr.lastIndexOf(rec)){
//   acc = [...acc,rec]
// } return acc
// },[])
// console.log(newArr);

// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = []
// arr.forEach((el,idx,arr) => {
// if(arr.indexOf(el) === arr.lastIndexOf(el)){
// newArr = [...newArr,el]
// }
// })
// console.log(newArr);



// циклы\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// task 6 С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let sum = 0
// for(let i = 0; i <= 100; i ++){
//     sum = sum + i  
//             }
//         console.log("task 6:", sum);

// task 1 1. Выведите столбец чисел от 1 до 50.

// let result = []
// for  (let i = 0; i< 50; i++){
//     result = [...result, i + 1]
// }
// console.log(result)


// task 2 2. Создайте переменную с пустым массивом, 
// // заполните массив 10-ю элементами X с помощью цикла.
// let num = []
// for(let i=0;i<10;i++){
//   num = [...num,"x"]
// }
// console.log(num);

// task 3 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. 
// // С помощью цикла for выведите все эти элементы в консоль.

// let arr = [5, 3, 1, 2, 7]
// let newArr = []
// for(let i = 0; i < arr.length; i++){
// newArr = [...newArr,arr[i]]
// }
// console.log(newArr);

// task 4 4. Вам дан массив с элементами [5, 2, 1, 2].
// //     С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5,2,1,2]
// let newArr = 1
// for(let i = 0; i < arr.length; i++){
// newArr = arr[i] * newArr
// }
// console.log(newArr);

// task 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for(let i = 0; i <= 100; i++){
// if(i % 2 === 0){
//   console.log(i);
// } }

// task 6 С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0
// for(let i = 0; i <= 100; i++){
// sum += i
// }
// console.log(sum);

// / task  7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
// //     найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for(let i = 0; i < arr.length; i++){
// result = result + arr[i]
// }
// console.log(result);

// task 8 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// //     С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// //     которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5]
// let newArr = []
// for(let i = 0; i < arr.length; i++){
// if(arr[i] > 3 && arr[i] < 10){
//   newArr =[...newArr,arr[i]]
// }
// }
// console.log(newArr);

// task 9 Вам дан массив с числами.
//     Числа могут быть положительными и отрицательными.
//     Найдите сумму положительных элементов массива.
// let arr = [1,2,-3,-4,5,6,-7]
// let newArr = 0
// for(i = 0; i<arr.length; i++){
// if(arr[i] > 0){
//   newArr = newArr + arr[i]
// }
// }
// console.log(newArr);

// task 10 Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if
// //     проверьте есть ли в массиве элемент со значением,
// //     равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 3, 20,4]
// let newArr = []
// for(i = 0; i<arr.length; i++){
//   if(arr[i] === 4){
//     newArr = "yes"
//     break
//     } else {
//       newArr = "no"
//     }
// }
// console.log(newArr);

// task 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
//     Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// let newArr = []
// let num1 = arr.split("")
// for (let i = 0; i < arr.length; i++) {
//   if(num1[0] === "1" || num1[0] === "2" || num1[0] === "5"){
//     newArr = [...newArr, arr[i]]
//   }
// }
// console.log(newArr);


// task 12 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newArr = ""
// for (let i = 0; i < arr.length; i++) {
// newArr = newArr +"-"+ arr[i] 
// }
// console.log(newArr);

// массивы \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// task 1  Напишите функцию, которая принимает массив чисел, 
// // строк и булеан если тип булеан сделайте противоположное значение.
// // принимаем let arr = [1,2,3,4,”string”, “hello”, true, false] 
// // получаем let newArr = [1,2,3,4,”string”, “hello”, false, true]
// let arr = [1,2,3,4,"string", "hello", true, false] 
// let newArr = arr.map((el) => {
// if(typeof el === "boolean"){
//   return !el
// } else {
//   return el
// }
// })
// console.log(newArr);

// let arr = [1,2,3,4,"string", "hello", true, false] 
// let newArr = arr.reduce((acc,rec) => {
//   if(typeof rec === "boolean"){
//     return acc = [...acc,!rec]
//   } else {
//     return acc = [...acc,rec]
//   }
// },[])
// console.log(newArr);


// let arr = [1,2,3,4,"string", "hello", true, false] 
// let newArr = [] 
// arr.forEach((el) => {
//   if(typeof el === "boolean"){
// newArr = [...newArr, !el]
//   } else {
//     newArr = [...newArr, el]
//   }
// })
// console.log(newArr);

// Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.
//     Пример входных данных: "test"
//     Результат: "tteesstt"

// let str = "test"
// let arr = str.split("")
// let newArr = arr.map((el) => {
// return el + el
// }).join("")
// console.log(newArr);

// let str = "test"
// let arr = str.split("")
// let newArr = arr.reduce((acc,rec) => {
//   return acc = [...acc,rec + rec]
// },"").join("")
// console.log(newArr);

// let str = "test"
// let arr = str.split("")
// let newArr = ""
// arr.forEach((el) => {
// newArr = newArr + el + el
// })
// console.log(newArr);

// task 3
// // Напишите функцию, которая принимает строку и выводит индекс каждого символа
// let str = [1,2,3,4,5]
// let newArr = str.map((el,idx) => {
//   return idx
// })
// console.log(newArr);

// let str = [1,2,3,4,5]
// let newArr = str.reduce((acc,rec,idx) => {
// return acc = [...acc,idx]
// },[])
// console.log(newArr);

// let newArr = []
// str.forEach((el,idx) => {
//   newArr = [...newArr,idx]
// })
// console.log(newArr);

// Напишите функцию которая принимает массив с четными и нечетными числами
//и возвращает вместо четных “четное” вместо нечетных “нечетное”

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map((el) => {
//   if(el % 2 === 0){
//     return "Even"
//   } else {
//     return "Odd" 
//   }
// })
// console.log(newArr);

// const getNum = (num) => {
// return num.map((el) => {
//   if(el % 2 === 0){
//     return "Even"
//   } else {
//     return "Odd"
//   }
// })
// }
// console.log(getNum ([1,2,3,4,5,6]));

// let newArr = arr.reduce((acc,rec) => {
// if(rec % 2 === 0){
//   return acc = [...acc,"Even"]
// } else {
//   return acc = [...acc,"Odd"]
// }
// },[])
// console.log(newArr);

// let newArr = []
// arr.forEach((el) => {
// if(el % 2 === 0) {
//   newArr = [...newArr,"Even"]
// } else {
//   newArr = [...newArr,"Odd"]
// }
// })
// console.log(newArr);

// Напишите функцию которая принимает строку “головоломка” и заменяет все буквы “o” на  “a”
// let str = "головоломка"
// let newArr = str.replaceAll("о","а")
// console.log(newArr);

// Напишите функцию которая принимает строку "           
// hello world.        " и удаляет отступы по краям
// let str ="           hello world.        "
// let str1 = str.trim()
// console.log(str1);

// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// // если число четное “нечетное” если число нечетное. Используйте тернарное выражение

// let arr = [1,2,3,4,5,6,7,8] 
// let newArr = arr.map((el) => { return el % 2 === 0 ? "even" : "Odd"}
// )
// console.log(newArr);

// task-8
//  Вам дана переменная str = 'максимально ужасно'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// let str = 'Максимально Ужасно'
// let str = 'максимально ужасно'
// let newArr = str.split(" ")
// let arr = newArr.map((el,idx) => {
//   if(idx === 0){
//     return el[0].toUpperCase() + el.slice(1) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//   } else if (idx = 1){
//     return el[0].toUpperCase() + el.slice(1)
//   } else {
//     return el
//   }
// })
// console.log(arr);

//  Вам дана переменная str = 'Максимально Ужасно, переделывай'.
//     Выведите в консоль все слова этой строки, используя метод split. 
// Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// let str = 'Максимально Ужасно, переделывай'
// let arr = str.split(" ")
// console.log(arr);

// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив,
//     //     состоящий из квадратов этих чисел.

// let arr = [4, 54, 49]
// let newArr  = arr.map((el) => {
//   return el ** 2
// })
// console.log(newArr);

// let newArr = arr.reduce((acc,rec) => {
//   return acc = [...acc,rec **2]
// },[])
// console.log(newArr);

// let newArr = []
// arr.forEach((el) => {
//   newArr = [...newArr,el **2]
// })
// console.log(newArr);

// const getNum = (num) => {
// return num.map((el) => {
//   return el**2
// })
// }
// console.log(getNum([4, 54, 49]));


// task2 Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// // let arr = [3134, 4, -143, -245, -214]
// let arr = [3134, 4, -143, -245, -214]
// let newArr = arr.filter((el) => {
// return el < 0
// })
// console.log(newArr);

// let arr = [3134, 4, -143, -245, -214]              \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let newArr=arr.reduce((acc,rec)=>{
// if(rec<0){ 
//     acc=[...acc,rec]
// }
// return acc
// },[])
// console.log(newArr);

// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let arr = [3, 51, 30, 54, 60]
// let arr = [3, 51, 30, 54, 60]
// let newArr = arr.filter((el) => {
// return el % 2 === 0
// })
// console.log(newArr);

// let newArr = arr.reduce((acc,rec) => {
//   if(rec % 2 === 0){
//    acc = [...acc,rec]
//   } return acc
// },[])
// console.log(newArr);

// let arr1 = []
// arr.forEach((el) => {
// arr1 = [...arr1,el % 2 === 0]
// })
// console.log(arr1);

// / task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат'].
// //     Оставьте в нем только те строки, длина которых больше 5-ти символов.
// // let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Саша']

// let arr = ['Бегимай', 'Баяман', 'Калмамат', 'Саша']
// let newArr = arr.filter((el) => {
// return el.length > 5
// })
// console.log(newArr);

// let newArr = arr.reduce((acc,rec) => {
// if(rec.length > 5){
//   acc = [...acc,rec]
// } return acc
// },[])
// console.log(newArr);

// let newArr = []
// let arr1 = arr.forEach((el) => {
// if(el.length > 5){
//   newArr = [...newArr,el]
// }
// })
// console.log(newArr);

// task5  Вам дан массив [-13, 96, -41, -28, 40].
//     Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [-13, 96, -41, -28, 40]
// let arr = [-13, 96, -41, -28, 40]
// let newArr = arr.filter((el) => {
//   return el < 0
// })
// console.log(newArr.length);

// let newArr = arr.reduce((acc,rec) => {
// if(rec < 0) {
//   acc = [...acc,rec]
// } return acc
// },[])
// console.log(newArr.length);

// let newArr = []
// let arr1 = arr.forEach((el) => {
// if(el < 0) {
//   newArr = [...newArr, el <0]
// }
// })
// console.log(newArr.length);

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.
//     Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
// let arr = [3, 51, -30, -54, 60]
// let newArr = arr.filter((el) => {
//   return el > 0
// })
// let arr1 = newArr.map((el) => {
// if(el>30){
//   return Math.sqrt(el)
// } else {
//   return el
// }
// })
// console.log(arr1);

// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем только неповторяющиеся числа.
// let arr = [55, 44, 55, 44, 15, 49]
// let newArr = arr.filter((el,idx) => {
//   return arr.indexOf(el) === arr.lastIndexOf(el)        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// })
// console.log(newArr);

// let newArr = arr.reduce((acc,rec,idx) => {
// if(arr.indexOf(rec) === arr.lastIndexOf(rec)){
//   acc = [...acc,rec]
// } return acc
// },[])
// console.log(newArr);

// функции\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //  task 1 Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
// const change = (letter) => {
//   return letter.join().toLowerCase().replaceAll("а","я")
// }
//  console.log(change(['Аскар', 'Баяман', 'Калмамат']));

// task 2 Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке.
// const getStr = (str) => {
// return str.split("").sort().join("")
// }
// console.log(getStr("ayrt"));

 // task 3 Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
//  const getNum = (arr) => {
// return arr.filter((el) => {
//   return el % 2 === 0                         \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// })
//  }             
//  console.log(getNum([1,2,3,4,5,6]));

  // task 4  Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.
//   const getArr = (num) => {
// return num.filter((el) => {
//   return typeof el === "number"
// })
//   }
//   console.log(getArr([1,2,3,4,5,"trry", true]));

// task 5 Напишите функцию, которая принимает массив и возвращает:
//     Минимальный элемент
//     Максимальный элемент
//     Длину массива
//     Среднее арифметическое

// const getInfo = (letter) => {
//     let info = []
//     let min =  Math.min(7, 13, 3, 77, 100)
//     let max = Math.max(7, 13, 3, 77, 100)
//     let len = letter.join().split(",").length
//     let mean = letter.reduce((acc,rec) => {
//                 return acc + rec
//             }, 0) / letter.length
//             return info = [...info,min,max,len,mean]
// }
// console.log(getInfo([7, 13, 3, 77, 100]))

 // task 6 Напишите функцию, которая принимает массив чисел и возвращает первое четное число.
//  const getNumFirst = (num) => {
// return num.find((el) => {
//   return el % 2 === 0
// })
//  }
//  console.log(getNumFirst([1,2,3,4]));

// codewars\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const getNum = (num) => {
// return num.join("").split(" ").map((el) => {
//   return el +" "+el.length                                   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// })
// }
// console.log(getNum(["apple ban"]));
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const getNum = (str) => {
// return str.filter((el,idx) => {
//   return idx % 2 === 0
// })
// }
// console.log(getNum(["Keep", "Remove", "Keep", "Remove", "Keep"]));
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const getStr = (str) => {
// return str.split(" ")
// }
// console.log(getStr("I love arrays they are my favorite"));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const getSum = (a,b) => {
// let str = +a + +b
// return str.toString()
// }
// console.log(getSum("4","5"));             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const getNum = (num) => {
// return num.filter((el,idx) => {
//   return idx === num.indexOf(el)
// })
// }
// console.log(getNum([1, 2, 1, 1, 3, 2])); \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const fizzBuzz = (num) => {
// return  num.map((el) => {
//   if (el % 5===0 && el % 3===0){
//     return "FizzBuzz"
//   } else if(el % 3===0){
//     return "Fizz"
//   } else if (el % 5===0){
//     return "Buzz"
//   } else {
//     return el
//   }
// })
// }
// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,15,20,30]));


// object\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам дан обьект 
// const num = {
// a:  1,
// b: -2,
// c:  8,
// d: -3
// }
// удалите из обьекта все ключи с негативными значениями
// оставшиеся значения умножить на самих себя

// const num = {
// a:  1,
// b: -2,
// c:  8,
// d: -3
// }
// let minus = Object.keys(num)
// for(i=0,i<minus.length;i++){

// }


// напишите функцию которая принимает массив [1,2,3,4,5,6,7,8] и выводит “четное” 
// если число четное “нечетное” если число нечетное
// let arr = [1,2,3,4,5,6,7,8]
// let newArr = arr.map((el) => {
//   if(el % 2 === 0){
//     return "Even"
//   } else {
//     return "Odd"
//   }
// })
// console.log(newArr);

// const getNum = (num) => {
// return num.split(" ").map((el) => {
//   return `${el} ${el.length}`
// })
// }
// console.log(getNum("apple ban"))

// task 5 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
//     Добавьте к объекту ключ Медет со значением 1500.

// const obj = {
//   Ширин: '1000', 
// Айжан:'500', 
// Атай: '200'}

// obj.Медет = "1500"
// console.log(obj);

// task  7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
//     найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for(let i = 0; i < arr.length; i++){
// result = result + arr[i]
// }
// console.log(result);

