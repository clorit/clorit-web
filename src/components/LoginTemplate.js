import React from 'react';
import { Route, Link } from 'react-router-dom';
import './LoginTemplate.scss';

const LoginTemplate = () => {
  return (
    <div className='LoginTemplate'>
      <div className='Top'>로그인</div>
      <div className='Form'>
        <input />
        <input />
        <button>로그인</button>
        <div className='Bottom'>
          <div className='Item'>자동로그인</div>
          <div className='Item'>아이디 찾기</div>
          <div className='Item'>비밀번호 찾기</div>
        </div>
      </div>
      <div className='ButtonGroup'>
        <button style={{ background: '#FEE500', border: '1px solid #FEE500' }}>
          카카오 로그인
        </button>
        <button style={{ background: '#FFFFFF', border: '1px solid #BFBFBF' }}>
          Google 로그인
        </button>
      </div>
      <div className='Bottom'>
        <span className='Clorit'>클로릿</span>
        <span>의 회원혜택을 받아보세요 </span>
        <Link to='/register' style={{ textDecoration: 'none', color: 'blue' }}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginTemplate;
