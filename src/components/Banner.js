import React from 'react';
import Logo from '../img/infinity.png';
import '../App.css';

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
                <div className="col-sm-12">
                    <div className="banner-area">
                    <center>
                        <img className="banner-image" src={Logo} alt="images"/>
                    </center>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="banner-text text-left">
                        <h1 className="title-font">
                            How can we help
                            <br/> 
                            <span className="text-yellow">YOU </span> 
                            help your
                            <br/>
                            <span className="text-customer" >CUSTOMER?</span> 
                        </h1>
                    </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Banner;