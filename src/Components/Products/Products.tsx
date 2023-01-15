import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import classes from "./Products.module.scss";
import { Product, ProductType } from "../Product/Product";
import products from "../../Data/products.json";
import { useHorizontalScroll } from "../../Functions/HorizontalScroll";

type Props = {
  onAddToCart: (product: ProductType) => void;
};

export const Products = ({ onAddToCart }: Props) => {
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);
  const scrollRef = useHorizontalScroll(ref);

  return (
    <ul className={classes.products} {...events} ref={scrollRef}>
      {products.map((product: any) => {
        return (
          // <Product
          //   name={product.name}
          //   caption={product.caption}
          //   image={product.image}
          //   price={product.price}
          //   onAddToCart={onAddToCart}
          // />
          <Product product={product} onAddToCart={onAddToCart} />
        );
      })}
    </ul>
  );
};
