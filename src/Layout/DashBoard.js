import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Menu from '../Shared/Menu';

const DashBoard = () => {
    return (
        <div>
            <Menu></Menu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashBoard;