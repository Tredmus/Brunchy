import classes from "./Products.module.scss";
import { Product } from "../Product/Product";
import products from "../../Data/products.json";

export const Products = () => {
  return (
    <ul className={classes.products}>
      {products.map((product: any) => {
        return (
          <Product
            name={product.name}
            caption={product.caption}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </ul>
  );
};
