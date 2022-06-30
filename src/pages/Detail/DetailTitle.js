import React, { useState } from 'react';
import AddToCart from './AddToCart';
import CartPopUp from './CartPopUp';
import './DetailTitle.scss';

const DetailTitle = ({
  korName,
  engName,
  description,
  colors,
  volume,
  price,
  product_id,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [colorIdx, setColorIdx] = useState('0');
  const [chosenlist, setChosenlist] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [isPopup, setIsPopup] = useState(false);
  const [colorList, setcolorList] = useState([]);
  const [result, setResult] = useState([]);

  let refinedcolorList = [];
  let convertedColor = [];

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const updateChosenList = colorIdx => {
    if (chosenlist.indexOf(colorIdx) === -1) {
      setChosenlist(chosenNumList => [...chosenNumList, colorIdx]);
    }
  };

  const updatecolorList = colorIdx => {
    let items = [...colorList];
    items[colorIdx] = colors[colorIdx];
    setcolorList(items);
  };

  const addToCart = e => {
    handleDropDown();
    setColorIdx(e.target.id);
    updateChosenList(e.target.id);
    updatecolorList(e.target.id);
  };

  const reset = event => {
    let idx = event.target.id;
    let filteredArr = chosenlist.filter(x => x !== idx);
    setChosenlist(filteredArr);

    let counts = [...totalCount];
    counts[idx] = 0;

    let prices = [...totalPrice];
    prices[idx] = 0;

    let sample = [...colorList];
    sample[idx] = undefined;
    setcolorList(sample);

    setTotalCount(counts);
    setTotalPrice(prices);
  };

  const priceSum = totalPrice.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const countSum = totalCount.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const refine = () => {
    const newcolorList = [...colorList];
    const newtotalCount = [...totalCount];

    if (colorList[0] === undefined) {
      newcolorList.shift();
      newtotalCount.shift();

      refinedcolorList = [...newcolorList];
      setTotalCount(newtotalCount);
    } else if (colorList[1] === undefined) {
      newcolorList.pop();
      newtotalCount.pop();

      refinedcolorList = [...newcolorList];
      setTotalCount(newtotalCount);
    }

    if ((colorList[0] !== undefined) & (colorList[0] !== undefined)) {
      refinedcolorList = [...newcolorList];

      setTotalCount(newtotalCount);
    }
  };

  const convertColor = {
    맨인블랙: 1,
    라이트브라운: 2,
    블라썸레드: 3,
    자이언트핑크: 5,
    라이트샌드: 6,
  };

  const convertId = (id, color) => {
    if ((id === 1) & (color === 1)) return 1;
    if ((id === 1) & (color === 2)) return 2;
    if ((id === 2) & (color === 1)) return 3;
    if ((id === 3) & (color === 1)) return 4;
    if ((id === 4) & (color === 3)) return 5;
    if ((id === 4) & (color === 5)) return 6;
    if ((id === 5) & (color === 3)) return 7;
    if ((id === 5) & (color === 5)) return 8;
    if ((id === 6) & (color === 3)) return 9;
    if ((id === 6) & (color === 5)) return 10;
    if ((id === 7) & (color === 3)) return 11;
    if ((id === 7) & (color === 5)) return 12;
    if ((id === 8) & (color === 3)) return 13;
    if ((id === 8) & (color === 5)) return 14;
    if ((id === 9) & (color === 1)) return 15;
    if ((id === 10) & (color === 1)) return 16;
    if ((id === 11) & (color === 1)) return 17;
    if ((id === 12) & (color === 6)) return 18;
    if ((id === 13) & (color === 3)) return 19;
    if ((id === 13) & (color === 5)) return 20;
    if ((id === 14) & (color === 6)) return 21;
    if ((id === 15) & (color === 1)) return 22;
    if ((id === 16) & (color === 1)) return 23;
  };

  const handleColor = () => {
    let arr = [];
    for (let i = 0; i < refinedcolorList.length; i++) {
      let element = convertColor[refinedcolorList[i]];
      arr.push(element);
      convertedColor = [...arr];
    }
  };

  const handleResult = () => {
    handleColor();
    let arr = [];
    for (let i = 0; i < convertedColor.length; i++) {
      let element = convertId(product_id, convertedColor[i]);
      arr.push(element);
      setResult(arr);
    }
  };

  const createResult = e => {
    refine();
    handleColor();
    handleResult();
  };

  const handlePopUp = () => {
    setIsPopup(true);
    createResult();
  };

  return (
    <div className="detailTitle">
      <p className="title"> {korName} </p>
      <p className="englishTitle"> {engName}</p>
      <img
        className="titleIcon"
        src="/images/detail/gray-quotation-marks.webp"
        alt="icon"
      />
      <p className="productMainDescription">{description}</p>
      <p className="colorOption"> {colors[colorIdx]} </p>

      <div className="stat">
        <span> {volume} </span>
        <span> {price.toLocaleString()} 원 </span>
      </div>

      <button className="dropDownBtn" onClick={handleDropDown}>
        <p className="defaultBtn">옵션을 선택해주세요</p>
      </button>
      <div
        className="dropDownWrapper"
        style={{ display: isDropDown ? 'block' : 'none' }}
      >
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              className="dropDownContent"
              onClick={addToCart}
              id={index}
            >
              {color} {volume}
              <span className="price">{price.toLocaleString()} 원</span>
            </button>
          );
        })}
      </div>
      <section>
        {chosenlist.map(colorIdx => (
          <li key={colorIdx}>
            <AddToCart
              colors={colors}
              colorIdx={colorIdx}
              volume={volume}
              price={price}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              totalCount={totalCount}
              setTotalCount={setTotalCount}
              reset={reset}
            />
          </li>
        ))}
      </section>
      <div className="purchaseStat">
        <span>총 {countSum} 개 </span>
        <span className="priceText">{priceSum.toLocaleString()} 원</span>
      </div>
      <button className="cartBtn" onClick={handlePopUp}>
        장바구니
      </button>
      <CartPopUp
        setIsPopup={setIsPopup}
        isPopup={isPopup}
        result={result}
        totalCount={totalCount}
      />
    </div>
  );
};

export default DetailTitle;
