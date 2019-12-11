import React from 'react';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import $ from 'jquery';

import './App.css';
import Menu from './Menu.js';
import Foot from './Foot.js';

import Home from './router/Home.js';
import Special from'./router/Special.js'; 
import Premium from'./router/Premium.js';
import Wafer from'./router/Burger.js';
import Chicken from'./router/Chicken.js';
import Sidemenu from'./router/Sidemenu.js';
import Drink from'./router/Drink.js';
import Morning from'./router/Morning.js';


import BurgerDetail from'./router/BurgerDetail';


class Main extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        m : false,
      }
  }

  
  handleResize = () => {
    this.setState({
      m : false,
    });
    if(window.innerWidth < 960){
      this.setState({
        m : true,
      });
    }
  }
  
  componentDidMount = () => {
    // console.log('componentDidMount');
    window.addEventListener("resize",this.handleResize, false);
    if(window.innerWidth < 960){
      this.setState({
        m : true,
      })
    }
    
    //서브메뉴 클릭 시 메뉴닫기
    $(".sub_menu button").on("click", function (){
        $(".menu").removeClass("open");
    });

  }
  componentWillUnmount(){
    window.addEventListener("resize",this.handleResize, false);
    // console.log('componentWillUnmount');
  }


  componentWillUpdate(nextProps, nextState){
    // console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
  }

  render(){
    return (
      <div className="main">
          <Menu />


          <Switch> 
            <Route exact path="/" render={(props) => <Home isMobile={this.state.m} {...props} />}/>
            <Route path="/special" render={(props) => <Special {...props} />}/>
            <Route path="/premium" render={(props) => <Premium {...props} />}/>
            <Route path="/burger" render={(props) => <Wafer {...props} />}/>
            <Route path="/chicken" render={(props) => <Chicken {...props} />}/>
            <Route path="/sidemenu" render={(props) => <Sidemenu {...props} />}/>
            <Route path="/drink" render={(props) => <Drink {...props} />}/>
            <Route path="/morning" render={(props) => <Morning {...props} />}/>

            <Route path="/detail/:type/:id" render={(props) => <BurgerDetail {...props} />}/>
          </Switch>

          

          <Foot isMobile={this.state.m} />
      </div>
    );
  }
}


export default Main;
