import React from 'react';
import Swiper from 'react-id-swiper';

const Carousel = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <div>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    </div>
  );
};

export default Carousel;
