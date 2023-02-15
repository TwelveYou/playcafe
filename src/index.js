import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';
import PutInBasketItem from './put_in_basket';
import MiniBasket from './mini_basket';
import Basket from './basket';

let empty_link = '#';

let items = [
  {
    name: "Мачи Коро",
    image: "res/goods_image/machi_coro.jpg",
    discription: "Экномическая игра для всей семьи",
    price: 1000
  },
  {
    name: "Ужас Аркхема. ЖКИ",
    image: "res/goods_image/arkham_horror.jpg",
    discription: "Жуткая ролевая приключенческая  карточная игра",
    price: 2400
  
  },
  {
    name: "Каркассон",
    image: "res/goods_image/carcasson.jpg",
    discription: "Стратегический еврогейм о построении замков, дорог и монастырей",
    price: 1500
  }
];

function Header(){
  return(
    <header>
      <div className="header-container">
        <Logo/>
        <Menu/>
        <Contaccts/>
      </div>
    </header>
  );
};

class Logo extends React.Component{
  render() {
    return(
      <a className="logo" href={empty_link}>
        <img className="logo__icon" src="res/logo_icon.ico" alt="Логотип" width="50px" height="50px"/>
        <div className="logo__text">
            <p className="logo__name">Столовка</p>
            <p className="logo__discription">Магазин настольных игр</p>
        </div>
      </a>
    );
  }
}

class Menu extends React.Component{
  render() {
    return(
      <ul className="menu">
        <li className="menu-item">
            <a className="menu-item__link" href={empty_link}>Главная</a>
        </li>
        <li className="menu-item">
            <a className="menu-item__link" href={empty_link}>Магазин</a>
        </li>
        <li className="menu-item">
            <a className="menu-item__link" href={empty_link}>О нас</a>
        </li>
      </ul>
    );
  }
}

class Contaccts extends React.Component{
  render() {
    return(
      <div className="contacts">
        <div className="contacts-item">
            <img className="contacts-item__icon" alt="Телефон:" src="res/contact_phone.svg" width="20px"/>
            <div className="contacts-item__value">89617459895</div>
        </div>
      </div>
    );
  }
}

class Footer extends React.Component{
  render(){
    return(
      <footer /*onclick="close_big_basket()"*/>
        <a className="logo" href={empty_link}>
            <img className="logo__icon" src="res/logo_icon.ico" alt="Логотип" width="50px" height="50px"/>
            <p className="logo__name">Столовка</p>
        </a>
      </footer>
    );
  };
}

class Main extends React.Component{
  render(){
    return(
      <main className="main" /*onclick="close_big_basket()"*/>
        <h1 className="main__heading">Магазин настольных игр</h1>
        <Shop/>
      </main>
    )
  }
}

class Shop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        basket_shop: Array(0).fill(''), /* Пропс State массив для отображения дочерним name, image, num, price*/
        sum_price: 0,
        num_items: 0,
    };

    this.addItemInCard = this.addItemInCard.bind(this);
    this.show_modal_put_in_basket = this.show_modal_put_in_basket.bind(this);
    this.update_sum_items = this.update_sum_items.bind(this);
    this.dellete_item_from_basket = this.dellete_item_from_basket.bind(this);
    this.change_num_item_by_id = this.change_num_item_by_id.bind(this);    
  }

  addItemInCard(item, num_item){
    let card_item = {
      name: item.name,
      image: item.image,
      num: num_item,
      price: item.price
    };

    let flag = false;
    let index_same = null;
    for(let i = 0; i < this.state.basket_shop.length; i++){
      if (String(card_item.name) === String(this.state.basket_shop[i].name)){
        flag = true;
        index_same = i;
        break;
      }
    }

    let basket_shop = [...this.state.basket_shop];
    if (flag) {
      basket_shop[index_same].num += Number(card_item.num);
      this.setState({      
        basket_shop: basket_shop
      })
    }
    else{
      basket_shop.push(card_item);
      this.setState({      
        basket_shop: basket_shop
      }) 
    } 

    this.update_sum_items(basket_shop);
    this.show_modal_put_in_basket(item, num_item);
  }

  // Поменять и показать товар, добавленный в корзину
  show_modal_put_in_basket(item, num_item){    
    let modal_put_in_basket = document.querySelector(".put-in-basket");
    document.querySelector(".put-in-basket-about-item__icon").src = item.image;
    document.querySelector(".put-in-basket-about-item-cost__value").innerText = item.price;
    document.querySelector(".put-in-basket___message-add-number").innerText = num_item;
    document.querySelector(".put-in-basket___message-add-summ").innerText = num_item * item.price;
    modal_put_in_basket.style.display='flex';
  }

  // Обновление итого (сумма и количество)
  update_sum_items(basket){
    let s_price = 0;
    let s_nums = 0;

    for(let i = 0; i < basket.length; i++){ 
      s_price += basket[i].price * basket[i].num;
      s_nums += basket[i].num;
    }

    this.setState({      
      sum_price: s_price,
      num_items: s_nums
    })   
  }

  dellete_item_from_basket(id){
    let basket = [...this.state.basket_shop];
    basket.splice(id, 1);
    this.setState({      
      basket_shop: basket
    })

    this.update_sum_items(basket);
  }

  change_num_item_by_id(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

      if (Number(value) !== 0){
        let basket_shop = [...this.state.basket_shop];
        basket_shop[name].num = Number(value);
        this.setState({      
          basket_shop: basket_shop
        })
        this.update_sum_items(basket_shop);
      }
      else{
        this.dellete_item_from_basket(Number(name))
      }
  }

  render(){
    return(
      <div className="shop"> {/* Перебор и вывод всех наименований в маазине ------------------------------*/}
        {items.map((item_base, id) => (<Card key={item_base.name} index={id} item={item_base} addCard={this.addItemInCard}/>))} 
        <PutInBasketItem /> 
        <MiniBasket num={this.state.num_items} price={this.state.sum_price}/>
        <Basket items_in_basket ={this.state.basket_shop} num={this.state.num_items} price={this.state.sum_price} delete_item={this.dellete_item_from_basket} change_num_item={this.change_num_item_by_id}/>
      </div>      
    );
  };
}

// ========================================

ReactDOM.render(
  <div>
    <Header/>
    <Main/>    
    <Footer/> 
  </div>,
  document.getElementById('root')
);