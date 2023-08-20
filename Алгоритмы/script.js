// 'use strict';
// const box = document.querySelector('.box');

// // const width = box.clientWidth;
// // const height = box.clientHeight;

// // console.log(width, height);
// const btn = document.querySelector('button');
// console.log(btn);
// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
    
// })

// console.log(box.getBoundingClientRect().top);
// const style = window.getComputedStyle(box);
// console.log(style);
// //стрелка на поднятие страницы вверх
// document.documentElement.scrollTop = 0;
// window.scrollBy(0, 400) //скролит по оси y вниз на 400px 
// window.scrollTo(0, 400) //вверх

// const arrow = document.querySelector('.arrow-bottom');
// arrow.addEventListener('click', () => {
//     window.scrollTo(0, 400);
   
// })

// let i = 1;
// const numerableId = setInterval(() => {
//     console.log('сообщение' + i)
//     i = i + 1
// }, 2000);

// setTimeout(() => clearInterval(numerableId), 12000);
// const myArray = [true, null];
// myArray.unshift(4, 5);
// console.log(myArray.length);
// myArray.push(abc[10]);
// console.log(myArray);

// const array = [1, 4, 5, 6, 8, 1, 3, 5, 10];
// let count = 0;
// function findNumber (arr, item) {
//     for( let i = 0; i < arr.length; i++) {
//         count += 1
//         if(arr[i] === item) {
//             return i;
//         }
//     } return null
// }
// console.log(findNumber(array, 0));
// console.log('count =', count);
// const array = [1, 4, 5, 6, 8, 1, 3, 5, 10];
// array.sort(function(a, b) {
//     return a - b;
// });
// console.log(array);
/**
 * 1.Для того что бы найти центральный элемент, нам нужно позиция начального елемента, и последнего элемента
 *  начальная позиция start = 0, последняя опр по длине массива с помощью метода .length
 * 2. Используем цикл While где будем выполнять цикл пока не будет найден елемент, либо стартовая и конечная позиция не поровнялись
 *  внутри цикла высчитываем позицию среднего элемента 
 * 3. Записываем условие проверяющие что если array[middle] === item то переключаем флаг found в true и п
 * 4. далее создаем условие при котором мы проверяем, что если элемент меньше чем тот элемент который находится в серединеб
 то меняем позицию end = middle - 1
 */
//  const newArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const newArray2 = [0, 2, 3, 1, 5, 6, 'девушка', 8, 9, 7, 10, 12, 15];
//  newArray2.sort(function(a, b) {
//      return a - b;
//  });
// let count = 0;
// function binarySearch (array, item) {
//     let start = 0;
//     let end = array.length;
//     let middle;
//     let found = false;
//     let position = -1;
//     while(found === false && start <= end) {
//             count += 1;
//             middle = Math.floor((start + end)/2);
//         if (array[middle] === item) {
//             found = true;
//             position = middle;
//             return position;
//         } 
//         if (item < array[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }  
//     } 
//     return position;
// }
// console.log(newArray2);
// console.log(binarySearch(newArray2, 'девушка'));
// console.log('count =', count);
//алгоритм сортировки выбором
/* */
const array4 = [0, 5, 2, 3, 5, 7, 9, 15, 17, 35, 10, 19, -2, -5, 6];
let count4 = 0;
function sortArray(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] < array[indexMin]) {
                indexMin = j;
            }
            count4 += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array
}
