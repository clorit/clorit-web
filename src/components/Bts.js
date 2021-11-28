import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Bts from './MainLayout_Bts.js';



const Bts = () => {

    return (
        <div className="Bts">
            <HeaderTemplate></HeaderTemplate>
            <MainLayout_Bts></MainLayout_Bts>
            <Footer></Footer>
        </div>
    );

}

export default Bts;
