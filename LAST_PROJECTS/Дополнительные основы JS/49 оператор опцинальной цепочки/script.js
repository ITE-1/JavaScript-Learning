'use strict';

const box = document.querySelector('.box');
const myBox = document.querySelector('.myBox');

const newHeight = 100;
const newWidth = 400;
const newColor = 'green';

// function changeParams(elem, h, w, c) {
//     elem.style.height = `${h}px`;
//     elem.style.width = `${w}px`;
//     elem.style.backgroundColor = `${c}`;
// }

// changeParams(box, newHeight, newWidth, newColor);

const changeParamsBox = (arr, h, w, c) => {
    arr.style.height = `${h}px`;
    arr.style.width = `${w}px`;
    arr.style.backgroundColor = `${c}`;

}
changeParamsBox(myBox, newHeight, newWidth, newColor);

