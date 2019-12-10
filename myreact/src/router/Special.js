import React from 'react';
import BurgerMenu from './BurgerMenu.js';
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

        const burgerList = ["메가몬스터K","트러플통모짜팩1","트러플모짜팩2","트러플모짜팩3","트러플모짜팩4"];
        const burgerUrl = ["","","","",""];
        const burgerUi = burgerList.map( (burgerList,i) => {
            let image_path = "/images/special_burger_"+ (i+1) +".png";
            return <div>
                        <Link to={burgerUrl[i]}>
                            <img src={image_path} />
                            <span>{burgerList}</span>
                        </Link>
                    </div>
        });

        return (
            <div class="special">
                <BurgerMenu click="/special" />
                <div className="felxBox burger_image_list">
                    {burgerUi}
                </div>
            </div>
        );
    }
}
 
export default Special;
