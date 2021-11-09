import React from 'react';
import '../scss/MainLayout_Home.scss';
import jimin from '../asset/image/jimin.png';
import iu from '../asset/image/iu.png';

const MainLayout_Home = () => {
  return (
    <>
      <div className='MainLayout'>
        <div className='Main'>
          <div className='Item'>
            <img src={jimin} />
            <div className='Bar'></div>
          </div>
          <div className='Item'>
            <img src={iu} />
            <div className='Bar'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout_Home;
