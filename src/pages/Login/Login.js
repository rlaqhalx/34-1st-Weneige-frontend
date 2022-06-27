import React from 'react';
import './Login.scss';
// import InputLogSign from '../../components/InputLogSign/InputLogSign';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // const [userId, setUserId] = useState(''); // 얘는 변수명이라 카멜케이스
  // const [userPw, setUserPw] = useState(''); // 얘는 변수명이라 카멜케이스
  const [inputValue, setInputValue] = useState({
    email: '',
    pw: '',
  });

  const [userBtn, setUserBtn] = useState(false);

  const { email, pw } = inputValue;

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/register');
    // fetch(`http://172.20.10.3:8000/users/login`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: email,
    //     password: pw,
    //   }),
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       alert('Please check your email and password again!');
    //     }
    //   })
    //   .then(result => {
    //     localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
    //     localStorage.getItem('ACCESS_TOKEN');
    //     // console.log(localStorage.getItem("ACCESS_TOKEN")); <-로컬스토리지에서키가 엑세스 토큰인 토큰(데이터) 빼오는법 확인
    //     navigate('/register');
    //   });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const activeLogin = () => {
    if (email !== '' && email.includes('@') && pw.length >= 5) {
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
                  placeholder="아이디 입력"
                  onChange={handleInput}
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
                  value={pw}
                  name="pw"
                  type="password"
                  autoComplete="off"
                  className="inpText"
                  placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
                  onChange={handleInput}
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
