import React from 'react'

export default class Card extends React.Component{
  constructor(props) {
      super(props);

      this.close_modal_basket = this.close_modal_basket.bind(this);
      this.show_items_in_basket = this.show_items_in_basket.bind(this);    
    }

    close_modal_basket(){
      document.querySelector(".basket").style.display = "none"; 
    }

    show_items_in_basket(){
      if (Number(this.props.items_in_basket.length) === 0){
        return(<div>
                <p className="basket-items__empty-message"> Ваша корзина пустая </p>
                <p className="basket-items__empty-text"> Не скромничайте, добавьте сюда ну хоть что-нибудь... </p>
              </div>
        );
      }
      else{
        let basket = [];

        for (let i = 0; i < this.props.items_in_basket.length; i++){
          let basket_item = ( 
            <div className="basket-items-item" key={i}>
              <p className="basket-items-item__name"> {this.props.items_in_basket[i].name} </p>
              <img className="basket-items-item__image" src={this.props.items_in_basket[i].image} alt='Фото товара' height="100px" />
              <p className="basket-items-item__price"><span className="basket-items-item__price-value"> {this.props.items_in_basket[i].price}</span>₽</p>
              <input name={i} className="basket-items-item__number" type="number" min="0" max="99" value={this.props.items_in_basket[i].num} onChange={this.props.change_num_item} size="2" /> {/*change_num_item*/}
              <input className="basket-items-item__Button-delete" type="button" value="удалить" onClick={() => this.props.delete_item(i)}/>
              <p className="basket-items-item__sum-price"><span className="basket-items-item__sum-price-value">{this.props.items_in_basket[i].price * this.props.items_in_basket[i].num}</span>₽</p>
            </div>
          );

          basket.push(basket_item);
        }

        return(
          <div className="basket-items">          
            {basket}
          </div>            
        );
      };
    }

    render() { 
      return(
        <div className="basket">
            <p className="basket__heading">Корзина</p>            

            {this.show_items_in_basket()}

            <div className="basket-container-price-and-button">
                <p className="basket-container-price-and-button-price"><span className="basket-container-price-and-button-price__value">{this.props.price}</span> ₽</p>
                <p className="basket-container-price-and-button__number_item">Всего товаров: <span className="basket-number_item__value">{this.props.num}</span> шт.</p>
                <input type="button" value="Купить" className="basket-container-price-and-button__button-buy"/>         
            </div>
       
            <input className="basket__button-close" type="button" value="x" onClick={this.close_modal_basket} />
        </div>
      );
    };
}