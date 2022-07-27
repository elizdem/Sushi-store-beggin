//Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


// Отслеживаем нажатие на кнопки 

btnMinus.addEventListener('click', function() {      //1 аргумент - на что реагирует, 2 - что должно произойти
    if(parseInt(counter.innerText)  > 1 ){           //делаем так, чтобы счетчик не был меньше 1
        counter.innerText = --counter.innerText;
    };

});

btnPlus.addEventListener('click', function() {      //1 аргумент - на что реагирует, 2 - что должно произойти
    counter.innerText = ++counter.innerText;        //увеличиваем текст счетчика
});