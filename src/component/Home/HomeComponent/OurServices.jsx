import React from 'react'
import {Link} from 'react-router-dom'
export default function OurServices() {
  return (
    <>
      <section className="service-wrap bg-f service-bg-1 pt-100 pb-75">
    <div className="overlay op-7 bg-white" />
    <div className="container">
      <div className="section-title style1 text-center mb-110">
        <span>
          <img src="assets/img/secion-shape-1.png" alt="Image" />
          Our Services
          <img src="assets/img/secion-shape-2.png" alt="Image" />
        </span>
        <h2>What We Offer</h2>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="service-card-wrap">
            
            <div className="service-card style1">
              <div className="service-img">
                <img src="assets/img/service/breakfast.png" alt="Image" />
              </div>
              <div className="service-info">
                <h3 className="service-title"><Link to="/ServiceDetail">Breakfast</Link></h3>
                <p>Lorem ipsum dolor sit amet, tetur
                  piscing elit. Suspendisse smod
                  congue bibendum.</p>
              </div>
            </div>
            <div className="service-card style1">
              <div className="service-img">
                <img src="assets/img/service/lunch.png" alt="Image" />
              </div>
              <div className="service-info">
                <h3 className="service-title"><Link to="/ServiceDetail">Lunch</Link></h3>
                <p>Lorem ipsum dolor sit amet, tetur
                  piscing elit. Suspendisse smod
                  congue bibendum.</p>
              </div>
            </div>
            <div className="service-card style1">
              <div className="service-img">
                <img src="assets/img/service/dinner.png" alt="Image" />
              </div>
              <div className="service-info">
                <h3 className="service-title"><Link to="/ServiceDetail">Dinner</Link></h3>
                <p>Lorem ipsum dolor sit amet, tetur
                  piscing elit. Suspendisse smod
                  congue bibendum.</p>
              </div>
            </div>
            <div className="service-card style1">
              <div className="service-img">
                <img src="assets/img/service/custom.png" alt="Image" />
              </div>
              <div className="service-info">
                <h3 className="service-title"><Link to="/ServiceDetail">Custom</Link></h3>
                <p>Lorem ipsum dolor sit amet, tetur
                  piscing elit. Suspendisse smod
                  congue bibendum.</p>
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
