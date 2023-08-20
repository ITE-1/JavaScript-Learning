// 'use strict';
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// const alex = new User('alex', 28);
// console.log(alex);
// function showThis() {
//     console.log(this);
// }
// showThis();

// const myObj = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// Object.values(myObj).forEach(element => {
//     console.log(element);
// });
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;                 //Концепция
//     }
//     calcArea() {
//         return this.width * this.height;
//     }
// }

// class ColoredRectangleWithText extends Rectangle { //наследование класса с помощью "extends"
//     constructor(height, width, text, bgColor) {
//         super(height, width)    //вызывает супер конструктор родителя Rectangle // должна стоять всегда сверхну
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// // const square =  new Rectangle(10, 10);      //Экземпляры
// // const long = new Rectangle(100, 20);

// // console.log(square.calcArea());
// // console.log(long.calcArea()); 

// const div = new ColoredRectangleWithText(25, 10, 'hello world', 'red');
// div.showMyProps();
// console.log(div.calcArea());

const persone = {
    name: 'Alex',
    telefon: '+51323323232',
    parents: {
        mom: 'Anna',
        dad: 'Pedro'
    
    }
};
// console.log(JSON.stringify(persone)); //переводим в читаемые формат данных Джэйсон
// console.log(JSON.parse(persone));
clone = console.log(JSON.parse(JSON.stringify(persone)));
//клонирование обьекта дает возможность изменять обьект без мутации оригинала 