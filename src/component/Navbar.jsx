import React,{useEffect,useState} from 'react'
import { Link ,NavLink} from 'react-router-dom';

export default function Navbar() {
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
  <header className={scroll?"header-wrap style2":"header-wrap style2 sticky"}>
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
              <p>Discount 0ff <strong>25%</strong>only for <a href="index.html">Burger Item</a>
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
  <div className="container">
    <div className="header-bottom">
      <div className="row align-items-center">
        <div className="col-xl-3 col-lg-6 col-md-6 col-5">
          <Link to="/" className="logo">
            <img className="logo-light" src="assets/img/logo-black.png" alt="Image" />
            <img className="logo-dark" src="assets/img/logo-white.png" alt="Image" />
          </Link>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-7">
          <div className="main-menu-wrap">
            <div className="menu-close xl-none">
              <a href=""><i className="las la-times" /></a>
            </div>
            <div id="menu">
              <ul className="main-menu list-style">
                <li className="has-children">
                  <Link className="active" href="#">Home</Link>
                  <ul className="sub-menu list-style">
                    <li>
                      <Link to="/">Home 1</Link>
                    </li>
                    <li><Link className="active" to="/Home2">Home 2</Link></li>
                    <li><Link to={"/Home3"}>Home 3</Link></li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Services</a>
                  <ul className="sub-menu list-style">
                    <li><NavLink to="/Service">Our Service</NavLink></li>
                    <li>
                      <NavLink to="/ServiceDetail">Service Single</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu list-style">
                    <li><NavLink to="/AboutUs">About us</NavLink></li>
                    <li><NavLink to="/Feature">Feature Item</NavLink></li>
                    <li><NavLink to="/Gellery">Gallery</NavLink></li>
                    <li><NavLink to="/SearchLocation">Search By Location</NavLink></li>

                    <li><NavLink to="/Reservation">Make Reservation</NavLink></li>

                    <li><NavLink to="/OurApp">Our App</NavLink></li>
                    <li><NavLink to="/Testimoniels">Testimonials</NavLink></li>
                    <li><NavLink to="/Faq">FAQ</NavLink></li>
                    <li className="has-children"><a href="#">User</a>
                      <ul className="sub-menu list-style">
                        <li>
                          <NavLink to="/Login">Login</NavLink>
                        </li>
                        <li>
                          <NavLink to="/Register">Register</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ForgetPassoword">Forgot Password</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li><NavLink to="/PrivicyPolicy">Privacy Policy</NavLink></li>
                    <li><NavLink to="/TermCondition">Terms &amp; Conditions</NavLink></li>
                    <li><a href="404.html">404 Error</a></li>
                  </ul>
                </li>
                <li className="has-children"><a href="#">Shop</a>
                  <ul className="sub-menu list-style">
                    <li className="has-children">
                      <a href="#">Shop Layout</a>
                      <ul className="sub-menu list-style">
                        <li>
                          <NavLink to="/ShopLeft">Shop Left Sidebar</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ShopRight">Shop Right Sidebar</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ShopGird">Shop Grid</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/ShopSingle">Shop Single</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Cart">Cart</NavLink>
                    </li>
                    <li>
                    
                      <NavLink to="/WhistList">Wishlist</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Checkout">Checkout</NavLink>

                    </li>
                  </ul>
                </li>
                {/* <li className="has-children">
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
                </li> */}
                <li>
                  <NavLink to="/ContactUs">ContactUS</NavLink>
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
