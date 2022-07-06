import React from 'react'
import ThemeDecider from './ThemeDecider'

const Navbar = () => {
  return (
    <div style={{height:"50px", backgroundColor:"teal", diaplay:"flex", justifyContent:"center", alignItems:"center"}}>
        <ThemeDecider/>
    </div>
  )
}

export default Navbar