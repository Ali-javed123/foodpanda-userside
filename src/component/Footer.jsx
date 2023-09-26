import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <>
<footer className="footer-wrap">
  <div className="footer-top bg-f footer-bg-1 pt-100 pb-70">
    <div className="overlay op-9 bg-black" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-widget-wrap">
            <div className="footer-widget">
              <a href="index.html" className="footer-logo">
                <img src="assets/img/logo-white.png" alt="Image" />
              </a>
              <p className="comp-desc">Our feet are on the ground, but our the desi ambitions are to
                above the clouds a Here is how we move to satisfy our customers</p>
              {/* <div className="contact-item-wrap">
                <div className="contact-item">
                  <i className="flaticon-mail-1" />
                  <NavLink to="mailto:creativewebsitesolutions11@gmail.com"><span className="__cf_email__" data-cfemail="b8d0ddd4d4d7f8dbd9dad9d696dbd7d5">creativewebsitesolutions11@gmail.com</span></NavLink>
                </div>

                <div className="contact-item">
                  <i className="flaticon-mail-1" />
                  <NavLink to="mailto:Info@creativewebssolutions.com"><span className="__cf_email__" data-cfemail="b8d0ddd4d4d7f8dbd9dad9d696dbd7d5">Info@creativewebssolutions.com </span></NavLink>
                </div>
                <div className="contact-item">
                  <i className="flaticon-phone-call" />
                  <a href="tel:+1-(909)-351-3911">US : +1-(909)-351-3911</a>
                </div>
                <div className="contact-item">
                  <i className="flaticon-phone-call" />
                  <a href="tel:+44-7440-451891">Uk : +44-7440-451891</a>
                </div>

                
              </div> */}
              <ul className="location" >
                <li  className='text-start'><i className="fa fa-envelope mt-2" /> <a className={"text-light"} href="mailto:Info@Creativewebssolutions.Com">Info@Creativewebssolutions.com </a>     </li>
   <li className='text-start' ><i className="fa fa-envelope mt-2 mb-2" /> <a className={"text-light"} href="mailto:creativewebsitesolutions11@gmail.com">creativewebsitesolutions11@gmail.com</a> </li>
   <h5 className='text-start text-light'>Call Number</h5>
                <li className='text-start'><i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+1-(281)-835-8518">US/Canada : +1-(281)-835-8518</a></li>
                <li className='text-start'> <i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+44-7440-451891">Uk : +44-7440-451891</a> </li>
                <li className='text-start'> <i className="fa fa-phone mt-2" /> <a className={"text-light"} href="tel:+1-(281)-985-9318">US/Canada:+1-(281)-985-9318</a>     </li>
                <li className='text-start mb-2'> <i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+49-1521-6652405">Europe:+49-1521-6652405 </a> </li>
   <h5 className='text-start text-light mt-2'>Whatsapp Number</h5>
   <li className='text-start'> <i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+49-1521-6652405">Europe:+49-1521-6652405 </a> </li>
   <li className='text-start'> <i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+44-7440-451891">UK:+44-7440-451891 </a> </li>
   <li className='text-start'> <i className="fa fa-phone mt-2" /><a className={"text-light"} href="tel:+1(909)-351-3911">US/Canada:+1(909)-351-3911</a> </li>
                <li className='text-start mt-2'><i className="fa fa-map-marker" />Address: 50 John Street Toronto Ontario M5V3T5,Canada</li>
              </ul>
              <ul className="social-profile style1 list-style">
                <li><a target="_blank" href="https://facebook.com/"><i className="flaticon-facebook" /> </a></li>
                <li><a target="_blank" href="https://twitter.com/"> <i className="flaticon-twitter-1" /> </a></li>
                <li><a target="_blank" href="https://instagram.com/"> <i className="flaticon-instagram" /> </a></li>
                <li><a target="_blank" href="https://youtube.com/"> <i className="flaticon-youtube" /> </a></li>
              </ul>
            </div>
            <div className="footer-widget">
              <h4 className="footer-widget-title">
                Quick Links
              </h4>
              <ul className="footer-menu list-style">
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Home2">Home</NavLink></li>
                <li><NavLink to="/ShopLeft">Shop</NavLink></li>
                <li><NavLink to="/WhistList">Wishlist</NavLink></li>
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>
                <li><NavLink to="/Cart">Cart</NavLink></li>
              </ul>
            </div>
            <div className="footer-widget">
              <h4 className="footer-widget-title">
                Opening Hours
              </h4>
              <ul className="office-schedule  list-style">
                <li>
                  <p>Monday</p>
                  <p>09:00 - 18:00</p>
                </li>
                <li>
                  <p>Tuesday</p>
                  <p>10:00 - 18:00</p>
                </li>
                <li>
                  <p>Wednesday</p>
                  <p>11:00 - 18:00</p>
                </li>
                <li>
                  <p>Thursday</p>
                  <p>12:00 - 18:00</p>
                </li>
                <li>
                  <p>Friday</p>
                  <p>14:00 - 18:00</p>
                </li>
                <li>
                  <p>Saturday,Sunday</p>
                  <p>Closed</p>
                </li>
              </ul>
            </div>
            <div className="footer-widget">
              <h4 className="footer-widget-title">
                Instagram Photo
              </h4>
              <div className="instagram-img-wrap">
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-1.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-2.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-3.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-4.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-5.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-6.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-7.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-8.jpg" alt="Image" />
                </a>
                <a href="https://instagram.com/" target="_blank" className="insta-box">
                  <img src="assets/img/instagram/instagram-9.jpg" alt="Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom bg-black">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2">
          <p className="copyright"><span className="las la-copyright" /> Resturent. All Rights Reserved By Creactive Webs Solution<a href="https://creativewebssolutions.com/">Creative webs solution</a></p>
        </div>
        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1">
          <ul className="footer-bottom-menu list-style">
            <li><NavLink to="/PrivicyPolicy">Privacy Policy</NavLink></li>
            <li><NavLink to="/TermCondition">Terms &amp; Conditions</NavLink></li>
            <li><NavLink to="/ContactUs">Help Center</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
<a href="#" class="back-to-top"><i class="las la-arrow-up"></i></a>


    </>
  )
}
