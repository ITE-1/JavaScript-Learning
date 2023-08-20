'use strict';
const menuItem = document.querySelectorAll('.header__nav_item'),
    bodyContent = document.querySelector('.body__content'),
    menuParent = document.querySelector('.header__nav-list');

function hideItem() {
  
    menuItem.forEach(item => {
    item.classList.remove('header__nav_item-active');
    })
    
}
hideItem();

function showItem(i = 1) {
    menuItem[i].classList.add('header__nav_item-active');
   
}
showItem();

menuParent.addEventListener('click', (event) => {
    const target = event.target;
    event.preventDefault();
    if(target && target.classList.contains('header__nav_item')) {
          menuItem.forEach((item, i) => {
            if(target == item) {
               hideItem();
               showItem(i);
            } 
        })
        }

    });

//**Body */
const promoBg = document.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    promoBlock = document.querySelectorAll('.header__promo img'),
    movieList = document.querySelector('.promo__interactive-list'),
    allForm = document.querySelector('form.add'),
    formBtn = document.querySelector('.btn'),
    addInput = allForm.querySelector('.form-placeholder'),
    checkbox = allForm.querySelector('[type="checkbox"]');
   
const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
movieList.innerHTML = "";


const changeGenre = (arr) => {
    arr.textContent = 'Драмма';
}
const changeBg = (arr) => {
    arr.style.backgroundImage = 'url("./assets/mars.webp")';
}

const removeAd = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
}
removeAd(promoBlock);
changeBg(promoBg);
changeGenre(promoGenre);

allForm.addEventListener('submit', (event) => {
    let newFilm = addInput.value;
    if(newFilm) {
        movieDB.movies.push(newFilm);  
        createNewList(movieDB.movies, movieList);
        console.log('работает');
    }
    event.preventDefault();
    event.target.reset();
    
})
function createNewList (films, parent) {
    parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="item-remove"></div>
                    <div class="item-delete"></div>
                </li>`;
        });
    document.querySelectorAll('.item-delete').forEach((item, i) => {
        item.addEventListener('click' , () => {
            item.parentElement.remove();
            movieDB.movies.slice(i, 1);

            // createNewList(movieDB.movies, movieList);
        });
    }); 
};
createNewList(movieDB.movies, movieList);


// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1}. ${film};
//             <div class="item-remove"></div>
//             <div class="item-delete"></div>
//         </li>
//     `
// });
