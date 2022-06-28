import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLogSign from '../../components/InputLogSign/InputLogSign';
import './Register.scss';

const Register = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
    pw: '',
    pwCheck: '',
    address: '',
    phone: '',
    username: '',
  });

  const { email, name, pw, pwCheck, username, address, phone } = inputValue;

  const navigate = useNavigate();

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const goToLogin = () => {
    navigate('/Login');
    // fetch(`http://172.20.10.3:8000/users/signup`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: email,
    //     name: name,
    //     password: pw,
    //     user_name: username,
    //     address: address,
    //     mobile_number: phone,
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
    //     navigate('/Login');
    //   });
  };
  const alertName = () => {
    if (
      inputValue.name === '' ||
      inputValue.address === '' ||
      inputValue.phone === ''
    ) {
      alert('Must not be blank');
    }
  };

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{8,}$/;
  const passwordCondition = passwordRegex.test(inputValue.pw) && pw === pwCheck;

  const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/;
  const emailCondition = emailRegex.test(inputValue.email);
  // const emailCondition = email.includes('@') && email.includes('.');

  const isValid =
    passwordCondition &&
    emailCondition &&
    inputValue.phone.length > 0 &&
    inputValue.address.length > 0 &&
    inputValue.username.length > 0;

  const INPUT_DATA = [
    {
      id: 1,
      placeholder: '이름 (한글 또는 영문)',
      title: '이름 입력',
      errortxt: '성함은 4~12자 한글 또는 영문을 사용하여 입력해주세요.',
      value: name,
      name: 'name',
    },
    {
      id: 2,
      placeholder: '이메일 (@를 포함한 이메일 형식)',
      title: '이미엘 입력',
      errortxt: '올바른 이메일 형식을 사용하여 입력해주세요.',
      value: email,
      name: 'email',
    },
    {
      id: 3,
      placeholder: '비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)',
      title: '비밀번호 입력',
      errortxt: '사용할 수 없는 비밀번호 입니다.',
      value: pw,
      name: 'pw',
    },
    {
      id: 4,
      placeholder: '비밀번호 확인',
      title: '비밀번호 확인 입력',
      errortxt: '비밀번호를 한번 더 입력해 주세요.',
      value: pwCheck,
      name: 'pwCheck',
    },
    {
      id: 5,
      placeholder: '닉네임 입력',
      title: '닉네임 입력',
      errortxt: '정확한 정보를 입력해주세요.',
      value: username,
      name: 'username',
    },
    {
      id: 6,
      placeholder: '핸드폰 번호 입력',
      title: '핸드폰 번호',
      errortxt: '정확한 정보를 입력해주세요.',
      value: phone,
      name: 'phone',
    },
    {
      id: 7,
      placeholder: '주소 입력',
      title: '주소 입력',
      errortxt: '정확한 주소를 입력해 주세요.',
      value: address,
      name: 'address',
    },
  ];

  return (
    <div className="signUpWrap">
      <header className="signUpHeader">
        <div className="signUpHederBox">
          <div className="signUpHederInner">
            <h1 className="signUpPageTitle">정보입력 및 약관동의</h1>
            <button type="button" className="signUpClose" />
          </div>
        </div>
      </header>
      <section className="signUpContainer">
        <div className="secJoin">
          <form
            method="post"
            className="joinForm"
            action="http://www.example.com/form.html/"
            onSubmit={event => {
              event.preventDefault();
              goToLogin();
            }}
          >
            {INPUT_DATA.map(
              ({ id, placeholder, title, errortxt, value, name }) => {
                //내가지은이름
                return (
                  <InputLogSign
                    key={id}
                    id={id}
                    placeholder={placeholder}
                    title={title}
                    errortxt={errortxt}
                    value={value}
                    name={name}
                    handleInput={handleInput}
                    isValid={isValid}
                  />
                );
              }
            )}

            <div className="btnSubmit">
              <button
                type="button"
                // className="signUpBtn"
                className={isValid ? 'signUpBtn signUpBtnBlue' : 'signUpBtn'}
                onClick={() => {
                  goToLogin();
                  alertName();
                }}
                disabled={!isValid}
              >
                동의하고 가입
              </button>
            </div>
          </form>
          <p className="txtC">가입 필수 정보 및 약관을 모두 확인해주세요.</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
