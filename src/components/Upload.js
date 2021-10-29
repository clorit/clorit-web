import React from 'react';
import { Route, Link } from 'react-router-dom';
import HeaderTemplate from './HeaderTemplate';
import Footer from './Footer';
import MainLayout_Upload from './MainLayout_Upload';

const Upload = () => {
  return (
    <div>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout_Upload></MainLayout_Upload>
      <Footer></Footer>
    </div>
  );
};

export default Upload;
