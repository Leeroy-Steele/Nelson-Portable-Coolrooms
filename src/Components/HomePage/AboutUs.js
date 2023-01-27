import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function AboutUs() {
  return (
    <div className='aboutUsDiv px-5 py-5 mt-5 row bg-primary'>

        <div className='aboutUstextDiv col-lg-6 col-md-10 m-mb-3'>

            <h2 className='display-3 pt-5 text-center'>ABOUT US</h2>
            
            <p className='p-4 fs-5'> 
            
              At Nelson Portable Coolrooms we are able to call on over 2 decades of knowledge 
              from our wide experience in the Shipping container, Commercial Refrigeration and Hire sector industries.<br/><br/>

              Our goal is to meet and exceed the expectations of every one of our customers. <br/><br/>

              We pride ourselves on our commitment to provide a professional and speedy service at all times, whilst maintaining 
              the highest quality of work.We offer a high premium service and range of products to assist business in the ever 
              more integral part of our economy. The temperature controlled food industry.

            </p>
            
        </div>
        
        <div className='aboutUstextDiv col-lg-6 col-md-10 m-mb-3'>

            <h2 className='display-3 pt-5 pb-4 text-center'>OUR SERVICES</h2>

            <ListGroup variant="flush text-center mb-5" >
              <ListGroup.Item className='bg-primary text-white'>Short or Long term Hire of Portable Refrigeration products</ListGroup.Item>
              <ListGroup.Item className='bg-primary text-white'>Delivery and pickup service at start and conclusion of hire</ListGroup.Item>
              <ListGroup.Item className='bg-primary text-white'>Custom size units for your particular needs</ListGroup.Item>
              <ListGroup.Item className='bg-primary text-white'>Coolroom and Freezer solutions available</ListGroup.Item>
              <ListGroup.Item className='bg-primary text-white'>Comprehensive repair and service of all our equipment during hire and after sale</ListGroup.Item>

            </ListGroup>

        </div>
    </div>
  )
}
