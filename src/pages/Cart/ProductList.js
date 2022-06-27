import React from 'react';
import './ProductList.scss';

const ProductList = ({
  order,
  orderList,
  setOrderList,
  i,
  onChangeProps,
  // deleteProduct,
  id,
}) => {
  const { kor_name, price, color, quantity, image_url, product_options_id } =
    order;
  const deleteProduct = () => {
    let copy = [...orderList];
    copy.splice(i, 1);
    setOrderList(copy);
  };

  const increaseHandler = () => {
    if (quantity < 10) {
      onChangeProps(product_options_id, 'quantity', quantity + 1);
    } else {
      alert('구매가능한 수량 초과 입니다');
    }
  };

  const decreaseHandler = () => {
    if (quantity > 1) {
      onChangeProps(product_options_id, 'quantity', quantity - 1);
    } else {
      deleteProduct();
    }
  };

  const won = (price * quantity).toLocaleString();

  return (
    <div className="productList">
      <div className="productDetail">
        <img src={image_url} alt="skin" className="productImg" />
        <p className="productName">{kor_name}</p>
        <button className="deleteBtn" onClick={deleteProduct}>
          닫기
        </button>
      </div>
      <div className="productOption">
        <p>{color}</p>
        <div className="count">
          <button onClick={decreaseHandler}>-</button>
          <input className="quanttshin" value={quantity} />
          <button onClick={increaseHandler}>+</button>
        </div>
        <div className="price">
          <div className="fixedPrice">{won}원</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
