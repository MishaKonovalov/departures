import React from 'react';
import imgOne from './Rectangle 23.png'
import imgTwo from './Rectangle 24.png'
import './carousel.css'

function Carousel(params) {
  return (
    <div className='carousel'>
      <div className='carousel-item'>
        <img src={imgOne} alt="" />
      </div>
      <div className='carousel-item'>
        <img src={imgTwo} alt="" />
      </div>
      <div className='carousel-item'>
        <img src={imgOne} alt="" />
      </div>
      <div className='carousel-item'>
        <img src={imgOne} alt="" />
      </div>
      <div className='carousel-item'>
        <img src={imgOne} alt="" />
      </div>
      <div className='carousel-item'>
        <img src={imgOne} alt="" />
      </div>
    </div>
  )
}

export default Carousel