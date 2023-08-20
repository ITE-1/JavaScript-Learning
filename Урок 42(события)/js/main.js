// const btn = document.querySelector('button'),
//         overlay = document.querySelector('.overlay');

// // btn.onclick = function() {
// //     alert('click');
// // }
// // btn.addEventListener('mouseenter', (e) => {
// //     console.log(e.target);
// //     e.target.remove(); 
// // })
// ///////////////
// // let i = 0;
// const deletedElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
//     // i++;
//     // if (i == 1) {
//     //     btn.removeEventListener('click', deletedElement);
//     // }
// }
// btn.addEventListener('click', deletedElement);
// overlay.addEventListener('click', deletedElement);

// const link = document.querySelector('a');
// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// })
// const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//     btn.addEventListener('click',() => {
//         console.log('click');
//     }) 
    
// })
const link = document.querySelector('.link');
link.addEventListener('click', () => {
    link.target = '_blank';
})
