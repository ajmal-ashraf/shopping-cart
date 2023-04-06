import React from "react";
import CardWrapper from "./CardWrapper";

const ProductCard = (props) => {
  const { CardData, setCart, setProductCount, productCount } = props;
  const { id, img, title, modelNumber, desc, price } = CardData;
  const handleClick = () => {
    setProductCount(productCount + 1);
    setCart({
      id: id,
      title: title,
      price: price,
      modelNumber: modelNumber,
    });
  };
  return (
    <CardWrapper>
      <img src={img} alt="shoe" />
      <div className="wrapper">
        <h1>{title}</h1>
        <h5>{modelNumber}</h5>
        <p>{desc}</p>
        <h3>${price}</h3>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;
