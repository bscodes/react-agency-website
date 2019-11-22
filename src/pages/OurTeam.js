import React, { Component } from 'react';
import { connect } from "react-redux";
import ImageContentHover from 'react-image-hover';


class OurTeam extends Component {
        
    render() {

        return(
            <>
                <section className="team section-title mt-5 text-white text-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-7 mx-auto">
                                <div className="team-title mb-5 mt-5">
                                    <h1 className="title-font title-font-size">
                                        Our team
                                    </h1>
                                    <p className="title-text mt-4 mb-4 title-font-2">
                                    Great work, great people.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            {this.props.persons.map(person => (
                                // show portfoilo boxes by mapping the array of images
                                <div className="col-lg-4 col-md-6 col-sm-6" key={person.id} >
                                    <div className="portfolio-thumb">
                                        <ImageContentHover
                                            className="center-block"
                                            image = {person.image}
                                            content={{
                                                title: [person.name],
                                                body: [person.position]
                                            }} 
                                            effect="fadeIn"
                                        />
                                    </div>
                                    <div className="person-info mb-5">
                                        <p className="person-name title-font-2"> {person.name} </p>
                                        <p className="person-position title-font-2"> {person.position} </p>
                                    </div>
                                </div> 
                            ))}       
                        </div>
                    </div>
                </section>
            </>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        persons: state.team
    }
}



export default connect(mapStateToProps) (OurTeam);