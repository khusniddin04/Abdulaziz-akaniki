import React from 'react'
import "../Stail/Bannir_2.css"
import bacground_img from "../imajes/4__img.png"
import fon1 from "../imajes/img__fon.png"
import fon2 from "../imajes/img__fon_1.png"
import tresed from "../imajes/image 2 (Traced).png"
import tresed1 from "../imajes/image 3 (Traced).png"
import tresed2 from "../imajes/image 4 (Traced).png"
import tresed3 from "../imajes/image 5 (Traced).png"
function Bannir_2() {
  return (
    <section>
        <div className="canteyner">
           <div className="bekraund_img">
            <img src={bacground_img} alt="" />
           </div>
           <div className="becraund_modal">
            <p>Featuring</p>
            <h1>Sed ut perspiciatis</h1>
            <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</h6>
            <a href="">SHOP NOW</a>
           </div>
           <div className="bannr__imgs">
             <div className="cards_text">
                <img src={fon2} alt="" />
                <h1>Nemo enim ipsam</h1>
                <a href="">Shop Now</a>
             </div>
             <div className="cards_text">
                <img src={fon1} alt="" />
                <h1>Temporibus autem</h1>
                <a href="">Shop Now</a>
             </div>
           </div>
           
           <div className="becground_h2">
            <h2>Featured</h2>
            </div>
        </div>
        <div className="bakround_url">
          <div className="becground_h2">
            <h2>Featured</h2>
            </div>
            <div className="url">
              <div className="cards_3">
                <img src={tresed} alt="" />
              </div>
              <div className="cards_3">
                <img src={tresed1} alt="" />
              </div>
              <div className="cards_3">
                <img src={tresed2} alt="" />
              </div>
              <div className="cards_3">
                <img src={tresed3} alt="" />
              </div>
            </div>
           </div>
    </section>
  )
}

export default Bannir_2