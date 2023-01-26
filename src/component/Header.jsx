import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Header() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY < 175);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
  return (
    <>
<header className={scroll?`header-wrap style1`:`header-wrap style1 sticky`}>
  <div className="header-top">
    <div className="container">
      <div className="close-header-top xl-none">
        <button type="button"><i className="las la-times" /></button>
      </div>
      <div className="row align-items-center">
        <div className="col-xl-10 col-lg-12">
          <div className="header-top-left">
            <div className="contact-item">
              <i className="flaticon-wall-clock" />
              <p>Mon - Sun[8:00am - 10:00pm]</p>
            </div>
            <div className="contact-item">
              <i className="flaticon-phone-call" />
              <a href="tel:13454567877">800-323-4567</a>
            </div>
            <div className="contact-item">
              <i className="flaticon-voucher" />
              <p>Discount 0ff <strong>25%</strong>only for <span>Burger Item</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-12">
          <div className="header-top-right">
            <div className="select-lang">
              <div className="navbar-option-item navbar-language dropdown language-option">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="lang-name" />
                </button>
                <div className="dropdown-menu language-dropdown-menu">
                  <a className="dropdown-item" href="#">
                    <img src="assets/img/uk.png" alt="flag" />
                    English
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/img/china.png" alt="flag" />
                    简体中文
                  </a>
                  <a className="dropdown-item" href="#">
                    <img src="assets/img/uae.png" alt="flag" />
                    العربيّة
                  </a>
                </div>
              </div>
            </div>
            <div className="select-currency">
              <select>
                <option value={1}>USD</option>
                <option value={2}>GBP</option>
                <option value={3}>YEN</option>
              </select>
            </div>
          </div>
          <a href="reservation.html" className="btn style1 xl-none">Make Reservation <i className="flaticon-right-arrow-2" /> </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container ">
    <div className="header-bottom">
      <div className="row align-items-center">
        <div className="col-xl-3 col-lg-6 col-md-6 col-5">
          <Link to="/" className="logo"><img src="assets/img/logo-white.png" alt="Image" /></Link>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-7">
          <div className="main-menu-wrap">
            <div className="menu-close xl-none">
              <a href=""><i className="las la-times" /></a>
            </div>
            <div id="menu">
              <ul className="main-menu list-style">
                <li className="has-children">
                  <Link className="active" to="/">Home</Link>
                  <ul className="sub-menu list-style">
                    <li>
                      <Link className="active" to="/">Home 1</Link>
                    </li>
                    <li><Link to="/Home2">Home 2</Link></li>
                    <li><a href="index-3.html">Home 3</a></li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Services</a>
                  <ul className="sub-menu list-style">
                    <li><a href="services.html">Our Service</a></li>
                    <li>
                      <a href="service-details.html">Service Single</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu list-style">
                    <li><a href="about.html">About us</a></li>
                    <li><a href="feature.html">Feature Item</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="search-location.html">Search By Location</a></li>
                    <li><a href="reservation.html">Make Reservation</a></li>
                    <li><a href="app.html">Our App</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li className="has-children"><a href="#">User</a>
                      <ul className="sub-menu list-style">
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="register.html">Register</a>
                        </li>
                        <li>
                          <a href="forgot-pwd.html">Forgot Password</a>
                        </li>
                      </ul>
                    </li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                    <li><a href="404.html">404 Error</a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="#">Shop</a>
                  <ul className="sub-menu list-style">
                    <li className="has-children">
                      <a href="#">Shop Layout</a>
                      <ul className="sub-menu list-style">
                        <li>
                          <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-no-sidebar.html">Shop Grid</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop-details.html">Shop Single</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu list-style">
                    <li className="has-children"><a href="#">Blog Layout</a>
                      <ul className="sub-menu list-style">
                        <li><a href="blog-no-sidebar.html">Blog Grid </a></li>
                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children"><a href="#">Blog Single</a>
                      <ul className="sub-menu list-style">
                        <li><a href="blog-details-no-sidebar.html">Blog Single No
                            Sidebar</a></li>
                        <li><a href="blog-details-left-sidebar.html">Blog Single Left
                            Sidebar</a></li>
                        <li><a href="blog-details-right-sidebar.html">Blog Single Right
                            Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-bar-wrap">
            <a href="cart.html" className="shopcart  xl-none">
              <i className="las la-shopping-cart" />
              <span>1</span>
            </a>
            <div className="mobile-top-bar xl-none">
              <span />
              <span />
              <span />
            </div>
            <div className="mobile-menu xl-none">
              <a href=""><i className="las la-bars" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 lg-none">
          <div className="header-bottom-right">
            <a href="cart.html" className="shopcart">
              <i className="las la-shopping-cart" />
              <span>1</span>
            </a>
            <a href="reservation.html" className="btn style1">Make Reservation <i className="flaticon-right-arrow-2" /> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header