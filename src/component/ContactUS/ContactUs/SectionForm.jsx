import React from 'react'

export default function SectionForm() {
  return (
    <>
    <section className="contact-wrap pt-100 pb-100">
  <div className="container">
    <div className="row gx-5">
      <div className="col-md-12">
        <div className="contact-form">
          <form action="https://templates.hibootstrap.com/caban/default/php/form-process.php" className="form-wrap" id="contactForm">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" name="fname" placeholder="First Name*" id="fname" required data-error="Please Enter Your First Name" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" name="lname" placeholder="Last Name*" id="lname" required data-error="Please Enter Your Last Name" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" id="email" required placeholder="Email Address*" data-error="Please Enter Valid Email" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input type="text" name="phone_number" placeholder="Phone Number" id="phone_number" required data-error="Please Enter Your Phone Number" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group v1">
                  <label htmlFor="message">Your Message</label>
                  <textarea name="message" id="message" placeholder="Your Messages.." cols={30} rows={10} required data-error="Please Enter Your message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="checkbox style2">
                  <input type="checkbox" id="test_1" />
                  <label htmlFor="test_1">I consent to having this website store my
                    submitted information</label>
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn style1 w-100 d-block op-95 mt-20">Send
                  Message</button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
