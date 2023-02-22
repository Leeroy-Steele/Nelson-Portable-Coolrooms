import React, { useState, useEffect } from 'react'

export default function Testimonials() { 

  // input testimonials here
 
  const testimonials = [
      {
        review:'"I have purchased 4 trailers from NPC now. These trailers are the best on the market and are built to the best standards"',
        name:'Jacob Chubb. Northland Chiller Rentals'
      },
      {
        review:'"Fully customisable, top quality workmanship and excellent follow up support"',
        name:'Jacob Chubb. Northland Chiller Rentals'
      },
      {
        review:'"Can’t fault the service, Shane and Rebecca are so helpful and friendly, I would fully recommend NPC to anyone looking at purchasing a chiller trailer or portable coolroom"',
        name:'Jacob Chubb. Northland Chiller Rentals'
      },
      {
        review:'"Nelson Portable Coolrooms are always a delight to deal with. Prompt professional service always"',
        name:'Robbie Rankin. RMR Foods Limited'
      },
      {
        review:'"We\'ve bought numerous freezers over the past 5 years without any hiccups"',
        name:'Robbie Rankin. RMR Foods Limited'
      },
      {
        review:'"Shane is top class and will give his best every time"',
        name:'Robbie Rankin. RMR Foods Limited'
      }
  ]

  const[testimonial,setTestimonial] = useState(testimonials[0])

  let update

  useEffect(() => { 
    update = setTimeout(chooseTestimonial,4500) //  change the testimonial with setTimeout
  },[testimonial]) 
  

  function chooseTestimonial(){

    switch (testimonial.review) {
      case testimonials[0].review:
        setTestimonial(testimonials[1])
        break;

      case testimonials[1].review:
        setTestimonial(testimonials[2])
        break;

      case testimonials[2].review:
        setTestimonial(testimonials[3])
        break;

      case testimonials[3].review:
        setTestimonial(testimonials[4])
        break;

      case testimonials[4].review:
        setTestimonial(testimonials[5])
        break;

      case testimonials[5].review:
        setTestimonial(testimonials[0])
        break;

    }
  }

  useEffect(() => { 
    return () => {clearTimeout(update)} //clears the setInterval when component unmounts
  },[]) 

  return (
    <div className='testimonialsDiv'>
        
        <h2 className="fst-italic text-primary m-4">{testimonial.review}</h2>
        <h5 className="text-warning text-center">{testimonial.name}</h5>

    </div>
  )
}
