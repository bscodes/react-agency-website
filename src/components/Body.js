import React from 'react';
import { Link } from 'react-router-dom';
import ImageContentHover from 'react-image-hover';
import Portfolio1 from '../img/portfolio/p1.jpg';
import Portfolio2 from '../img/portfolio/p2.jpg';
import Portfolio3 from '../img/portfolio/p3.jpg';
import Portfolio4 from '../img/portfolio/p4.jpg';
import Portfolio5 from '../img/portfolio/p5.jpg';
import Portfolio6 from '../img/portfolio/p6.jpg';
import '../App.scss';



const Body = () => {

    const images = [
        {   
            "id": 1,
            "src": [Portfolio1],
            "title": "Minimal Design"
        },
        {   
            "id": 2,
            "src": [Portfolio2],
            "title": "Geometry"
        },
        {   
            "id": 3,
            "src": [Portfolio3],
            "title": "Circle"
        },
        {   
            "id": 4,
            "src": [Portfolio4],
            "title": "Ceramic Bottle"
        },
        {   
            "id": 5,
            "src": [Portfolio5],
            "title": "Creative Work"
        },
        {   
            "id": 6,
            "src": [Portfolio6],
            "title": "No Gravity"
        }
    ]
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

                        {images.map(image => (
                            // show portfoilo boxes by mapping the array of images
                            <div className="col-lg-4 col-md-6 col-sm-6" key={image.id} >
                                <div className="portfolio-thumb">
                                    <Link to="/contact">  
                                        <ImageContentHover
                                            className="center-block"
                                            image = {image.src}
                                            content={{
                                                title: [image.title]
                                            }} 
                                            effect="fadeIn"
                                        />
                                    </Link>
                                </div>
                            </div> 
                        ))}
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
                                <Link to="/contact">
                                    <button className="btn text-white">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Body;