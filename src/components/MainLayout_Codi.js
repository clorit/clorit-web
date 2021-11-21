import React from 'react';
import '../scss/MainLayout_Codi.scss';
import codi_1 from '../asset/image/codi_1.png';
import codi_2 from '../asset/image/codi_2.png';
import codi_3 from '../asset/image/codi_3.png';
import codi_4 from '../asset/image/codi_4.png';

const MainLayout_Codi = () => {
  return (
    <div>
      <div className='MainLayout_Codi'>
        <div className = 'Bar'>
          <div className = 'Box'>
            <div className = 'Cap'>
              <img className = 'image' src = {codi_1}/>
            </div>
            <div className = 'text'>
              <p className='t1'>NCT 지성과 어울리는 봄나들이 여친룩</p>
              <p className='t2'>로맨틱크라운과 함께 꾸며봐요</p>
            </div>
          </div>
          <div className = 'Box'>
            <div className = 'Cap'>
              <img className = 'image' src = {codi_2}/>
            </div>
            <div className = 'text'>
              <p className='t1'>"Attaca"로 돌아온 세븐틴으로 배우는</p>
              <p className='t1'>청자켓코디</p>
            </div>
          </div>
        </div>
        <div className = 'Bar'>
          <div className = 'Box'>
            <div className = 'Cap'>
              <img className = 'image' src = {codi_3}/>
            </div>
            <div className = 'text'>
              <p className='t1'>슬기의 분위기 가을겨울룩 따라입기</p>
              <p className='t2'>클로릿이 추천하는 머플러 모음</p>
            </div>
          </div>
          <div className = 'Box'>
            <div className = 'Cap'>
              <img className = 'image' src = {codi_4}/>
            </div>
            <div className = 'text'>
              <p className='t1'>윈또체?! 에스파처럼 체크셔츠 활용하기</p>
              <p className='t2'>체크셔츠랑 같이 입기 좋은 제품 추천</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout_Codi;
