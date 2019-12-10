import React from 'react';
 
class SubTitle extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="subpage_title"> 
                    <div className="inner">
                        <span>HOME</span>
                        <span>></span>
                        <span>{this.props.name}</span>
                        {this.props.name2 && <span>></span> }
                        <span>{this.props.name2}</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SubTitle;
