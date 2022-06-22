import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  });
  return (
    <>
      {productData.map(({ id, img, title, hashtxt1, hashtxt2 }) => {
        return (
          <div className="productContainer" key={id}>
            <Link to="#" className="productItemLink">
              <div className="productItemThumb">
                <img src={img} alt="thumb1" />
              </div>
            </Link>
            <div className="productItemHashWrap">
              <span className="productItemHash">{hashtxt1}</span>
              <span className="productItemHash">{hashtxt2}</span>
            </div>
            <div className="productItemName">{title}</div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
