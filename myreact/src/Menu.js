import React from 'react';
import './App.css';

class Menu extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        menuToggle : "menu felxBox" ,
        bg:false,
      }
  }

  menuMouseOver  = (e) => {
    this.setState({
        menuToggle : "menu felxBox open",
        bg:true,
    })
  }
  menuMouseDown  = (e) => {
    this.setState({
        menuToggle : "menu felxBox",
        bg:false,
    })
  }
 
  render(){
    
    
    return (
      <div className={this.state.menuToggle}>
        { this.state.bg  && <img className="menu_bg" src="/images/bg_login.gif"  /> }
          <div className="menu_inner felxBox">
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
      </div>
    );
  }
}
export default Menu;
