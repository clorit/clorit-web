import React, { useCallback, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import '../scss/HeaderTemplate.scss';
import { ReactComponent as NotiIcon } from '../asset/icon/notification.svg';
import { ReactComponent as LoginIcon } from '../asset/icon/login.svg';
import { ReactComponent as SearchIcon } from '../asset/icon/search.svg';

const OnClickNotification = () => {
  alert('A');
};

const nav_category = {
  홈: {
    id: 'home',
    value: '홈',
    children: [
      { id: 'child_home', value: '홈', to: '/' },
      { id: 'artists', value: '전체 아티스트', to: '/artists' },
      { id: 'codi', value: '추천 코디', to: '/codi' },
      { id: 'event', value: '이벤트' },
    ],
  },
  '상세 검색': {
    id: 'detailed_search',
    value: '상세 검색',
    children: [{ id: 'child_search', value: '상세 검색', to: '/search' }],
  },
  랭킹: {
    id: 'ranking',
    value: '랭킹',
    children: [{ id: 'child_ranking', value: '랭킹', to: '/ranking' }],
  },
  업로드: {
    id: 'upload',
    value: '업로드',
    children: [
      { id: 'child_upload', value: '업로드', to: '/upload' },
      { id: 'upload_check', value: '업로드 확인' },
    ],
  },
  마이: {
    id: 'my',
    value: '마이',
    children: [{ id: 'my_page', value: '마이 페이지' }],
  },
};

const FakeHeader = () => {
  const standardLinkStyle = {
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const [tabMenu, setTabMenu] = useState(nav_category['홈']);

  const onMouseOver = useCallback((e) => {
    setTabMenu(nav_category[e.target.text]);
  });

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
        <div className='Item' onMouseOver={onMouseOver}>
          <Link to='/' style={standardLinkStyle}>
            홈
          </Link>
        </div>
        <div className='Item' onMouseOver={onMouseOver}>
          <Link to='/search' style={standardLinkStyle}>
            상세 검색
          </Link>
        </div>
        <div className='Item' onMouseOver={onMouseOver}>
          <Link to='/ranking' style={standardLinkStyle}>
            랭킹
          </Link>
        </div>
        <div className='Item' onMouseOver={onMouseOver}>
          <Link to='/upload' style={standardLinkStyle}>
            업로드
          </Link>
        </div>
        <div className='Item' onMouseOver={onMouseOver}>
          <Link to='/' style={standardLinkStyle}>
            마이
          </Link>
        </div>
      </div>
      <div className='BottomMenuLayout'>

        <div className='BottomMenu'>
          {tabMenu.children.map((subCategory) => (
            <div className='Item'>
              <Link
                to={subCategory.to === undefined ? '/' : subCategory.to}
                style={standardLinkStyle}
                className={subCategory.id}
              >
                {subCategory.value}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FakeHeader;
