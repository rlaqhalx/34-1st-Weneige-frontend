import React, { useEffect, useState } from 'react';
import './Carousel.scss';

// 코드 참조: https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

const Carousel = ({ carouselData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateIndex = newIndex => {
    let count = carouselData.length;
    if (newIndex < 0) {
      newIndex = count - 1;
    } else if (newIndex >= count) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselData.map(({ id, img, alt }) => {
          return (
            <div className="carouselItem" key={id}>
              <img alt={alt} src={img} />
            </div>
          );
        })}
      </div>
      <div className="indicators">
        <button
          className="prevButton"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          &lt;
        </button>
        {carouselData.map((el, index) => {
          return (
            <button
              key={index}
              className={`choose${index === activeIndex ? ' active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
        <button
          className="nextButton"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
