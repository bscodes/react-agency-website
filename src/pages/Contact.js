import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return(
        <>
            <Navbar/>
            <div className="contact mt-5">
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto">
                            <div className="contact-title mb-5 mt-5">
                                <h1 className="title-font title-font-size">
                                Contact
                                </h1>
                                <p className="mt-4 mb-4 title-font-2">
                                    Say Hello. If you want to extend some info, 
                                    do not hesitate to fill this form, we love to 
                                    say ‘Hello Mate’.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-8 col-md-offset-2">
                            <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;