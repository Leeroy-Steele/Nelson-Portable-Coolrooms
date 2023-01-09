import React, { useState } from 'react'

export default function UserLoggedIn() {

    let [isUserLoggedIn,setUserLoggedIn] = useState(false)

    function changeLoggedIn(loggedIn){
        setUserLoggedIn(loggedIn)
        
        return isUserLoggedIn
    }

  return (
    isUserLoggedIn, changeLoggedIn
  )
}
