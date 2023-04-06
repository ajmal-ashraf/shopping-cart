import React, { Children } from "react";

const CardWrapper = ({ children }) => {
  return <div className="product-card">{children}</div>;
};

export default CardWrapper;
