import React from 'react';
import './ProductOption.scss';

const ProductOption = ({ deleteConfirm }) => {
  return (
    <div className="products">
      <div className="productDetail">
        <input type="checkbox" className="productCheckBox" />
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          alt="skin"
          className="productImg"
        />
        <p className="productName">product.name</p>
        <button className="deleteBtn" onClick={deleteConfirm}>
          X
        </button>
      </div>
      <div className="productOption">
        <p>product.name</p>
        <div className="count">
          <button>-</button>
          {/* <input>{quantity}</input> */}
          <button>+</button>
        </div>
        <button>주문변경</button>
        <div className="price">
          <div className="originalPrice">product.price</div>
        </div>
        <button className="deleteBtn" onClick={deleteConfirm}>
          X
        </button>
      </div>
    </div>
  );
};

export default ProductOption;
