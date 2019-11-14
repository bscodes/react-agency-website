import React from 'react';
import { Link } from 'react-router-dom'
import Portfolio1 from '../img/portfolio/p1.jpg';
import Portfolio2 from '../img/portfolio/p2.jpg';
import Portfolio3 from '../img/portfolio/p3.jpg';
import Portfolio4 from '../img/portfolio/p4.jpg';
import Portfolio5 from '../img/portfolio/p5.jpg';
import Portfolio6 from '../img/portfolio/p6.jpg';
import '../App.scss';

const Body = () => {
    return(
        <>
            <section className="about-us-area text-white">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="about-us-text-area mb-5 mt-5">
                                <h2 className="about-us-text title-font-3">
                                    We specialize in telling brand stories 
                                    <br/>
                                    along the entire customer journey.
                                </h2>
                                <p className="mt-4 mb-4 title-font-2">
                                    Our end-to-end approach helps you define 
                                    opportunities, bring ideas to life,
                                    <br/>
                                    measure their impact and keep improving them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="portfolio">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="portfolio-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                Take a look at our portfolio
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                For every complex problem, 
                                there is an answer that is clear, 
                                simple, and wrong.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-thumb">
                                <img src={Portfolio1} alt="" className="center-block"/>
                                <div className="overlay">
                                    <h2>Hover effect 3</h2>
                                    <Link className="info" to="/">link here</Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-single">
                                <div className="portfolio-thumb">
                                    <img src={Portfolio2} alt="" className="center-block"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-single">
                                <div className="portfolio-thumb">
                                    <img src={Portfolio3} alt="" className="center-block"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-single">
                                <div className="portfolio-thumb">
                                    <img src={Portfolio4} alt="" className="center-block"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-single">
                                <div className="portfolio-thumb">
                                    <img src={Portfolio5} alt="" className="center-block"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="portfolio-single">
                                <div className="portfolio-thumb">
                                    <img src={Portfolio6} alt="" className="center-block"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="lead">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="lead-title text-white mb-5 mt-4">
                                <h1 className="title-font">
                                Let's work together
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                Scaling-up your business 
                                is our mission!
                                </p>
                                <button className="btn text-white">
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-sm-12">
                            <p className="mt-4 mb-4 title-font-2">
                            ©2019 A. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Body;