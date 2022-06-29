import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [loginInputValue, setInputValue] = useState({
    email: '',
    pw: '',
  });

  const { email, pw } = loginInputValue;

  const navigate = useNavigate();

  const [inputUnValid, setInputUnValid] = useState(false);

  const validInputHandel = () => {
    if (isInputValid) {
      setInputUnValid(false);
    } else if (email.length < 1 && pw.length < 1) {
      setInputUnValid(true);
    } else {
      setInputUnValid(false);
    }
  };

  const goToMain = () => {
    // navigate('/register');
    fetch(`http://172.20.10.3:8000/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your email and password again!');
        }
      })
      .then(result => {
        localStorage.setItem('Authorization', result.ACCESS_TOKEN);
        // console.log(localStorage.getItem("ACCESS_TOKEN")); <-로컬스토리지에서키가 엑세스 토큰인 토큰(데이터) 빼오는법 확인
        navigate('/register');
      });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...loginInputValue, [name]: value });
  };

  const isInputValid = email !== '' && email.includes('@') && pw.length >= 5;

  return (
    <div className="login">
      <header className="loginHeader">
        <div className="loginHeaderBox">
          <div className="loginHeaderInner">
            <h1 className="loginPageTitle">로그인</h1>
            <Link to="/register">
              <button className="loginClose" />
            </Link>
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
            onSubmit={event => {
              event.preventDefault();
              goToMain();
            }}
          >
            <div className="loginInputForm">
              <span className="inp">
                <input
                  value={email}
                  name="email"
                  type="text"
                  autoComplete="off"
                  className="inpText"
                  placeholder="이메일 (@를 포함한 이메일 형식)"
                  onChange={handleInput}
                  onKeyUp={validInputHandel}
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
                  value={pw}
                  name="pw"
                  type="password"
                  autoComplete="off"
                  className="inpText"
                  placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
                  onChange={handleInput}
                  title="비밀번호 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
            </div>
            <div className="loginNotiPanel">
              {inputUnValid && (
                <p className="loginNotiMsg formTextError">
                  아이디 또는 비밀번호를 입력해주세요.
                </p>
              )}
            </div>
            <div className="loginOpt">
              <button
                type="button"
                disabled={!isInputValid}
                id="btn"
                className={isInputValid ? 'loginBtn loginBtnBlue' : 'loginBtn'}
                onClick={() => {
                  goToMain();
                  // alertName();
                }}
              >
                로그인
              </button>
            </div>
          </form>
          <Link to="/register">
            <button className="btnJoinMembership">
              <span>아직 회원이 아니세요?</span>
              <em>회원가입</em>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
