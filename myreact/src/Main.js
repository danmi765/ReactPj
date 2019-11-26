import React from 'react';
import './App.css';
import Menu from './Menu.js';
import Banner from './Banner.js';
import Foot from './Foot.js';


class Main extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        
      }
  }

  render(){
    return (
      <div className="main">
          <Menu />
          <Banner />
          <div className="video">
            <iframe id="exFrame" name="exFrame" width="100%" height="605" src="https://www.youtube.com/embed/LNIpr3efeeI?rel=0&amp;showinfo=0&amp;autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="sns_button">
            <div className="sns_inner felxBox">
              <div className="youtube">
                <a href="https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured">
                  <span className="title">YOUTUBE</span>
                  <span className="status">구독2.3만</span>
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/burgerkingkorea">
                  <span className="title">FACEBOOK</span>
                  <span className="status">좋아요 51.8만</span>
                </a>
              </div>
              <div className="instagram">
                <a href="https://www.instagram.com/burgerkingkorea/">
                  <span className="title">INSTAGRAM</span>
                  <span className="status">팔로워 413.0K</span>
                </a>
              </div>
            </div>
          </div>
          <div className="infomations felxBox">
            <div className="guide_1">
              <a href="#"><img src="/images/info.png" /></a>
            </div>
            <div className="guide_2">
              <a href="#"><img src="/images/info2.png" /></a>
            </div>
          </div>
          <div className="search">
            <div className="search_title">매장찾기</div>
            <div className="search_sub_title">고객님 주변에 있는 버거킹을 찾아보세요!</div>
            <button onClick="">매장찾기</button>
            <div class="search_guide felxBox">
              <div className="delivery">집에서 편하게<br />받을 수 있는<div>딜리버리</div></div>
              <div className="order">미리 주문하고<br />픽업가능한<div>킹오더</div></div>
              <div className="drive">차안에서 빠르게<br />이용할 수 있는<div>드라이브 스루</div></div>
              <div className="hour">24시간 언제든<br />함께할 수 있는<div>24시간</div></div>
              <div className="morning">든든한<br />아침을 도와줄<div>아침메뉴</div></div>
              <div className="parking">내 차와 함께<br />올 수 있는<div>주차공간</div></div>
            </div>
          </div>
          <Foot />
      </div>
    );
  }
}


export default Main;
