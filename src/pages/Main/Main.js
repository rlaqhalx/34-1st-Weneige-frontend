import React, { useEffect, useState } from 'react';
import Products from './Products';
import SortingButton from './SortingButton';
import './Main.scss';

const Main = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, []);

  const abcSort = () => {
    let abcSorting = [...productData];
    let abcCompare = key => (a, b) => {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    };
    abcSorting.sort(abcCompare('title'));
    setProductData(abcSorting);
  };

  const priceSort = () => {
    let priceSorting = [...productData];
    let priceCompare = key => (a, b) => {
      return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
    };
    priceSorting.sort(priceCompare('price'));
    setProductData(priceSorting);
  };
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
          zIndex: '101', // Nav에 추후 추가 필요
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
                <SortingButton abcSort={abcSort} priceSort={priceSort} />
              </div>
            </div>
            <p>메이크업 16개 상품</p>
          </div>
          <div className="productsContainer">
            <Products productData={productData} />
          </div>
        </section>
      </div>
      {/* Footer 제작 후 붙이기 */}
      <div
        style={{
          backgroundColor: 'green',
          height: '200px',
          width: '100%',
        }}
      >
        Footer
      </div>
    </>
  );
};

//

export default Main;
