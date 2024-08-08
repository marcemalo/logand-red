import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='header'>
        <nav className='nav__wrapper'>
            <ul className='nav__list'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Home