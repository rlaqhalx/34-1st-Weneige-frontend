import React, { useState, useEffect } from 'react';
import './AddToCart.scss';

const AddToCart = ({
  colors,
  colorIdx,
  volume,
  price,
  totalPrice,
  setTotalPrice,
  totalCount,
  setTotalCount,
  reset,
}) => {
  const [newPrice, setNewPrice] = useState(price);
  const [count, setCount] = useState(1);

  let thiscolor = colorIdx;

  const calculatePrice = colorIdx => {
    let items = [...totalPrice];
    items[colorIdx] = newPrice;
    setTotalPrice(items);
  };

  const calculateCount = colorIdx => {
    let items = [...totalCount];
    items[colorIdx] = count;
    setTotalCount(items);
  };

  const add = () => {
    if (count < 10) {
      setCount(count + 1);
      setNewPrice(newPrice + price);
    }
  };

  const remove = () => {
    if (count >= 2) {
      setCount(count - 1);
      setNewPrice(newPrice - price);
    }
  };

  useEffect(() => {
    calculatePrice(colorIdx);
    calculateCount(colorIdx);
  }, [count]);

  return (
    <div className="addToCart">
      <span className="selectedColor">
        {colors[thiscolor]} {volume}
      </span>
      <button className="deleteBtn" id={colorIdx} onClick={reset}>
        x
      </button>
      <div className="buttonWrapper">
        <button
          className="removeBtn"
          onClick={remove}
          style={{ cursor: count >= 2 ? 'pointer' : 'not-allowed' }}
        >
          -
        </button>
        {count}
        <button
          className="addBtn"
          onClick={add}
          style={{ cursor: count <= 9 ? 'pointer' : 'not-allowed' }}
        >
          +
        </button>
      </div>
      <div className="priceWrapper">
        {newPrice.toLocaleString()}
        <span className="won"> 원</span>
      </div>
    </div>
  );
};

export default AddToCart;
