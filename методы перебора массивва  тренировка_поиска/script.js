// const answers = ['IvaN', 'AnnA', 'HelLo', 5];

// // const result = answers.map(item => {
// //     return item.toLowerCase();
// // })
// // console.log(result);
// // console.log(answers.some(item => typeof(item) === 'number'));//некоторый


// // console.log(answers.every(item => typeof(item) === 'number'));//каждый
// //reduce
// const arr = [4, 5, 6, 1, 3, 6];
// console.log(arr.reduce((sum, current) => sum + current));

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArray = Object.entries(obj);
// console.log(newArray);
// const comments = [
//     {
//      id: 1,
//      authorName: 'Глеб Фильтеровский',
//      authorRating: 5404,
//      text: 'Присоединяюсь, из трех функций понял только filter!'
//    },
//    {
//      id: 2,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Используйте console.log для отладки и сами все поймете!'
//    },
//    {
//      id: 3,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Посмотрите гайды на YouTube, там все объясняется.'
//    },
//    {
//      id: 4,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Кстати, использовать console.log — отличная идея!'
//    },
//    {
//      id: 5,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Если вы приложите ревью, нам будет проще вам помочь.'
//    },
//  ];

//  const newResult = comments.filter((comment) => comment.text.match(/console.log/));
 
//  console.log(newResult);

const form = document.querySelector('form'),
    input = form.querySelector('input'),
    btn = form.querySelector('button');

const elements = document.querySelectorAll('.result-item');
console.log(elements.textContent);

btn.addEventListener('click', (e) => {
  e.preventDefault(); 
  const searchContent = input.value.toLocaleLowerCase();
  
const result =  elements.filter((textContents) => textContents.includes(searchContent));

console.log(result);


})

