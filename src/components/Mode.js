import React, { useState } from 'react'
import './mode.css'

const Home = () => {
    const[darkMode,setdarkMode]=useState(false)
    const handleMode=(e)=>{
        e.preventDefault()
        setdarkMode(!darkMode)

    }

  return (
    <div className={darkMode ?"dark" : "light"}>
      <h1>{darkMode ?"Dark Mode" : "Light Mode"}</h1>
      <button onClick={handleMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
    </div>
  )
}

export default Home
