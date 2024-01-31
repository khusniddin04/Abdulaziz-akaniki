import React from 'react'
import "../Stail/Bannir_1.css"
import img__text from "../imajes/img__text.png"
import img__text_2 from "../imajes/img__text_2.png"
function Bannir_1() {
  return (
    <section>
        <div className="canteyner">
            <div className="img__text">
                <div className="cards_4">
                    <h1>Neque porro quisquam est, qui dolorem</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    
                    <div className="bordr_2">
                    <a href="">Ingredient glossary</a>
                    </div>
                   
                    
                </div>
                <div className="cards_5">
                    <img src={img__text} alt="" />
                </div>

            </div>
            <div className="img__text">
            <div className="cards_5">
                    <img src={img__text_2} alt="" />
                </div>
                <div className="cards_4">
                     <a href="">Our story</a>
                    <h1>Ut enim ad minima</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    
                    <div className="bordr_3">
                    <a href="">About Us</a>
                    </div>
                   
                    
                </div>
                

            </div>

            <div className="img__3">

            </div>
        </div>
    </section>
  )
}

export default Bannir_1