import React from 'react'
import imgbanr from "../imajes/img__banr.png"
import "../Stail/Pdpbanr.css"
import list_item1 from "../imajes/list item.png"
import list_item2 from "../imajes/list item (1).png"
import list_item3 from "../imajes/list item (2).png"
import list_item4 from "../imajes/list item (3).png"
import list_item5 from "../imajes/list item (4).png"
import list_item6 from "../imajes/list item (5).png"
import img_10 from "../imajes/image 10.svg"
import img_9 from "../imajes/image 9.svg"
import img_8 from "../imajes/image 8.svg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
function Pdpbanr() {
    return (
     <section>
      <div className="canteyner">
           <div className="pdpbanr1">
                <div className="pdp_card">
                    <h1>Ingredients</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <div className="img__banr_card">
                          <img src={list_item1} alt="" />
                          <img src={list_item2} alt="" />
                          <img src={list_item3} alt="" />
                          </div>
                          <div className="img__banr_card2">
                          <img src={list_item4} alt="" />
                          <img src={list_item5} alt="" />
                          <img src={list_item6} alt="" />
                    </div>
                    <div className="pdp__ankr">
                        <h3>Full Ingredient glossary</h3>
                     </div>
                </div>
                <div className="pdp_banr__img">
                    <img src={imgbanr} alt="" />
                </div>
                
           </div>
           <div className="Swayper__pdp">
               
           <div className="Swiper_Wraper">
            <h2>You might also like</h2>
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
                <img src={img_10} alt="" />
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
      </Swiper>
           </div>
      </div>
     </section>
    )
  }
  
  export default Pdpbanr