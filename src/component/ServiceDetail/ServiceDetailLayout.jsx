import React from 'react'

export default function ServiceDetailLayout() {
  return (
    <>
  <section className="service-details-wrap pt-100 pb-100">
    <div className="container">
      <div className="row gx-5">
        <div className="col-xl-4 col-lg-12 order-xl-1 order-lg-2 order-md-2 order-2">
          <div className="sidebar">
            <div className="sidebar-widget search-box">
              <h4>Search </h4>
              <div className="form-group">
                <input type="search" placeholder="Search" />
                <button type="submit"> <i className="flaticon-search" /></button>
              </div>
            </div>
            <div className="sidebar-widget categories">
              <h4>Category</h4>
              <div className="category-box">
                <ul className="list-style">
                  <li><a href="shop-left-sidebar.html">Dishes<i className="flaticon-right-arrow-angle" /> </a></li>
                  <li><a href="shop-left-sidebar.html">Nuts &amp; Greens<i className="flaticon-right-arrow-angle" /> </a></li>
                  <li><a href="shop-left-sidebar.html">Smoothies<i className="flaticon-right-arrow-angle" /> </a></li>
                  <li><a href="shop-left-sidebar.html">Vegetables<i className="flaticon-right-arrow-angle" /> </a></li>
                  <li><a href="shop-left-sidebar.html">Takeaway Pack<i className="flaticon-right-arrow-angle" /> </a></li>
                  <li><a href="shop-left-sidebar.html">Fresh Fruits<i className="flaticon-right-arrow-angle" /> </a></li>
                </ul>
              </div>
            </div>
            <div className="sidebar-widget contact-widget">
              <h4>Contact us</h4>
              <form action="#" className="contact-widget-form">
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <textarea name="msg" id="msg" cols={30} rows={10} placeholder="Your Message" defaultValue={""} />
                </div>
                <button className="btn style1 w-100 d-block">Send Now<i className="flaticon-right-arrow-2" /></button>
              </form>
            </div>
            <div className="sidebar-widget tags">
              <h4>Popular Tags </h4>
              <div className="tag-list">
                <ul className="list-style">
                  <li><a href="blog-left-sidebar.html">Food</a></li>
                  <li><a href="blog-left-sidebar.html">Restaurant</a></li>
                  <li><a href="blog-left-sidebar.html">Health</a></li>
                  <li><a href="blog-left-sidebar.html">Review </a></li>
                  <li><a href="blog-left-sidebar.html">Fastfood</a></li>
                  <li><a href="blog-left-sidebar.html">Business</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-12 order-xl-2 order-lg-1 order-md-1 order-1">
          <div className="service-desc">
            <div className="service-img">
              <img src="assets/img/service/single-service.jpg" alt="Image" />
            </div>
            <h1>Breakfast At Reasonable Price</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia excepturi eaque,
              corporis nulla maxime inventore magni reprehenderit consequatur deserunt, eligendi
              totam voluptas natus maiores commodi provident. In cumque similique quo placeat
              distinctio tenetur eum voluptatum, voluptatibus perferendis nesciunt facilis nostrum
              eligendi totam voluptas natus maiores commodi provident. In cumque similique.</p>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="feature-card style1">
                  <div className="feature-img">
                    <img src="assets/img/feature/feature-item-1.jpg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title"><a href="shop-details.html">Chicken In Teriyaki</a>
                    </h3>
                    <div className="feature-meta">
                      <p className="feature-price">22.35$ <span>30.50$</span></p>
                      <div className="ratings">
                        <i className="flaticon-star-1" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
                    <div className="discount-tag">
                      <img src="assets/img/feature/circle-1.png" alt="Image" />
                      <p> <span>Save</span>
                        30%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="feature-card style1">
                  <div className="feature-img">
                    <img src="assets/img/feature/feature-item-2.jpg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3 className="feature-title"><a href="shop-details.html">Hotdog With Sausage</a>
                    </h3>
                    <div className="feature-meta">
                      <p className="feature-price">30.35$ <span>40.50$</span></p>
                      <div className="ratings">
                        <i className="flaticon-star-1" />
                        <span>4.2</span>
                      </div>
                    </div>
                    <a className="btn style2" href="cart.html"><i className="flaticon-shopping-bag-1" />Add To Cart</a>
                    <div className="discount-tag">
                      <img src="assets/img/feature/circle-1.png" alt="Image" />
                      <p> <span>Save</span>
                        20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusantium ipsam
              excepturi impedit voluptas vero nam qui sint unde alias?</p>
            <h3>Service Overview</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia excepturi eaque,
              corporis nulla maxime inventore magni reprehenderit consequatur deserunt, eligendi
              totam voluptas natus maiores commodi provident. In cumque similique quo placeat
              distinctio tenetur eum voluptatum, voluptatibus perferendis nesciunt facilis nostrum
              eligendi totam voluptas natus maiores commodi provident. In cumque similique.</p>
            <div className="service-overview-wrap">
              <div className="service-overview-item">
                <i className="flaticon-takeaway" />
                <h4>Book Online In 60 Seconds</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus possimus accusamus corporis consectetur cupiditate veniam, neque enim beatae officiis?</p>
              </div>
              <div className="service-overview-item">
                <i className="flaticon-satisfaction" />
                <h4>Top Quality Food</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus possimus accusamus corporis consectetur cupiditate veniam, neque enim beatae officiis?</p>
              </div>
              <div className="service-overview-item">
                <i className="flaticon-take-away" />
                <h4>Manage Everything Online</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus possimus accusamus corporis consectetur cupiditate veniam, neque enim beatae officiis?</p>
              </div>
              <div className="service-overview-item">
                <i className="flaticon-chef" />
                <h4>Top Quality Chefs</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda delectus possimus accusamus corporis consectetur cupiditate veniam, neque enim beatae officiis?</p>
              </div>
            </div>
            <h3>Service Quality</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia excepturi eaque,
              corporis nulla maxime inventore magni reprehenderit consequatur deserunt, eligendi
              totam voluptas natus maiores commodi provident. In cumque similique quo placeat
              distinctio tenetur eum voluptatum, voluptatibus perferendis nesciunt facilis nostrum
              eligendi totam voluptas natus maiores commodi provident. In cumque similique.</p>
            <div className="service-quote">
              <i className="flaticon-quote" />
              <p>I just wanted to say how much I appreciate the excellent work done by your staff. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="client_name">
                <p>Christan Juels</p>
                <span>Content Creator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="service-wrap bg-wild-sand pt-100 pb-75 td-aztech">
    <div className="container">
      <div className="section-title style1 text-center mb-40">
        <span>
          <img src="assets/img/secion-shape-1.png" alt="Image" />
          Check More
          <img src="assets/img/secion-shape-2.png" alt="Image" />
        </span>
        <h2>Similar Services</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="service-card style2">
            <div className="service-img">
              <img src="assets/img/service/breakfast.png" alt="Image" />
              <img className="service-card-shape-1" src="assets/img/service/service-card-shape-1.png" alt="Image" />
              <img className="service-card-shape-2" src="assets/img/service/service-card-shape-2.png" alt="Image" />
            </div>
            <div className="service-info">
              <h3 className="service-title"><a href="service-details.html">Breakfast</a></h3>
              <p>Lorem ipsum dolor sit amet, tetur
                piscing elit. Suspendisse smod
                congue bibendum.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-card style2">
            <div className="service-img">
              <img src="assets/img/service/lunch.png" alt="Image" />
              <img className="service-card-shape-1" src="assets/img/service/service-card-shape-1.png" alt="Image" />
              <img className="service-card-shape-2" src="assets/img/service/service-card-shape-2.png" alt="Image" />
            </div>
            <div className="service-info">
              <h3 className="service-title"><a href="service-details.html">Lunch</a></h3>
              <p>Lorem ipsum dolor sit amet, tetur
                piscing elit. Suspendisse smod
                congue bibendum.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-card style2">
            <div className="service-img">
              <img src="assets/img/service/dinner.png" alt="Image" />
              <img className="service-card-shape-1" src="assets/img/service/service-card-shape-1.png" alt="Image" />
              <img className="service-card-shape-2" src="assets/img/service/service-card-shape-2.png" alt="Image" />
            </div>
            <div className="service-info">
              <h3 className="service-title"><a href="service-details.html">Dinner</a></h3>
              <p>Lorem ipsum dolor sit amet, tetur
                piscing elit. Suspendisse smod
                congue bibendum.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-card style2">
            <div className="service-img">
              <img src="assets/img/service/custom.png" alt="Image" />
              <img className="service-card-shape-1" src="assets/img/service/service-card-shape-1.png" alt="Image" />
              <img className="service-card-shape-2" src="assets/img/service/service-card-shape-2.png" alt="Image" />
            </div>
            <div className="service-info">
              <h3 className="service-title"><a href="service-details.html">Custom</a></h3>
              <p>Lorem ipsum dolor sit amet, tetur
                piscing elit. Suspendisse smod
                congue bibendum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


    </>
  )
}
