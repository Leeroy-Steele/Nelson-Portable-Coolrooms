import React, { useState, useEffect } from 'react'

export default function Testimonials() { 
 
  let testimonial1 = ['"I am testimonial 1....... I need to add text that says something nice about you and your services."','Customer 1 Name, Location.']
  let testimonial2 = ['"I am testimonial 2....... I need to add text that says something nice about you and your services."','Customer 2 Name, Location.']
  let testimonial3 = ['"I am testimonial 3....... I need to add text that says something nice about you and your services."','Customer 3 Name, Location.']

  const[testimonial,setTestimonial] = useState(testimonial1)

  let update 

  useEffect(() => { 
    update = setTimeout(chooseTestimonial,4000) //starts when component mounts

  },[testimonial]) 
  

  function chooseTestimonial(){

    switch (testimonial[1]) {
      case testimonial1[1]:
        setTestimonial(testimonial2)
        break;
      case testimonial2[1]:
        setTestimonial(testimonial3)
        break;
      case testimonial3[1]:
        setTestimonial(testimonial1)
          
    }

  }

  useEffect(() => { 
    return () => {clearTimeout(update)} //clears the setTimeout when component unmounts
  },[]) 

  return (
    <div className='testimonialsDiv'>
        
        <h2 className="fst-italic text-primary m-5">{testimonial[0]}</h2>
        <h5 className="text-warning text-center">{testimonial[1]}</h5>

    </div>
  )
}
