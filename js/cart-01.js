const cartWrapper = document.querySelector('.cart-wrapper');

//Отслеживаем клик на всей странице
window.addEventListener('click', function(event){
    //проверка того, что клик был совершен по кнопке "Добавить в корзину"

    if(event.target.hasAttribute('data-cart')){
        //Находим карточку с товаром, внутри которой был совершен клик

        const card = event.target.closest('.card');

        //Собираем данные из выбранного товара и записываем их в единый объект ProductInfo

        const productInfo = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        itemsWieght: card.querySelector('.price__weight').innerText,
        itemsPrice: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
        };

        //Проверка если ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart);

        //Если товар найден в корзине прибавляем к существующему, суммируем 
        if(itemInCart){
            const counterElem = itemInCart.querySelector('[data-counter]');
            counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter);
        }else{

            //Если товара такого же  товара нет в корзине
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.itemsWieght}</div>
    
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
    
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
    
                        <div class="price">
                            <div class="price__currency">${productInfo.itemsPrice}</div>
                        </div>
    
                    </div>
                    <!-- // cart-item__details -->
    
                </div>
            </div>
            </div>`;
    
            //Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML );
        }

        card.querySelector('[data-counter]').innerText = '1';
    }
});