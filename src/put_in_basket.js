import React from 'react'

export default class Card extends React.Component{
  constructor(props) {
    super(props);
    this.close_modal_put_in_basket = this.close_modal_put_in_basket.bind(this);
  }

  close_modal_put_in_basket(){
    document.querySelector(".put-in-basket").style.display='none';
  }

  render() { 
    return(
      <div className="put-in-basket" id="put-in-basket__close" /*onClick={this.props.closeWindow}*/onClick={this.close_modal_put_in_basket}>
        <div className="put-in-basket-about-item">
            <img className="put-in-basket-about-item__icon" src="res/goods_image/machi_coro.jpg" alt="Изображение товара" height="100px"/>
            <p className="put-in-basket-about-item-cost"><span className="put-in-basket-about-item-cost__value">1000</span> ₽</p>
        </div>
        <p className="put-in-basket___message">Товар добавлен в корзину <br/> в колличестве <span className="put-in-basket___message-add-number">1</span> шт. <br/> на сумму <span className="put-in-basket___message-add-summ">1000</span> ₽</p>
        <input className="put-in-basket__button-close" type="button" value="x"/>
      </div> 
    );
  };
}