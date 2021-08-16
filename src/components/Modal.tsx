import React from "react";
import styles from "./Style.module.css";

type ModalProps = {
  setShowModal: Function;
  changeForCustomer: string;
};
const Modal = ({ setShowModal, changeForCustomer }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <button
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </button>
      <h2>Change for customer</h2>
      <h3>{changeForCustomer}</h3>
    </div>
  );
};

export default Modal;
