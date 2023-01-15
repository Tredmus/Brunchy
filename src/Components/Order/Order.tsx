import { useEffect, useState } from "react";
import classes from "./Order.module.scss";
import { ProductType } from "../Product/Product";
import { OrderModal } from "./OrderModal";
import { Backdrop } from "./Backdrop";
import { Modal } from "../Modal/Modal";

type Props = {
  cartContents: ProductType[];
  placeOrder: () => void;
};

export const Order = ({ cartContents, placeOrder }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [price, setPrice] = useState(0);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showConfirmationModal = () => {
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const calculatePrice = () => {
    let total = 0;
    cartContents.forEach((item) => {
      total += item.price * item.quantity;
    });
    setPrice(total);
  };

  useEffect(() => {
    calculatePrice();
  }, [cartContents]);

  return (
    <>
      {showConfirmation && <Modal onClose={closeConfirmation} />}
      {showModal && <Backdrop onClose={closeModal} />}
      <div className={classes.order}>
        {showModal && (
          <OrderModal
            onClose={closeModal}
            cartContents={cartContents}
            total={price}
          />
        )}
        <div className={classes.totalPrice}>
          <img src="Images/basket.png" alt="" onClick={toggleModal} />
          <h3>{price.toFixed(2)}$</h3>
        </div>
        <h4
          className="btn"
          onClick={() => {
            placeOrder();
            closeModal();
            showConfirmationModal();
          }}
        >
          Order Now
        </h4>
      </div>
    </>
  );
};
