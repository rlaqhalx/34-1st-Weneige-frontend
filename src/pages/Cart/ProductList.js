import React from 'react';
import './ProductList.scss';

const ProductList = ({ order, handleCount, deleteItem }) => {
  const { kor_name, price, color, quantity, image_url, product_option_id } =
    order;

  const addCount = () => {
    if (quantity < 99) {
      fetch('http://10.58.2.12:8000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.5BoIX3eJmneF6w-Jb44BzDDZ3zt0gtl01NRPvOicAWc',
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
      fetch('http://10.58.4.20:8000/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.5BoIX3eJmneF6w-Jb44BzDDZ3zt0gtl01NRPvOicAWc',
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
        <button className="deleteBtn" onClick={deleteItem}>
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

export default ProductList;
