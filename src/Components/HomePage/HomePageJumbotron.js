import React from 'react'
import BackgroundVideo from '../../Videos/shorterCut.mp4'

import MainLogo from '../MainLogo'

export default function homePageJumbotron() {
  return (
    <div>
        <div className='homeJumbotronDiv' >
          <div className='jumbotronText'>
            <h1 className='display-4 pt-5 fw-bold' >NZ BUILT</h1>
            <h1 className='display-4 pb-1' >RELIABLE COMMERCIAL COOLROOMS</h1>
 
            <MainLogo cName='jumbotronAcLogo'></MainLogo>
          </div>
            <video className='videoTag' autoPlay loop muted>
                <source src={BackgroundVideo} type='video/mp4' />
                
            </video>
            
                
          
        </div>
    </div>
  )
}
