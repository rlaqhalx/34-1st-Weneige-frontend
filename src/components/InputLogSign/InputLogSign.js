import React from 'react';
import './InputLogSign.scss';

const InputLogSign = ({ placeholder, title, errortxt }) => {
  return (
    <div className="signUpInputForm">
      <input
        type="text"
        name="signUpName"
        className="snpText"
        maxLength="12"
        placeholder={placeholder}
        title={title}
      />
      <button type="button" className="btnDel">
        <span className="blind">삭제</span>
      </button>
      <p className="signUpGuideText signFormTextError">{errortxt}</p>
    </div>
  );
};

export default InputLogSign;
