import React from 'react'

export default function OurContact() {
  return (
    <>
    
<section className="contact-wrap style1 bg-f contact-bg-1 pt-100 pb-70 pos-rel">
  <div className="overlay bg-black op-85" />
  <img src="assets/img/shape-1.png" alt="Iamge" className="contact-shape-1 lg-none" />
  <img src="assets/img/shape-2.png" alt="Iamge" className="contact-shape-2 lg-none" />
  <div className="section-title style6 text-center mb-40">
    <span className="text-sunshade">
      <img src="assets/img/secion-shape-1.png" alt="Image" />
      Contact Us
      <img src="assets/img/secion-shape-2.png" alt="Image" />
    </span>
    <h2 className="text-white">Not Sure What To Order? <br /> Contact Us Now</h2>
  </div>
  <div className="container pos-rel">
    <div className="row">
      <div className="col-xl-10 offset-xl-1">
        <div className="contact-box-wrap">
          <div className="contact-box-icon">
            <i className="flaticon-phone-call" />
          </div>
          <div className="contact-box">
            <h5>Make A Call</h5>
            <a href="tel:880123654223">880-123-654</a>
          </div>
          <div className="contact-box">
            <h5>Mail Us</h5>
            <a href="mainto:hello@caban.com"><span className="__cf_email__" data-cfemail="751d1019191a35161417141b5b161a18">[email&nbsp;protected]</span></a>
            <img src="assets/img/contact/contact-img-1.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
