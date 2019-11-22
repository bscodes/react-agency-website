import React from 'react';
import LetsWork from '../components/LetsWorkTogether';

// service icons 
import icon1 from '../img/services/instaicon.png';
import mail from '../img/services/mail.png';
import seo from '../img/services/seo.png';
import content from '../img/services/content.png';
import share from '../img/services/share.png';
import web from '../img/services/web.png';


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
            "image": mail,
            "description": "Stay top of mind with one of the most creative email marketing campaigns."
        },
        {
            "id": "3",
            "title": "Search Engine Optimization",
            "image": seo,
            "description": "Rank in the top of search engines. Local SEO, link building, and more"
        },
        {
            "id": "4",
            "title": "Content Marketing Services",
            "image": content,
            "description": "We can be your company voice with quality content. Our writing team will give your brand the voice it needs to stick out."
        },
        {
            "id": "5",
            "title": "Social Media Paid Advertising",
            "image": share,
            "description": "From brand awareness campaigns to lead funnels, we have got the tools to create the right ads for your business. "
        },
        {
            "id": "6",
            "title": "Web Design & Development",
            "image": web,
            "description": "Our web design and development services include everything from graphic design to UX."
        }
    ]

    return(
        <>
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
                                    <div className="service-info-title">
                                        <h3 className="service-name title-font-2">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <div className="service-info">
                                        <p className="service-description text-left title-font-2 mt-3">
                                        {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            
        <LetsWork/>
        </>
    );
}

export default Services;