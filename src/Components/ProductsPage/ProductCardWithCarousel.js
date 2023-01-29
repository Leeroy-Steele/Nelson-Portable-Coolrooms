import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'; // for enquiry button
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';

// for bootstrap
import Card from 'react-bootstrap/Card';

export default function ProductCardWithCarousel(props) {

  // enquiry button path to navigate to (use query params to part fill enquiry form)
  let enquiryPath = `/Contact?enquirySubject=${props.title}#enquiryAnchorTag`

  return (
    <div>
        <Card className='border-0 pt-3 pb-5' >

          <Carousel fade variant="dark" interval="2000">
          
            <Carousel.Item className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[0]} 
                alt="First slide"
              />
            </Carousel.Item>
     
            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[1]} 
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[2]} 
                alt="Third slide"
              />
            </Carousel.Item>
            
            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[3]} 
                alt="Fourth slide"
              />
            </Carousel.Item>

            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[4]} 
                alt="Fifth slide"
              />
            </Carousel.Item>

            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[5]} 
                alt="Sixth slide"
              />
            </Carousel.Item>
            
            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[6]} 
                alt="Seventh slide"
              />
            </Carousel.Item>

            <Carousel.Item  className='carouselImage'>
              <img
                className="d-block w-100"
                src={props.imgURL[7]} 
                alt="Eighth slide"
              />
            </Carousel.Item>
            
          </Carousel>

          <Card.Body className='text-center'>

            <Card.Title className='text-primary'>{props.title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
            
            <Link className='btn btn-primary w-25' to={enquiryPath}>Enquire</Link>

            <Card.Text className='text-dark text-start mt-3'>{props.text1}</Card.Text>
            
            <Card.Text className='text-dark text-start'>{props.text2}</Card.Text>
            
            <Card.Text className='text-dark text-start'>{props.text3}</Card.Text>

            <Card.Text className='text-dark text-start'>{props.text4}</Card.Text>

            {/* <ListGroup variant="flush">
              <ListGroup.Item>{props.uListItems[0]}</ListGroup.Item>
              <ListGroup.Item>{props.uListItems[1]}</ListGroup.Item>
              <ListGroup.Item>{props.uListItems[2]}</ListGroup.Item>
              <ListGroup.Item>{props.uListItems[3]}</ListGroup.Item>
              <ListGroup.Item>{props.uListItems[4]}</ListGroup.Item>
              <ListGroup.Item>{props.uListItems[5]}</ListGroup.Item>

            </ListGroup> */}

            <ul>
              <li className='text-dark text-start'>{props.uListItems[0]}</li>
              <li className='text-dark text-start'>{props.uListItems[1]}</li>
              <li className='text-dark text-start'>{props.uListItems[2]}</li>
              <li className='text-dark text-start'>{props.uListItems[3]}</li>
              <li className='text-dark text-start'>{props.uListItems[4]}</li>
            </ul>

          </Card.Body>
        </Card>
    </div>
  )
}
