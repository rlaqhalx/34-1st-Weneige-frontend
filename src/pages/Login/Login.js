import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <header className="loginHeader">
        <div className="loginHeaderBox">
          <div className="loginHeaderInner">
            <h1 className="loginPageTitle">로그인</h1>
            <button className="loginClose" />
          </div>
        </div>
      </header>
      <section className="loginContainer">
        <div className="loginGuideText">
          <span className="logText">
            아모레퍼시픽 뷰티포인트 통합회원
            <br />
            아이디로 로그인해주세요.
          </span>
        </div>
        <div className="secLogin">
          <form className="loginForm">
            <div className="loginInputForm">
              <span className="inp">
                <input
                  type="text"
                  autoComplete="off"
                  className="inpText"
                  placeholder="아이디 입력"
                  title="아이디 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
            </div>
            <div className="loginInputForm">
              <span className="inp">
                <input
                  type="password"
                  autoComplete="off"
                  className="inpText"
                  placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
                  title="비밀번호 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
            </div>
            <div className="loginNotiPanel">
              <p className="loginNotiMsg formTextError">
                아이디 또는 비밀번호가 맞지 않습니다.
              </p>
            </div>
            <div className="loginOpt">
              <button type="button" className="loginBtn loginBtnBlue">
                로그인
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
