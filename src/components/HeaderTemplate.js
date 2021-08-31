import React from "react";
import styled from "styled-components";
import "./HeaderTemplate.scss";
import { ReactComponent as NotiIcon } from "../asset/icon/notification.svg";
import { ReactComponent as LoginIcon } from "../asset/icon/login.svg";
import { ReactComponent as SearchIcon } from "../asset/icon/search.svg";

const Header = () => {
  return (
    <div className="HeaderTemplate">
      <div className="Top">
        <div className="Item">
          <NotiIcon />
          알림
        </div>
        <div className="Item">
          <LoginIcon />
          로그인
        </div>
      </div>
      <div className="Title">CLORIT</div>
      <div className="Search">
        <input />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
      <div className="Bottom">
        <div className="Item">홈</div>
        <div className="Item">상세 검색</div>
        <div className="Item">랭킹</div>
        <div className="Item">업로드</div>
        <div className="Item">마이</div>
      </div>
    </div>
  );
};

export default Header;
