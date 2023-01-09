import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'


// for bootstrap
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function LoginPage() {

  const [userEmail, setUserEmail] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()

  const redirectPath = location.state?.path || '/'  //go back to last page in history

  function handleSubmit(){

    if(!userEmail){alert(`you need to enter an email address`)}
    else{
      // alert(`${userEmail} you are logged in`)

      auth.login(userEmail)
      navigate(redirectPath, { replace: true }) //nav to page
    }
  }

  return (
    <div className='bg-primary'>
     
    <div className='enquiryFormDiv'> 

    <h2 className='p-2 text-center display-4 fw-bold'>Sign In</h2>

      <Form id='enquiryAnchorTag'>          

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={e => setUserEmail(e.target.value)}/>
        </Form.Group>

     
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control />
        </Form.Group>


        <button className='btn btn-danger' type='button' onClick={handleSubmit}>Login</button>

      </Form>

    <br></br>
    <br></br>
  </div>

  </div>
  )
}

