import React from 'react';
import '../scss/HeaderTemplate.scss';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Codi from './MainLayout_Codi';

const Codi = () => {
  return (
    <div>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout_Codi></MainLayout_Codi>
      <Footer></Footer>
    </div>
  );
};

export default Codi;
