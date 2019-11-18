import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

// icon images
import icon1 from '../img/services/instaicon.png';


const Services = () => {

    const serviceIcons = [
        {
            "id": "1",
            "title": "Instagram Engagement Campaign",
            "image": icon1,
            "description": "Our Instagram engagement campaign will have your Instagram account come alive. "
        },
        {
            "id": "2",
            "title": "Email Marketing",
            "image": icon1,
            "description": "Stay top of mind with one of the most creative email marketing campaigns."
        }
    ]

    return(
        <>
        <Navbar/>
        <div className="services section-title mt-5">
            <div className="container text-white">
                <div className="row align-items-center">
                    <div className="col-md-7 mx-auto">
                        <div className="services-title mb-5 mt-5">
                            <h1 className="title-font title-font-size">
                                Services
                            </h1>
                            <p className="title-text mt-4 mb-4 title-font-2">
                                Our services are built for your business needs
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    {
                        serviceIcons.map(service => (
                            <div className="col-12 col-lg-6" key={service.id}>
                                <div className="service-boxes">
                                    <div className="service-icon">
                                    <img className="service-icon-img mb-3" src={service.image} alt="instagram"/>
                                    </div>
                                    <h3 className="service-name title-font-2">
                                        {service.title}
                                    </h3>
                                    <p className="service-description text-left title-font-2 mt-3">
                                    {service.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Services;