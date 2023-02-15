import React from 'react'
// import add_in_basket from './index'
export default class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num_items: 1
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value.replace(/\+|-/ig, '');
    this.setState({financialGoal: value});
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
                <input className="shop-container-card__number" id="item_num_2" type="number" min="1" max="99" defaultValue='1' /*value={this.state.num_items} onChange={this.handleChange}*/ size="2"/>
                <input type="button" value="В корзину" className="shop-container-card__buy-button" onClick={() => this.props.addCard(this.props.item, this.state.num_items)} />
            </div>
        </div>
      </div>
    );
  };
}

// () => this.handleClick(i)