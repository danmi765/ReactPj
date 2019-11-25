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
          <div className="sns_button">sns_button</div>
          <div className="infomations">infomations</div>
          <div className="search">search</div>
          <Foot />
      </div>
    );
  }
}


export default Main;
