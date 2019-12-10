import React from 'react';
import BurgerMenu from './BurgerMenu.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
class Premium extends React.Component {

    
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

        const burgerList = ["비프칠리통모짜X","비프칠리통모짜와퍼","트러플통모짜X","트러플통모짜와퍼","통모짜X","통모짜와퍼","통모짜와퍼주니어","몬스터X","몬스터와퍼","트러플머쉬롬X","트러플머쉬롬와퍼","통새우스테이크버거","통새우와퍼","콰트로치즈와퍼"];
        const burgerUrl = ["","","","",""];
        const burgerUi = burgerList.map( (burgerList,i) => {
            let image_path = "/images/premium_burger_"+ (i+1) +".png";
            return <div>
                        <Link to={burgerUrl[i]}>
                            <img src={image_path} />
                            <span>{burgerList}</span>
                        </Link>
                    </div>
        });

        return (
            <div class="premium">
                <BurgerMenu click="/premium" />
                <div className="felxBox burger_image_list">
                    {burgerUi}
                </div>
            </div>
        );
    }
}
 
export default Premium;
