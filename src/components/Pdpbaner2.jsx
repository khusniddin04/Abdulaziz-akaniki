import React from 'react'
import "../Stail/Pdpbaner2.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import imgs__pdp_banr from "../imajes/woman-holds-jar-with-cosmetic-cream-her-hands.png"
import imgs__pdp_banr1 from "../imajes/woman-holds-jar-with-cosmetic-cream-her-hands (1).png"
import imgs__pdp_banr2 from "../imajes/top-view-skincare-bottles-surface-with-green-plants 1.png"
function Pdpbaner2() {
    return (
     <section>
         <div className="pdpbaner2__swip">
      <div className="canteyner">
                <div className="pdp_centr">

                
          
              <div className="csa">
                <p>The results</p>
                  <h1>From our customers</h1>
                </div>  

           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <img src={imgs__pdp_banr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
         <img src={imgs__pdp_banr1} alt="" />
        
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgs__pdp_banr2} alt="" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgs__pdp_banr} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgs__pdp_banr1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgs__pdp_banr2} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
           </div>
      </div>
     </section>
    )
  }
  
  export default Pdpbaner2