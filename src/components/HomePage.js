import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner';
import Body from './Body';
import '../App.scss';

const Home = () => {
    return(
        <>
            <Navbar/>
            <Banner/>
            <Body/>
        </>
    );
}

export default Home;