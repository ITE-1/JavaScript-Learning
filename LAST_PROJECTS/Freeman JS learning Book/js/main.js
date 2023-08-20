// setTimeout(wakeUpUser, 5000);
//  function wakeUpUser() {
//  alert("Are you going to stare at this boring page forever?");
//  }
///////////////////////////////////
// var scoops = 5;
// while (scoops > 0) {
//  document.write("Another scoop!<br>");
//  scoops = scoops - 1;
// }
// document.write("Life without ice cream isn't the same");
///////////////////////////////////
// const age = +prompt('');
// const namePerson = 'Owen';
//   if ( age > 14) {
//         alert('Sorry this page is for kids only!');
//     } else {
//         alert('Welcome' + namePerson + '!');
//     }
//////////////////////////////////46страница
// var joke = "JavaScript walked into a bar....";
// var toldJoke = true;
// var $punchline =
// "Better watch out for those semi-colons."
// var result
// if (toldJoke == true) {
//     alert($punchline);
// } else {
//     alert(joke);
// }
//////////////
// var joesFavoriteMovie = 'Forbidden Planet';
// var movieTicket$ = 5;
// if (movieTicket$ >= 9) {
// alert("Too much!");
// } else {
// alert("We're going to see " + joesFavoriteMovie); }
/////////////50
// var word = "bottles";
// var count = 99;
// while (count > 0) {
// console.log(count + " " + word + " of beer on the wall");
// console.log(count + " " + word + " of beer,");
// console.log("Take one down, pass it around,");
// count = count - 1;
// if (count > 0) {
// console.log(count + " " + word + " of beer on the wall.");
// } else {
// console.log("No more " + word + " of beer on the wall.");
// }
// }
/////////////battleship
// const location1 = 3,
//         location2 = 4,
//         location3 = 5;
// let guess;
// let hits = 0;
// let guesses = 0;

// let isSunk = false;
// while (isSunk == false) {
//     guess = +prompt('Ready, aim, fire! (enter a number 0-6):', '');
//     if (guess < 0 || guess > 6) {
//         alert('Please enter a valid cell number');
//     } else {
//         guesses = guesses + 1;
//         if ( guess == location1 || guess == location2 || guess == location3) {
//             alert('Hit!');
//             hits = hits + 1;
//             if (hits == 3) {
//                 isSunk = true;
//                 alert('You sank my battleship');
//             } 
//         } else {
//             alert('miss!');
//         } 
//     }
            
// }   
// const stats = 'You took ' + guesses + 'guesses to sink the battleship ' + 'which means your shootion accuracy was ' + (3/guesses);
// alert(stats);
/////////////////////
// const location1 = 2,
//     location2 = 3,
//     location3 = 4;
    
// let guesses = 0;
// let hits = 0;
// let guess;

// let isSunk = false;
// while (isSunk == false) {
//     guess = +prompt('введите цифры от 0 до 6', '');
//     if( guess < 0 || guess > 6) {
//         alert('please enter a valid number');
//     } else {
//         guesses++;
//         if(guess == location1 || guess == location2 || guess == location3) {
//             hits++;
//             alert('есть попадание');

//             if(hits == 3) {
//                 isSunk = true;
//                 alert('корабль потоплен');
//             } 
//         } else {
//             alert('miss!');
//         }
//     }
// }

// const location1 = Math.floor(Math.random() * 5);
// const location2 = location1 + 1;
// const location3 = location2 + 1;

// console.log(location1, location2, location3);
////////////////////////

// const dogsDetect = (name, weight) => {
//     if(weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof");
//     } return;
// }
// dogsDetect("max", 15)
///////////////////////////
// console.log('сообщение для проверки должно появиится сразу')
// const helloWorld = () => console.log('Привет мир');
// setTimeout(helloWorld, 5000);
 
// setTimeout(() => console.log('привет мир!'), 5000);
// const object = {
//     name: "Oleksii",
//     surname: "Kutsevol",
//     favoriteNumber: 3
// };
// const objectInfo = `My name is ${object.name} ${object.surname} and my favorite number is ${object.favoriteNumber}`;
// console.log(objectInfo);
// const arr = 'iCanSeeDeadPeople';
// console.log(arr.length);
// const str = 'любая строка';
// console.log(str instanceof String);
// console.log(typeof(str));
// const anotherStr = str.toUpperCase();
// console.log(anotherStr);
// const object = 'good moorning';
// const newObject = object.slice(0, 5) + 'Evening';
// console.log(newObject);
// const newObject2 = object.replace('morning', 'evening');
// console.log(newObject2);
// const arr = ['text', 5, false];
// console.log(arr[0]);
// console.log(arr.length);

