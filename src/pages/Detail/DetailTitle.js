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
  const [dropDown, setDropDown] = useState(false);
  const [colorIdx, setColorIdx] = useState('0');
  const [chosenlist, setChosenlist] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [popupClass, setpopupClass] = useState(false);
  const [colorList, setcolorList] = useState([]);
  //console.log('1', colors[chosenlist[0]]);
  //console.log('2', colors[chosenlist[1]]);

  const handleDropDown = () => {
    setDropDown(!dropDown);
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
    //let counts = totalCount.filter(x => x !== totalCount[idx]);
    let prices = [...totalPrice];
    prices[idx] = 0;

    let sample = [...colorList];
    sample[idx] = undefined;
    setcolorList(sample);

    setTotalCount(counts);
    setTotalPrice(prices);
  };

  let priceSum = totalPrice.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  let countSum = totalCount.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const handlePopUp = () => {
    setpopupClass(true);
  };

  return (
    <div className="titleWrapper">
      <p className="title"> {korName} </p>
      <p className="englishTitle"> {engName}</p>
      <img
        className="titleIcon"
        src="../images/detail/gray-quotation-marks.webp"
        alt="icon"
      />
      <p className="productMainDescription">{description}</p>
      <p className="colorOption"> {colors[colorIdx]} </p>

      <div className="stat">
        <span> {volume} </span>
        <span> {price} 원 </span>
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
            <button
              key={index}
              className="dropDownContent"
              onClick={addToCart}
              id={index}
            >
              {color} {volume} <span className="price">{price} 원</span>
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
        <span className="priceText">{priceSum} 원</span>
      </div>
      <button className="cartBtn" onClick={handlePopUp}>
        장바구니
      </button>
      <CartPopUp
        setpopupClass={setpopupClass}
        popupClass={popupClass}
        product_id={product_id}
        totalCount={totalCount}
        colorList={colorList}
      />
    </div>
  );
};

export default DetailTitle;
