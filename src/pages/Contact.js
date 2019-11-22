import React from 'react';

const Contact = () => {
    return(
        <>
            <div className="contact section-title mt-5">
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

                        <div className="col-lg-8 mx-auto text-white">
                            <div className="contact-form mb-5 mt-5">
                                <form>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <textarea className="form-control" placeholder="Message" rows="4"/>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn mt-5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;