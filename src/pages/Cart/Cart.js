import React from 'react';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [orderList, setOrderList] = useState([]);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/cart.json')
      .then(res => res.json())
      .then(data => {
        setOrderList(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/signup.json')
      .then(res => res.json())
      .then(data => {
        setAddress(data);
      });
  }, []);

  const orderConfirm = () => {
    if (window.confirm('주문하시겠습니까?')) {
      alert('주문이 완료 되었습니다');
    } else {
      alert('주문이 취소 되었습니다');
    }
  };

  const deleteConfirm = () => {
    if (window.confirm('삭제 하시겠습니까??')) {
      // let copy = [...orderList];
      // copy.splice(0, 1);
      // setOrderList(copy);
    }
  };

  let count = 0;

  return (
    <div className="cart">
      <div>nav</div>
      <div className="cartMain">
        <div className="cartName">장바구니</div>
        <div className="allCheckBox">
          <div className="label">
            <input type="checkbox" className="woo" />
            <p>전체선택</p>
          </div>
          <button className="selectDeleteBtn" onClick={deleteConfirm}>
            선택삭제
          </button>
        </div>
        <div>
          <p className="cartInProducts">
            <strong>장바구니에 담긴 상품</strong>
            <button>V</button>
          </p>
        </div>
        {orderList.map((order, i) => {
          count = count + order.price * order.quantity;
          return (
            <ProductList
              key={order.id}
              order={order}
              deleteConfirm={deleteConfirm}
              orderList={orderList}
              setOrderList={setOrderList}
              i={i}
              count={count}
            />
          );
        })}
        <div className="addressAndName">
          {address.map(order => {
            return (
              <>
                <p>배송지 :{order.address}</p>
                <p>{order.name}</p>
              </>
            );
          })}
        </div>
        <div className="order">
          <p>결제 예정 금액</p>
          <p>{count}</p>

          <button className="orderBtn" onClick={orderConfirm}>
            주문하기(countOrder)
          </button>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Cart;
