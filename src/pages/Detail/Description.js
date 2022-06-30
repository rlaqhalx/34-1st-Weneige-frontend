import React, { useState } from 'react';
import './Description.scss';

const Description = ({ img, description, num }) => {
  const [darken, setDarken] = useState(false);
  const [imgboxClass, setImgboxClass] = useState('imgBox');
  const [plus, setPlus] = useState('+');

  const handleDarkening = () => {
    setDarken(!darken);
    darken ? setImgboxClass('imgBox') : setImgboxClass('imgBoxDark');
    darken ? setPlus('+') : setPlus('-');
  };

  return (
    <div className="description">
      <img className={imgboxClass} src={img} alt="product" />
      <button className="btnBox" onClick={handleDarkening}>
        {plus}
      </button>
      <p
        className="btnDescription"
        style={{ display: darken ? 'block' : 'none' }}
      >
        {description}
      </p>
      <p className="secret"> SECRET {num}</p>
    </div>
  );
};

export default Description;
