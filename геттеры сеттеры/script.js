'use strict';

// console.log('Запрос данных');

// const req = new Promise(function(resolve, reject) { //resolve отвечает за успешность операции, reject запускается при отрицательном
//     setTimeout(() => {
//         console.log('Подготовка данных');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//        resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 product.status = 'order';
//                 resolve(product);
//             }, 2000);
//         });
//     }).then(data => {
//        data.modify = true;
//        return data;
       
//     }).then(data => {
//         console.log(data);
//     }).catch(() => {
//         console.error('произошла ошибка');
//     }).finally(() => {
//         console.log('finally');
//     })
//  //выполняется в случае положительного исхода

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
}

// test(1000).then(() => {
//     console.log('1000 ms');
// })

// test(2000).then(() => {
//     console.log('2000 ms');
// })

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// })

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('all');
// })

// const persone = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// }
// class User {
//     constructor(name, age) {
//     this.name = name;
//     this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя: ${this.name}, ${_age}`);
//     }
//     getAge() {
//         return this._age;
//     }
//     setAge(age) {
//         if(typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('недопустимое значение');
//         }
//     }
// };
// const ivan = new User ('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);

class Block {
    constructor(width, height) {
        this._width = +width;
        this.height = +height;
    }

    say = () => {
        console.log(`Ваши параметрі width - ${this._width}px, height - ${this.height}px`);
    }

    getWidth() {
       return this._width;
    }

    setWidth(num) {
        if(typeof num === 'number') {
            this._width = num;
        } else {
            console.log('недопустимое значение');
        }
        
    }
}
const angle = new Block ('400', 200);
angle.say();
console.log(angle.getWidth());
angle.setWidth(600);
console.log(angle.getWidth());
angle.width = 500;
angle.say();