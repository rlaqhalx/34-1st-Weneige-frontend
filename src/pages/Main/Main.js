import React, { useEffect, useState } from 'react';
import SortingButton from './SortingButton';
import SearchBar from './SearchBar';
import Carousel, { CarouselItem } from './Carousel';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProductItem from './ProductItem';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    fetch('data/productData.json')
      // TODO : 추후 백엔드와 통신할 때 아래 코드 사용할 것
      // fetch('http://172.20.10.6:8000/products')
      .then(res => res.json())
      .then(data => {
        setProductList(data.product_detail);
      });
  }, []);

  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    fetch('data/carouselimgData.json')
      .then(res => res.json())
      .then(data => {
        setCarouselData(data);
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

  const updateItemInput = e => {
    setSearchInputValue(e.target.value);
  };

  const sortedItems = productList.filter(item => {
    return item.kor_name.includes(searchInputValue);
  });

  return (
    <>
      <Nav />
      <div className="main">
        <section className="slideSection">
          <div className="carouselSection">
            <Carousel>
              {carouselData.map(({ id, img, text }) => {
                return (
                  <CarouselItem key={id}>
                    <img alt="" src={img} />
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </section>
        <SearchBar updateItemInput={updateItemInput} />
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
            {/* {productList.map(({ product_id, image_url, kor_name, price }) => {
              return (
                <Products
                  key={product_id}
                  product_id={product_id}
                  image_url={image_url}
                  kor_name={kor_name}
                  price={price}
                />
              );
            })} */}
            <ProductItem productList={sortedItems} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Main;
