import React, { useState } from 'react';
import './InputLogSign.scss';

const InputLogSign = ({
  id,
  placeholder,
  title,
  errortxt,
  value,
  name,
  handleInput,
  isValid,
}) => {
  // const { name, value, placeholder, title, errortxt } = input;
  const [isUnValid, setIsUnValid] = useState('');
  const validHandle = () => {
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
          type="text"
          className="snpText"
          placeholder={placeholder}
          title={title}
          onChange={handleInput}
          onKeyUp={validHandle}
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
