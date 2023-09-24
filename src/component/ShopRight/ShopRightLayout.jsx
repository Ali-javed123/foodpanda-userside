import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ShopRightLayout() {
  return (
    <>
<section className="Shop-wrap ptb-100">
  <div className="container">
    <div className="row gx-5">
      <div className="col-xl-8 col-lg-12">
        <div className="row align-items-center mb-25">
          <div className="col-xl-6 col-lg-5 col-md-4">
            <div className="profuct-result">
              {/* <p>Showing 10 of 120 Products</p> */}
              <NavLink to="/ShopGird"> <i className='fa fa-th' style={{background:"red",color:"#fff",fontSize:"25px",padding:"7px"}}></i></NavLink>
                   <NavLink to="/ShopRight"><i className='fa fa-list' style={{background:"red",color:"#fff",fontSize:"25px",padding:"7px",marginLeft:"2%"}}></i></NavLink>
                   <NavLink to="/ShopLeft"><i className='fa fa-th' style={{background:"red",color:"#fff",fontSize:"25px",padding:"7px",marginLeft:"2%"}}></i></NavLink>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4">
            <div className="filter-item-cat">
              <select>
                <option value={1}>Sort By Most Popular</option>
                <option value={2}>Sort By High To Low</option>
                <option value={3}>Sort By Low To High</option>
              </select>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4">
            <div className="filter-item-num">
              <select>
                <option value={1}>Show 10</option>
                <option value={2}>Show 20</option>
                <option value={3}>Show 30</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="feature-card style1">
              <div className="feature-img">
                <img src="assets/img/feature/feature-item-1.jpg" alt="Image" />
              </div>
              <div className="feature-info">
                <h3 className="feature-title"><NavLink to="/ShopSingle">Chicken In Teriyaki</NavLink>
                </h3>
                <div className="feature-meta">
                  <p className="feature-price">22.35$ <span>30.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.9</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
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
                <h3 className="feature-title"><NavLink to="/ShopSingle">Hotdog With Sausage</NavLink>
                </h3>
                <div className="feature-meta">
                  <p className="feature-price">30.35$ <span>40.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.2</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                <div className="discount-tag">
                  <img src="assets/img/feature/circle-1.png" alt="Image" />
                  <p> <span>Save</span>
                    20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-card style1">
              <div className="feature-img">
                <img src="assets/img/feature/feature-item-3.jpg" alt="Image" />
              </div>
              <div className="feature-info">
                <h3 className="feature-title"><NavLink to="/ShopSingle">Breakfast With Sweet</NavLink>
                </h3>
                <div className="feature-meta">
                  <p className="feature-price">52.35$ <span>60.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.5</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                <div className="discount-tag">
                  <img src="assets/img/feature/circle-1.png" alt="Image" />
                  <p> <span>Save</span>
                    25%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-card style1">
              <div className="feature-img">
                <img src="assets/img/feature/feature-item-4.jpg" alt="Image" />
              </div>
              <div className="feature-info">
                <h3 className="feature-title"><NavLink to="/ShopSingle">Grilled Chicken Stick</NavLink>
                </h3>
                <div className="feature-meta">
                  <p className="feature-price">25.35$ <span>30.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.8</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
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
                <img src="assets/img/feature/feature-item-5.jpg" alt="Image" />
              </div>
              <div className="feature-info">
                <h3 className="feature-title"><NavLink to="/ShopSingle">Chicken Barista platter</NavLink>
                </h3>
                <div className="feature-meta">
                  <p className="feature-price">32.35$ <span>45.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.9</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                <div className="discount-tag">
                  <img src="assets/img/feature/circle-1.png" alt="Image" />
                  <p> <span>Save</span>
                    40%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="feature-card style1">
              <div className="feature-img">
                <img src="assets/img/feature/feature-item-6.jpg" alt="Image" />
              </div>
              <div className="feature-info">
                <h3 className="feature-title"><NavLink to="/ShopSingle">French Fries Pack</NavLink></h3>
                <div className="feature-meta">
                  <p className="feature-price">15.35$ <span>20.50$</span></p>
                  <div className="ratings">
                    <i className="flaticon-star-1" />
                    <span>4.4</span>
                  </div>
                </div>
                <NavLink className="btn style2" to="/Cart"><i className="flaticon-shopping-bag-1" />Add To Cart</NavLink>
                <div className="discount-tag">
                  <img src="assets/img/feature/circle-1.png" alt="Image" />
                  <p> <span>Save</span>
                    15%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-navigation">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 text-sm-start text-center smb-20">
              <NavLink to="#" className="btn prev">Prev Page</NavLink>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center smb-20">
              <ul className="page-nav list-style">
                <li><NavLink to="#" className={"active"}>1</NavLink></li>
                <li><NavLink to="#">2</NavLink></li>
                <li><NavLink to="#">3</NavLink></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 text-sm-end text-center">
              <NavLink to="#" className="btn next">Next Page </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-12">
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
                <li><NavLink to="#">Dishes<i className="flaticon-right-arrow-angle" /> </NavLink></li>
                <li><NavLink to="#">Nuts &amp; Greens<i className="flaticon-right-arrow-angle" /> </NavLink></li>
                <li><NavLink to="#">Smoothies<i className="flaticon-right-arrow-angle" /> </NavLink></li>
                <li><NavLink to="#">Vegetables<i className="flaticon-right-arrow-angle" /> </NavLink></li>
                <li><NavLink to="#">Takeaway Pack<i className="flaticon-right-arrow-angle" /> </NavLink></li>
                <li><NavLink to="#">Fresh Fruits<i className="flaticon-right-arrow-angle" /> </NavLink></li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget new-product">
            <h4>New Arrivals</h4>
            <div className="new-product-wrap">
              <div className="new-product-item">
                <NavLink to="/Cart" className="new-product-img">
                  <img src="assets/img/blog/post-thumb-1.jpg" alt="Iamge" />
                </NavLink>
                <div className="new-product-info">
                  <h6><NavLink to="/ShopSingle">Pasta Barista</NavLink></h6>
                  <div className="price">
                    <span>$22</span>
                  </div>
                </div>
              </div>
              <div className="new-product-item">
                <NavLink to="/Cart" className="new-product-img">
                  <img src="assets/img/blog/post-thumb-3.jpg" alt="Iamge" />
                </NavLink>
                <div className="new-product-info">
                  <h6><NavLink to="/ShopSingle">Chicken Sandwitch</NavLink></h6>
                  <div className="price"><span>$32</span>
                    <span className="discount">$35</span></div>
                </div>
              </div>
              <div className="new-product-item">
                <NavLink to="/Cart" className="new-product-img">
                  <img src="assets/img/blog/post-thumb-2.jpg" alt="Iamge" />
                </NavLink>
                <div className="new-product-info">
                  <h6><NavLink to="/Cart">Strawberry Salsa</NavLink></h6>
                  <div className="price"><span>$98</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-widget price-range-widget">
            <h4>Price Filter</h4>
            <div className="checkbox-item-wrap">
              <div className="checkbox-item d-flex justify-content-between align-items-center">
                <div className="checkbox style2">
                  <input type="checkbox" id="check_1" />
                  <label htmlFor="check_1">$100-$120</label>
                </div>
                <span>(11)</span>
              </div>
              <div className="checkbox-item d-flex justify-content-between align-items-center">
                <div className="checkbox style2">
                  <input type="checkbox" id="check_2" />
                  <label htmlFor="check_2">$120-$140</label>
                </div>
                <span>(6)</span>
              </div>
              <div className="checkbox-item d-flex justify-content-between align-items-center">
                <div className="checkbox style2">
                  <input type="checkbox" id="check_3" />
                  <label htmlFor="check_3">$140-$180</label>
                </div>
                <span>(15)</span>
              </div>
              <div className="checkbox-item d-flex justify-content-between align-items-center">
                <div className="checkbox style2">
                  <input type="checkbox" id="check_4" />
                  <label htmlFor="check_4">$180-$240</label>
                </div>
                <span>(12)</span>
              </div>
              <div className="checkbox-item d-flex justify-content-between align-items-center">
                <div className="checkbox style2">
                  <input type="checkbox" id="check_5" />
                  <label htmlFor="check_5">$240-$300</label>
                </div>
                <span>(9)</span>
              </div>
            </div>
          </div>
          <div className="sidebar-widget tags">
            <h4>Popular Tags </h4>
            <div className="tag-list">
              <ul className="list-style">
                <li><NavLink to="#">Food</NavLink></li>
                <li><NavLink to="#">Restaurant</NavLink></li>
                <li><NavLink to="#">Health</NavLink></li>
                <li><NavLink to="#">Review </NavLink></li>
                <li><NavLink to="#">Fastfood</NavLink></li>
                <li><NavLink to="#">Business</NavLink></li>
              </ul>
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
