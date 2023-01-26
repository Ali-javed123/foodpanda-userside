import React from 'react'

export default function HomeHero() {
  return (
    <>
    <section className="hero-wrap style1 bg-cod-grey">
  <img src="assets/img/hero/hero-shape-1.png" alt="Image" className="hero-shape-1" />
  <img src="assets/img/hero/hero-shape-2.png" alt="Image" className="hero-shape-2" />
  <img src="assets/img/hero/hero-shape-31.png" alt="Image" className="hero-shape-3 md-none" />
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="hero-content">
          <h1>We Provide Express Home Delivery</h1>
          <p>In shakes item of 2021 we are offering
            20% flat discount. Don't miss out!!</p>
          <div className="hero-btn">
            <a href="shop-left-sidebar.html" className="btn style1"><i className="las la-shopping-bag" />Order Now</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="hero-img-wrap">
          <img src="assets/img/hero/hero-img-1.png" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
