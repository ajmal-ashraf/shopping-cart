import React from "react";
import CardWrapper from "./CardWrapper";

const Checkout = (props) => {
  const { cart, productCount } = props;
  const { id, title, price, modelNumber } = cart;
  console.log(productCount);
  return (
    <div>
      <CardWrapper>
        <h2>Checkout</h2>
        <hr />
        <div className="content">
          <div className="flex-between">
            <div className="content-head">
              <h5>Product</h5>
              <hr />
              {title} {modelNumber}
            </div>
            <div className="content-head">
              <h5>Qty</h5>
              <hr />
              {productCount}
            </div>
            <div className="content-head">
              <h5>Price</h5>
              <hr />
              {price * productCount}
            </div>
          </div>
          <div className="sub-total">
            <h3>Grand Total: ${price * productCount}/-</h3>
          </div>
        </div>
      </CardWrapper>
    </div>
  );
};

export default Checkout;
