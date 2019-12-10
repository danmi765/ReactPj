import React from 'react';
import './App.css';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from'react-router-dom';


import Main from './Main.js';



class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          main : <Main />,
          scroll : "top_btn fadeOut"
      }
  }

  hadle_scroll = () => {
    if( window.pageYOffset > 470){
      this.setState({
        scroll : "top_btn fadeIn",
      })
    }else{
      this.setState({
        scroll : "top_btn fadeOut",
      })
    }
  }

  handle_scroll_top = () => {
    window.scrollTo(0,0);
  }

  componentDidMount = () => {
    window.addEventListener("scroll",this.hadle_scroll, false);
  }
  componentWillUnmount(){
    window.addEventListener("scroll",this.hadle_scroll, false);
  }

  render(){
    return (
      <Router>
      <div className="App">
        <div className="inner">
          {this.state.main}
        </div>
        <button onClick={this.handle_scroll_top} className={this.state.scroll} ></button>
      </div>
      </Router>
    );
  }

}


export default App;
