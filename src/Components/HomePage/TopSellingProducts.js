import React from "react";
import carouselImage1 from "../../Images/TopSellingProducts/Slide1.PNG";
import carouselImage2 from "../../Images/TopSellingProducts/Slide2.PNG";
import carouselImage3 from "../../Images/TopSellingProducts/Slide3.PNG";
import carouselImage4 from "../../Images/TopSellingProducts/Slide4.PNG";
import carouselImage5 from "../../Images/TopSellingProducts/Slide5.PNG";
import carouselImage6 from "../../Images/TopSellingProducts/Slide6.PNG";

import Carousel from "react-bootstrap/Carousel";

function TopSellingProducts() {
  return (
    <>
      <div className="carouselDiv py-2">
        <br></br>
        <br></br>

        <h2 className="text-primary pt-5 mt-4 mb-4 text-center display-4">
          Top Selling Products
        </h2>
        <Carousel className="py-4" interval={2000}>
          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage1}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >Single Axle Refrigerated Trailer</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage2}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >Tandem Braked Trailers</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage3}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >20ft Standard Reefers</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage4}
              alt="Forth slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >Custom Portable Coolrooms</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage5}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >20ft New Install Containers</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="caroselItem">
            <img
              className="d-block w-100"
              src={carouselImage6}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              {/* <p className='carouselText' >20ft New Install Containers</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>

      </div>
    </>
  );
}

export default TopSellingProducts;
