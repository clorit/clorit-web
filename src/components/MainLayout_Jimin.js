import React from 'react';
import img1 from '../asset/image/img1.PNG';
import '../scss/MainLayout_Jimin.scss';
import { Router,Link} from 'react-router-dom';

const MainLayout_Jimin = () => {
  return (
    <div>
      <div className='MainLayout_Jimin'>
        <Link to='/detailed_jimin'>
          <img src={img1} className='img'  />
        </Link>
      </div>
    </div>
  );
};

export default MainLayout_Jimin;
