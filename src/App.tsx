import "./Styles/main.scss";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Order } from "./Components/Order/Order";
import { useState } from "react";
import { ProductType } from "./Components/Product/Product";

function App() {
  const [cartContents, setCartContents] = useState<ProductType[]>([]);

  const onAddToCart = (product: ProductType) => {
    const added = cartContents.find((item) => item.name === product.name);
    if (!added) {
      product.quantity = 1;
      setCartContents([...cartContents, product]);
    } else {
      const newCartContents = cartContents.map((item) => {
        if (item.name === product.name) {
          item.quantity++;
        }
        return item;
      });
      setCartContents(newCartContents);
    }
  };

  const placeOrder = () => {
    setCartContents([]);
  };

  return (
    <div className="wrapper">
      <Header />
      <Main onAddToCart={onAddToCart} />
      <Order cartContents={cartContents} placeOrder={placeOrder} />
    </div>
  );
}

export default App;
