import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Works = () => {
    return(
        <>
        <Navbar/>
        <Portfolio/>
        <Footer/>
        </>
    );
}

export default Works;