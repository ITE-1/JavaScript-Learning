const btns = document.querySelectorAll('button'),
    wraper = document.querySelector('.btn-block');
// console.log(btns);

// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[1].classList.toggle('red'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('blue')) {
    //     btns[1].classList.add('blue')
    // } else {
    //     btns[1].classList.remove('blue');
    // }
    btns[1].classList.toggle('red')
})
wraper.addEventListener('click', (event) => {
if (event.target && event.target.classList.contains('blue')) {
        console.log('hello');
    }
})
