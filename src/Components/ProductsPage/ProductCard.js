import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'; // for enquiry button

// for bootstrap
import Card from 'react-bootstrap/Card';

export default function ProductCard(props) {

  // enquiry button path to navigate to (use query params to part fill enquiry form)
  let enquiryPath = `/Contact?enquirySubject=${props.title}#enquiryAnchorTag`

  return (
    <div>
        <Card className='border-0 pt-3 pb-5' >

          <Card.Img variant="top" src={props.imgURL} className="cardImage"/>

          <Card.Body className='text-center'>

            <Card.Title className='text-primary'>{props.title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">{props.subTitle}</Card.Subtitle>
            
            <Link className='btn btn-primary w-25' to={enquiryPath}>Enquire</Link>

            <Card.Text className='text-dark text-start mt-3'>{props.text1}</Card.Text>
            
            <Card.Text className='text-dark text-start'>{props.text2}</Card.Text>
            
            <Card.Text className='text-dark text-start'>{props.text3}</Card.Text>

            <Card.Text className='text-dark text-start'>{props.text4}</Card.Text>

          </Card.Body>
        </Card>
    </div>
  )
}
