import React from 'react';
 
class SubTitle extends React.Component {

    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {

        const lnbList = this.props.name.map((val, i) => {
            return <span key={i.toString()} className="bracket">{val}</span>
        });

        return (
            <div>
                <div className="subpage_title"> 
                    <div className="inner">
                        <span>HOME</span>
                        {lnbList}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SubTitle;
