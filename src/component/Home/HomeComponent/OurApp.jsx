import React from 'react'
import { NavLink } from 'react-router-dom'
export default function OurApp() {
  return (
    <>
      <section className="app-wrap style1 ptb-100 bg-f app-bg-1">
    <div className="overlay op-95 bg-black" />
    <img src="assets/img/shape-1.png" alt="Image" className="app-shape-1 lg-none" />
    <img src="assets/img/shape-2.png" alt="Image" className="app-shape-2 lg-none" />
    <div className="container">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-6">
          <div className="app-content">
            <div className="content-title style3 text-left mb-30">
              <span>
                <img src="assets/img/secion-shape-1.png" alt="Image" />
                Our App
                <img src="assets/img/secion-shape-2.png" alt="Image" />
              </span>
              <h2 className="text-white">Order With Our Application</h2>
            </div>
            <div className="pr-wrap style1">
              <div className="pr-item">
                <h4><i className="flaticon-check-box-with-check-sign" />Order And
                  Pay In A Few
                  Minutes</h4>
                <p>Сhoose food and pay for the order in a couple of clicks online also
                  choose you current location using GPS</p>
              </div>
              <div className="pr-item">
                <h4><i className="flaticon-check-box-with-check-sign" />Check
                  Delivery Status</h4>
                <p>Follow the status of your order in real time and also track the delivery path
                  until you get it.</p>
              </div>
            </div>
            <div className="download-app-btn">
              <NavLink to="/OurApp"><img src="assets/img/app/google-playstore.png" alt="Image" /></NavLink>
              <NavLink to="/OurApp"><img src="assets/img/app/apple-playstore.png" alt="Image" /></NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="app-img">
            <img src="assets/img/app/app-img-1.png" alt="Image" className="app-top-img md-none" />
            <img src="assets/img/app/app-showcase.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
