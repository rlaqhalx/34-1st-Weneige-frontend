import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="navBar">
      <div className="navLogo">
        <Link to="#">
          <img
            src="https://www.laneige.com/kr/ko/assets/image/a/laneige-logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="categories">
        <li>
          <span className="category">브랜드</span>
        </li>
        <li>
          <span className="category">미츠 아트</span>
        </li>
        <li>
          <span className="category">베스트 & 신상품</span>
        </li>
        <li>
          <span className="category">스킨케어</span>
        </li>
        <li>
          <span className="category">메이크업</span>
        </li>
        <li>
          <span className="category">옴므</span>
        </li>
        <li>
          <span className="category">비스포크</span>
        </li>
        <li>
          <span className="category">이벤트</span>
        </li>
      </ul>
      <div className="navIcons">
        <Link to="#">
          <div className="iconProfile" />
        </Link>
        <Link to="#">
          <div className="iconLocation" />
        </Link>
        <button className="searchButton">
          <div className="iconSearch" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
