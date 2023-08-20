'use strict';

const minutesBlock = document.querySelector('.js-minutes'),
    secondsBlock = document.querySelector('.js-seconds'),
    hundredSecondsBlock = document.querySelector('.js-hundred-seconds'),
    btnStart = document.querySelector('.js-btn-start'),
    btnStop = document.querySelector('.js-btn-stop'),
    btnReset = document.querySelector('.js-btn-reset');

    let interval;
    
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;
  

    const startTimer = () => {
       milliseconds++;

        hundredSecondsBlock.innerHTML = milliseconds;

        if(milliseconds > 99) {
            seconds++;
          secondsBlock.innerHTML = '0' + seconds;

            milliseconds = 0; 
        }
        if(seconds > 9) {
            secondsBlock.innerHTML = seconds;
        }
        if(seconds > 59) {
            minutes++;
            minutesBlock.innerHTML = '0' + minutes;

            seconds = 0;
            secondsBlock.innerHTML = '0' + seconds;
        }
        if(minutes > 9) {
            minutesBlock.innerHTML = minutes;
        }
    }

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})
btnStop.addEventListener('click', () => {
    clearInterval(interval);
  
    
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    
    secondsBlock.innerHTML = '0' + 0,
    minutesBlock.innerHTML = '0' + 0,
    hundredSecondsBlock.innerHTML ='0' + 0;
})
