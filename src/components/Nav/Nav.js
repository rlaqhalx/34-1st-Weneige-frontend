import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from './Categories';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    if (localStorage.getItem('Authorization')) {
      alert('이미 로그인이 되어있습니다.');
    } else {
      navigate('/login');
    }
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
          <div className="iconProfile" />
        </span>
        <span className="locationButton">
          <div className="iconLocation" />
<<<<<<< HEAD
        </span>
=======
        </Link>
>>>>>>> master
      </div>
    </nav>
  );
};

// 작업 완료되는 대로 분리 필요

export default Nav;
