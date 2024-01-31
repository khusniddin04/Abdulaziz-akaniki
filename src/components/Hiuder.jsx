import React from 'react'
import "../Stail/Header.css"
import logo from "../imajes/lazizbek.png"
import dark from "../imajes/Headline.png"
import { NavLink, useLocation } from 'react-router-dom'
function Hiuder() {
  let location = useLocation()
  return (
    <header id={location.pathname === "/" ? "home" : "header" && location.pathname === "/about"  ? "home" : "header"}>
      
     <div className="canteyner">
        <nav>
            <ul className='ankr'>             
              <NavLink to="/about" id='Shop'>Shop</NavLink>
              <NavLink to="/pdp" id='Shop'>About</NavLink>
            </ul>
            <NavLink to="/">
              <img className='logo' src={location.pathname === "/" ? logo : dark && location.pathname === "/about" ? logo : dark} alt="" />
               
            </NavLink>
            <ul className='ankr'>
                <NavLink to="/" id='Shop'>Search</NavLink>
                <NavLink to="card" id='Shop'>Cart (0)</NavLink>
            </ul>
        </nav>
     </div>
        
    </header>
  )
}

export default Hiuder