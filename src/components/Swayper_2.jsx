import React from 'react'
import "../Stail/Swayper_2.css"
import img_bgbg from "../imajes/portrait-serious-curly-haired-woman-wears-spectacles-sas-has-bad-eyesight-looks-directly-camera-dressed-leather-jacket-poses-against-brown-background-people-facial-expressions-style 1.png"
import img__gbgb from "../imajes/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses 1.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


function Swayper_2() {
  return (
    <section>
       
       <div className="wrapwrap">
          <div className="canteyner">
          <h1>Collections</h1>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum, Cream Shop</p>
                
                      
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img__gbgb} alt="" />
                    <p>Lorem ipsum dolor</p>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img__gbgb} alt="" />
                    <p>Lorem ipsum dolor</p>
                    </div>
  
        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img__gbgb} alt="" />
                    <p>Lorem ipsum dolor</p>
                    </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img__gbgb} alt="" />
                    <p>Lorem ipsum dolor</p>
                    </div>


        </SwiperSlide>
        <SwiperSlide>
        <div className="bng_img">
                    <img src={img_bgbg} alt="" />
                    <p>Sed ut perspiciatis</p>
                    </div>

        </SwiperSlide>
      </Swiper>
                </div>
            </div>
        
    </section>
  )
}
export default Swayper_2