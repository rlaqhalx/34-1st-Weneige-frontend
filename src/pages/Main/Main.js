import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

const Main = () => {
  return (
    <>
      {/* nav제작 후 붙이기 */}
      <div
        className="navBar"
        style={{
          backgroundColor: 'yellow',
          height: '100px',
          position: 'fixed',
          width: '100%',
          top: '0',
        }}
      >
        nav
      </div>
      <div className="main">
        <section className="slideSection">슬라이드 섹션</section>
        <section className="productSection">
          <div className="shelfFilter">
            <div className="buttonContainer">
              <div className="categoryButton">
                <button>
                  <span className="buttonText">카테고리</span>
                </button>
              </div>
              <div className="alignButton">
                <button>
                  <span>정렬 선택 버튼</span>
                </button>
              </div>
            </div>
            <p>메이크업 16개 상품</p>
          </div>
          <div className="productShelf">
            <Products />
          </div>
        </section>
      </div>
      {/* Footer 제작 후 붙이기 */}
      <div style={{ backgroundColor: 'green', height: '200px' }}>Footer</div>
    </>
  );
};

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

export default Main;
