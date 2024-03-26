// task 1 1. Выведите столбец чисел от 1 до 50.
// for(let i = 1; i < 50; i ++){
// console.log(i);
// }
// task 2 2. Создайте переменную с пустым массивом,
// заполните массив 10-ю элементами X с помощью цикла.
// let arr = []
// for(let i = 0; i < 10; i ++){
//   arr = arr + "X"
// }   
//  console.log([arr]);
// task 3 3. Вам дан массив с элементами [5, 3, 1, 2, 7].
// С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for(let i = 0; i < 1; i ++){
//     console.log(arr);
// }
// task 4 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2]
// let newArr = 1
// for(let i = 0; i < 4; i ++){
//        newArr = arr[i]*newArr
//     }
//     console.log(newArr);
// task 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for(let i = 0; i < 100; i ++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     }
// task 6 С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0
// for(let i = 0; i <= 100; i ++){
//     sum += i  
//             }
//         console.log("task 6:", sum);
// task 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for
// найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for(let i = 0; i < 5; i ++){
//         result = result + arr[i]
//                 }
//             console.log(result);
// task 8 8. Вам дан массив [3, 4, 6, 12, 3, 5].
// С помощью цикла for и оператора if выведите на экран столбец тех элементов массива,
// которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5]
// let newArr = []
// for(let i = 0; i < arr.length; i ++){
//         if (arr[i] > 3 && arr[i] < 10) {
//             newArr = [...newArr, arr[i]]
//         }
//             }
//             console.log(newArr);
// task 9 Вам дан массив с числами.
// Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// function getOfPozitive (arr) {
//     let newArr = []
//      for(let i = 0; i < arr.length; i ++){
//         if (arr[i] > 0) {
//         newArr = [...newArr, arr[i]]
//         }
//     } 
//     let sum = 0
//     for(let i = 0; i < newArr.length; i ++) {
//       sum += newArr[i]
//     }
//     return sum
// }
// console.log(getOfPozitive([3, 4, -6, -3, 5])); 

// task 10 Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if
// проверьте есть ли в массиве элемент со значением,
// равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 3, 20, 4]
// for(let i = 0; i < arr.length; i ++){
//         if (arr[i] == 4) {
//         console.log("есть");
//             break
//         } 
//     }

// const getFour = (arr) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 4){
//     result = [...result,4]
//     }
// }
//     if (result.length === 0) {
//         return "no"
//     } else {
//         return "yes"
//     }
// }
// console.log(getFour[5, 1, 3, 7, 6, 15, 3, 20,4]);

// let i = 0
// while (i < 10) {
//     i++
//     if(i === 3){
//         continue
//     }
//     console.log(i);
// }

// task 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].//     Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr= [10, 20, 30, 40, 135, 2000]
// let newArr=[]
// let i = 0
// while(i < arr.length ){
//     let str = arr[i].toString()
//     if(str[0] === "1" || str[0] === "2" || str[0]=== "5" ) {
//         newArr=[...newArr,str]
//             }
//     i++ 
//  }
//  console.log(newArr);


// const getFibbonachi = (num) => {
//     let arr = []
//     for (let i = 10; i >= num; i--) {
//         arr = [...arr,i]
//     }
//     return arr
// }
// console.log(getFibbonachi(3));

// let i = 0
// do{
//     console.log(i);
//     i++
// }   
// while (i <= 10)

// task 13 Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления// не станет меньше 50. Какое число получится?
//     Посчитайте количество итераций,
//     необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.







//////////////////////////////////////////////////////////////////////---DZ---
// task 12 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку "-1-2-3-4-5-6-7-8-9-"
// const getMinus = (arr)=>{
//     let i = 0
//     let str =""
//     while (i < arr.length){
//        str = str + "-" + arr[i]
//        i++
//     }
//     return str+"-"
// }
// console.log(getMinus[1, 2, 3, 4, 5, 6, 7, 8, 9]);
// const getMinus =(arr)=>{
//     let i=0
//     let str=""
//     while(i<arr.length){
//         str=str+"-"+arr[i]
//         i++
//     }
//     return str+"-" 
// }
// console.log(getMinus([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// task 13 Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций,необходимых для этого (итерация - это проход цикла),и запишите его в переменную num.
// const divideby2=(n)=>{
//     let num = n
//     let result = 0
//     for(let i = 0; i < 1000; i++){
//     num = num/2 
//     if(num<50){
//         break
//     }
//     result++
//     }
//     return [num,result]
// }
// console.log(divideby2(1000));
// task 14 Вам дан массив с числами [1, 2, 3, 7, 6, 9].Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9]
//     let newArr = 0
// for(let i = 0; i<arr.length; i++){
//     newArr = (newArr+ arr[i])/2
//     }
//     console. log(newArr)
// task 15 Вам дан массив с числами [1, 2, 3, 4, 5].С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1,5,6,10,2,6,9,0];
//  let  newArr = [];
// for(let i = 0; i < arr.length; i++) {
//   newArr = arr[i]*arr[i];
//   console.log(newArr);
// }

 
// задача с фибоначчи из код варс
// const getNum = (num) => {
//   let arr = []  
// for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 === 0){
//         arr = [...arr,"fizzBuzz"]
//     } else if (i % 3 === 0){
//     arr = [...arr,"fizz"]
//     } else if (i % 5 === 0){
//         arr = [...arr,"buzz"]
//     }  else {
//      arr = [...arr,i]   
//     }
// }
// return arr
// }
// console.log(getNum(30));

// task 17 Создайте переменную с пустым массивом,//     заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// const getNum = () =>{
//     let arr = []
//     for(let i = 0;i<10;i++){
//         arr=[...arr,Math.round(Math.random()*10)]
//     }
//     return arr
// }
// console.log(getNum());

