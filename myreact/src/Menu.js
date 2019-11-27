import React from 'react';
import './App.css';
import {isMobile} from 'react-device-detect';

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


  menuMouseOver  = (e) => {
    if(this.state.m){

        if( e.currentTarget.nextSibling.style.display == "block"){
            e.currentTarget.nextSibling.style.display = "none";
        }else{
            e.currentTarget.nextSibling.style.display = "block";
        }


    }else{
        this.setState({
            menuToggle : "menu felxBox open",
            bg:true,
        })
    }
  }
  menuMouseDown  = (e) => {
    this.setState({
        menuToggle : "menu felxBox",
        bg:false,
    })
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


  handleResize = () => {
    this.setState({
        m:false,
    });
      if(window.innerWidth < 960){
        this.setState({
            m:true,
        });
      }
      console.log("handleResize --> "+this.state.m);
  }
  
  componentDidMount = () => {
    window.addEventListener("resize",this.handleResize, false);

    if(window.innerWidth < 960){
        this.setState({
            m:true,
        })
    }

    console.log("componentDidMount --> "+this.state.m);
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
    console.log("render --> "+this.state.m);

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
                        <ul className="main_menu">
                            <li>
                                <button onClick={(e)=>{this.menuMouseOver(e)}}>
                                    메뉴소개
                                    <span></span>
                                </button>
                                <ul className="sub_menu">
                                    <li><button>스페셜</button></li>
                                    <li><button>프리미엄</button></li>
                                    <li><button>와퍼&버거</button></li>
                                    <li><button>치킨&치킨버거</button></li>
                                    <li><button>사이드</button></li>
                                    <li><button>음료</button></li>
                                    <li><button>아침메뉴</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={(e)=>{this.menuMouseOver(e)}}>
                                    매장소개
                                    <span></span>
                                </button>
                                <ul className="sub_menu">
                                    <li><button>매장찾기</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={(e)=>{this.menuMouseOver(e)}}>
                                    이벤트
                                    <span></span>
                                </button>
                                <ul className="sub_menu">
                                    <li><button>이벤트</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={(e)=>{this.menuMouseOver(e)}}>
                                    브랜드스토리
                                    <span></span>
                                </button>
                                <ul className="sub_menu">
                                    <li><button>버거킹 스토리</button></li>
                                    <li><button>WHY 버거킹</button></li>
                                    <li><button>버거킹 NEWS</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onClick={(e)=>{this.menuMouseOver(e)}}>
                                    고객센터
                                    <span></span>
                                </button>
                                <ul className="sub_menu">
                                    <li><button>공지사항</button></li>
                                    <li><button>버거킹앱이용안내</button></li>
                                    <li><button>FAQ</button></li>
                                    <li><button>문의</button></li>
                                    <li><button>가맹점모집</button></li>
                                    <li><button>인재채용</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> 
            }

            
            {/* PC일 경우 */}
            { !this.state.m && 
                <div className="felxBox">
                    <h1><a href="/"><img src="/images/logo.png" /></a></h1>
                    <div className="menu_list felxBox">
                        <ul className="main_menu felxBox">
                            <li>
                                <button onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    메뉴소개
                                    <img src="/images/menuArrow.png" />
                                </button>
                                <ul className="sub_menu"  onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    <li><button>스페셜</button></li>
                                    <li><button>프리미엄</button></li>
                                    <li><button>와퍼&버거</button></li>
                                    <li><button>치킨&치킨버거</button></li>
                                    <li><button>사이드</button></li>
                                    <li><button>음료</button></li>
                                    <li><button>아침메뉴</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    매장소개
                                    <img src="/images/menuArrow.png" />
                                </button>
                                <ul className="sub_menu"  onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    <li><button>매장찾기</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    이벤트
                                    <img src="/images/menuArrow.png" />
                                </button>
                                <ul className="sub_menu"  onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    <li><button>이벤트</button></li>
                                </ul>
                            </li>
                            <li>
                                <button onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    브랜드스토리
                                    <img src="/images/menuArrow.png" />
                                </button>
                                <ul className="sub_menu"  onMouseOver={(e)=>{this.menuMouseOver(e)}}  onMouseOut={(e)=>{this.menuMouseDown(e)}}>
                                    <li><button>버거킹 스토리</button></li>
                                    <li><button>WHY 버거킹</button></li>
                                    <li><button>버거킹 NEWS</button></li>
                                </ul>
                            </li>
                        </ul>
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
