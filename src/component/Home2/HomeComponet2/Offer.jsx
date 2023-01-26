import React from 'react'

export default function Offer() {
  return (
    <>
<section className="offer-wrap">
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-6">
        <div className="offer-content ptb-100">
          <div className="content-title style2 text-left mb-15">
            <span className>
              <img src="assets/img/secion-shape-1.png" alt="Image" />
              What We Offer
              <img src="assets/img/secion-shape-2.png" alt="Image" />
            </span>
            <h2>We Offer Best Dish In The Town</h2>
          </div>
          <p className="mb-0">In our restaurant with people who are important to you, conversations that
            bring you
            closer to each other and those who enjoy our dishes.
            Traditional dishes with local products of highest quality. including succulent Veal
            Chops Sicilian, spicy Lobster Fra Diazole, tender Chicken Contadina.</p>
          <div className="promo-wrap mt-35">
            <ul className="promo-list list-style">
              <li><span><i className="flaticon-delivery-man" /></span> Fast Delivery In Just 1
                Hour</li>
              <li><span><i className="flaticon-gps" /></span>Wide Coverage Map</li>
              <li><span><i className="flaticon-delivery-man-1" /></span>More Than 150 Couriers</li>
              <li><span><i className="las la-mobile-alt" /></span>Amazing Mobile App</li>
            </ul>
            <div className="promo-img">
              <img src="assets/img/fruit.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="countre-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="counter-card">
                <h2> <i className="flaticon-satisfaction" /><span className="odometer" data-count={250}>+</span></h2>
                <p><span>Client Satisfaction</span> with 150+
                  positive reviews </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              <div className="counter-card">
                <span className="counter-icon"><i className="flaticon-psychology" /></span>
                <h2><i className="flaticon-chef" /><span className="odometer" data-count={25}>00</span></h2>
                <p>Our <span>Expert Chef's</span> always delivered
                  super delicious food.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="video-wrap video-bg-1 bg-f">
          <img src="assets/img/offer/offser-shape-4.png" alt="Image" className="offser-shape-3" />
          <a className="video-play circle style2" href="https://www.youtube.com/watch?v=ihnUg0_eS8Q"><i className="flaticon-play-button-arrowhead" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
