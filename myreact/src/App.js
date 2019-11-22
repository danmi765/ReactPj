import React from 'react';
import './App.css';
import './index.css';

import SideMenu from './SideMenu.js';
import Main from './Main.js';


class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
          main : <Main />
      }
  }

  render(){
    return (
      <div className="App">
        <div className="inner">
          <SideMenu />
          {this.state.main}
        </div>
      </div>
    );
  }

}


export default App;
