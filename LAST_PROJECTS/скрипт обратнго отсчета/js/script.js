const year = document.querySelector('#year'),
    days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear(),
    nextYear = new Date(`January 01 ${currentYear +1} 00:00:00`);

function updateCounter() {
const  currentTime = new Date();
const  diff = nextYear - currentTime;
const  daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const  hoursLeft = Math.floor(diff / 100 / 60 / 60) % 24;
const  minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const  secondsLeft = Math.floor(diff / 1000) % 60;

year.innerText = currentYear + 1;
days.innerText = daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

}
updateCounter();
setInterval(updateCounter, 1000);