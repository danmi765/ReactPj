import React from 'react';
import { BrowserRouter as Router, Route, Switch } from'react-router-dom';
import $ from 'jquery';

import './App.css';
import Menu from './Menu.js';
import Foot from './Foot.js';

import Home from './router/Home.js';
import Special from'./router/Special.js';


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
  }

  render(){
    return (
    <Router>
      <div className="main">
          <Menu />


          <Switch> 
            <Route exact path="/" render={(props) => <Home isMobile={this.state.m} {...props} />}/>
            <Route path="/special" render={(props) => <Special isMobile={this.state.m} {...props} />}/>
          </Switch>

          

          <Foot isMobile={this.state.m} />
      </div>
    </Router>
    );
  }
}


export default Main;
