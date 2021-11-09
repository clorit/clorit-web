import React from 'react';
import { Route, Link } from 'react-router-dom';
import '../scss/HeaderTemplate.scss';
import { ReactComponent as NotiIcon } from '../asset/icon/notification.svg';
import { ReactComponent as LoginIcon } from '../asset/icon/login.svg';
import { ReactComponent as SearchIcon } from '../asset/icon/search.svg';

const OnClickNotification = () => {
  alert('A');
};

const Header = () => {
  const standardLinkStyle = {
    textDecoration: 'none',
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const menuLinkStyle = {
    textDecoration: 'none',
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className='HeaderTemplate'>
      <div className='Top'>
        <div className='Item'>
          <NotiIcon />
          <div className='noti' onClick={OnClickNotification}>
            알림
          </div>
        </div>
        <div className='Item'>
          <LoginIcon />
          <Link to='/login' style={standardLinkStyle}>
            로그인
          </Link>
        </div>
      </div>
      <div className='Title'>
        <Link to='/'>CLORIT</Link>
      </div>
      <div className='Search'>
        <input />
        <button type='submit'>
          <SearchIcon />
        </button>
      </div>
      <div className='Bottom'>
        <div className='Item'>
          <Link to='/' style={standardLinkStyle}>
            홈
          </Link>
        </div>
        <div className='Item'>
          <Link to='/' style={standardLinkStyle}>
            상세 검색
          </Link>
        </div>
        <div className='Item'>
          <Link to='/ranking' style={standardLinkStyle}>
            랭킹
          </Link>
        </div>
        <div className='Item'>
          <Link to='/upload' style={standardLinkStyle}>
            업로드
          </Link>
        </div>
        <div className='Item'>마이</div>
      </div>
      <div className='BottomMenuLayout'>
        <div className='BottomMenu'>
          <div className='Item'>
            <Link to='/' style={menuLinkStyle}>
              홈
            </Link>
          </div>
          <div className='Item'>
            <Link to='/artists' style={menuLinkStyle}>
              전체 아티스트
            </Link>
          </div>
          <div className='Item'>
            <Link to='/' style={menuLinkStyle}>
              추천 코디
            </Link>
          </div>
          <div className='Item'>
            <Link to='/' style={menuLinkStyle}>
              이벤트
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
