import React from 'react';
import './App.css';

class Foot extends React.Component{

  constructor(props){
      super(props);
      this.state = {

      }
  }

  render(){
    return (
      <div className="foot">
          <div className="order_info felxBox">
            <div>
              <div>집에서 만나는 버거킹</div>
              <div>딜리버리 전화주문 안내 10:00-22:00 / 연중무휴 (매장별로 상이할 수 있습니다.)</div>
            </div>
            <div>1599-0505</div>
          </div>
          <div className="foot_menu_wrapper">
            <ul className="foot_menu felxBox">
              <li>
                <ul className="foot_sub_menu">
                  <li>메뉴</li>
                  <li><a href="#">스페셜</a></li>
                  <li><a href="#">프리미엄</a></li>
                  <li><a href="#">와퍼&버거</a></li>
                  <li><a href="#">치킨&치킨버거</a></li>
                  <li><a href="#">사이드</a></li>
                  <li><a href="#">음료</a></li>
                  <li><a href="#">아침메뉴</a></li>
                </ul>
              </li>
              <li>
                <ul className="foot_sub_menu">
                  <li>매장</li>
                  <li><a href="#">매장찾기</a></li>
                </ul>
              </li>
              <li>
                <ul className="foot_sub_menu">
                  <li>이벤트</li>
                  <li><a href="#">이벤트</a></li>
                </ul>
              </li>
              <li>
                <ul className="foot_sub_menu">
                  <li>브랜드 스토리</li>
                  <li><a href="#">버거킹 스토리</a></li>
                  <li><a href="#">WHY 버거킹</a></li>
                  <li><a href="#">버거킹 News</a></li>
                </ul>
              </li>
              <li>
                <ul className="foot_sub_menu">
                  <li>고객센터</li>
                  <li><a href="#">공지사항</a></li>
                  <li><a href="#">버거킹앱이용안내</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">문의</a></li>
                  <li><a href="#">가맹점모집</a></li>
                  <li><a href="#">인재채용</a></li>
                </ul>
              </li>
            </ul>
          </div>
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
      </div>
    );
  }
}
export default Foot;
