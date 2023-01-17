import React, { useState, useEffect } from 'react'
import carouselImage1 from '../../Images/homeCarasell-1.png' 

import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className='container'>
        <div className='carouselDiv py-2'>
            <h2 className='text-primary pt-4 mt-4 text-center display-5'>Top Selling Products</h2>
            <Carousel className='py-4'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5 className='carouselText text-white' >First slide label</h5>
                <p className='carouselText text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImage1}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5 className='carouselText text-white' >Second slide label</h5>
                <p className='carouselText text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={carouselImage1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5 className='carouselText text-white' >Third slide label</h5>
                <p className='carouselText text-white'>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    </div>
  );
}

export default DarkVariantExample;
