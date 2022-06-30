import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import SortingButton from './SortingButton';
import SearchBar from './SearchBar';
import Carousel from './Carousel';
import ProductItem from './ProductItem';
import { API } from '../../config';
import './Main.scss';

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => {
    fetch(API.PRODUCTS)
      .then(res => res.json())
      .then(data => {
        setProductData(data.product_detail);
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
    let listSortedByKoreanAlphabet = [...productData].sort((a, b) =>
      a.kor_name > b.kor_name ? 1 : -1
    );
    setProductData(listSortedByKoreanAlphabet);
  };

  const sortDescByPrice = () => {
    let listSortedByPrice = [...productData].sort((a, b) =>
      b.price > a.price ? 1 : -1
    );
    setProductData(listSortedByPrice);
  };

  const updateItemInput = e => {
    setSearchInputValue(e.target.value);
  };

  const sortedItems = productData.filter(item => {
    return item.kor_name.includes(searchInputValue);
  });

  return (
    <>
      <Nav />
      <div className="main">
        <section className="slideSection">
          <div className="carouselSection">
            <Carousel carouselData={carouselData} />
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
            <ProductItem productData={sortedItems} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Main;
