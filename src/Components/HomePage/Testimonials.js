import React, { useState, useEffect } from 'react'

export default function Testimonials() { 

  // input testimonials here
 
  let testimonial1 = ['"I have purchased 4 trailers from NPC now. These trailers are the best on the market and are built to the best standards"','Jacob Chubb, Northland Chiller Rentals']
  let testimonial2 = ['"Fully customisable, top quality workmanship and excellent follow up support"','Jacob Chubb, Northland Chiller Rentals']
  let testimonial3 = ['"Can’t fault the service, Shane and Rebecca are so helpful and friendly, I would fully recommend NPC to anyone looking at purchasing a chiller trailer or portable coolroom"','Jacob Chubb, Northland Chiller Rentals']

  const[testimonial,setTestimonial] = useState(testimonial1)

  // set timeout to change between testimonials

  let update 

  useEffect(() => { 
    update = setTimeout(chooseTestimonial,5000) //starts when component mounts

  },[testimonial]) 

  function chooseTestimonial(){

    switch (testimonial[0]) {
      case testimonial1[0]:
        setTestimonial(testimonial2)
        break;
      case testimonial2[0]:
        setTestimonial(testimonial3)
        break;
      case testimonial3[0]:
        setTestimonial(testimonial1)
          
    }

  }

  useEffect(() => { 
    return () => {clearTimeout(update)} //clears the setTimeout when component unmounts
  },[]) 

  return (
    <div className='testimonialsDiv'>
        
        <h2 className="fst-italic text-primary m-4">{testimonial[0]}</h2>
        <h5 className="text-warning text-center">{testimonial[1]}</h5>

    </div>
  )
}
