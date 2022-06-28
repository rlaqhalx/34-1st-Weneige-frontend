import React, { useState } from 'react';
import './DetailThumbnail.scss';

const DetailThumbnail = ({ images }) => {
  const [imgSrc, setImgSrc] = useState(images[0]);

  const switchImg = event => {
    setImgSrc(event.target.src);
  };

  return (
    <>
      <section className="smallThumbnailWrapper">
        {images.map((image, index) => {
          return (
            <button key={index} onClick={switchImg}>
              <img className="smallThumbnail" src={image} alt="product" />
            </button>
          );
        })}
      </section>
      <img className="productThumbnail" src={imgSrc} alt="product" />
    </>
  );
};

export default DetailThumbnail;
