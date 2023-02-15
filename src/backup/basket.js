import React from 'react'

export default class Card extends React.Component{
    render() { 
      return(
        <div className="basket">
            <p className="basket__heading">Корзина</p>
            
            <div className="basket-items">
            </div>

            <div className="basket-container-price-and-button">
                <p className="basket-container-price-and-button-price"><span className="basket-container-price-and-button-price__value">0</span> ₽</p>
                <p className="basket-container-price-and-button__number_item">Всего товаров: <span className="basket-number_item__value">0</span> шт.</p>
                <input type="button" value="Купить" className="basket-container-price-and-button__button-buy"/>         
            </div>
       
            <input className="basket__button-close" type="button" value="x" /*onclick="close_big_basket()"*/ />
        </div>
      );
    };
}