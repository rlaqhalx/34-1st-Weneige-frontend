import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPopUp.scss';

const CartPopUp = ({ setIsPopup, isPopup, result, totalCount }) => {
  const closePopUp = () => {
    setIsPopup(false);
  };

  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };
  const submit = () => {
    fetch('http://10.58.2.12:8000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.5BoIX3eJmneF6w-Jb44BzDDZ3zt0gtl01NRPvOicAWc',
      },

      body: JSON.stringify(
        result.map((el, index) => ({
          product_option_id: el,
          quantity: totalCount[index],
        }))
      ),
    })
      .then(response => response.json())
      .then(result => {
        if (result) {
          goToCart();
        } else {
          alert('error');
        }
      });
  };

  return (
    <div className="cartPopUp">
      {isPopup && (
        <div className="cartPopUpWrapper">
          선택하신 상품이 장바구니에 추가되었습니다. 장바구니로
          이동하시겠습니까?
          <button className="cancel">취소</button>
          <button className="confirm" onClick={submit}>
            확인
          </button>
          <button className="noPopUp" onClick={closePopUp}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPopUp;
