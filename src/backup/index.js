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

// let basket_shop = [];

// export default function add_in_basket(i){
//   // basket_shop.push('добавил товар'+' '+i);
//   console.log('добавил товар '+i);
// };

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
            <div className="contacts-item__value">89232128900</div>
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
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     basket_shop: []
    //   };
    // }

  render(){
    return(
      <div className="shop"> {/* Перебор и вывод всех наименований в маазине ------------------------------*/}
        {items.map((item_base) => (<Card key={item_base.name} item={item_base}/>))} 

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
    <PutInBasketItem/> 
    <MiniBasket/>
    <Basket/>
  </div>,
  document.getElementById('root')
);