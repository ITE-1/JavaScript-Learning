'use strict';

// const boxesQuerry = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// // for(let i = 0; i < boxesQuerry.length; i++) {
// //     boxesQuerry.style.backgroundColor = 'red';
// // }

// function changeColor(arr) {
//     arr[0].style.backgroundColor = 'red';
// }
// changeColor(boxesQuerry);

// boxesQuerry.forEach(item => {
//     item.style.backgroundColor = 'blue';
// })

// console.log(boxesQuerry);
// console.log(boxesGet);


// const x = [1, 123, 500, 115, 44, 88];

// function findMax(arr) {
//     let maxNumber = arr[0];
//     for( let i = 0; i < arr.length; i++) {
//          if(arr[i] > maxNumber) {
//             maxNumber = arr[i];
//          }
//     }
//     console.log(maxNumber);
// } 
// findMax(x);

// const user = {
//     name: 'Alex',
//     surname: 'Kutcevol',

// };

// console.log(Object.defineProperty(user, 'name', {writable: false}));
// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// console.log(Object.defineProperty(user, 'gender', {value: 'male'}, {writable: 'false'}));

// for (let key in user) console.log(key);

// const str = ['b', 'c', 'd'];
// Array.prototype.someMethod = function() {};

// for (const key in str) {
//     console.log(key);
// }
///////////////////////////////////////////////
// moneys[Symbol.iterator] = function() {
//     return {
//         current: this.ivan,
//         last: this.anna,
//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current}
//             } else {
//                 return {done: true}
//         }
//     }
// }
// }
// const moneys = {
//     ivan: 200,
//     petr: 500,
//     anna: 1000,
//     sayHello: function() {
//         console.log('hello');
//     }
// }

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ]
// const budget = [5000, 1000, 25000];

// const map = new Map();
// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// })
// map.set(shops[0], 5000);
// console.log(map);

// for (let shop of map.keys()) {
//     console.log(shop);
// }

// const goods = [];
// for(let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// const arr = ['alex', 'ann', 'oleg', 'alex'];

// function unique(arr) {
//     return Array.from(new Set(arr));
// }
// console.log(unique(arr));
// const set = new Set(arr);
// set.add('Ivan');
// set.add('oleg');
// console.log(set);
// /////команды
// set.delete(value);
// set.has(value);
// set.clear()

// for (let value of set) {
//     console.log(value);
// // }
// set.forEach((value, valueAgaing, set) => {
//     console.log(value, valueAgaing);
// });
// console.log(set.entries());
const bigint = 734573498857485734598n;
const sameBigInt = BigInt(734573498857485734598); 