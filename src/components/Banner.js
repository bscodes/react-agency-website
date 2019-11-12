import React from 'react';
import Logo from '../img/like.png';
import '../App.scss';

function Banner () {
    // referans https://cdn.dribbble.com/users/380831/screenshots/7118539/media/c8aed4a7ea3dd89e3554b5ca4fc3ef20.png
    // ref https://dribbble.com/shots/7118539-PaperplaneCo-Creative-Agency-landing-page-design
    // ref https://dribbble.com/shots/7160388-PaperplaneCo-Creative-Agency-landing-page-design/attachments/163344?mode=media
    // ref https://robotic.netlify.com/index-demo-1.html
    // ref http://html.xpeedstudio.com/agmycoo/index-v4.html
    // ref http://quomodosoft.com/html/wan/wan/home5-sass.html
    return (
      <div className="banner">
          <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                    <div className="banner-text text-left mt-4">
                        <h1 className="title-font">
                            We help
                            your
                            business
                            <span className="text-customer"> grow</span> 
                        </h1>
                    </div>
                </div>
                <div className="banner-image-mobile">
                    <div className="col-xl-7 col-lg-6 d-lg-block">
                        <div className="banner-area">
                            <img className="banner-image" src={Logo} alt="images"/>
                        </div>
                    </div>
                </div>
                <div className="banner-image-desktop col-xl-7 col-lg-6 d-lg-block">
                    <div className="banner-area">
                        <img className="banner-image" src={Logo} alt="images"/>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;