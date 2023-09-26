import React, { useEffect ,useState} from 'react'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import { Carousel } from 'react-responsive-carousel';
import productImages from '../../../img';
export default function SingleCrousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
      const [Nav, SetNav] = useState({
        nav1: null,
        nav2: null,
      });
      const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`assets/img/feature/single-product-1.png${i + 1}.jpg`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


      let [num, setNum]= useState(0);
      let incNum =()=>{
        if(num<100)
        {
        setNum(Number(num)+1);
        }
      };
      let decNum = () => {
         if(num>0)
         {
          setNum(num - 1);
         }
      }
     let handleChange = (e)=>{
       setNum(e.target.value);
      }
      
    //   useEffect=(()=>{
    //     SetNav({
    //         nav1: slider1,
    //         nav2: slider2
    //       });
    //   })
      
  return (
    <>
<section className="product-details-wrap pt-100">
  <div className="container">
    <div className="row gx-5 ">
      <div className="col-lg-6">
      <div className='carousel-wrappe'>
<Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="assets/img/feature/single-product-1.png" />
                </div>
                <div>
                    <img src="assets/img/feature/single-product-2.png" />
                </div>
                <div>
                    <img src="assets/img/feature/single-product-3.png" />
                </div>
                <div>
                    <img src="assets/img/feature/single-product-4.png" />
                </div>
            </Carousel>
</div>
      </div>
      <div className="col-lg-6">
        <div className="single-product-details">
          <div className="single-product-title">
            <h2 className='text-start'>Chicken In Teriyaki</h2>
            <div className="product-ratings">
              <ul className="ratings list-style text-start">
                <li> <i className="flaticon-star-1" /> </li>
                <li> <i className="flaticon-star-1" /> </li>
                <li> <i className="flaticon-star-1" /> </li>
                <li> <i className="flaticon-star-1" /> </li>
                <li> <i className="flaticon-star-1" /> </li>
              </ul>
              <span>(45)</span>
            </div>
            <h3><span>$39</span> <span className="discount">$45</span></h3>
          </div>
          <div className="single-product-desc">
            <p className='text-start'>
              Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ipsum non facilis
              corporis modi consequatur. Iure perferendis dicta illum deleniti veritatis vero.
            </p>
            <ul className="content-feature-list list-style mb-20">
              <li className='text-start'><i className="las la-check-circle" />4 thick cut pork chops</li>
              <li className='text-start'><i className="las la-check-circle" />1 tablespoon dried basil
              </li>
            </ul>
          </div>
          <div className="product-more-option">
            <div className="product-more-option-item">
              <h6>Category :</h6>
              <a href="shop-left-sidebar.html">Fastfood</a>
            </div>
            <div className="product-more-option-item">
              <h6>Quantity:</h6>
              <div className="product-quantity style1">
                <div className="qtySelector">
                  <span className="decreaseQty" onClick={decNum}><i className="fa fa-minus" /></span>
                  <input type="text" className="qtyValue" value={num} />
                  <span className="increaseQty" onClick={incNum}><i className="fa fa-plus" /></span>
                </div>
              </div>
            </div>
            <div className="product-more-option-item">
              <h6>Availability :</h6>
              <a href="shop-left-sidebar.html">In Stock</a>
            </div>
          </div>
          <div className="single-product-option">
            <button type="submit" className="btn style1"><span><i className="flaticon-bag" />Add To
                Cart</span></button>
            <button type="button" className="btn style2"><span>Buy Now </span></button>
          </div>
          <div className="product-more-option">
            <div className="product-more-option-item">
              <h6>Share On :</h6>
              <ul className="social-profile style3 list-style">
                <li><a target="_blank" href="https://facebook.com/"><i className="flaticon-facebook" /> </a></li>
                <li><a target="_blank" href="https://twitter.com/"> <i className="flaticon-twitter-1" /> </a></li>
                <li><a target="_blank" href="https://instagram.com/"> <i className="flaticon-instagram" /> </a></li>
                <li><a target="_blank" href="https://youtube.com/"> <i className="flaticon-youtube" /> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-100">
      <div className="col-lg-12">
        <ul className="nav nav-tabs product-tablist" role="tablist">
          <li className="nav-item">
            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab">Description</button>
          </li>
          <li className="nav-item">
            <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab">Reviews</button>
          </li>
        </ul>
        <div className="tab-content product-tab-content">
          <div className="tab-pane fade show active" id="tab_1" role="tabpanel">
            <div className="product_desc">
              <p className='text-start'>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Ipsum non facilis
                corporis modi consequatur. Iure perferendis dicta illum deleniti veritatis
                vero tempora maxime ducimus quaerat, iusto omnis magni doloribus. Repellat
                exercitationem odio rerum doloremque quod, enim iste doloribus fugit
                incidunt suscipit, totam illo molestias! Beatae error reprehenderit autem ex
                sit laudantium praesentium quibusdam optio, ab omnis magnam nobis quisquam
                enim ad sint? Error soluta exercitationem earum atque</p>
              <ul className="content-feature-list list-style mb-0">
                <li className='text-start'><i className="las la-check-circle" />Lorem ipsum dolor, sit amet.</li>
                <li className='text-start'><i className="las la-check-circle" />Amet consectetur adipisicing elit.
                  Officia, odit!</li>
                <li className='text-start'><i className="las la-check-circle" />Aquaerat ipsa quis possimus.</li>
                <li className='text-start'><i className="las la-check-circle" />Lorem, ipsum dolor sit amet
                  consectetur
                  adipi.</li>
                <li className='text-start'><i className="las la-check-circle" />Consectetur adipisicing elit.
                  Voluptatibus, dignissimos.</li>
                <li className='text-start'><i className="las la-check-circle" />Highly professional administration
                </li>
                <li className='text-start'><i className="las la-check-circle" />Lorem ipsum dolor sit.</li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade" id="tab_2" role="tabpanel">
            <div className="row gx-5">
              <div className="col-lg-12">
                <h4 className="comment-box-title mb-20">2 Reviews</h4>
                <div className="comment-item">
                  <div className="comment-author-img">
                    <img src="assets/img/testimonial/client-1.jpg" alt="mage" />
                  </div>
                  <div className="comment-author-wrap">
                    <div className="comment-author-info">
                      <div className="row align-items-start">
                        <div className="col-md-8 col-sm-8 col-12">
                          <div className="comment-author-name">
                            <h5 className='text-start'>Stefen Bradely</h5>
                            <ul className="ratings list-style text-start">
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-12">
                          <div className="comment-text">
                            <p className='text-start'>Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed
                              diam nonumy eirmod tempor invidunt ut labore
                              et dolore magna Lorem ipsum, dolor sit amet
                              consectetur adipisicing elit. Possimus excepturi
                              nostrum quis. Eligendi nemo exercitationem quo.
                              Architecto mollitia blanditiis.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-item">
                  <div className="comment-author-img">
                    <img src="assets/img/testimonial/client-2.jpg" alt="mage" />
                  </div>
                  <div className="comment-author-wrap">
                    <div className="comment-author-info">
                      <div className="row align-items-start">
                        <div className="col-md-8 col-sm-8 col-12">
                          <div className="comment-author-name">
                            <h5 className='text-start'>
                              Jonathan Miller</h5>
                            <ul className="ratings list-style text-start">
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                              <li> <i className="flaticon-star-1" /> </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-12 ">
                          <div className="comment-text">
                            <p>Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed
                              diam nonumy eirmod tempor invidunt ut labore
                              et dolore magna Lorem ipsum, dolor sit amet
                              consectetur adipisicing elit. Possimus excepturi
                              nostrum quis. Eligendi nemo exercitationem quo.
                              Architecto mollitia blanditiis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-10">
                <div className="comment-form-wrap">
                  <div className="comment-form-title">
                    <h4>Post Your Review</h4>
                  </div>
                  <form action="#" className="comment-form">
                    <div className="row gx-3">
                      <div className="col-lg-6">
                        <div className="form-group s1">
                          <input type="text" placeholder="Your  Full Name*" />
                        </div>
                        <div className="form-group s2">
                          <input type="email" placeholder="Email Address*" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group v1">
                          <textarea name="review-msg" id="review-msg" cols={30} rows={10} placeholder="Your comments..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="checkbox style2">
                          <input type="checkbox" id="test_1" />
                          <label htmlFor="test_1">I agree with your <a className="link style1" href="terms-condition.html">terms &amp;
                              condition.</a></label>
                        </div>
                        <button href="#" className="btn style1 mt-20">Submit
                          Review</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 



            </>

  )
}
