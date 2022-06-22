import React from 'react';
import './Cart.scss';
import ProductOption from '../../components/ProductOption/ProductOption';

const Cart = () => {
  const orderConfirm = () => {
    if (window.confirm('주문하시겠습니까?')) {
      alert('주문이 완료 되었습니다');
    } else {
      alert('주문이 취소 되었습니다');
    }
  };
  const deleteConfirm = () => {
    if (window.confirm('삭제 하시겠습니까??')) {
      alert('삭제 되었습니다');
    }
  };
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
        <ProductOption deleteConfirm={deleteConfirm} />

        <div className="order">
          <p>결제 예정 금액</p>
          <p>totalprice</p>
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
