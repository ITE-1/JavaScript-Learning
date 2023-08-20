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



// document.addEventListener('DOMContentLoaded', () => {

//   const data = [
//     {
//      id: 0,
//      authorName: 'Глеб Фильтеровский',
//      authorRating: 5404,
//      text: 'Присоединяюсь, из трех функций понял только filter!'
//    },
//    {
//      id: 1,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Используйте console.log для отладки и сами все поймете!'
//    },
//    {
//      id: 2,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Посмотрите гайды на YouTube, там все объясняется.'
//    },
//    {
//      id: 3,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Кстати, использовать console.log — отличная идея!'
//    },
//    {
//      id: 4,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Если вы приложите ревью, нам будет проще вам помочь.'
//    },
//  ];

// data.forEach(item => {
//   if(item)
// })




//   class Comments{
//     constructor(authorName, authorRating, text) {
//       this.authorName = authorName;
//       this.authorRating = authorRating;
//       this.text = text;
//     }

//     render() {
//       const element = document.createElement('div');
//       element.classList.add('person');
//       element.innerHTML = `
//       <h2 class="title">Комментарий:</h2>
//       <div class="form">
//           <div class="author-name">${this.authorName}</div>
//           <div class="author-rating">${this.authorRating}</div>
//           <div class="text">${this.text}</div>
//           <button> Какая то кнопка</button>
//       </div>
      
//       `
//       document.getElementById('parent').append(element);
//     };
//   }
// function createData (arg) {
//   arg.forEach( ( {authorName, authorRating, text} ) => {
//     new Comments(authorName, authorRating, text).render()
//   });
// }
// createData(data);

// const inputName = document.getElementById('name');
// const inputText = document.getElementById('field');

// const loadings = {
//     warning: 'Пустое поле!',
// }

//     const addForm = document.querySelector('.form-add');
//     addForm.addEventListener('submit', (e) => {
//       e.preventDefault();
       
//     if(inputText.value.length === 0) {
   
//     } else {
//       const newComment = {
//         id: data.length + 1,
//         authorName: inputName.value,
//         authorRating: 348,
//         text: inputText.value,
//       }
  
       
//       data.push(newComment);
//       createData(data);
  
//     }

   

//     setTimeout(() => {
//       inputName.value = " ";
//       inputText.value = " ";
//     }, 3000)
    
//     const btnSearch = document.getElementById('searchBtn');
//     const inputSearch = document.getElementById('search');

//    btnSearch.addEventListener('click', (e) => {
//       e.preventDefault();
        
      
//     })

// });

  // const searchForm = document.getElementById('find-person');

  // searchForm.addEventListener('submit', (e) => {
  //   e.preventDefault();

  //   inputField = document.querySelector('search').value;

  //   data.forEach(item => {
  //     item.filter((comment) => comment.text.includes(inputField))
  //   })
  // })
// });


//  const match = 'console.log';
//  const newComments = comments.filter(item => item.text.includes(match));
//  console.log(newComments);

//  const newResult = comments.filter((comment) => comment.text.match(/console.log/));
 
//  console.log(newResult);

// const form = document.querySelector('form'),
//     input = form.querySelector('input'),
//     btn = form.querySelector('button');

// const elements = document.querySelectorAll('.result-item');
// console.log(elements.textContent);

// btn.addEventListener('click', (e) => {
//   e.preventDefault(); 
//   const searchContent = input.value.toLocaleLowerCase();
  
// const result =  elements.filter((textContents) => textContents.includes(searchContent));

// console.log(result);


// })

const prompt = {
        name: 'Alex',
        year: 28,
        indetifyMe() {
          console.log(`Hello my name is ${this.name}, and i have ${this.year} years old.`)
        },
    }

const newPrompt = prompt.indetifyMe();

const newArray = [1, 2, 6, 7, 2, 4, 22];
let max = newArray[0];
let index = 0;
for(let i = 0; i < newArray.length; i++) {
  if(newArray[i] > max) {
   max = newArray[i];
   index = i;
  }
}
console.log(index);




let c = newArray.reduce((prev, item, index) => {
 if (item > prev[1]) {
    return [item, index];
 } else {
    return prev;
 }
 
}, [0, newArray[0]]);

console.log(c);
