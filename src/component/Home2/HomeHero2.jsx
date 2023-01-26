import React from 'react'

export default function HomeHero2() {
  return (
    <>
<section className="hero-wrap style2 bg-f hero-bg-1">
  <div className="container">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6">
        <div className="hero-content">
          <h1>We Provide Express Home Delivery</h1>
          <p>We Bring The Best Test in Our Dishes'. In All Burger Item of 2021 We Are Offering 20%
            Flat Discount. Don't miss Out!!</p>
          <ul className="nav nav-tabs food-tablist" role="tablist">
            <li className="nav-item">
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab" aria-selected="false"><i className="flaticon-delivery-truck-1" />Delivery</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab" aria-selected="true"><i className="flaticon-take-away" />Takeaway</button>
            </li>
          </ul>
          <div className="tab-content food-tabcontent">
            <div className="tab-pane fade show active" id="tab_1" role="tabpanel">
              <form action="#">
                <input type="email" placeholder="Enter Your Address" />
                <button type="submit"><i className="flaticon-right-arrow-2" /></button>
              </form>
            </div>
            <div className="tab-pane fade" id="tab_2" role="tabpanel">
              <form action="#">
                <input type="email" placeholder="Enter Your Address" />
                <button type="submit"><i className="flaticon-right-arrow-2" /></button>
              </form>
            </div>
          </div>
          <a href="search-location.html" className="find-location"><i className="flaticon-gps" />Find My
            Current Location</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="hero-img-wrap">
          <div className="hero-top-img">
            <img className="hero-badge" src="assets/img/hero/badge.png" alt="Image" />
            <div className="hero-top-img-2 bg-f" />
            <div className="hero-top-img-1 bg-f" />
          </div>
          <img className="header-bottom-img" src="assets/img/hero/hero-img-2.png" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
