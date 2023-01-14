import { useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import classes from "./Products.module.scss";
import { Product } from "../Product/Product";
import products from "../../Data/products.json";

export const Products = () => {
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  function useHorizontalScroll() {
    const elRef: any = useRef();
    useEffect(() => {
      const el = ref.current;
      if (el) {
        const onWheel = (e: any) => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            // behavior: "smooth",
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return ref;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <ul className={classes.products} {...events} ref={scrollRef}>
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
