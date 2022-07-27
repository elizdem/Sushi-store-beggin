//Добавляем "прослушку" клика на всем окне

window.addEventListener('click', function(event){

    //Объявляем переменную для счетчика
    let counter;
    
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        //Находим класс (обертку), где находится счетчик,+,-
        const counterWrapper = event.target.closest('.counter-wrapper');

        //Находим див с числом счетчика
        counter =  counterWrapper.querySelector('[data-counter]');
    };

    //является ли элемент кнопкой плюс/минус
    if(event.target.dataset.action === 'plus'){
       
        counter.innerText = ++counter.innerText;
    };

    if(event.target.dataset.action === 'minus'){

        //Проверка  на товар внутри корзины

        if(parseInt(counter.innerText)  > 1 ){           //делаем так, чтобы счетчик не был меньше 1
            counter.innerText = --counter.innerText;
        }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();
            calcCartPriceAndDelivery();
            toggleCartStatus();
            
        };

    };

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();
	}
});