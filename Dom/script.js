// document
// object
// model
// console.dir(document.body.children[0].innerText);  
// в качестве объекта с помощью див

// 1)	getElementBy
// console.dir(document.body.children[0].style.color="red");
// console.dir(document.body.children[0].style.backgroundColor="red");
// console.log(document.getElementsByTagName("p")[0].style.color="red");
// console.log(document.getElementsByClassName("red")[0].style.backgroundColor = "red");
// console.log(document.getElementById("blue").style.color = "blue");

// 2)	querySelector 
// console.log(document.querySelector("p"));
// console.log(document.querySelectorAll("p"));

// let arr = Array.from(document.querySelectorAll("p"))
// arr.forEach((el,idx) => {
//     if(idx % 2 === 0){
//     el.style.color="red"
//     } 
// })

// Напишите функцию, которая вернет текст внутри первого тэга - a.
// console.dir(document.querySelector("a").innerText)

// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
// console.log(document.querySelector("a").remove()); - удаляет
// let arr = Array.from(document.querySelectorAll("a"))
// arr.forEach((el) => {
//   console.log(el.innerText); 
// })
// ------------------------------------------------------------
// Вы пишете робота, который проверяет, что страница отображается корректно, // по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса.
//  И у этого же элемента должен быть класс с текстовым номером индекса.
// const fixRobot=(arr)=>{
//     arr.forEach((el,idx) => {
//     if(el.id!==el.innerText.trim()){
//         el.innerText=el.id
//     }
//     });
// }
// fixRobot(Array.from(document.querySelectorAll("a")))
// ------------------------------------------------------------

1 // Вы пишете робота, который проверяет, что страница отображается корректно, // по правилам внутри элемента с классом nav__link должен быть текст порядкового номера индекса.
// И у этого же элемента должен быть класс с текстовым номером индекса.
2 // Вы знаете, что в документе есть сломанные элементы
// с классом nav__link. Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()

// const deleteElement = (arr) => {
//   arr.forEach((el) => {
//     el.id
//     console.log(el.id);
//     console.log(el.innerText.trim());
//     if(el.id!== el.innerText.trim()){
//         el.remove()
//     }
//   })
// }
// deleteElement(Array.from(document.querySelectorAll("a")))
// ------------------------------------------------------------
3 // Напишите функцию, которая вернет массив со значениями атрибута class
// внутри тэгов элементов с классом nav__link__item

// const text = document.querySelector(".text")

// const nav = document.querySelector("nav")
// nav.appendChild(text)
// const nav = document.querySelector("nav")
// let desc = document.createElement("p")
// desc.innerText = "43353366"
// navigator.appendChild(desc)
// ------------------------------------------------------------
// Напишите функцию, которая добавляет div элемент внутрь // элемента с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// const createNewElement = () => {
// let element = document.createElement("div")
// element.id = "#just-text"
// element.innerText = "hello"
// let nav = document.querySelector("nav")
// nav.appendChild(element)
// }
// createNewElement()

// const createNewElement=(arr)=>{
//     let element=document.createElement("div")
//     element.id="#just__text"
//     element.innerText="hello"
//     arr.appendChild(element)
//     }
//     createNewElement(document.querySelector(".nav"))
// ------------------------------------------------------------
// Напишите функцию, которая добавляет ul элемент внутрь // элемента с селектором #append-div у ul элемента должен быть айди 
// #list Внутри ul элемента находится 10 тегов li с текстом от Child 1,...., Child 10

// const addUl=()=>{
//     let nav = document.querySelector("nav")
//     let ul = document.createElement("ul")
//     nav.appendChild(ul)
//     ul.id="#list"
//     for(let i=1; i<=10; i++){
//         let li = document.createElement("li")
//         console.log(li);
//         li.innerText="child" +i
//         ul.appendChild(li)
//     }
// }
// addUl()
// ------------------------------------------------------------
// создать одну карточку
// const product = {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": { "rate": 3.9, "count": 120 }
// }

// const createNewElement = () => {
// const box = document.querySelector(".box")
// const divImg = document.createElement("div")
// divImg.className = "box__img"
// box.appendChild(divImg)
// let image = document.createElement("img")
// divImg.appendChild(image)
// image.src = product.image
// image.alt = "bag"
// let boxTitle = document.createElement("p")
// boxTitle.className = "title"
// boxTitle.innerText = product.title
// box.appendChild(boxTitle)
// let boxDesc = document.createElement("p")
// boxDesc.className = "desc"
// box.appendChild(boxDesc)
// boxDesc.innerText = product.description
// let boxPrice = document.createElement("p")
// boxPrice.className = "price"
// box.appendChild(boxPrice)
// boxPrice.innerText = product.price
// console.log(box);
// }
// createNewElement()
// ------------------------------------------------------------

