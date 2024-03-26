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

// task1  Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел. Используйте foreach
// function getSquare (a) {
// return a.reduce((acc,rec) => {
//     return acc = [...acc,Math.sqrt(rec)]
// }, [])
// }
// console.log(getSquare([4,54,49]));

// task2 Вам дан массив [3134, 4, -143, -245, -214]. Выведите первое отрицательное число

// function getFirst (a) {
// return a.find((acc,rec) => {
//     if(acc < 0)
//     return acc
// }, [])
// }
// console.log(getFirst([3134, 4, -143, -245, -214]));

// task3 Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа. Используйте foreach
// function getEven (a) {
//     return a.reduce((acc,rec) => {
//         if(rec % 2 === 0){
//          return acc = [...acc,rec]
//         } else {
//             return acc
//         }

//     }, [])
//     }
//     console.log(getEven([3, 51, 30, 54, 60]));

// task4  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат','Саша'].

//     Оставьте в нем  строку, длина которой больше 5-ти символов.

// function getStr (a) {
//     return a.filter((el) => {
//          return el.length > 5
//     }, [])
// }
//     console.log(getStr(['Бегимай', 'Баяман', 'Калмамат','Саша']));

// task5  Вам дан массив [-13, 96, -41, -28, 40].

//     Посчитайте количество отрицательных чисел в этом массиве. Используйте
//     function getMinus (a) {
//     return a.reduce((acc,rec) => {
//         if(rec < 0){
//          return acc = [...acc, rec]
//         } else {
//             return acc
//         }
//     }, [])
//     }
//     console.log(getMinus([-13, 96, -41, -28, 40]).length);

// task6  Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа.

//     Затем возведите в третью степень Используйте foreach
// function getPosit (a) {
//     return a.reduce((acc,rec) => {
//         if(rec > 0){
//          return acc = [...acc,rec ** 3]
//         } else {
//             return acc
//         }
//     }, [])
//     }
//     console.log(getPosit([3, 51, -30, -54, 60]));

// task7 Вам дан массив [55, 44, 55, 44, 15, 49]. Оставьте в нем первое неповторяющееся число.

// function getRepeat (a) {
//         return a.find((el) => {
//             if(el > 0){
//              return a.indexOf(el) === a.lastIndexOf(el)
//             }
//         }, [])
//         }
//         console.log(getRepeat([55, 44, 55, 44, 15, 49]));

// task8 Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки. Используйте foreach

// function getString (a) {
//     return a.reduce((acc,rec) => {
//         return acc = [...acc,rec.length]
//     }, [])
// }
// console.log(getString(['Бегимай', 'Баяман', 'Калмамат']));

// 12.01.24
// function sayHello (name) {
//     return  `hello ${name}`
// }
// console.log(sayHello("Sasha"));

// ["hello", "hi", "bye"]
// function getStr(a) {
//   let result = a.reduce((acc, rec) => {
//     if (rec.length % 2 === 0) {
//       return acc + rec;
//     } else {
//       return acc;
//     }
//   }, "");
//   return result.split("").map((el, idx) => {
//     if(idx % 2 === 1){
//         return el.toUpperCase()
//     } else {
//         return el
//     }
//   }).join("")
// }
// console.log(getStr(["hello", "hi", "bye", "good"]));


// function multNum (a,b) {
//     return a * b
//     }
//  console.log(multNum(2,3));   

// let multNum = function (a,b) {
// return a * b
// }
// console.log(multNum(2,3));

// вам даны две строки

// function getString (a,b) {
//    return  a.split("").sort().join("") === b.split("").sort().join("")
// }
// console.log(getString( "toffee","foefet")); 
