import React from 'react';
import { Route, Link } from 'react-router-dom';
import './RegisterTemplate.scss';

const RegisterTemplate = () => {
  return (
    <div className='RegisterTemplate'>
      <div className='Top'>회원가입</div>
      <div className='Form'>
        <div className='Email'>
          이메일
          <input />
        </div>
        <div className='Pwd'>
          비밀번호
          <input type='password' />
        </div>
        <div className='VPwd'>
          비밀번호 확인
          <input type='password' />
        </div>
        <label>
          <div className='CheckBox'>
            <input type='checkbox' />
            <div className='Text'>
              (필수) 이용약관 및 개인정보보호정책에 동의합니다
            </div>
          </div>
          <div className='CheckBox'>
            <input type='checkbox' />
            <div className='Text'>이메일로 클로릿의 뉴스레터를 받겠습니다</div>
          </div>
        </label>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default RegisterTemplate;
