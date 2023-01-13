import classes from "./Product.module.scss";

type ProductType = {
  name: string;
  caption: string;
  image: string;
  price: number;
};

export const Product = ({ name, caption, image, price }: ProductType) => {
  return (
    <div className={classes.product}>
      <div className={classes.imgWrapper}>
        <img src={`Images/${image}`} alt="" />
      </div>
      <div className={classes.infoBlock}>
        <h4>{name}</h4>
        <h6>{caption}</h6>
        <h4>
          <span>$</span>
          {price.toFixed(2)}
        </h4>
      </div>
      <div className={classes.row}>
        <div className={classes.addBtn}>
          <img src="Images/basket.png" alt="" />
        </div>
      </div>
    </div>
  );
};
