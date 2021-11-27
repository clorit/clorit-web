import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_DetailedJimin from './MainLayout_DetailedJimin.js';



const DetailedJimin = () => {

    return (
        <div className="DetailedJimin">
            <HeaderTemplate></HeaderTemplate>
            <MainLayout_DetailedJimin></MainLayout_DetailedJimin>
            <Footer></Footer>
        </div>
    );

}

export default DetailedJimin;
