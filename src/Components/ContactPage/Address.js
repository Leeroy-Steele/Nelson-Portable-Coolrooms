import React from 'react'

export default function Address() {
  return (
    <div className='text-center'>
        <h2 className='display-6 text-muted m-4 fw-bold'>Find us</h2>
        <p className='text-black'>Nelson Porable Coolrooms</p>
        <p className='text-black'>Beach road, Richmond, Nelson </p>
        <p className='text-black'>7020, NZ</p>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.578454705112!2d173.18746806519113!3d-41.33250172085289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b946ce379386b%3A0xb58aba9383e7ab2e!2sBeach%20Road%2C%20Richmond%207020!5e0!3m2!1sen!2snz!4v1670567192282!5m2!1sen!2snz"
        width="100%" 
        height="500" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}
