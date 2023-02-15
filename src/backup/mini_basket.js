import React from 'react'

export default class Card extends React.Component{
    render() { 
      return(
        <div className="basket-mini" /*onclick="show_big_basket()"*/>
            <div className="basket-mini-sum">
                <p className="basket-mini-sum-number-item"><span className="basket-sum-number-item__value">0</span> шт.</p>
                <p className="basket-mini-sum-item-cost"><span className="basket-sum-item-cost__value">0</span> ₽</p>
            </div>
            <img className="basket-mini__icon" src="res/basket.svg" alt="Изображение товара" width="50px" height="50px"/>
        </div>
      );
    };
}