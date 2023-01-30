import React from 'react'

export default function OurContactUs() {
  return (
    <>
<section className="contact-wrap style2 pb-100 dpt-100">
  <div className="map-bg bg-f" />
  <div className="container">
    <div className="section-title style1 text-center mb-40">
      <span className="text-sunshade">
        <img src="assets/img/secion-shape-1.png" alt="Image" />
        Contact Us
        <img src="assets/img/secion-shape-2.png" alt="Image" />
      </span>
      <h2>Not Sure What To Order? <br /> Contact Us Now</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="flaticon-home" />
          </div>
          <div className="contact-info">
            <h4>Our Location</h4>
            <p>121 King St, Jericho, NY 12</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="flaticon-mail" />
          </div>
          <div className="contact-info">
            <h4>Our Email</h4>
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#4f272a2323200f2c2e2d2e21612c2022"><span className="__cf_email__" data-cfemail="86eee3eaeae9c6e5e7e4e7e8a8e5e9eb">[email&nbsp;protected]</span></a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="flaticon-phone-call" />
          </div>
          <div className="contact-info">
            <h4>Contact Us</h4>
            <a href="tel:4434567890">+44 345 678 90</a>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
        <div className="contact-card">
          <div className="contact-icon">
            <i className="flaticon-wall-clock-1" />
          </div>
          <div className="contact-info">
            <h4>Opening Hour</h4>
            <p>Mon - Sunday</p>
            <p>8:00 am - 10:00 pm</p>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-30 text-center">
        <a href="contact.html" className="btn style1">Explore Map <i className="flaticon-right-arrow-2" />
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