// ------------------------------------------------------------
// найти 20 айди
// let arr = [{"id":1,"title":"Fjallraven — рюкзак складной № 1, вмещает 15 ноутбуков",},{"id":2,"title":"Мужские повседневные футболки приталенного кроя премиум-класса ","price":22.3,},{"id":3,"title":"Мужская хлопковая куртка","price":55.99},{"id":4,"title":"Мужской повседневный приталенный крой",},{"id":5,"title":"Женский браслет-цепочка John Hardy Legends Naga из золота и серебра Dragon Station ",},{"id":6,"title":"Solid Gold Petite Micropave","price":168,"description":"Удовлетворение гарантировано. Возврат или обмен любого заказа в течение 30 дней. Разработано и продано Центром Хафиз в США. Состояния. Удовлетворение гарантировано. Возврат или обмен любого заказа в течение 30 дней.","category":"jewellery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating": {"rate":3.9,"count":70}},{"id":7,"title":"Принцесса из белого золота","price":9.99,"description":"Классический бриллиант для свадебной помолвки Кольцо обещания для нее. Подарки, которые еще больше испортят вашу любовь на помолвку, свадьбу, юбилей, День святого Валентина...","category":"jewellery","image":"https://fakestoreapi.com/img/71YAIFU48IL. _AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},{"id":8,"title":"Двойная двойная нержавеющая сталь с покрытием из розового золота в виде совы","price": 10.99,"description":"Двойные расклешенные серьги-туннель с покрытием из розового золота. Изготовлены из нержавеющей стали 316L","category":"jewellery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_. jpg","rating":{"rate":1.9,"count":100}},{"id":9,"title":"Портативный внешний жесткий диск WD Elements емкостью 2 ТБ — USB 3.0 ","price": 64,},{"id":10,"title":"Внутренний твердотельный накопитель SanDisk SSD PLUS 1 ТБ — SATA III 6 Гбит/с","price":109,},{"id":11,"title":"Silicon Power SSD 256 ГБ 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,},{"id":13,"title":"Acer SB220Q bi 21,5 дюйма Full HD ( 1920 x 1080) IPS Ультратонкий","price":599,},{"id":14,"title":"49-дюймовый изогнутый игровой монитор Samsung CHG90, 144 Гц (LC49HG90DMNXZA) — сверхширокий экран QLED ","price":999.99,},{"id":15,},{"id":16,"title":"Женские байкерские мотобайкеры из искусственной кожи со съемным капюшоном Lock and Love Куртка","price":29.95,},{"id":18,"title":"Женское однотонное платье MBJ с короткими рукавами и вырезом лодочкой, V ","price":9.85,"description":"95% РАЙОН 5 % СПАНДЕКС, Сделано в США или импортировано, Не отбеливать, Легкая и эластичная ткань для комфорта, Ребристая резинка на рукавах и вырезе / Двойная строчка по нижнему краю","category":"женская одежда","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg","rating":{"rate":4.7,"count":130}},{"id":19,"title":"Женская женская футболка Opna с коротким рукавом Влажность","price":7.95,},{"id":20,"title":"Женская футболка DANVOUY, повседневная хлопковая короткая рубашка" ,}]
//  arr.forEach((el) => {
//   let textId = document.createElement("p")
//   textId.innerText = el.id
//   document.body.appendChild(textId)
// })
// ------------------------------------------------------------

// это 20 карточек
// const createBox = () => {
//     const cards = document.querySelector(".cards")
//    for (let i = 0; i < arr.length; i ++){
//    const box = document.createElement("div")
//    box.className = "box"
//    cards.appendChild(box)
//    const divImg = document.createElement("div")
//    divImg.className = "box__img"
//    box.appendChild(divImg) 
//    let image = document.createElement("img")
//    divImg.appendChild(image)
//    image.src = arr[i].image
//    image.alt = arr[i].category
//    let boxTitle = document.createElement("p")
//    boxTitle.className = "title"
//    box.appendChild(boxTitle)
//    boxTitle.innerText = arr[i].title
//    let boxDesc = document.createElement("p")
//    boxDesc.className = "desc"
//    box.appendChild(boxDesc)
//    boxDesc.innerText = arr[i].description
//    let boxPrice = document.createElement("p")
//    boxPrice.className = "price"
//    box.appendChild(boxPrice)
//    boxPrice.innerText = arr[i].price
//    }
//     }
//     createBox()

