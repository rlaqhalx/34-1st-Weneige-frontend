import React, { useEffect, useState } from 'react';
import Products from './Products';
import SortingButton from './SortingButton';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('data/productData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  const sortAscByLetter = () => {
    let listSortedByKoreanAlphabet = [...productList].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    setProductList(listSortedByKoreanAlphabet);
  };

  const sortDescByPrice = () => {
    let listSortedByPrice = [...productList].sort((a, b) =>
      b.price > a.price ? 1 : -1
    );
    setProductList(listSortedByPrice);
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
          zIndex: '101', // TODO: Nav에 추후 추가 필요
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
                <SortingButton
                  sortAscByLetter={sortAscByLetter}
                  sortDescByPrice={sortDescByPrice}
                />
              </div>
            </div>
            <p>메이크업 16개 상품</p>
          </div>
          <div className="productsContainer">
            {productList.map(
              ({ id, img, title, price, hashtxt1, hashtxt2 }) => {
                return (
                  <Products
                    key={id}
                    img={img}
                    title={title}
                    price={price}
                    hashtxt1={hashtxt1}
                    hashtxt2={hashtxt2}
                  />
                );
              }
            )}
            {/* <Products productData={productData} /> */}
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

export default Main;
