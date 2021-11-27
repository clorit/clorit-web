import React from 'react';
import '../scss/MainLayout_Artists.scss';
import { Router,Link} from 'react-router-dom';

const MainLayout_Artists = () => {
  return (
    <div>
      <div className='MainLayout_Artists'>
        <div className='Top'>
          <p>전체 아티스트</p>
        </div>
        <div className = 'box'>
          <div className ='block'>
            <div className = 'redBox'>
              <p>A - Z</p>
            </div>
            <div className ='textBox'>
              <p>(여자)아이들</p>
              <p>2PM</p>
              <p>AB6IX</p>
              <p>B.A.P</p>
              <p>B1A4</p>
              <p>BLACKPINK</p>
              <p>CIX</p>
              <p>CRAVITY</p>
              <p>DAY6</p>
              <p>ENHYPEN</p>
              <p>EXID</p>
              <p>EXO</p>
              <p>GOT7</p>
              <p>iKON</p>
              <p>ITZY</p>
              <p>JBJ</p>
              <p>NCT</p>
              <p>SF9</p>
              <p>STAYC</p>
              <p>Stray Kids</p>
              <p>SuperM</p>
              <p>TREASURE</p>
              <p>TWICE</p>
              <p>VERIVERY</p>
              <p>WINNER</p>
            </div>
          </div>
          <div className ='block'>
            <div className = 'redBox'>
              <p>ㄱ - ㅅ</p>
            </div>
            <div className ='textBox'>
              <p>골든차일드</p>
              <p>구구단</p>
              <p>뉴이스트</p>
              <p>더보이즈</p>
              <p>동방신기</p>
              <p>러블리즈</p>
              <p>로켓펀치</p>
              <p>레드벨벳</p>
              <p>마마무</p>
              <p>몬스타엑스</p>
              <Link to='/jimin' className = 'text'>
              방탄소년단
              </Link>
              <p>보이프렌드</p>
              <p>비투비</p>
              <p>빅뱅</p>
              <p>빅스</p>
              <p>빅톤</p>
              <p>소녀시대</p>
              <p>샤이니</p>
              <p>세븐틴</p>
              <p>슈퍼주니어</p>
            </div>
          </div>
          <div className ='block'>
            <div className = 'redBox'>
              <p>ㅇ- ㅎ</p>
            </div>
            <div className ='textBox'>
              <p>아스트로</p>
              <p>아이즈원</p>
              <p>업텐션</p>
              <p>에스파</p>
              <p>에이티즈</p>
              <p>에이프릴</p>
              <p>에이핑크</p>
              <p>에프엑스</p>
              <p>여자친구</p>
              <p>오마이걸</p>
              <p>온앤오프</p>
              <p>우주소녀</p>
              <p>이달의소녀</p>
              <p>원어스</p>
              <p>인피니트</p>
              <p>크나큰</p>
              <p>투모로우바이투게더</p>
              <p>틴탑</p>
              <p>펜타곤</p>
              <p>프로미스나인</p>
              <p>하이라이트</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout_Artists;
