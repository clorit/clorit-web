import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Home from './MainLayout_Home';

const Home = () => {
  return (
    <>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout_Home></MainLayout_Home>
      <Footer></Footer>
    </>
  );
};

export default Home;
