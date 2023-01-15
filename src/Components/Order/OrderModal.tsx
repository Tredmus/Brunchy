import classes from "./Order.module.scss";
import { ProductType } from "../Product/Product";

type Props = {
  onClose: () => void;
  cartContents: ProductType[];
  total: number;
};

export const OrderModal = ({ cartContents, total }: Props) => {
  return (
    <div className={classes.modal}>
      {cartContents.length === 0 ? (
        <h5>The cart is empty.</h5>
      ) : (
        <>
          <ul className={classes.items}>
            {cartContents &&
              cartContents.map((item) => (
                <li className={classes.item}>
                  <h4>
                    {item.name}
                    {item.quantity > 1 ? ` x ${item.quantity}` : ""}
                  </h4>
                  <h4>
                    <span>$</span> {(item.price * item.quantity).toFixed(2)}
                  </h4>
                </li>
              ))}
          </ul>
          <div className={classes.item}>
            <h4>Total</h4>
            <h4>
              <span>$</span> {total.toFixed(2)}
            </h4>
          </div>
        </>
      )}
    </div>
  );
};
