import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from './Categories';
import SearchBar from './SearchBar';
import './Nav.scss';

const Nav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const showBar = () => {
    setShowSearchBar(prev => !prev);
  };
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
        <Categories />
      </ul>
      <div className="navIcons">
        <span className="loginButton" onClick={goToLogin}>
          {/* TODO: 추후 Login페이지 이동에 관련 로그인 되어있을 때와 아닐때 로직 작성 요망 */}
          <div className="iconProfile" />
        </span>
        <Link to="#">
          <div className="iconLocation" />
        </Link>
        <span className="searchButton" onClick={showBar}>
          <div className="iconSearch" />
        </span>
        {showSearchBar && <SearchBar />}
      </div>
    </nav>
  );
};

// 작업 완료되는 대로 분리 필요

export default Nav;
