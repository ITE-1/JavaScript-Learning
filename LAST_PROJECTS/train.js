// const arrowNumber = [1, 'K2', 5, 11, 4, 18];
// const newNumber = [];
// function giveMeNumber(call) {

//             // if(arrowNumber.includes(call)) {
//             //     newNumber.push(call);
//             // } else {
//             //     console.log('такого числа нет.');
//             // }
//     for( let i = 0; i < arrowNumber.length; i++) {

//         if (arrowNumber.includes(call)) {
//             console.log(call);
//             break;
//         }
        
//     }
// };

// giveMeNumber('K2');
const getTheTime = (data = new Date()) => {
    const days = data.getDay();
    const months = data.getDate();
    const years = data.getFullYear();
    return `${days}//${months}//${years}`;
}
getTheTime();
console.log(getTheTime());

console.log(data);
const myTime = new Date();
