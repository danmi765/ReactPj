import React from 'react';
import SubTitle from './SubTitle.js';
 
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
        return (
            <div class="special">
                {!this.state.m && <SubTitle name="메뉴소개" name2="" /> }
            </div>
        );
    }
}
 
export default Special;
