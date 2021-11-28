import React from 'react';
import styled from 'styled-components';
import FakeHeaderTemplate from './FakeHeaderTemplate';
import Footer from './Footer';
import MainLayout_Home from './MainLayout_Home';

const FakeHome = () => {
  return (
    <>
      <FakeHeaderTemplate></FakeHeaderTemplate>
      <MainLayout_Home></MainLayout_Home>
      <Footer></Footer>
    </>
  );
};

export default FakeHome;
