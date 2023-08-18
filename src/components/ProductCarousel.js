import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import productData from '../cards/productData.js';
import '../css/ProductCarousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container">
      <div className="product-carousel">
        <Slider {...settings}>
          {
            productData.map((item) => (
            <ProductCard key = {item.id} {...item} />
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
