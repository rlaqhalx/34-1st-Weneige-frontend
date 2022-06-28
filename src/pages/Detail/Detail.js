import React, { useState, useEffect } from 'react';
import DetailTitle from './DetailTitle';
import DetailThumbnail from './DetailThumbnail';
import Description from './Description';
import './Detail.scss';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  //const product_id = params.id;
  /*
  useEffect(() => {
    const product_id = params.id;
    fetch(`http://172.20.10.6:8000/products/product/${product_id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product_detail);
      });
  }, [params.id]);

  console.log('thisisparams', params);
  console.log('thisisparams', product);
  // get rid of product_detail 
*/

  useEffect(() => {
    fetch('data/Detail_Product_Data.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      {product.length === 0 ? (
        'Loading...'
      ) : (
        <>
          <DetailThumbnail images={product[5].product_detail.image_url} />

          <DetailTitle
            //product_id={product_id}
            product_id={product[5].product_detail.product_id}
            korName={product[5].product_detail.kor_name}
            engName={product[5].product_detail.eng_name}
            description={product[5].product_detail.description}
            colors={product[5].product_detail.color}
            volume={product[5].product_detail.volume}
            price={product[5].product_detail.price}
            images={product[5].product_detail.image_url}
          />

          <section className="detailNavBar">
            <a className="detailNavBarText" href="#detailDescriptionWrapper">
              상품 특징
            </a>
          </section>

          <section id="detailDescriptionWrapper">
            <Description
              img={product[5].product_detail.image_url[0]}
              description={product[5].product_detail.description}
              num={1}
            />
            {product[5].product_detail.image_url.length < 2 ? null : (
              <Description
                img={product[5].product_detail.image_url[1]}
                description={product[5].product_detail.color[0]}
                num={2}
              />
            )}

            {product[5].product_detail.image_url.length < 3 ? null : (
              <Description
                img={product[5].product_detail.image_url[2]}
                description={product[5].product_detail.color[1]}
                num={3}
              />
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Detail;
