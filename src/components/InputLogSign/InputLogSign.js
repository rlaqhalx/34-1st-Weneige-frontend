import React, { useState } from 'react';
import './InputLogSign.scss';

const InputLogSign = ({ input, handleInput, isValid }) => {
  const { name, value, placeholder, title, errortxt, type } = input;
  const [isUnValid, setIsUnValid] = useState(false);

  const validHandel = () => {
    // isValid ? setIsUnValid(false) : setIsUnValid(true);
    if (isValid) {
      setIsUnValid(false);
    } else if (value.length < 1) {
      setIsUnValid(true);
    } else {
      setIsUnValid(false);
    }
  };

  return (
    <div className="signUpInputForm">
      <span className="snp">
        <input
          type={type}
          className="snpText"
          placeholder={placeholder}
          title={title}
          onChange={handleInput}
          onKeyUp={validHandel}
          value={value}
          name={name}
        />
        <button type="button" className="btnDel">
          <span className="blind">삭제</span>
        </button>
      </span>
      {isUnValid && (
        <p className="signUpGuideText signFormTextError">{errortxt}</p>
      )}
    </div>
  );
};

export default InputLogSign;
