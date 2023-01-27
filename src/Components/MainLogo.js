import React from 'react'
import MainLogoFile from '../Logos/acLogoDark.svg'

export default function MainLogo(props) {
    let className = props.cName
  return (
    <><img src={MainLogoFile} className={className}  alt='logo' /></>
  )
}
