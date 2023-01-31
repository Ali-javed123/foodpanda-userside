import React from 'react'

export default function QuickDelivery() {
  return (
    <>
<section className="delivery-wrap ptb-100">
  <div className="container">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6">
        <div className="delivery-content">
          <div className="content-title style2 text-left mb-20">
            <span className>
              <img src="assets/img/secion-shape-1.png" alt="Image" />
              Quick Delivery
              <img src="assets/img/secion-shape-2.png" alt="Image" />
            </span>
            <h2>Free Food Delivery Everyday At Your Convenience</h2>
          </div>
          <p>In our restaurant with people who are important to you, conversations that bring you to
            closer to each other and those who enjoy our dishes. Quisque pretium dolor turpis, quis
            blandit turpis semper ut. Nam malesuada eros nec luctus laoreet. Fusce sodales consequat
            velit eget dictum. Integer ornare magna.</p>
          <div className="row align-items-start gx-5">
            <div className="col-md-8">
              <div className="contact-item-wrap">
                <div className="contact-item">
                  <span><i className="flaticon-phone-call" /></span>
                  <a href="tel:49260573180">+49260-5731-80</a>
                </div>
                <div className="contact-item">
                  <div className="contact-item">
                    <span> <i className="lar la-clock" /></span>
                    <p>Everyday From 8:00 to 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 sm-none">
              <div className="del-img">
                <img src="assets/img/fruit-1.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="delivery-img-wrap">
          <img src="assets/img/delivery/del-1.jpg" alt="Image" />
          <img src="assets/img/delivery/del-2.jpg" alt="Image" />
          <img src="assets/img/delivery/del-3.jpg" alt="Image" />
          <img src="assets/img/delivery/del-4.jpg" alt="Image" />
          <div className="del-content">
            <h2><i className="flaticon-chef" />25+</h2>
            <p>Our <span>Expert Chefs</span> Alaways Deliver Super Delicious Food</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
