import React from 'react';
import SubTitle from './SubTitle.js';
import BurgerList from './BurgerList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 
class BurgerDetail extends React.Component {

    
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

        const paramTpye = this.props.match.params.type;
        const paramId = Number(this.props.match.params.id);
        const paramIndex = paramId - 1;
        const imagePath = "/images/"+paramTpye+"_burger_"+paramId+".png"

        const lnb = ["메뉴소개",BurgerList.kor[paramTpye], BurgerList.content[paramTpye][paramIndex] ];

        //images
        // /images/{paramTpye}_detail.png


        return (
            <div>
                {!this.state.m && <SubTitle name={lnb} /> }
                <div className="burger_detail_banner">
                    <div className="burger_detail_inner felxBox">
                        <div className="detail_txt">
                            <div>{BurgerList.content[paramTpye][paramIndex]}</div>
                            <div>{BurgerList.content_detail[paramTpye][paramIndex]}</div>
                        </div>
                        <div className="detail_image">
                            <img className="icon" src="/images/icon.png" />
                            <img className="detail" src={imagePath} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BurgerDetail;
