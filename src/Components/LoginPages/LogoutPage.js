import React from 'react'
import { useAuth } from './Auth'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LogoutPage() {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function handleSubmit(){

    auth.logout()

    const redirectPath = location.state?.path || '/'  //go back to last page in history
    navigate(redirectPath, { replace: true }) //nav to page
  }
  return (
    <div className='logoutButtonDiv bg-primary'>
      <h3 className='p-2 text-center display-5'>Confirm Logout</h3>
      
      <button className='btn btn-danger p-2 my-5 mx-auto ' id='logoutButton' type='button' onClick={handleSubmit}>Logout</button>
      
    </div>
  )
}
