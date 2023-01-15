import classes from "./Product.module.scss";

export type ProductType = {
  name: string;
  caption: string;
  image: string;
  price: number;
  quantity: number;
};

type Props = {
  product: ProductType;
  onAddToCart: any;
};

export const Product = ({ product, onAddToCart }: Props) => {
  return (
    <div className={classes.product}>
      <div className={classes.imgWrapper}>
        <img src={`Images/${product.image}`} alt="" />
      </div>
      <div className={classes.infoBlock}>
        <h4>{product.name}</h4>
        <h6>{product.caption}</h6>
        <h4>
          <span>$</span>
          {product.price.toFixed(2)}
        </h4>
      </div>
      <div className={classes.row}>
        <div className={classes.addBtn} onClick={() => onAddToCart(product)}>
          <img src="Images/basket.png" alt="" />
        </div>
      </div>
    </div>
  );
};
