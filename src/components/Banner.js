import React from 'react';
import Logo from '../img/infinity.png';
import '../App.css';

function Banner () {
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