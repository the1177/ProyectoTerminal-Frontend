import React, { useState } from 'react';
import { SliderData2 } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './imageSlider.css';

const ImageSlider2 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {SliderData2.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
            {/* {index === current && ( */}
              {/* <p>{slide.name}</p> */}
            {/* )} */}
          </div>
        );
      })}
       < buttom className='right-arrow btn btn-primary btn-block' onClick={nextSlide}>Cambiar juego</buttom>
    </section>
  );
};

export default ImageSlider2;
