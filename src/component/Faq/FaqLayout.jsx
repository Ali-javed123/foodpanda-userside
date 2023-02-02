import React from 'react'

export default function FaqLayout() {
  return (
    <>
<section className="faq-wrap ptb-100 bg-souvi">
  <div className="container">
    <div className="row gx-5 align-items-center">
      <div className="col-lg-8 offset-lg-2">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span>
                  <i className="las la-plus plus" />
                  <i className="las la-minus minus" />
                </span>
                What payment Method Do you Allow??
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="single-product-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <span>
                  <i className="las la-plus plus" />
                  <i className="las la-minus minus" />
                </span>
                Do You Have Any Other Branches?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <span>
                  <i className="las la-plus plus" />
                  <i className="las la-minus minus" />
                </span>
                How To Find Best Restaurant In The Town
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
                <span>
                  <i className="las la-plus plus" />
                  <i className="las la-minus minus" />
                </span>
                Can We Also Share Our Thoughts In Blog Section?
              </button>
            </h2>
            <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingfour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="single-product-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingfive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                <span>
                  <i className="las la-plus plus" />
                  <i className="las la-minus minus" />
                </span>
                Do You Have Any Podcast Session?
              </button>
            </h2>
            <div id="collapsefive" className="accordion-collapse collapse " aria-labelledby="headingfive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.</p>
              </div>
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
