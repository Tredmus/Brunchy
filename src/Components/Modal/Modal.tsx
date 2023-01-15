import classes from "./Modal.module.scss";
import { Backdrop } from "./Backdrop";

type Props = {
  onClose: () => void;
};

export const Modal = ({ onClose }: Props) => {
  return (
    <>
      <Backdrop onClose={onClose} />

      <div className={classes.modal}>
        <h2>Congartulations!</h2>
        <p>Your order is on its way.</p>
        <h4 className="btn" onClick={onClose}>
          Ok
        </h4>
      </div>
    </>
  );
};
