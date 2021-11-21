import React from 'react';
import '../scss/MainLayout_Home.scss';
import jimin from '../asset/image/jimin.png';
import iu from '../asset/image/iu.png';
import home_1 from '../asset/image/home_1.png';
import home_2 from '../asset/image/home_2.png';
import home_3 from '../asset/image/home_3.png';

const MainLayout_Home = () => {
  return (
    <>
      <div className='MainLayout'>
        <div className='Main'>
          <div className='Item'>
            <img src={jimin} />
            <div className='Bar'>
              <div className='Box'>
                <div className='cap'>
                  <img src={home_1}/>
                </div>
                <div className='text'>
                  <p>191121 출국</p>
                  <p>SAINT LAURENT</p>
                  <p>Sequin velvet Bomber jacket</p>
                  <p>$4,590</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className='Item'>
            <img src={iu} />
            <div className='Bar'>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout_Home;
