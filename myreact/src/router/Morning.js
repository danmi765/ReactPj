import React from 'react';
import BurgerMenu from './BurgerMenu.js';
import BurgerList from './BurgerList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
class Morning extends React.Component {

    
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

        const burgerList = BurgerList.content.morning;
        const burgerUrl = BurgerList.url.morning;
        const burgerUi = burgerList.map( (burgerList,i) => {
            let image_path = "/images/morning_burger_"+ (i+1) +".png";
            return <div key={i.toString()}>
                        <Link to={burgerUrl[i]}>
                            <img src={image_path} />
                            <span>{burgerList}</span>
                        </Link>
                    </div>
        });

        return (
            <div className="morning">
                <BurgerMenu click="/morning" />
                <div className="felxBox burger_image_list">
                    {burgerUi}
                </div>
            </div>
        );
    }
}
 
export default Morning;
