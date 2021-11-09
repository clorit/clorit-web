import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../scss/HeaderTemplate.scss';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Ranking from './MainLayout_Ranking';

const Ranking = () => {
  return (
    <div>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout_Ranking></MainLayout_Ranking>
      <Footer></Footer>
    </div>
  );
};

export default Ranking;
