import React from 'react'

export default function Cartlayout() {
  return (
    <>
<section className="wishlist-wrap ptb-100">
  <div className="container">
    <div className="row">
      <div className="col-md-12 mb-20">
        <div className="wishlist-table ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="wh_item">
                    <img src="assets/img/blog/post-thumb-1.jpg" alt="Image" />
                    <div className="wh-item-info">
                      <a href="shop-details.html">Chicken Sandwitch</a>
                      <p>There are many variation of chicken.You can choose
                        your favourite one</p>
                      <span>$32.00</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="wh_qty">
                    <div className="product-quantity style2">
                      <div className="qtySelector">
                        <span className="las la-minus decreaseQty" />
                        <input type="text" className="qtyValue" defaultValue={1} />
                        <span className="las la-plus increaseQty" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="wh-tem-price">$32.00</p>
                </td>
                <td>
                  <button type="button"><i className="las la-times" /></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wh_item">
                    <img src="assets/img/blog/post-thumb-2.jpg" alt="Image" />
                    <div className="wh-item-info">
                      <a href="shop-details.html">Strawbery Salsa </a>
                      <p>There are many variation of chicken.You can choose
                        your favourite one</p>
                      <span>$43.00</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="wh_qty">
                    <div className="product-quantity style2">
                      <div className="qtySelector">
                        <span className="las la-minus decreaseQty" />
                        <input type="text" className="qtyValue" defaultValue={1} />
                        <span className="las la-plus increaseQty" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="wh-tem-price">$43.00</p>
                </td>
                <td>
                  <button type="button"><i className="las la-times" /></button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="wh_item">
                    <img src="assets/img/blog/post-thumb-3.jpg" alt="Image" />
                    <div className="wh-item-info">
                      <a href="shop-details.html">Pasta Barista</a>
                      <p>There are many variation of chicken.You can choose
                        your favourite one</p>
                      <span>$22.00</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="wh_qty">
                    <div className="product-quantity style2">
                      <div className="qtySelector">
                        <span className="las la-minus decreaseQty" />
                        <input type="text" className="qtyValue" defaultValue={1} />
                        <span className="las la-plus increaseQty" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="wh-tem-price">$22.00</p>
                </td>
                <td>
                  <button type="button"><i className="las la-times" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="checkout-details">
          <div className="content-box-title">
            <h4 className="mb-20">Coupon Code</h4>
          </div>
          <div className="bill-details">
            <div className="subtotal-wrap">
              <div className="subtotal-item">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, hic.
                  Libero non minima harum ducimus.</p>
                <div className="form-group mb-0 w-100">
                  <input className="w-100" type="text" placeholder="Enter code here" />
                  <button type="submit">Apply</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-md-5">
              <a href="cart.html" className="btn style1">Update Cart<i className="las la-redo-alt" /></a>
            </div>
            <div className="col-md-7 text-md-end">
              <a href="shop-left-sidebar.html" className="btn style1">Continue Shopping<i className="flaticon-right-arrow-2" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="checkout-details smt-30">
          <div className="content-box-title">
            <h4 className="mb-20">Total Bill</h4>
          </div>
          <div className="bill-details">
            <div className="subtotal-wrap">
              <div className="subtotal-item">
                <div className="subtotal-item-left">
                  <h6>Subtotal</h6>
                </div>
                <div className="subtotal-item-right">
                  <span>$106.00</span>
                </div>
              </div>
              <div className="subtotal-item">
                <div className="subtotal-item-left">
                  <p>Shipping Charge</p>
                </div>
                <div className="subtotal-item-right">
                  <p>$0.00</p>
                </div>
              </div>
            </div>
            <div className="total-wrap">
              <h5>Total Amount</h5>
              <span>$106.00</span>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <a href="checkout.html" className="btn style1 w-100 d-block">Proceed To Checkout<i className="lar la-check-circle" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
