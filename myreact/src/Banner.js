import React from 'react';
import './App.css';
import Slider from "react-slick";

class Banner extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        pc : [
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c2c00735-614b-4363-a100-8d9300bd4bb5.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/a221f0de-ce33-48f1-b706-4d1a8bd10e05.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/2a5417f6-63aa-482c-a405-84a38e2ce8e3.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/bc2a7dfa-50a5-4d16-b53d-eae64ac06e78.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c5be16f5-24b3-480c-89ac-38538182b58c.png",
        ],
        mobile : [
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/e7309ed4-6625-485c-a9e0-a5520b911a3a.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/2e649ac3-dad6-4407-9ec3-eb37268bb48c.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/26b44247-2d8e-49a0-a77a-3dfb34c362e4.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/e4b92eb8-0fe8-430a-8dc4-24bf7b40d335.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/ca296c9f-b046-4e77-9874-1e28d2941470.png",
        ],
        banner : [
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c2c00735-614b-4363-a100-8d9300bd4bb5.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/a221f0de-ce33-48f1-b706-4d1a8bd10e05.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/2a5417f6-63aa-482c-a405-84a38e2ce8e3.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/bc2a7dfa-50a5-4d16-b53d-eae64ac06e78.png",
            "https://d1cua0vf0mkpiy.cloudfront.net/images/web/banner/c5be16f5-24b3-480c-89ac-38538182b58c.png",
        ],

      }
  }

  handleResize = () => {
    this.setState({
        banner : this.state.pc,
    });
      if(window.innerWidth < 870){
        this.setState({
            banner : this.state.mobile,
        });
      }
  }


  componentDidMount = () => {
    window.addEventListener("resize",this.handleResize, false);
    const mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
    for (let info in mobileKeyWords) {
        if (navigator.userAgent.match(mobileKeyWords[info]) != null || window.innerWidth < 960) {
            this.setState({
                banner : this.state.mobile,
            })
        }
    }
  }
  componentWillUnmount(){
    window.addEventListener("resize",this.handleResize, false);
  }

  render(){
    const banner_list = this.state.banner.map((list) => ( <div key={list.toString()}><img src={list} /></div>) );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false,
      };
    return (
      <div className="banner container">
          <Slider {...settings}>
              {banner_list}
          </Slider>
      </div>
    );
  }
}
export default Banner;
