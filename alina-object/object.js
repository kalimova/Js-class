// const dress = {
//     color: "red",
//     size: "xs",
//     price: "100$"
// }

// const laptop = {
//     color: "gray",
//     size: "15.6d",
//     memory: "16gb",
//     price: "450$",
//     state: "new",
//     made: null
// }
// laptop.price = "300$"
// Object.freeze(laptop)
// delete laptop.color

// console.log(Object.keys(laptop))
// console.log(Object.values(laptop));
// console.log(Object.entries(laptop));


// task1 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(Object.keys(obj).length);

// task 3 3. Создайте объект заработных плат obj = {Ширин: '1000',
//     Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// const obj = {
//     Ширин: '1000',
//     Айжан:'500', 
//     Атай: '200'
// }
// console.log(obj.Ширин,obj.Атай);

// // task 5 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.//     Добавьте к объекту ключ Медет со значением 1500.
// const people = {
//     Ширин: '1000', 
//     Айжан:'500', 
//     Атай: '200'
// }
// people.Медет = "1500"
// console.log(people);

// const dress = {
//     color: "red",
//     size: "xs",
//     price: "100$"
// }
// console.log(dress["color"]);

// task 9 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.//         Получите все ключи объекта.
// const obj = {
//     Ширин: '1000', 
//     Айжан:'500', 
//     Атай: {salary: '500'}
// }
// console.log(Object.keys(obj));

// task 13 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .//     Выведите все id в консоль через map.
// const getObj = (a) => {
//     return a.map((el) => {
//     return Object.keys(el)
//     })
// }
// console.log(getObj([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));


// task15  15. Вам дан объект product = { name: "headphones",
//     price: 100,
//     discount: 0
// }. Найдите стоимость объекта с ценой, и если она больше 100, снизьте ее на 10%. Если это не так, сделайте скидку на 7%. Обновите объект.

// const getObj = (product) => {
//         if(product.getObj > 100){
//          product.price = product.price * 0.90    
//         } else {
//          product.price = product.price * 0.93
//         }
//         return product
// }
// console.log(getObj({ name: "headphones",price: 100,discount: 0}));
 



