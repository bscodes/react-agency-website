import React from 'react';
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
            <section className="solutions">
                <div className="container text-center">
                    <div className="row align-items-center">
                        
                        <div className="col-12 col-lg-6">
                            <div className="solutions-title text-white mb-4 mt-4">
                                <h1 className="title-font">
                                    Our solutions
                                </h1>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Body;