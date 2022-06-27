import React, { useEffect, useState } from 'react';
import Products from './Products';
import SortingButton from './SortingButton';
import Carousel, { CarouselItem } from './Carousel';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('data/productData.json')
      // TODO : 추후 백엔드와 통신할 때 아래 코드 사용할 것
      // fetch('http://172.20.10.6:8000/products/product_list')
      .then(res => res.json())
      .then(data => {
        setProductList(data.product_detail);
      });
  }, []);

  const sortAscByLetter = () => {
    let listSortedByKoreanAlphabet = [...productList].sort((a, b) =>
      a.kor_name > b.kor_name ? 1 : -1
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
        <section className="slideSection">
          <Carousel>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  color: 'white',
                }}
              >
                멋있는 산
              </div>
            </CarouselItem>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              />
            </CarouselItem>
          </Carousel>
        </section>
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
            {productList.map(({ product_id, image_url, kor_name, price }) => {
              return (
                <Products
                  key={product_id}
                  product_id={product_id}
                  image_url={image_url}
                  kor_name={kor_name}
                  price={price}
                />
              );
            })}
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
