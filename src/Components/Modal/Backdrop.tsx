import classes from "./Modal.module.scss";

type Props = { onClose: () => void };

export const Backdrop = ({ onClose }: Props) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};
