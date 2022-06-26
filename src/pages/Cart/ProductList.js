import React from 'react';
import './ProductList.scss';

const ProductList = ({
  order,
  // deleteConfirm,
  orderList,
  setOrderList,

  i,
  onChangeProps,

  id,
}) => {
  const { kor_name, price, color, quantity, image_url } = order;
  const deleteProduct = () => {
    let copy = [...orderList];
    copy.splice(i, 1);
    setOrderList(copy);
  };

  const amountIncreaseHandler = event => {
    event.preventDefault();
    if (quantity < 10) {
      onChangeProps(id, 'quantity', quantity + 1);
    } else {
      alert('구매가능한 수량 초과 입니다');
    }
  };

  const amountDecreaseHandler = event => {
    event.preventDefault();
    if (quantity > 1) {
      onChangeProps(id, 'quantity', quantity - 1);
    } else {
      deleteProduct();
    }
  };

  const won = (price * orderList[i].quantity).toLocaleString();

  return (
    <div className="productList">
      <div className="productDetail">
        {/* <input
          type="checkbox"
          className="productCheckBox"
          isChecked={checkedItem}
          onChange={handleChecked}
        /> */}
        <img src={image_url} alt="skin" className="productImg" />
        <p className="productName">{kor_name}</p>
        <button className="deleteBtn" onClick={deleteProduct}>
          닫기
        </button>
      </div>
      <div className="productOption">
        <p>{color}</p>
        <div className="count">
          <button onClick={amountDecreaseHandler}>-</button>
          <input className="quanttshin" value={quantity} />
          <button onClick={amountIncreaseHandler}>+</button>
        </div>
        <div className="price">
          <div className="fixedPrice">{won}원</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
