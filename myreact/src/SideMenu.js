import React from 'react';
import './App.css';



class SideMenu extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            href : "#",
        }
    }

    handle = () => {
        alert("a");
    }

    render(){
        return (
            <div className="sidemenu">
                <ul>
                    <li><a href={this.state.href} onClick={this.handle}>menu</a></li>
                    <li><a href={this.state.href} onClick={this.handle}>menu</a></li>
                    <li><a href={this.state.href} onClick={this.handle}>menu</a></li>
                    <li><a href={this.state.href} onClick={this.handle}>menu</a></li>
                </ul>
            </div>
        );
    }
}


export default SideMenu;
