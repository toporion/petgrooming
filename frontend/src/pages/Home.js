import React from 'react';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <MenuBar />
            <Banner />
        </div>
    );
};

export default Home;