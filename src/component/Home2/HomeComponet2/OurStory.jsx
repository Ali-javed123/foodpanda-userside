import React from 'react'
import { NavLink } from 'react-router-dom'
export default function OurStory() {
  return (
    <>
<section className="about-wrap style2 ptb-100">
  <div className="container">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-6">
        <div className="about-img-wrap">
          <img src="assets/img/about/about-shape-1.png" alt="Image" className="abouut-shape-1 sm-none" />
          <img src="assets/img/about/about-shape-2.png" alt="Image" className="abouut-shape-2 sm-none" />
          <div className="about-bg-4 bg-f" />
          <div className="about-bg-5 bg-f" />
          <div className="about-bg-6">
            <img src="assets/img/about/about-6.jpg" alt="Image" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-content">
          <div className="content-title style2 mb-15">
            <span>
              <img src="assets/img/secion-shape-1.png" alt="Image" />
              Our Story
              <img src="assets/img/secion-shape-2.png" alt="Image" />
            </span>
            <h2>We Provide Locally Crafted Food Service</h2>
          </div>
          <p>In our restaurant with people who are important to you, conversations that bring you
            closer to each other and those who enjoy our dishes. Traditional dishes with local
            products of highest quality.</p>
          <div className="pr-wrap style2">
            <div className="pr-item">
              <h4><i className="flaticon-check-box-with-check-sign" />This Is All About Caban</h4>
              <p>Сhoose food and pay for the order in a couple of clicks online also
                choose you current location using GPS</p>
            </div>
            <div className="pr-item">
              <h4><i className="flaticon-check-box-with-check-sign" />This Is Followed by Quality
              </h4>
              <p>Follow the status of your order in real time and also track the delivery path
                until you get it.</p>
            </div>
          </div>
          <NavLink to="/AboutUs" className="btn style1">Read More<i className="flaticon-right-arrow-2" /></NavLink>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
