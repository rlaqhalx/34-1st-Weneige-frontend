import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import Empty from './Empty';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import { API } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [orderList, setOrderList] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const localToken = localStorage.getItem('Authorization');

  useEffect(() => {
    fetch(API.CART, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderList(data.results);
      });
  }, []);

  const order = () => {
    if (window.confirm('주문하시겠습니까?')) {
      alert('주문이 완료 되었습니다');
    } else {
      alert('주문이 취소 되었습니다');
    }
  };

  const deleteAll = () => {
    if (orderList.length !== 0) {
      if (window.confirm('삭제 하시겠습니까??')) {
        setOrderList([]);
      }
    }
  };

  const deleteCartItem = id => {
    const remove = orderList.filter(item => item.product_option_id !== id);
    fetch(`${API.CART}?product_option_id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localToken,
      },
    }).then(res => {
      if (res.ok) {
        setOrderList(remove);
      } else {
        alert('다시 시도해주세요!');
      }
    });
  };

  const totalPrice = (a, b) => {
    return (a = a + b.price * b.quantity);
  };

  const totalAmount = orderList.reduce(totalPrice, 0).toLocaleString();

  const handleCount = (id, key, value) => {
    setOrderList(prevState => {
      return prevState.map(product => {
        if (product.product_option_id === id) {
          return { ...product, [key]: value };
        } else {
          return { ...product };
        }
      });
    });
  };
  return (
    <>
      <Nav />
      <div className="cart">
        <div className="cartWrap">
          <div className="cartMain">
            <div className="cartName">장바구니</div>
            <div className="allCheckBox">
              <button className="allDeleteBtn" onClick={deleteAll}>
                전체삭제
              </button>
            </div>
            <div>
              <p className="cartInProducts">
                <strong>장바구니에 담긴 상품</strong>
                <button
                  className="hideBtn"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? '▲' : '▼'}
                </button>
              </p>
            </div>
            {orderList.length === 0 && <Empty />}
            {isVisible &&
              orderList.map(order => {
                return (
                  <CartItem
                    key={order.product_option_id}
                    order={order}
                    handleCount={handleCount}
                    deleteCartItem={() =>
                      deleteCartItem(order.product_option_id)
                    }
                  />
                );
              })}
            {orderList.length !== 0 && (
              <div className="addressAndName">
                <p>배송지 :{orderList[0]?.address}</p>
                <p>{orderList[0]?.name}</p>
              </div>
            )}
            {orderList.length !== 0 && (
              <div className="order">
                <p>결제 예정 금액:</p>
                <p>{totalAmount}원</p>
                <button className="orderBtn" onClick={order}>
                  주문하기({orderList.length}개)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
