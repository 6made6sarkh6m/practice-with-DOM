/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const ad =  document.querySelectorAll('.promo__adv img');

ad.forEach(element=>{
    element.remove();
});

// const newGenre = document.createElement('div');
// newGenre.textContent = 'ДРАМА';
// newGenre.classList.add('promo__genre');
// genre.replaceWith(newGenre);

const bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML="";
 genre.textContent = 'драма';
// bg.style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat; background-position: top;';
bg.style.backgroundImage ='url(img/bg.jpg)';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.forEach((element,num)=>{
    movieList.innerHTML+= `  <li class="promo__interactive-item">${num + 1} ${element}
    <div class="delete"></div>
</li>`;
});

