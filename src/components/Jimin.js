import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Jimin from './MainLayout_Jimin.js';



const Jimin = () => {

    return (
        <div className="Search">
            <HeaderTemplate></HeaderTemplate>
            <MainLayout_Jimin></MainLayout_Jimin>
            <Footer></Footer>
        </div>
    );

}

export default Jimin;
