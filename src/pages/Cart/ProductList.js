import React from 'react';
import { useState } from 'react';
import './ProductList.scss';

const ProductList = ({ order, i, orderList, deleteConfirm, setOrderList }) => {
  const { id, quantity, name, price, option } = order;
  // const [productPrice, setProductPrice] = useState('');
  // const [totalPrice, setTotalPrice] = useState([]);

  const [count, setCount] = useState(quantity);

  const minusProduct = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      alert('삭제?');
    }
  };

  const plusProduct = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert('구매가능한 수량 초과 입니다');
    }
  };

  const won = (price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="productList">
      <div className="productDetail">
        <input type="checkbox" className="productCheckBox" checked="false" />
        <img
          src={'https://codingapple1.github.io/shop/shoes' + id + '.jpg'}
          alt="skin"
          className="productImg"
        />
        <p className="productName">{name}</p>
        <button
          className="deleteBtn"
          onClick={() => {
            let copy = [...orderList];
            copy.splice(i, 1);
            setOrderList(copy);
          }}
        >
          닫기
        </button>
      </div>
      <div className="productOption">
        <p>{option}</p>
        <div className="count">
          <button onClick={minusProduct}>-</button>
          <p className="quanttshin">{count}</p>
          <button onClick={plusProduct}>+</button>
        </div>
        <div className="price">
          <div className="fixedPrice">{won}원</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
