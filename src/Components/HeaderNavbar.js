// import React from 'react'
import { NavLink } from 'react-router-dom'

//images import

import homeLogo from '../Logos/homeLogo.svg'
import productsLogo from '../Logos/productsLogo.svg'
import contactLogo from '../Logos/contactLogo.svg'
import MainLogo from '../Components/MainLogo'
import facebookLogo from '../Logos/facebook.svg'


export default function HeaderNavbar() {

  return (
    <header>

    <div className="pt-2 py-1 bg-white">
      <h6 className="text-primary text-center">CALL FOR A FREE QUOTE: 020 4186 0544</h6>
    </div>

    <div className="px-3 py-2 text-bg-primary">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">

            <MainLogo cName='headerMainLogo'></MainLogo>

            <h5 className="px-2 pt-2">NELSON PORTABLE COOLROOMS</h5>
          </div>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            
            <li>
              <NavLink to='/' >
              <div className="nav-link text-white">
               
                <img className='navLinkImg bi d-block mx-auto mb-1' src={homeLogo} alt='logo'></img>
                Home
              </div>
              </NavLink>
            </li>

            <li>
              <NavLink to='/Products' >
              <div className="nav-link text-white">
             
                <img className='navLinkImg bi d-block mx-auto mb-1' src={productsLogo} alt='logo'></img>
                Products
              </div>
              </NavLink>
            </li>

            <li>
              <NavLink to='/Contact' >
              <div className="nav-link text-white">
           
                <img className='navLinkImg bi d-block mx-auto mb-1' src={contactLogo} alt='logo'></img>
                Contact
              </div>
              </NavLink>
            </li>

            <li>
              <a href='https://www.facebook.com/nelsonportablecoolrooms' >
              <div className="nav-link text-white">
           
                <img className='navLinkImg bi d-block mx-auto mb-1' src={facebookLogo} alt='logo'></img>
                Facebook
              </div>
              </a>
            </li>
  
   
          </ul>
        </div>
      </div>
    </div>

  </header>
  )
}
