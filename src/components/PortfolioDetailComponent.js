import React from 'react';


const PortfolioDetailComponent = (props) => {
    const {
        title,
        src,
        desc,
        date,
        category
    } = props.item

    return(
        <>
            <div className="detail section-title mt-5 mb-5">
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-md-7 mx-auto">
                            <div className="services-title mb-5 mt-5">
                                <h2 className="title-font title-font-size">
                                    {title}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="detail-image-box mb-5">
                                <img src={src} alt="detail" className="detail-image"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="detail-info text-left title-font-2">
                                <h2 className="work-title">
                                    {title}
                                </h2>
                                <p className="description title-text mt-4 mb-4 ">
                                {desc}
                                </p>
                                <hr/>
                                <h3 className="work-info mb-3">
                                    Info
                                </h3>
                                <div className="work-item-date mb-3">
                                    <span className="date-title pr-3">
                                        Date: 
                                    </span> 
                                    <span className="work-date">
                                         {date}
                                    </span>
                                </div>
                                <div className="work-item-category mb-3">
                                    <span className="category-title pr-3">
                                        Category: 
                                    </span> 
                                    <span className="work-category">
                                         {category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioDetailComponent;