import React from 'react';
import SubTitle from './SubTitle.js';
import MenuList from '../MenuList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
class Special extends React.Component {

    
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
    
    }
    componentWillUnmount(){
        window.addEventListener("resize",this.handleResize, false);
    }

    render() {

        console.log(this.props.click);

        const burgerList = MenuList.submenus[0];
        const submenuUrl = MenuList.submenuUrl[0];

        const submenuList = burgerList.map( (burgerList,i) => {
            let clickItem = this.props.click == submenuUrl[i] ? "click" : "" ;
            return <li className={clickItem}><Link to={submenuUrl[i]}>{burgerList}</Link></li>
        });


        return (
            <div>
                {!this.state.m && <SubTitle name="메뉴소개" name2="" /> }
                <div class="burger_menu felxBox">
                    <h3 className="page_title">메뉴소개</h3>
                    <ul className="burger_list felxBox">
                        {submenuList}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default Special;
