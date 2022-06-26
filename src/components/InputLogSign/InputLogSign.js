import React from 'react';
import './InputLogSign.scss';

const InputLogSign = ({ input, handleInput }) => {
  const { name, value, placeholder, title, errortxt } = input;

  return (
    <div className="signUpInputForm">
      <span className="snp">
        <input
          type="text"
          className="snpText"
          maxLength="12"
          placeholder={placeholder}
          title={title}
          onChange={handleInput}
          value={value}
          name={name}
        />
        <button type="button" className="btnDel">
          <span className="blind">삭제</span>
        </button>
      </span>
      <p className="signUpGuideText signFormTextError">{errortxt}</p>
    </div>
  );
};

export default InputLogSign;