// console.log(array);
// array[2] = 'text';
// console.log(array);
// const array = [false, 5, 'string'];
// array.forEach(item => console.log(item));
// const array = ['text', true, 5];
// array.push(5, 'type');
// console.log(array.length);
// console.log(array);
// const myTime = new Date();
// console.log(myTime);
// let myNum1 = 10;
// let myNum2 = '10';

// if(myNum1 <= +myNum2) {console.log('true');}
// let a = 10;
// let b = 3;
// console.log(a % b);
// let a = 10;
// console.log(++a);
// console.log(a *= 2);
// console.log(a -= 5);
// console.log(a /= 2);


// const divisibleBy = (numbers, divisor) => numbers.filter(num => num % divisor);
// divisibleBy([1, 2, 3, 4, 5, 6], 2);
// function learnJavaScript() {
//     const divisibleBy = (numbers, divisor) => {
//       return  numbers.filter(num => num % divisor === 0);
//     }
//     return divisibleBy([1, 2, 3, 4, 5, 6], 2);
// }
// console.log(learnJavaScript());

// function learnJavaScript2() {
//     const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//       return dadYearsOld - (sonYearsOld * 2);
//     }
//     return twiceAsOld(36, 7)
//   }
//   console.log(learnJavaScript2());
//   function learnJavaScript3() {
//     const oddCount = n => {
//         let count = 0;
//        for( let i = 2; i < n; i += 2) {
//         count++;
//     } return count;
//     }
//     return oddCount(15);
//   }
////////////////////
// const myNumber = (n) => (n%2 === 0) ? (n-1) / 2 : n/2;
// console.log(Math.floor(myNumber(15)));
//   console.log(learnJavaScript3());
//   //////////
//   function learnJavaScript4() {
//     const stringToNumber = str => {
//       return +str;
//     }
//     return stringToNumber('999')
//   }
//   console.log(learnJavaScript4());
// const date = new Date(1970, 01, 01);
// console.log(date);
// function whatShallWear(temp) {
//     if(temp <= 5) {
//         console.log('wear a sweter')
//     } else if( temp <= 10 ) {
//         console.log('wear a jacket')
//     } else if ( temp >= 15) {
//         console.log('wear t-shirt');
//     }
// }
// whatShallWear(15);
// function doIt(param) {
//     param = 2;
//     }
//     var test = 1;
//     doIt(test);
//     console.log(test);
// function bake (degrees) {
//     let message;
//     if(degrees > 500) {
//         message = "I'm not a nuclear reactor";
//     } else if (degrees < 100) {
//         message = "I'm not a refrigerator";

//     } else {
//         message = "That's a very comfortable temperature for me"
    
//     }
//    return message;
// }
// const statusBake = bake(350);
// console.log(statusBake);
// function calculatinArea(r) {
//     let area;
//     if(r <= 0) {
//         return 0;
//     } else {
//         area = Math.PI * r * r;
//         return area;
//     }
// }
// const radius = 0;
// const theArea = calculatinArea(radius);
// console.log('the area is ' + theArea);
// function makePhrase() {
//     const words1 = ['24/7', 'multi-tier', '30,000 foot', 'b-to-b', 'win-win'];
//     const words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned'];
//     const words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];

//     let rand1 = Math.floor(Math.random() * words1.length);
//     let rand2 = Math.floor(Math.random() * words2.length);
//     let rand3 = Math.floor(Math.random() * words3.length);

//     const phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
//     return phrase;
// }
// console.log(makePhrase());
// const name = 'jenny';
// const phone = '835238532';
// const fact = 'This is prime number';

// const songname = phone + '/' + name;
// const index = phone.indexOf('-');

// if(fact.substring(10, 15) === 'prime') {
//     console.log(fact);
// }
function sum(num) {
    if(num = 0) {
        num = 1;
    } else {
        return num;
    }
    
    const summation = num + num;
        return summation;
}
console.log(sum(1));