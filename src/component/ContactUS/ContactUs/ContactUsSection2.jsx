import React from 'react'

export default function ContactUsSection2() {
  return (
    <>
<section className="contact-wrap style3 bg-f contact-bg-2 ptb-100  contact-page">
  <div className="container pos-rel">
    <img src="assets/img/contact/agent-1.png" alt="Image" className="agent-img md-none" />
    <div className="section-title style6 text-center mb-30">
      <span>
        <img src="assets/img/secion-shape-1.png" alt="Image" />
        Contact Us
        <img src="assets/img/secion-shape-2.png" alt="Image" />
      </span>
      <h2 className="text-white">Not Sure What To Order? <br /> Contact Us Now</h2>
    </div>
    <div className="row">
      <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
        <div className="contact-btn">
          <a href="tel:880123654223" className="btn style1">Make A Call<i className="flaticon-right-arrow-2" /></a>
          <a href="#" className="btn style3">Contact Us<i className="flaticon-right-arrow-2" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
