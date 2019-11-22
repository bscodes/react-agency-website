import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Body from '../components/Body';
import '../App.scss';

const Home = () => {
    return(
        <>
            <Navbar/>
            <Banner/>
            <Body/>
            <Footer/>
        </>
    );
}

export default Home;