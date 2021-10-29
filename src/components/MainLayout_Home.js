import React from 'react';
import './MainLayout_Home.scss';
import jimin from '../asset/image/jimin.png';
import iu from '../asset/image/iu.png';

const MainLayout_Home = () => {
  return (
    <>
      <div className='MainLayout'>
        <div className='Top'>
          <div className='Item'>홈</div>
          <div className='Item'>전체 아티스트</div>
          <div className='Item'>추천 코디</div>
          <div className='Item'>이벤트</div>
        </div>
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
