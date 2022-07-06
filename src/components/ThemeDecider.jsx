import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeDecider = () => {
    const {isLight, toggleTheme}= useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleTheme}>{`Make ${isLight ?  "Dark" : "Light"}`}</button>
    </div>
  )
}

export default ThemeDecider