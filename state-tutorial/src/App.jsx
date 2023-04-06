import Checkout from "./Components/Checkout";
import ProductCard from "./Components/ProductCard";
import CardData from "./Components/CardData";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState({});
  const [productCount, setProductCount] = useState(0);
  return (
    <div className="App">
      <ProductCard
        CardData={CardData}
        setCart={setCart}
        setProductCount={setProductCount}
        productCount={productCount}
      />
      <Checkout cart={cart} productCount={productCount} />
    </div>
  );
}

export default App;
