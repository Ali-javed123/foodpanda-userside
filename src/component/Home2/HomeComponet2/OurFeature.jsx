import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { NavLink } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
export default function OurFeature() {
  return (
    <>
<section className="feature-wrap style2 ptb-100">
  <div className="container">
    <div className="row align-items-end  mb-40">
      <div className="col-lg-8">
        <div className="section-title style2 text-left">
          <span>
            <img src="assets/img/secion-shape-1.png" alt="Image" />
            Our Feature Items
            <img src="assets/img/secion-shape-2.png" alt="Image" />
          </span>
          <h2>Popular Items Of Our Restaurant</h2>
        </div>
      </div>
      <div className="col-lg-4 text-lg-end md-none">
        <NavLink to="/Feature" className="btn style1">View More Item <i className="flaticon-right-arrow-2" />
        </NavLink>
      </div>
    </div>
  </div>
  <div className="container-fluid">
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

        modules={[Pagination,Autoplay]}  className="feature-slider">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-1.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">Chicken In Teriyaki</NavLink>
                  </h3>
                  <div className="feature-meta">
                    <p className="feature-price">22.35$ <span>30.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      30%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-2.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">Hotdog With Sausage</NavLink>
                  </h3>
                  <div className="feature-meta">
                    <p className="feature-price">30.35$ <span>40.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.2</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      20%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-3.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">Breakfast With Sweet</NavLink>
                  </h3>
                  <div className="feature-meta">
                    <p className="feature-price">52.35$ <span>60.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.5</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      25%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-4.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">Grilled Chicken Stick</NavLink>
                  </h3>
                  <div className="feature-meta">
                    <p className="feature-price">25.35$ <span>30.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.8</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      30%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-5.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">Chicken Barista platter</NavLink>
                  </h3>
                  <div className="feature-meta">
                    <p className="feature-price">32.35$ <span>45.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      40%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="feature-card style1">
                <div className="feature-img">
                  <img src="assets/img/feature/feature-item-6.jpg" alt="Image" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title"><NavLink to="/ServiceDetail">French Fries Pack</NavLink></h3>
                  <div className="feature-meta">
                    <p className="feature-price">15.35$ <span>20.50$</span></p>
                    <div className="ratings">
                      <i className="flaticon-star-1" />
                      <span>4.4</span>
                    </div>
                  </div>
                  <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                  <div className="discount-tag">
                    <img src="assets/img/feature/circle-1.png" alt="Image" />
                    <p> <span>Save</span>
                      15%</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="feature-pagination" />
  </div>
  <div className="container mt-30 text-center xl-none">
    <NavLink to="/Feature" className="btn style1">View More Item <i className="flaticon-right-arrow-2" />
    </NavLink>
  </div>
</section>

    </>
  )
}
