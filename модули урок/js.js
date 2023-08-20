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

const myObj = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.values(myObj).forEach(element => {
    console.log(element);
});