import React from 'react';
import { API } from '../../config';
import './CartItem.scss';

const cartItem = ({ order, handleCount, deleteCartItem }) => {
  const { kor_name, price, color, quantity, image_url, product_option_id } =
    order;

  const localToken = localStorage.getItem('Authorization');

  const addCount = () => {
    if (quantity < 10) {
      fetch(API.CART, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localToken}`,
        },
        body: JSON.stringify([
          {
            product_option_id: product_option_id,
            quantity: 1,
          },
        ]),
      }).then(res => {
        if (res.ok) {
          handleCount(product_option_id, 'quantity', quantity + 1);
        } else {
          alert('다시 시도해주세요!');
        }
      });
    } else {
      alert('구매가능한 수량 초과 입니다');
    }
  };

  const subtractCount = () => {
    if (quantity > 1) {
      fetch(API.CART, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localToken}`,
        },
        body: JSON.stringify([
          {
            product_option_id: product_option_id,
            quantity: -1,
          },
        ]),
      }).then(res => {
        if (res.ok) {
          handleCount(product_option_id, 'quantity', quantity - 1);
        } else {
          alert('다시 시도해주세요!');
        }
      });
    } else {
      alert('최소 주문 수량은 1개 입니다');
    }
  };

  const won = (price * quantity).toLocaleString();

  return (
    <div className="productLists">
      <div className="productDetail">
        <img src={image_url} alt="skin" className="productImg" />
        <p className="productName">{kor_name}</p>
        <button className="deleteBtn" onClick={deleteCartItem}>
          닫기
        </button>
      </div>
      <div className="productOption">
        <p className="productColor">{color}</p>
        <div className="count">
          <button onClick={subtractCount}>-</button>
          <input
            className="productQuantity"
            value={quantity}
            onChange={e => {}}
          />
          <button onClick={addCount}>+</button>
        </div>
        <div className="price">
          <div className="fixedPrice">{won}원</div>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
