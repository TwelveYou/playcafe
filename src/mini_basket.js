import React from 'react'

export default class Card extends React.Component{
  constructor(props) {
    super(props);

    this.show_modal_basket = this.show_modal_basket.bind(this);
  }

  show_modal_basket(){
    document.querySelector(".basket").style.display = "block"; 
  }
    render() { 
      return(
        <div className="basket-mini" onClick={this.show_modal_basket}>
            <div className="basket-mini-sum">
                <p className="basket-mini-sum-number-item"><span className="basket-sum-number-item__value">{this.props.num}</span> шт.</p>
                <p className="basket-mini-sum-item-cost"><span className="basket-sum-item-cost__value">{this.props.price}</span> ₽</p>
            </div>
            <img className="basket-mini__icon" src="res/basket.svg" alt="Изображение товара" width="50px" height="50px"/>
        </div>
      );
    };
}