import React, { useState, useEffect } from 'react'
import carouselImage1 from '../../Images/Products/Single-Axle-Refrigerated-Trailers.png' 
import carouselImage2 from '../../Images/Products/Tandem-Braked-Trailers.png' 
import carouselImage3 from '../../Images/Products/20ft-Standard-Reefers.png' 

import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <div className='container'>
        <div className='carouselDiv py-2'>
            <h2 className='text-primary pt-5 mt-4 mb-4 text-center display-5'>Top Selling Products</h2>
            <Carousel className='py-4'>

                <Carousel.Item className='caroselItem'>
                    <img
                        className="d-block w-100"
                        src={carouselImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <p className='carouselText' >Single Axle Refrigerated Trailer</p>
                    {/* <p className='carouselText'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='caroselItem'>
                    <img
                        className="d-block w-100"
                        src={carouselImage2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <p className='carouselText' >Tandem Braked Trailers</p>
                    {/* <p className='carouselText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='caroselItem'>
                    <img
                        className="d-block w-100"
                        src={carouselImage3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <p className='carouselText' >20ft Standard Reefers</p>
                    {/* <p className='carouselText'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        </div>
    </div>
  );
}

export default DarkVariantExample;
