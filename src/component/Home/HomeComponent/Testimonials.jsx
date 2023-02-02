import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
export default function Testimonials() {
  return (
    <>
     <section className="testimonial-wrap bg-f testimonial-bg-1 pt-100 pb-100 pos-rel">
    <div className="overlay bg-white op-7" />
    <div className="section-title style1 text-center mb-40">
      <span>
        <img src="assets/img/secion-shape-1.png" alt="Image" />
        Testimonials
        <img src="assets/img/secion-shape-2.png" alt="Image" />
      </span>
      <h2>Our Happy Customers</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay]} 
    className="testimonial-slider-one swiper-container">
              <SwiperSlide>
                <div className="testimonial-item style1">
                  <div className="row justify-content-center mb-2">
                    <div className="col-md-8">

                    <img src="assets/img/testimonial/client-1.jpg" style={{border:"7px solid silver"}} width={"100%"}  className='img-rounded' alt="Image" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">

                    <h4>Lisa Ann</h4>
                    <p>CEO, IUBAT</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>The food is really very tasty – the wagyu sushi on the dinner menu is
                      especially delicious and not to be missed for a long time!</p>
                  </div>
                  <div className="client-rating-wrap">
                    <ul className="ratings list-style">
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                    </ul>
                    <div className="quote-icon">
                      <i className="flaticon-right-quote-sign" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
           <div className="testimonial-item style1">
                  <div className="row justify-content-center mb-2">
                    <div className="col-md-8">

                    <img src="assets/img/testimonial/client-1.jpg" style={{border:"7px solid silver"}} width={"100%"}  className='img-rounded' alt="Image" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">

                    <h4>Lisa Ann</h4>
                    <p>CEO, IUBAT</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>The food is really very tasty – the wagyu sushi on the dinner menu is
                      especially delicious and not to be missed for a long time!</p>
                  </div>
                  <div className="client-rating-wrap">
                    <ul className="ratings list-style">
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                    </ul>
                    <div className="quote-icon">
                      <i className="flaticon-right-quote-sign" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="testimonial-item style1">
                  <div className="row justify-content-center mb-2">
                    <div className="col-md-8">

                    <img src="assets/img/testimonial/client-1.jpg" style={{border:"7px solid silver"}} width={"100%"}  className='img-rounded' alt="Image" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">

                    <h4>Lisa Ann</h4>
                    <p>CEO, IUBAT</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>The food is really very tasty – the wagyu sushi on the dinner menu is
                      especially delicious and not to be missed for a long time!</p>
                  </div>
                  <div className="client-rating-wrap">
                    <ul className="ratings list-style">
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                    </ul>
                    <div className="quote-icon">
                      <i className="flaticon-right-quote-sign" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item style1">
                  <div className="row justify-content-center mb-2">
                    <div className="col-md-8">

                    <img src="assets/img/testimonial/client-1.jpg" style={{border:"7px solid silver"}} width={"100%"}  className='img-rounded' alt="Image" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12">

                    <h4>Lisa Ann</h4>
                    <p>CEO, IUBAT</p>
                    </div>
                  </div>
                  <div className="row">
                    <p>The food is really very tasty – the wagyu sushi on the dinner menu is
                      especially delicious and not to be missed for a long time!</p>
                  </div>
                  <div className="client-rating-wrap">
                    <ul className="ratings list-style">
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                      <li><i className="flaticon-star-1" /></li>
                    </ul>
                    <div className="quote-icon">
                      <i className="flaticon-right-quote-sign" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
