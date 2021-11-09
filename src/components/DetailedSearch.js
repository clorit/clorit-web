import React from 'react';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Search from './MainLayout_Search';



const DetailedSearch = () => {



    return (
        <div className="Search">
            <HeaderTemplate></HeaderTemplate>
            <MainLayout_Search></MainLayout_Search>
            <Footer></Footer>
        </div>
    );

}

export default DetailedSearch;