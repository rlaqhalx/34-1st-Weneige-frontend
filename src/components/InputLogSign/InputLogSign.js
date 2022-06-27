import React from 'react';
import './InputLogSign.scss';

const InputLogSign = ({ input, handleInput, onKeyUp }) => {
  const { name, value, placeholder, title, errortxt } = input;

  return (
    <div className="signUpInputForm">
      <span className="snp">
        <input
          type="text"
          className="snpText"
          placeholder={placeholder}
          title={title}
          onChange={handleInput}
          onKeyUp={onKeyUp}
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
