import React from 'react';
import BurgerMenu from './BurgerMenu.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
class Burger extends React.Component {

    
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

        const burgerList = ["2 for 4500","와퍼","불고기와퍼","치즈와퍼","베이컨치즈와퍼","더블와퍼","트리플머쉬롬와퍼주니어","통새우와퍼주니어","콰트로치즈와퍼주니어","와퍼주니어","불고기와퍼주니어","치즈와퍼주니어","불고기버거","치즈버거"];
        const burgerUrl = ["","","","",""];
        const burgerUi = burgerList.map( (burgerList,i) => {
            let image_path = "/images/wafer_burger_"+ (i+1) +".png";
            return <div>
                        <Link to={burgerUrl[i]}>
                            <img src={image_path} />
                            <span>{burgerList}</span>
                        </Link>
                    </div>
        });

        return (
            <div class="wafer">
                <BurgerMenu click="/burger" />
                <div className="felxBox burger_image_list">
                    {burgerUi}
                </div>
            </div>
        );
    }
}
 
export default Burger;
