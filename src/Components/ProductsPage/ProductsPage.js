import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link'; // for enquiry button
import ProductCard from './ProductCard'

// for bootstrap
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

// product images
import TandemBrakedTrailerImage from '../../Images/Products/Tandem-Braked-Trailers.png'
import SingleAxleTrailerImage from'../../Images/Products/Single-Axle-Refrigerated-Trailers.png'
import NewInstallContainersImage from '../../Images/Products/20ft-New-Install-Containers.png'
import StandardReefersImage from '../../Images/Products/20ft-Standard-Reefers.png'
import CustomRefrigeratedImage from '../../Images/Products/Custom-Refrigerated-Trailers.png'

export default function ProductsPage() {

  return (
    <>
      <h2 className='text-primary text-center mt-4 py-3 '>OUR PRODUCTS</h2>

      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center p-3 '>

        <ProductCard
          imgURL={SingleAxleTrailerImage}
          title='Single Axle Refrigerated Trailers'
          subTitle='Freezer or Chiller'
          text1=  'Our single axle trailers are our most popular product, still able to carry a payload of up to 850kgs these trailers tow easily and are easy to maneuvre around on jockey wheel and can be anchored down firmly with the standard dual landing legs'
          text2=  'Internal dimensions are 2.25L x 1.35W x 1.75 H'
          text3=  'Cubic capacity: 5.3 m3'
          text4=  'These are priced from $12,500.00 + GST and therefore represent a well priced quality new product.'
        />

        <ProductCard
          imgURL={TandemBrakedTrailerImage}
          title='Tandem Braked Trailers'
          subTitle='Freezer or Chiller'
          text1=  'All of our trailers are proudly made in NZ and are built using the highest quality materials and equipment'
          text2=  'Our Refrigeration Machinery are from leading brands well established in Europe and Australasia'
          text3=  'Electronic controllers are installed as standard, 3mm Alloy Checker plate flooring with two drains, LED Lighting and Quality lockable insulated doors'
          text4=  'Trailer frames are hot dip galvanised and feature a rear step, jockey wheel, optional brakes and LED lights. All new trailers come with a new WOF and Registration so they are ready for use'
        />

        <ProductCard
          imgURL={NewInstallContainersImage}
          title='20ft New Install Containers'
          subTitle='Single Phase, Freezer or Chiller'
          text1=  'Ex shipping line Reefer containers with original 3-Phase machinery removed' 
          text2=  'The Container itself is referbished and coated with a quality Marine Grade paint'
          text3=  'New Chiller or Freezer equipment is then installed to create a portable and versatile container that can be run off a standard single phase 10 or 15amp power socket'
        />
        
        <ProductCard
          imgURL={StandardReefersImage}
          title='20ft Standard Reefers'
          subTitle='3-Phase serviced machinery, Freezer & Chiller'
          text1=  'This product is straight from the shipping line, straight out of the fleet' 
          text2=  'Referbished, coated in marine grade paint. Machinery is serviced including installing a new plug, electrically tested and test-run down to -25 Degrees'
          text3=  'Standard Reefers are very versatile as they can be set between a wide range of setpoints and can be used in very harsh environments'
          text4=  'We are able to certify containers for shipping overseas and supply new spares'
        />
              
        <ProductCard
          imgURL={CustomRefrigeratedImage}
          title='Custom Refrigerated Trailers'
          subTitle='Any height & trailer size possible'
          text1=  "We offer a comprehensive range of features, extra's and design freedoms to our trailers"
          text2=  'We will custom build to your design or work with you to design a trailer that will best suit your needs' 
          text3=  'This includes colour options, sizing, lighting and interior options. Genset supply and fitment'
          text4=  'We fit doors of any size with many types of opening options'
        />

      </div>
    </>
  )
}
