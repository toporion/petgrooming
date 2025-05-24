import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';
import NavBar from '../components/NavBar';
import MenuBar from '../components/MenuBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <MenuBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;