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
            <img src={jimin} className='center_img' />
            <div className='Bar'>
              <div className="arrow left"/>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_1}/>
                </div>
                <div className='text'>
                  <p className='title'>191121 출국</p>
                  <p className='subtitle'>SAINT LAURENT</p>
                  <p className='subtitle'>Sequin velvet Bomber jacket</p>
                  <p className='subtitle'>$4,590</p>
                </div>
              </div>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_2}/>
                </div>
                <div className='text'>
                  <p className='title'>200614 방방콘 퇴근</p>
                  <p className='subtitle'>[NOMAD]</p>
                  <p className='subtitle'>Human T-Shirt</p>
                  <p className='subtitle'>$73</p>
                </div>
              </div>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_3}/>
                </div>
                <div className='text'>
                  <p className='title'>201222 달려라방탄</p>
                  <p className='subtitle'>[Carhatt]</p>
                  <p className='subtitle'>Bib Overall Denim -Stone ...</p>
                  <p className='subtitle'>$218</p>
                </div>
              </div>
              <div className="arrow right"/>
            </div>
          </div>
          <div className='Item'>
            <img src={iu} className='center_img' />
            <div className='Bar'>
              <div className="arrow left"/>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_1}/>
                </div>
                <div className='text'>
                  <p className='title'>191121 출국</p>
                  <p className='subtitle'>SAINT LAURENT</p>
                  <p className='subtitle'>Sequin velvet Bomber jacket</p>
                  <p className='subtitle'>$4,590</p>
                </div>
              </div>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_2}/>
                </div>
                <div className='text'>
                  <p className='title'>200614 방방콘 퇴근</p>
                  <p className='subtitle'>[NOMAD]</p>
                  <p className='subtitle'>Human T-Shirt</p>
                  <p className='subtitle'>$73</p>
                </div>
              </div>
              <div className='Box'>
                <div className='cap'>
                  <img className="image" src={home_3}/>
                </div>
                <div className='text'>
                  <p className='title'>201222 달려라방탄</p>
                  <p className='subtitle'>[Carhatt]</p>
                  <p className='subtitle'>Bib Overall Denim -Stone ...</p>
                  <p className='subtitle'>$218</p>
                </div>
              </div>
              <div className="arrow right"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout_Home;
