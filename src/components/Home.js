import React from "react";
import styled from "styled-components";
import HeaderTemplate from "./HeaderTemplate";
import Footer from "./Footer";
import MainLayout from "./MainLayout";

const Home = () => {
  return (
    <>
      <HeaderTemplate></HeaderTemplate>
      <MainLayout></MainLayout>
      <Footer></Footer>
      <div></div>
    </>
  );
};

export default Home;
