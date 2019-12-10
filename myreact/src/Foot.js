import React from 'react';
import './App.css';
import MenuList from './MenuList.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Foot extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        m : props.isMobile
      }
  }

  handleResize = () => {
    this.setState({
      m : false
    });
    if(window.innerWidth < 960){
      this.setState({
        m : true
      });
    }
  }


  componentDidMount = () => {
    window.addEventListener("resize",this.handleResize, false);
    if(window.innerWidth < 960){
      this.setState({
        m : true
      });
    }
  }
  componentWillUnmount(){
    window.addEventListener("resize",this.handleResize, false);
    this.setState({
      m:this.props.isMobile
    })
  }
  render(){   
   
    //메뉴
    const menus = MenuList.menus;
    const submenus = MenuList.submenus;
    const submenuUrl = MenuList.submenuUrl;
    
    const submenuList = submenus.map( (submenus,i) => (
        <li>
          <ul className="foot_sub_menu">
            <li>{menus[i]}</li>
          {submenus.map( (submenus,j)=>(
              <li><Link to={submenuUrl[i][j]}>{submenus}</Link></li>
          ))}
          </ul>
        </li>
    ));

    const menuUi = <ul className="foot_menu felxBox">{submenuList}</ul>;   

    return (
      <div className="foot">
          { !this.state.m &&
            <div className="foot_menu_wrapper">
              {menuUi}
            </div>
          }

          { this.state.m && 
            <div className="foot_wrapper">
              <div className="foot_inner felxBox">
                <div>
                  <div>
                    <a href="#">이용약관</a><span></span>
                    <a href="#">개인정보취급방침</a><span></span>
                    <a href="#">법적고지</a>
                  </div>
                  <div>
                    <a href="#">인재채용</a>
                    <a href="#">가맹점모집</a>
                  </div>
                </div>
                <div>
                  <div>BURGER KING</div>
                  <div>
                    서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 | TEL 02-6331-8282 FAX 02-3775-4326<br />
                    사업자 등록번호 101-86-76277 | (주)BKR 대표이사 문영주<br />
                    <span>Copyright 2019 BKR Co. Ltd. All right Reserved</span>
                  </div>
                  <div className="felxBox">
                    <a href="https://www.facebook.com/burgerkingkorea"></a>
                    <a href="https://www.instagram.com/burgerkingkorea"></a>
                  </div>
                </div>
              </div>
            </div> 
          }
          { !this.state.m &&
            <div className="foot_wrapper">
              <div className="foot_inner felxBox">
                <div>
                  <div>BURGER KING</div>
                  <div>
                    서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 | TEL 02-6331-8282 FAX 02-3775-4326<br />
                    사업자 등록번호 101-86-76277 | (주)BKR 대표이사 문영주<br />
                    <span>Copyright 2019 BKR Co. Ltd. All right Reserved</span>
                  </div>
                  <div className="felxBox">
                    <a href="https://www.facebook.com/burgerkingkorea"></a>
                    <a href="https://www.instagram.com/burgerkingkorea"></a>
                  </div>
                </div>
                <div>
                  <div>
                    <a href="#">이용약관</a><span></span>
                    <a href="#">개인정보취급방침</a><span></span>
                    <a href="#">법적고지</a>
                  </div>
                  <div>
                    <a href="#">인재채용</a>
                    <a href="#">가맹점모집</a>
                  </div>
                </div>
              </div>
            </div>
          }
      </div>
    );
  }
}
export default Foot;
