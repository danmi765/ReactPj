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
          <div className="infomations">infomations</div>
          <div className="search">search</div>
          <Foot />
      </div>
    );
  }
}


export default Main;
