import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
export default function DishesLogo() {
  return (
    <>
    <div class="partner-wrap  pt-100 ">
<div class="container">
<div class="row">
<div class="col-xl-12">
    <Swiper  slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay]} 
        className="partner-slider swiper-container mt-3 mb-3">
<SwiperSlide>
<div className="partner-logo">
  <img src="assets/img/partner/partner-logo-1.png" alt="Image" />
</div>

</SwiperSlide>
<SwiperSlide>
<div className="partner-logo">
  <img src="assets/img/partner/partner-logo-2.png" alt="Image" />
</div>

</SwiperSlide>
<SwiperSlide>
<div className="partner-logo">
  <img src="assets/img/partner/partner-logo-3.png" alt="Image" />
</div>

</SwiperSlide>
<SwiperSlide>
<div className="partner-logo">
  <img src="assets/img/partner/partner-logo-4.png" alt="Image" />
</div>

</SwiperSlide>
<SwiperSlide>
<div className="partner-logo">
  <img src="assets/img/partner/partner-logo-5.png" alt="Image" />
</div>

</SwiperSlide>
        </Swiper>
</div>
</div>
</div>
</div>

    </>
  )
}
