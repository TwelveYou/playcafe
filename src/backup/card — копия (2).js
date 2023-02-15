import React from 'react'
// import add_in_basket from './index'
export default class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      number_item: 1
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  render() { 
    return(
      <div className="shop-container"> 
        <div className="shop-container-card">
            <p className="shop-container-card__name" id="item_name_2">{this.props.item.name}</p>
            <img className="shop-container-card__image" id="item_image_2" src={this.props.item.image} alt="Фото товара" height="200px"/>
            <p className="shop-container-card__discription">{this.props.item.discription}</p>
            <div className="shop-container-card__container-price-buy-button">
                <p className="shop-container-card__price"><span className="shop-container-card__price-value" id="item_price_2">{this.props.item.price}</span>₽</p>
                <input  name="number_item" className="shop-container-card__number" type="number" value={this.state.number_item} onChange={this.handleInputChange}  size="3"  min="1" max="99"/>
                <input type="button" value="В корзину" className="shop-container-card__buy-button" onClick={() => this.props.addCard(this.props.item, this.state.number_item)} />
            </div>
        </div>
      </div>
    );
  };
}

// () => this.handleClick(i)