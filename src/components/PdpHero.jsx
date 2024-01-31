import React from 'react'
import "../Stail/pdpHero.css"
import gleri from "../imajes/product gallery.png"
import img__6 from "../imajes/image 6.svg"

import { useState } from 'react'
// import "../style/shopHero.css"
// Import Swiper React components
import { Swiper,SwiperSlide } from 'swiper/react';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import rasm1 from "../imajes/product photo.png"
import rasm2 from "../imajes/portrait-serious-curly-haired-woman-wears-spectacles-sas-has-bad-eyesight-looks-directly-camera-dressed-leather-jacket-poses-against-brown-background-people-facial-expressions-style 1.png"
import rasm3 from "../imajes/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses 1.png"
import oqq from "../imajes/oqqq.png"
function PdpPHero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
   <section>
    <div className="cantener">
         <div className="padin">
           <div className="Swiyper__3">

           <div className="gallary__img">
             <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      direction="vertical"
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      <SwiperSlide >
       <img id='qwer' src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
       <img id='qwer' src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
      <img  id='qwe' src={rasm2} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
      <img id='qwe' src={rasm3} alt="a" />
      </SwiperSlide>
      
    </Swiper>
    <Swiper 
      spaceBetween={10}
      thumbs={{ swiper: 
        thumbsSwiper && ! thumbsSwiper.destroyed ? thumbsSwiper : null,
    }}
      modules={[FreeMode,  Thumbs]}
      className="mySwiper2"
    >
      <SwiperSlide>
        <img src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm2} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm3} alt="a" /> 
        </SwiperSlide>
    </Swiper>
             </div>
  
             {/* <img src={gleri} alt="" /> */}
           </div>
           <div className="svayper__9">
            <h3>Niche BeautyCCC Cream – Niche Beauty</h3>
            <p>$28.00</p>
            <ul>
               <li>
                 <p>The original, weightless, scentless sunscreen with SPF 55 that leaves a shinny finish. Formulated with the most sensitive and vulnerable in mind, with a custom blend of natural, gentle and hydrating island ingredients mixed with the most effective skincare-grade actives.</p>
               </li>
            </ul>
            <ul>
              <li>
                <h4>Size</h4>
                <p>50ml</p>
              </li>
            </ul>
            <div className="box__1">
                 <div className="box_cha">
                    <h6>1.7 fl oz</h6>
                  </div>
                  <div className="box_cha2">
                   <h6>1.7 fl oz</h6>
                   </div>
                  <div className="box_cha2">
                    <h6>1.7 fl oz</h6>
                 </div>
             </div>
              <div className="input__radyo">
                <input type="radio" name='radio' checked/>
                <label htmlFor="">$28.00 One time purchase</label>
              </div>
              <div className="input__radyo2">
                <input type="radio" name='radio'/>
                <label htmlFor="">$25.99 Subscribe and save. Details</label>
              </div>
              <div className="batn__teg">
              <div className="qushish_1ga">
                 <ul><li>-</li>1 <li>+</li></ul>
            </div>
                 <button className='Add'>Add to cart - $28.00</button>
              </div>
               <div className="text__item3">
                <h6>Starting at $20/mo with <img src={img__6} alt=""/><a href="">Learn more</a></h6>
               </div>

              <div className="cards2_2">
                <h6>Use Instruction</h6> <li>+</li>
              </div>
              <div className="cards2_2">
                <h6>Ingredients</h6> <li>+</li>
              </div>
              <div className="cards2_2">
                <h6>Shipping and Returns</h6> <li>+</li>
              </div>
              <div className="cards2_">
                <h6>How to Recycle</h6> <li>+</li>
              </div>

           </div>
         </div>
    </div>
   </section>
  )
}

export default PdpPHero