import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { HashLink as Link } from 'react-router-hash-link'; // for enquiry button
import { useAuth } from '../LoginPages/Auth'  //For when logged in

// for bootstrap
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProductsPage() {

  let[category,setCategory]= useState('')
  let [productData, setProductData] = useState('') 
  let [displayData, setDisplayData] = useState([])
  const auth = useAuth()  //For when logged in

  useEffect(() => { // get fake store products data

    const options = {
        method: 'GET',
        url: 'https://fakestoreapi.com/products',

    };
      
    axios.request(options)
        .then(res => {setProductData(res.data);setDisplayData(res.data)})
        .catch(err => {
            console.log(err)
        })
        
  },[]) //only run once 

  useEffect(()=>{

    setDisplayData([])  //delete previous entries

    for(let i in productData){

      let currentCategory = productData[i].category

      if(currentCategory===category){
        setDisplayData(oldArray => [...oldArray, productData[i]]);
      }
      
    }

  },[category])

  function handleEdit(id){
    alert(`editing item #${id}`)
    
  }

  function handleDelete(id){
    alert(`item #${id} has been deleted`)
    
  }

  return (
    <div>
      <h2 className='text-primary text-center mt-4 py-3 '>OUR PRODUCTS</h2>

      
        <h4 className='text-primary text-center mt-3 '>Choose Category</h4>

        <Form.Group className="mb-4 categorySelect" controlId="exampleForm.ControlInput1">
            <Form.Select aria-label="Default select example" onChange={e => {setCategory(e.target.value)}} >
              <option className='text-black'>choose category</option>
              <option className='text-black' value="men's clothing">men's clothing</option>
              <option className='text-black' value="jewelery">jewelery</option>
              <option className='text-black' value="electronics">electronics</option>
              <option className='text-black' value="women's clothing">women's clothing</option>
            </Form.Select>
        </Form.Group>

        <div className='cardDiv row row-cols-1 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 justify-content-center'>
        
            {displayData.map((item, index) => (
           
              <Card className='card m-1' key={index} >
                <Card.Img  variant="top" src={item.image} />
                <Card.Body className='h-100'>
                  <Card.Title className='text-black' >{item.title}</Card.Title>
                  <Card.Text className='text-black' >{item.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
                  <ListGroup.Item>Category: {item.category}</ListGroup.Item>
                  <ListGroup.Item>Item rating {item.rating.rate} from {item.rating.count} people</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link className='btn btn-primary w-100' to="/Contact#enquiryAnchorTag">Enquire</Link>
                  
                  {(auth.checkUserName()!==null)? //  if logged in show extra buttons
                      <>
                      <Link onClick={()=>handleEdit(item.id)} className='btn btn-warning w-100 mt-1' >Edit Item</Link>
                      <Link onClick={()=>handleDelete(item.id)} className='btn btn-danger w-100 mt-1' >Delete Item</Link>
                      </>:null
                  }

                </Card.Body>
              </Card>
            
            ))}
          
       
        </div>
    </div>
  )
}
