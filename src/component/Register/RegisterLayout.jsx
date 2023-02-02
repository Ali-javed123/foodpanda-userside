import React from 'react'

export default function RegisterLayout() {
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
            <h2 className="text-center mb-0">Register</h2>
          </div>
          <div className="login-body">
            <form className="form-wrap" action="#">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Full name*" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="Email Address*" required />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input id="pwd" name="pwd" type="password" placeholder="Password" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="pwd">Confirm Password</label>
                    <input id="pwd_2" name="pwd_2" type="password" placeholder="Confirm Password" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn style1 w-100 d-block">Register</button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="or-text">
                    <p>Or Register With</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <ul className="social-profile style3 text-center mt-0 list-style">
                      <li><a target="_blank" href="https://instagram.com/"><i className="lab la-instagram" /></a></li>
                      <li><a target="_blank" href="https://twitter.com/"><i className="lab la-twitter" /></a></li>
                      <li><a target="_blank" href="https://facebook.com/"><i className="lab la-facebook-f" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <p className="mb-0">Already Have an Account? <a className="link style2" href="login.html">Login</a></p>
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
