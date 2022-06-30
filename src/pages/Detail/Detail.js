import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailTitle from './DetailTitle';
import DetailThumbnail from './DetailThumbnail';
import Description from './Description';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { API } from '../../config';
import './Detail.scss';

const Detail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const product_id = params.id;
    fetch(`${API.PRODUCTS}/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product_detail);
      });
  }, [params.id]);

  if (product.length === 0) return <>loading...</>;

  return (
    <>
      <Nav />
      <div className="detail">
        <DetailThumbnail images={product.image_url} />

        <DetailTitle
          product_id={product.product_id}
          korName={product.kor_name}
          engName={product.eng_name}
          description={product.description}
          colors={product.color}
          volume={product.volume}
          price={product.price}
          images={product.image_url}
        />

        <section className="detailNavBar">
          <a className="detailNavBarText" href="#detailDescriptionWrapper">
            상품 특징
          </a>
        </section>

        <section id="detailDescriptionWrapper">
          <Description
            img={product.image_url[0]}
            description={product.description}
            num={1}
          />
          {product.image_url.length >= 2 && (
            <Description
              img={product.image_url[1]}
              description={product.color[0]}
              num={2}
            />
          )}

          {product.image_url.length >= 3 && (
            <Description
              img={product.image_url[2]}
              description={product.color[1]}
              num={3}
            />
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
