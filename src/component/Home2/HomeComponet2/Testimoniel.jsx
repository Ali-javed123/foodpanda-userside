import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs,Autoplay,Pagination } from "swiper";

export default function Testimoniel() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
  <section className="testimonial-wrap ptb-100">
  <div className="container">
    <div className="section-title style1 text-center mb-40">
      <span className="text-sunshade">
        <img src="assets/img/secion-shape-1.png" alt="Image" />
        Testimonials
        <img src="assets/img/secion-shape-2.png" alt="Image" />
      </span>
      <h2>Our Happy Customers</h2>
    </div>
    <div className="row">
      <div className="col-md-12">
        <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper2 testimonial-slider-two">
            <SwiperSlide>
              <div className="testimonial-item style2 mb-5">
                <div className="quote-icon">
                  <i className="flaticon-right-quote-sign" />
                </div>
                <div className="client-quote">
                  <p>"I just wanted to say how much I appreciate the excellent
                    quality of work
                    done by your staff. Without worry, I know that I will have a
                    clean home
                    to come home to after you are finished. It isn't often that
                    you can have
                    a service provider perform the tasks you hired them for and
                    have the job
                    done well. I highly recommend your company as it is just
                    what you need
                    when."</p>
                </div>
                  <div className="tesstimonial-thumb-one">
                <div className="client-img">
                  <img src="assets/img/testimonial/client-3.jpg" alt="Image" />
                </div>
                <div className="client-info">
                  <h6>Tony Stark</h6>
                  <span>Traveler</span>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item style2 mb-5">
                <div className="quote-icon">
                  <i className="flaticon-right-quote-sign" />
                </div>
                <div className="client-quote">
                  <p>"I just wanted to say how much I appreciate the excellent
                    quality of work
                    done by your staff. Without worry, I know that I will have a
                    clean home
                    to come home to after you are finished. It isn't often that
                    you can have
                    a service provider perform the tasks you hired them for and
                    have the job
                    done well. I highly recommend your company as it is just
                    what you need
                    when."</p>
                </div>
                <div className="tesstimonial-thumb-one">
                <div className="client-img">
                  <img src="assets/img/testimonial/client-3.jpg" alt="Image" />
                </div>
                <div className="client-info">
                  <h6>Tony Stark</h6>
                  <span>Traveler</span>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item style2 mb-5">
                <div className="quote-icon">
                  <i className="flaticon-right-quote-sign" />
                </div>
                <div className="client-quote">
                  <p>"I just wanted to say how much I appreciate the excellent
                    quality of work
                    done by your staff. Without worry, I know that I will have a
                    clean home
                    to come home to after you are finished. It isn't often that
                    you can have
                    a service provider perform the tasks you hired them for and
                    have the job
                    done well. I highly recommend your company as it is just
                    what you need
                    when."</p>
                </div>
                <div className="tesstimonial-thumb-one">
                <div className="client-img">
                  <img src="assets/img/testimonial/client-3.jpg" alt="Image" />
                </div>
                <div className="client-info">
                  <h6>Tony Stark</h6>
                  <span>Traveler</span>
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item style2 mb-5">
                <div className="quote-icon">
                  <i className="flaticon-right-quote-sign" />
                </div>
                <div className="client-quote">
                  <p>"I just wanted to say how much I appreciate the excellent
                    quality of work
                    done by your staff. Without worry, I know that I will have a
                    clean home
                    to come home to after you are finished. It isn't often that
                    you can have
                    a service provider perform the tasks you hired them for and
                    have the job
                    done well. I highly recommend your company as it is just
                    what you need
                    when."</p>
                </div>
              </div>
              <div className="tesstimonial-thumb-one mb-5">
                <div className="client-img">
                  <img src="assets/img/testimonial/client-3.jpg" alt="Image" />
                </div>
                <div className="client-info">
                  <h6>Tony Stark</h6>
                  <span>Traveler</span>
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
