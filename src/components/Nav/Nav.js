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
          <span>브랜드</span>
        </li>
        <li>
          <span>미츠 아트</span>
        </li>
        <li>
          <span>베스트 & 신상품</span>
        </li>
        <li>
          <span>스킨케어</span>
        </li>
        <li>
          <span>메이크업</span>
        </li>
        <li>
          <span>옴므</span>
        </li>
        <li>
          <span>비스포크</span>
        </li>
        <li>
          <span>이벤트</span>
        </li>
      </ul>
      <div className="navIcons">
        <i>아이콘1</i>
        <i>아이콘2</i>
        <i>아이콘3</i>
      </div>
    </nav>
  );
};

export default Nav;
