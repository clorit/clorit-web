import React from 'react';
import bts from '../asset/image/bts.PNG';
import '../scss/MainLayout_Bts.scss';
import { Router,Link} from 'react-router-dom';


const MainLayout_Bts = () => {
  return (
    <div>
      <div className='MainLayout_Bts'>
        <Link to='/jimin'>
          <img src={bts} className='img'  />
        </Link>
      </div>
    </div>
  );
};

export default MainLayout_Bts;
