import React from 'react';
import {isMobile} from 'react-device-detect';
import $ from 'jquery';

import MenuList from './MenuList.js';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Menu extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        menuToggle : "menu felxBox" ,
        bg:false,
        sideMenu : false,
        sideMenuStatus : false,
        m : false,
      }
  }



  handleResize = () => {
    this.setState({
        m:false,
    });
      if(window.innerWidth < 960){
        this.setState({
            m:true,
        });
      }
  }

  mousreClick = (e) => {
    if(this.state.m){
        if( e.currentTarget.nextSibling.style.display == "block"){
            e.currentTarget.nextSibling.style.display = "none";
        }else{
            e.currentTarget.nextSibling.style.display = "block";
        }
    }
  }
  
  menuMouseOver  = (e) => {
    if(!this.state.m){
        this.setState({
            menuToggle : "menu felxBox open",
            bg:true,
        })
    }
  }
  menuMouseDown  = (e) => {
    if(!this.state.m){
        this.setState({
            menuToggle : "menu felxBox",
            bg:false,
        })
    }
  }

  menuClose = (e) => {
      this.setState({
          sideMenu : false,
      })
  }
  menuOpen = (e) => {
      this.setState({
          sideMenu : true,
      })
  }
  
  componentDidMount = () => {
    window.addEventListener("resize",this.handleResize, false);

    if(window.innerWidth < 960){
        this.setState({
            m:true,
        })
    }
  }

  componentWillUnmount(){
    window.addEventListener("resize",this.handleResize, false);
  }
 
  render(){    
    
    let left = {
        left:"-100%"
    }
    if(this.state.sideMenu){
        left = {
            left:"0"
        }
    }
   
    //메뉴
    const menus = MenuList.menus;
    const submenus = MenuList.submenus;
    const submenuUrl = MenuList.submenuUrl;
    
    const submenuList = submenus.map( (submenus,i) => (
        submenus.map( (submenus,j)=>(
            <li><Link to={submenuUrl[i][j]}><button onMouseOver={(e)=>{this.menuMouseOver(e)}} onMouseOut={(e)=>{this.menuMouseDown(e)}}>{submenus}</button></Link></li>
        ))
    ));

    const menuList = menus.map((menu, i) => {
        if(!this.state.m){
            if( i < 4 ){
                return  <li>
                            <button onMouseOver={(e)=>{this.menuMouseOver(e)}} onMouseOut={(e)=>{this.menuMouseDown(e)}}  onClick={(e)=>{this.mousreClick(e)}}>
                                {menu}
                                <img src="/images/menuArrow.png" />
                            </button>
                            <ul className="sub_menu">
                                {submenuList[i]}
                            </ul>
                        </li>
            }
        }else{
            return  <li>
                        <button onMouseOver={(e)=>{this.menuMouseOver(e)}} onMouseOut={(e)=>{this.menuMouseDown(e)}}  onClick={(e)=>{this.mousreClick(e)}}>
                            {menu}
                            <img src="/images/menuArrow.png" />
                        </button>
                        <ul className="sub_menu">
                            {submenuList[i]}
                        </ul>
                    </li>
        }
    });

    const menuClass = this.state.m == true ? "main_menu" : "main_menu felxBox" ;
    const menuUi = <ul className={menuClass}>{menuList}</ul>;   


    return (
   
      <div className={this.state.menuToggle}>
        { this.state.bg && !isMobile  && <img className="menu_bg" src="/images/bg_login.gif"  /> }
        <div className="menu_inner felxBox">
            
            {/* 모바일일 경우 */}
            { this.state.m && 
                <div className="felxBox">
                    <button className="menu_btn" onClick={(e)=>{this.menuOpen(e)}}>메뉴</button>
                    <h1><a href="/"><img src="/images/logo.png" /></a></h1>
                    <button className="delibery_btn">딜리버리주문<span></span></button>
                    <div className="menu_list" style={left}>
                        <div className="close_btn"><button onClick={(e)=>{this.menuClose(e)}}></button></div>
                        {menuUi}
                    </div>
                </div> 
            }

            
            {/* PC일 경우 */}
            { !this.state.m && 
                <div className="felxBox">
                    <h1><a href="/"><img src="/images/logo.png" /></a></h1>
                    <div className="menu_list felxBox">
                        {menuUi}
                        <button className="delivery_icon">딜리버리주문</button>
                    </div>
                </div>
            }        

        </div>
      </div>
  
    );
  }
}
export default Menu;
