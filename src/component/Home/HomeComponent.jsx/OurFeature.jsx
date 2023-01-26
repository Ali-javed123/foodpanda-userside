import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
export default function OurFeature() {
  return (
    <>
     <section className="feature-wrap style1 pt-100 pb-70 bg-1 pos-rel">
    <div className="feature-top-shape bg-f">
      <img src="assets/img/shape-1.png" alt="Image" className="feature-top-shape-1 md-none" />
      <img src="assets/img/shape-2.png" alt="Image" className="feature-top-shape-2 md-none" />
      <div className="overlay op-9 bg-black" />
    </div>
    <div className="overlay op-7 bg-white" />
    <div className="section-title style6 text-center mb-40">
      <span>
        <img src="assets/img/secion-shape-1.png" alt="Image" />
        Our Feature Items
        <img src="assets/img/secion-shape-2.png" alt="Image" />
      </span>
      <h2 className="text-white">Popular Items Of Our Restaurant</h2>
    </div>
    <div className="container pos-rel">
      <div className="row justify-content-center">
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

        modules={[Pagination,Autoplay]} >
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1">
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-1.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">Chicken In Teriyaki</a></h3>
              <div className="feature-meta">
                <p className="feature-price">22.35$ <span>30.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.9</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  30%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1">
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-2.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">Chicken In Teriyaki</a></h3>
              <div className="feature-meta">
                <p className="feature-price">30.35$ <span>40.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.2</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  20%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1">
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-3.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">Chicken In Teriyaki</a></h3>
              <div className="feature-meta">
                <p className="feature-price">52.35$ <span>60.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.5</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  25%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1" >
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-4.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">French Fries Pack</a></h3>
              <div className="feature-meta">
                <p className="feature-price">25.35$ <span>30.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.8</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  30%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1">
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-5.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">Chicken In Teriyaki</a></h3>
              <div className="feature-meta">
                <p className="feature-price">32.35$ <span>45.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.9</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  40%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>

        <div className="col-xl-12 col-lg-12 col-md-6">
          <div className="feature-card style1">
            <div className="feature-img">
              <img src="assets/img/feature/feature-item-6.jpg" alt="Image" />
            </div>
            <div className="feature-info">
              <h3 className="feature-title"><a href="shop-details.html">French Fries Pack</a></h3>
              <div className="feature-meta">
                <p className="feature-price">15.35$ <span>20.50$</span></p>
                <div className="ratings">
                  <i className="flaticon-star-1" />
                  <span>4.4</span>
                </div>
              </div>
              <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
              <div className="discount-tag">
                <img src="assets/img/feature/circle-1.png" alt="Image" />
                <p> <span>Save</span>
                  15%</p>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  </section>
    </>
  )
}
