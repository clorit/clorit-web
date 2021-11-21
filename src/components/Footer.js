import React from 'react';
import styled from 'styled-components';
import Instagram from '../asset/icon/instagram.svg';
import Mail from '../asset/icon/mail.svg';
import Guide from '../asset/icon/guide.svg';
import '../scss/Footer.scss';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Title'>
        최애 손민수템 검색은 <span className='Clorit'>클로릿</span>!
      </div>
      <div className='icon-group'>
        <figure>
          <a href='https://instagram.com/clorit2021?utm_medium=copy_link'>
            <img src={Instagram}></img>
            <figcaption>인스타그램</figcaption>
          </a>
        </figure>
        <figure>
          <a href='https://page.stibee.com/subscriptions/140470'>
            <img src={Mail}></img>
            <figcaption>뉴스레터 구독</figcaption>
          </a>
        </figure>
        <figure>
          <img src={Guide}></img>
          <figcaption>클로릿 가이드</figcaption>
        </figure>
      </div>

      <div className='contact'>문의 메일: clorit@gmail.com</div>
    </div>
  );
};

export default Footer;
