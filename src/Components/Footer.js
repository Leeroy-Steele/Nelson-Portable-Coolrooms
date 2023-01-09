import React from 'react'
import MainLogo from './MainLogo'

export default function Footer() {
  return (
    <div className='bg-primary p-3'>

      <div className="d-flex justify-content-center">

        <MainLogo cName='footerLogo'></MainLogo>

        <h5 className="px-2 pt-1 m-3">NELSON PORTABLE COOLROOMS</h5>

        {/* <p className='text-white p-4 text-end'>2022 copyright - website design by Leeroy Steele</p> */}
      </div>

    </div>
  )
}
