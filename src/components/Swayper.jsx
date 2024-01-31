import React from 'react'
import "../Stail/Swayper.css"
import img_9 from "../imajes/image 9.svg"
import img_8 from "../imajes/image 8.svg"
import img_10 from "../imajes/image 10.svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Swayper() {
  return (
<section>
    <div className="canteyner">
        <div className="Swiper_Wraper">
            <h2>Discover our products</h2>
            <div className="border_Shop">
                <a href="">Shop all</a>

            </div>
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
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
               
                <img src={img_10} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="li">
                    <a href="">SALE</a>
                </div>
            <div className="Card_img">
                <img src={img_9} alt="" />
               
            </div>
            <li><p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_8} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_10} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <>$28.00</>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_9} alt="" />
               
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_8} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_8} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_8} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="Swayper_ig">
        <div className="ul">
                    <a href="">NEW</a>
                </div>
            <div className="Card_img">
                <img src={img_8} alt="" />
            </div>
            <li> <p>+ Quick Shop</p></li>
            <p>Your Skin But Better CC+ Cream with SPF50 12ml </p>
            <h6>$28.00</h6>
        </div>
        </SwiperSlide>
      </Swiper>
        
    </div>
 </section>
  )
}

export default Swayper