import React from 'react'

export default function SearchLocationLayout() {
  return (
    <>
<section className="feature-wrap  pt-100 pb-70 bg-1 pos-rel">
  <div className="overlay op-9 bg-white" />
  <div className="container pos-rel">
    <div className="row mb-30">
      <div className="col-md-12">
        <div className="sl-wrap">
          <ul className="nav nav-tabs food-tablist mt-0" role="tablist">
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
        </div>
        <a href="search-location.html" className="find-location"><i className="flaticon-gps" />Find My
          Current Location</a>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="feature-card style1">
          <div className="feature-img">
            <img src="assets/img/feature/feature-item-4.jpg" alt="Image" />
          </div>
          <div className="feature-info">
            <h3 className="feature-title"><a href="shop-details.html">Grilled Chicken Stick</a></h3>
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
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="feature-card style1">
          <div className="feature-img">
            <img src="assets/img/feature/feature-item-5.jpg" alt="Image" />
          </div>
          <div className="feature-info">
            <h3 className="feature-title"><a href="shop-details.html">Chicken Barista platter</a></h3>
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
      <div className="col-xl-4 col-lg-6 col-md-6">
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
    </div>
  </div>
</section>

    
    </>
  )
}
