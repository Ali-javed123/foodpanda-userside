import React from 'react'

export default function OurStory() {
  return (
    <>
    <section className="about-wrap style1 ptb-100">
    <div className="container">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-6">
          <div className="about-img-wrap">
            <img src="assets/img/about/about-shape-1.png" alt="Image" className="abouut-shape-1 md-none" />
            <img src="assets/img/about/about-shape-2.png" alt="Image" className="abouut-shape-2 md-none" />
            <img src="assets/img/about/about-shape-3.png" alt="Image" className="abouut-shape-3 md-none" />
            <div className="about-bg-1 bg-f" />
            <div className="about-bg-2 bg-f" />
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
              <h2>We Provide Locally Crafted Food Service </h2>
            </div>
            <p>In our restaurant with people who are important to you, conversations that bring you
              closer to each other and those who enjoy our dishes.
              Traditional dishes with local products of highest quality. including succulent Veal
              Chops Sicilian, spicy Lobster Fra Diazole, tender Chicken Contadina.</p>
            <img src="assets/img/about/author-sign.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
