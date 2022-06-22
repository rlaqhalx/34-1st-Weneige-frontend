import React, { useState, useEffect } from 'react';
import './DetailTitle.scss';

const DetailTitle = ({
  tags,
  korName,
  engName,
  description,
  colors,
  volume,
  price,
  images,
}) => {
  const [dropDown, setDropDown] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const handleDropDown = e => {
    dropDown ? setDropDown(false) : setDropDown(true);
  };

  const addToCart = e => {
    handleDropDown();
    setColorIdx(e.target.id);
  };

  return (
    <div className="titleWrapper">
      <p className="tagWrapper">
        {tags.map(tag => {
          return <span className="tag"> {tag} </span>;
        })}
      </p>
      <p className="title"> {korName} </p>
      <p className="englishTitle"> {engName}</p>
      <img
        src="../images/detail/gray-quotation-marks.webp"
        style={{ width: 20 }}
      />
      <p className="productMainDescription">{description}</p>
      <p className="colorOption"> {colors[colorIdx]} </p>

      <div className="stat">
        <span> {volume} </span>
        <span> {price} </span>
      </div>

      <button className="dropDownBtn" onClick={handleDropDown}>
        <p className="defaultBtn">옵션을 선택해주세요</p>
      </button>
      <div
        className="dropDownWrapper"
        style={{ display: dropDown ? 'block' : 'none' }}
      >
        {colors.map((color, index) => {
          return (
            <button className="dropDownContent" onClick={addToCart} id={index}>
              {color} {volume} <span className="price">{price}</span>
            </button>
          );
        })}
      </div>

      <div className="purchaseStat">
        <span>총 __개 </span>
        <span style={{ color: '#782FFF', paddingLeft: 20 }}>{price}</span>
      </div>
      <div className="btn">
        <button id="cartBtn">장바구니</button>
        <button id="purchaseBtn">구매하기</button>
      </div>
    </div>
  );
};

export default DetailTitle;
