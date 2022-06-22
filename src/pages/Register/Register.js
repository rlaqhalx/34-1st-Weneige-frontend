import React from 'react';
import './Register.scss';

const Register = () => {
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
          <form method="post" className="joinForm">
            <div className="signUpInputForm">
              <span className="snp">
                <input
                  type="text"
                  name="signUpName"
                  className="snpText"
                  maxLength="12"
                  placeholder="이름 (한글 또는 영문)"
                  title="이름 입력"
                />
                <button
                  type="button"
                  className="btnDel"
                  style={{ display: 'none' }}
                >
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                성함은 4~12자 한글 또는 영문을 사용하여 입력해주세요.
              </p>
            </div>

            <div className="signUpInputForm">
              <span className="snp">
                <input
                  type="text"
                  name="signUpId"
                  className="snpText"
                  maxLength="12"
                  placeholder="아이디 (영문 또는 숫자 4-12자)"
                  title="아이디 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                아이디는 4~12자 영문 또는 숫자를 사용하여 입력해주세요.
              </p>
            </div>

            <div className="signUpInputForm">
              <span className="snp signUpSpan">
                <input
                  type="text"
                  name="signUpPw"
                  className="snpText"
                  maxLength="16"
                  placeholder="비밀번호 (영문 소문자, 숫자, 특수문자 조합 8-16자)"
                  title="비밀번호 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                사용할 수 없는 비밀번호 입니다.
                <span className="securityImpossible pwGuideStrength">불가</span>
              </p>
            </div>

            <div className="signUpInputForm">
              <span className="snp">
                <input
                  type="text"
                  name="signUpPwCoFirm"
                  className="snpText"
                  maxLength="12"
                  placeholder="비밀번호 확인"
                  title="비밀번호 확인 입력"
                />
                <button type="button" className="btnDel">
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                비밀번호를 한번 더 입력해 주세요.
                <span className="securityImpossible pwGuideStrength">불가</span>
              </p>
            </div>

            <div className="signUpInputForm">
              <span className="snp" id="signUpSpan">
                <input
                  type="text"
                  name="signUpUserName"
                  className="snpText"
                  maxLength="8"
                  placeholder="닉네임 입력(특수문자 불가)"
                  title="닉네임 입력"
                />
                <button
                  type="button"
                  className="btnDel"
                  style={{ display: 'none' }}
                >
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                사용할 수 없는 닉네임입니다.
                <span className="securityImpossible pwGuideStrength">불가</span>
              </p>
            </div>

            <div className="signUpInputForm">
              <span className="snp" id="signUpSpan">
                <input
                  type="text"
                  name="signUpAddress"
                  className="snpText"
                  placeholder="주소 입력"
                  title="주소 입력"
                />
                <button
                  type="button"
                  className="btnDel"
                  style={{ display: 'none' }}
                >
                  <span className="blind">삭제</span>
                </button>
              </span>
              <p className="signUpGuideText signFormTextError">
                정확한 주소를 입력해 주세요.
                <span className="securityImpossible pwGuideStrength">불가</span>
              </p>
            </div>
            <div className="btnSubmit">
              <button
                type="button"
                className="signUpBtn signUpBtnBlue"
                disabled="disabled"
              >
                동의하고 가입
              </button>
            </div>
            <p class="txtC">가입 필수 정보 및 약관을 모두 확인해주세요.</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
