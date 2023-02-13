import React from 'react'
import { FirstName } from '../../../App'
import { LastName } from '../../../App'
export default function NewsLetter() {
  return (
    <>
    <section className="newsletter-wrap bg-f newsletter-bg-1 ptb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-2 col-md-10 offset-md-1">
          <div className="section-title style1 text-center mb-40">
            
            <h2>Newsletter Subscribe</h2>
            <p>

            <FirstName.Consumer>
              {(fname)=>{
                
               return(
                <LastName.Consumer>
                  {(lname)=>{
                    return(

                      <h1>{fname} {lname}</h1>
                    )
                  }}
                </LastName.Consumer>
                 )}

              }
            </FirstName.Consumer>
            
               Drop us your mail address. We love to hear from you and are happy to answer any
              questions immediately.</p>
          </div>
          <form action="#" className="newsletter-form">
            <div className="form-group">
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit"><i className="flaticon-direct" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
