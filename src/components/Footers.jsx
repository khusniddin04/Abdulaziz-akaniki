import React from 'react'
import "../Stail/Footer.css"
import insta from "../imajes/socials.png"
import sobshen from "../imajes/icon.png"
import { NavLink } from 'react-router-dom'

function Footers() {
  return (
    <footer className='footer'>
        <div className="foot_1">
          <h2 className='foot_title'>Join the club</h2>
          <p className='foot_p'>Keep up with our new releases, beauty tips and what Winnie’s been up to.</p>
          <input type="text"placeholder='Email Address' className='input'/>
          <br />
          <img src={insta} alt="insta"  className='insta'/>
          <ul className='sana'>
            <li>© 2021 Cream Shop</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <span className='border_left'></span>
        <div className="foot_2">
            <div className="cards">
                <h3>Shop</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                 <p>Deepwater</p>  
                 <p>Winne Selects</p>     
            </div>
            <div className="cards">
                <h3>Learn</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                      
            </div>
            <div className="cards">
                <h3>Customer</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                    
            </div>

            
        </div>
        <NavLink to ="/">
        <div className="cobwenya">
        <img src={sobshen} alt="" />
      </div>
      </NavLink>
    </footer>
  )
}

export default Footers