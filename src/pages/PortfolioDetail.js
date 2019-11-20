import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/Navbar';
import DetailComponent from '../components/PortfolioDetailComponent';
import LetsWork from '../components/LetsWorkTogether';
import Footer from '../components/Footer';

const PortfolioDetail = (props) => {
    return(
        <>
            <Navbar/>
            <DetailComponent item={props.item}/>
            <LetsWork/>
            <Footer/>
        </>
    );
}

const mapStateToProps = (state, props) => {
    // display the work detail who match with clicked image by checking id
    const item = state.works.find(item => item.id === +props.match.params.id);

    return { item }
}

export default connect(mapStateToProps, null) (PortfolioDetail);