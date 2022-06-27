import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Empty from './Empty';
import './Cart.scss';
import '../../styles/common.scss';
import '../../styles/reset.scss';

const Cart = () => {
  const [orderList, setOrderList] = useState([]);
  const [checkedItem, setCheckedItem] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    fetch('/data/cart.json')
      .then(res => res.json())
      .then(result => {
        setOrderList(result.results);
      });
  }, []);

  const handleOnChange = () => {
    setCheckedItem(!checkedItem);
  };

  const hide = () => {
    setVisible(!visible);
  };

  const orderConfirm = () => {
    if (orderList.length !== 0) {
      if (window.confirm('주문하시겠습니까?')) {
        alert('주문이 완료 되었습니다');
      } else {
        alert('주문이 취소 되었습니다');
      }
    }
  };

  const allDeleteConfirm = () => {
    if (orderList.length !== 0) {
      if (window.confirm('삭제 하시겠습니까??')) {
        let copy = [...orderList];
        copy.splice(orderList);
        setOrderList(copy);
      }
    }
  };

  // const deleteConfirm = () => {
  //   if (window.confirm('삭제 하시겠습니까??')) {
  //     let copy = [...orderList];
  //     copy.splice(orderList.product_options_id, 1);
  //     setOrderList(copy);
  //   }
  // };

  const deleteProduct = id => {
    const fil = orderList.filter(it => it.product_options_id !== id);
    setOrderList(fil);
  };

  const totalPrice = (a, b) => {
    return (a = a + b.price * b.quantity);
  };
  const totalq = orderList.reduce(totalPrice, 0).toLocaleString();

  const onChangeProps = (id, key, value) => {
    setOrderList(prevState => {
      return prevState.map(obj => {
        if (obj.product_options_id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  return (
    <div className="cart">
      <div>nav</div>
      <div className="cartWrap">
        <div className="cartMain">
          <div className="cartName">장바구니</div>
          <div className="allCheckBox">
            <div className="label">
              <input
                type="checkbox"
                className="woo"
                checked={checkedItem}
                onChange={handleOnChange}
              />
              <p>전체선택</p>
            </div>
            {/* <button className="selectDeleteBtn" onClick={deleteConfirm}>
            선택삭제
          </button> */}
            <button className="allDeleteBtn" onClick={allDeleteConfirm}>
              전체삭제
            </button>
          </div>
          <div>
            <p className="cartInProducts">
              <strong>장바구니에 담긴 상품</strong>
              <button className="hideBtn" onClick={hide}>
                {visible ? '▲' : '▼'}
              </button>
            </p>
          </div>
          {orderList.length === 0 && <Empty />}
          {visible &&
            orderList.map((order, i) => {
              return (
                <ProductList
                  key={order.product_options_id}
                  order={order}
                  orderList={orderList}
                  setOrderList={setOrderList}
                  i={i}
                  id={order.product_options_id}
                  onChangeProps={onChangeProps}
                  deleteProduct={deleteProduct}
                  // deleteConfirm={() => deleteConfirm(order.product_options_id)}
                  // handleChecked={handleChecked}
                />
              );
            })}
          <div className="addressAndName">
            <p>배송지 :{orderList[0]?.address}</p>
            <p>{orderList[0]?.name}</p>
          </div>
          <div className="order">
            <p>결제 예정 금액</p>
            {/* <p>{checkedItem === true && totalq}원</p> */}
            <p>{totalq}원</p>
            <button className="orderBtn" onClick={orderConfirm}>
              주문하기({orderList.length}개)
            </button>
          </div>
        </div>
      </div>
      <div>footer</div>
    </div>
  );
};

export default Cart;
