import React from 'react'
import "../Stail/Bannir.css"
import iist_1 from "../imajes/cream (1) 1.svg"
import iist_2 from "../imajes/make-up-kit 1.svg"
import iist_3 from "../imajes/gloss 1.svg"
import iist_4 from "../imajes/cotton-swabs 1.svg"
function Bannir() {
  return (
    <section>
        <div className="canteyner">
            <div className="Wrappr">
                <h4>Why brand name?</h4>
               <h1 className='text_blek'> Sed ut perspiciatis unde omy</h1>
                <div className="border"></div>
                <h1 className='text_vspan'> At vero eos et accusamus et iusto odio dignissimos</h1>
            </div>
            <div className="Card__2">
                <div className="card__3">
                    <img src={iist_1} alt="" />
                    <h2>Lorem ipsum</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className="card__3">
                    <img src={iist_2} alt="" />
                    <h2>Sed ut perspiciatis unde</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
                <div className="card__3">
                    <img src={iist_3} alt="" />
                    <h2>Ut enim ad minim</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                </div>
                <div className="card__3">
                    <img src={iist_4} alt="" />
                    <h2>At vero eos eaccusamus</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bannir