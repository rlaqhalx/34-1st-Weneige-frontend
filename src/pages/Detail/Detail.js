import React, { useState, useEffect } from 'react';
import './Detail.scss';
import DetailTitle from '../../components/detail/DetailTitle';

const Detail = () => {
  /*
  const [product, setProduct] = useState({
    tags: [],
    kor_name: '',
    eng_name: '',
    description: '',
    color: [],
    volume: 0,
    price: 0,
    images: '',
  });
*/
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('data/Mock_Title_Data.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
      });
  }, []);

  console.log('isItEmpty?', productList[0]);

  return (
    <>
      {!productList.length ? (
        'Loading...'
      ) : (
        <DetailTitle
          tags={productList[0].tags}
          korName={productList[0].kor_name}
          engName={productList[0].eng_name}
          description={productList[0].description}
          colors={productList[0].colors}
          volume={productList[0].volume}
          price={productList[0].price}
          images={productList[0].images}
        />
      )}
    </>
  );
};

export default Detail;
