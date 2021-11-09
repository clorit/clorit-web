import React from 'react';
import '../scss/HeaderTemplate.scss';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Artists from './MainLayout_Artists';

const Artists = () => {
  return (
    <div>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout_Artists></MainLayout_Artists>
      <Footer></Footer>
    </div>
  );
};

export default Artists;
