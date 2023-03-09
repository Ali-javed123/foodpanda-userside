import React from 'react'

export default function CheckoutLayout() {
  return (
    <>
<section className="checkout-wrap ptb-100">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="checkout-form bg-wild-sand">
          <h2 className="mb-0">Select Payment Method</h2>
          <div className="select-method">
            <div>
              <input type="radio" id="test1" name="radio-group" />
              <label htmlFor="test1">Cash On Delivery</label>
            </div>
            <div>
              <input type="radio" id="test2" name="radio-group" />
              <label htmlFor="test2">Card</label>
            </div>
            <div>
              <input type="radio" id="test3" name="radio-group" />
              <label htmlFor="test3">Check</label>
            </div>
          </div>
          <div className="billing-details">
            <h4 className="mb-20">Billing Details</h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="number" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" placeholder="Your Email Address" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" placeholder="Your Address" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea placeholder="Write notes about your order " name="order_msg" id="order_msg" cols={30} rows={10} defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="row checkout-btn">
                <div className="col-md-6 smb-20">
                  <h4 className="total-amt d-md-none smb-20">Total: <span>$243</span></h4>
                  <a href="shop-left-sidebar.html" className="btn style1">Continue Shopping<i className="flaticon-right-arrow-2" /></a>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-lg-end">
                  <h4 className="total-amt sm-none">Total: <span>$243</span></h4>
                  <a href="checkout.html" className="btn style1">Place Order<i className="las la-check-circle" /></a>
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
