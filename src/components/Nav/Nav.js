import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import './Nav.scss';

const Nav = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
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
        <Link to="#">
          <div className="iconProfile" />
        </Link>
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
const SearchBar = () => {
  return (
    <div className="searchPad">
      <div className="search">
        <div className="searchWrap">
          <form className="searchForm">
            <div className="searchBox">
              <span className="inputSearchIcon" />
              <input
                type="search"
                placeholder="검색어를 입력해 주세요"
                className="searchInput"
              />
            </div>
            <button className="searchButton">검색</button>
          </form>
          <div className="searchRecommends">
            <span>추천 검색어</span>
            <Link to="#" className="tags">
              볼륨 마스카라
            </Link>
            <Link to="#" className="tags">
              소프트 네츄럴 립스틱
            </Link>
            <Link to="#" className="tags">
              하이드레이팅 프라이머
            </Link>
            <Link to="#" className="tags">
              시그니처 브로우 펜슬
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
