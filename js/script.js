/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded',()=>{
    const ad =  document.querySelectorAll('.promo__adv img');
const removeAds = (advert)=>{
    advert.forEach(element=>{
        element.remove();
    });
};
removeAds(ad);

// const newGenre = document.createElement('div');
// newGenre.textContent = 'ДРАМА';
// newGenre.classList.add('promo__genre');
// genre.replaceWith(newGenre);

const bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      form = document.querySelector('form.add'),
      input = form.querySelector('.adding__input'),
      checkBox = form.querySelector('[type="checkbox"]');

// bg.style.cssText = 'background: url(../img/bg.jpg) center center/cover no-repeat; background-position: top;';


const Changes = ()=>{
    genre.textContent = 'драма';
    bg.style.backgroundImage ='url(img/bg.jpg)';
};
Changes();
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let newMovie = input.value;
    const checkFav = checkBox.checked;
    if(newMovie===''){
        alert('Fill the form please');
    }else if(newMovie.length>21){
        newMovie = `${newMovie.slice(0,20)}...`;
        movieDB.movies.push(newMovie);
        movieDB.movies.sort();
        showMovies(movieDB.movies, movieList);
        form.reset();

    }else{
    movieDB.movies.push(newMovie);
    movieDB.movies.sort();
    showMovies(movieDB.movies, movieList);
    form.reset();
    }
    
});
const showMovies = (films, list)=>{
    list.innerHTML="";
    films.forEach((element,num)=>{
        list.innerHTML+= `  <li class="promo__interactive-item">${num + 1} ${element}
        <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll('.delete').forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
            showMovies(films, list);

        });
    });
};
showMovies(movieDB.movies, movieList);
});
