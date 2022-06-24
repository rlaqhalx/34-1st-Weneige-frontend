import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [userId, setUserId] = useState(''); // 얘는 변수명이라 카멜케이스
  const [userPw, setUserPw] = useState(''); // 얘는 변수명이라 카멜케이스
  const [userBtn, setUserBtn] = useState(false);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  const activeLogin = () => {
    if (userId !== '' && userId.includes('@') && userPw.length >= 5) {
      setUserBtn(true);
    } else {
      setUserBtn(false);
    }
  };

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
          <form
            className="loginForm"
            action="http://www.example.com/form.html/"
            method="post"
            name=""
            id="login"
            onSubmit={event => {
              event.preventDefault();
              goToMain();
              // fetch('API 주소', {
              //   method: 'POST',
              //   body: JSON.stringify({
              //     email: id,
              //     password: pw,
              //   }),
              // })
              //   .then(response => response.json())
              //   .then(result => console.log('결과: ', result));
            }}
          >
            <div className="loginInputForm">
              <span className="inp">
                <input
                  value={userId}
                  type="text"
                  autoComplete="off"
                  className="inpText"
                  placeholder="아이디 입력"
                  onInput={e => setUserId(prev => (prev = e.target.value))}
                  onKeyUp={activeLogin}
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
                  value={userPw}
                  type="password"
                  autoComplete="off"
                  className="inpText"
                  placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
                  onInput={e => setUserPw(prev => (prev = e.target.value))}
                  onKeyUp={activeLogin}
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
              <button
                type="button"
                disabled={!userBtn}
                id="btn"
                className={userBtn ? 'loginBtn loginBtnBlue' : 'loginBtn'}
              >
                로그인
              </button>
            </div>
          </form>
          <button className="btnJoinMembership">
            <span>아직 회원이 아니세요?</span>
            <em>회원가입</em>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
