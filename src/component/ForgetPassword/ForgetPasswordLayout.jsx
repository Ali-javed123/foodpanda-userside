import React from 'react'

export default function ForgetPasswordLayout() {
  return (
    <>
<section className="login-wrap pt-100 pb-100">
  <img src="assets/img/shape-1.png" alt="Image" className="login-shape-1" />
  <img src="assets/img/shape-2.png" alt="Image" className="login-shape-2" />
  <div className="container">
    <div className="row">
      <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
        <div className="login-form">
          <div className="login-header bg-green">
            <h2 className="text-center mb-0">Recover Password</h2>
          </div>
          <div className="login-body">
            <form className="form-wrap" action="#">
              <div className="row">
                <div className="col-lg-12">
                  <p>We will send a verification code to your mail to reset your password.
                  </p>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Username/Email/Phone</label>
                    <input id="email" name="email" type="email" placeholder="Email Address*" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="pwd">Old Password</label>
                    <input id="pwd" name="pwd" type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <button className="btn style1 w-100 d-block">Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
