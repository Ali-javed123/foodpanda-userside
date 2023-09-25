import React,{useState} from 'react'

export default function WisthlistLayout() {
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<100)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }



  let [num2, setNum2]= useState(0);
  let incNum2 =()=>{
    if(num2<100)
    {
    setNum2(Number(num2)+1);
    }
  };
  let decNum2 = () => {
     if(num2>0)
     {
      setNum2(num2 - 1);
     }
  }
 let handleChange2 = (e)=>{
   setNum2(e.target.value);
  }






  let [num3, setNum3]= useState(0);
  let incNum3 =()=>{
    if(num3<100)
    {
    setNum3(Number(num3)+1);
    }
  };
  let decNum3 = () => {
     if(num3>0)
     {
      setNum3(num3 - 1);
     }
  }
 let handleChange3 = (e)=>{
   setNum3(e.target.value);
  }
  return (
    <>
<section className="wishlist-wrap pt-100 pb-75">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
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
                        <span onClick={decNum} className="las la-minus decreaseQty" />
                        <input type="text" className="qtyValue" value={num} />
                        <span className="las la-plus increaseQty" onClick={incNum}/>
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
                        <span className="las la-minus decreaseQty" onClick={decNum2}/>
                        <input type="text" className="qtyValue" value={num2} />
                        <span className="las la-plus increaseQty" onClick={incNum2}/>
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
                        <span className="las la-minus decreaseQty" onClick={decNum3}/>
                        <input type="text" className="qtyValue" value={num3} />
                        <span className="las la-plus increaseQty" onClick={incNum3}/>
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
    </div>
  </div>
</section>

    </>
  )
}
