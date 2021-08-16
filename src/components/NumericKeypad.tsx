import React, { useState } from "react";
import Modal from "./Modal";
import PadBtn from "./PadBtn";
import styles from "./Style.module.css";
import SuggestedPrices from "./SuggestedPrices";

interface Props {
  customerNeedToPay: string;
  setCustomerNeedToPay: Function;
  receivedFromCustomer: string;
  setReceivedFromCustomer: Function;
  showSuggestionButtons: boolean;
  setShowSuggestionButtons: Function;
  suggestedAmountOne: string;
  suggestedAmountTwo: string;
  suggestedAmountThree: string;
  suggestedAmountFour: string;
}
const NumericKeypad = ({
  customerNeedToPay,
  setCustomerNeedToPay,
  receivedFromCustomer,
  setReceivedFromCustomer,
  showSuggestionButtons,
  setShowSuggestionButtons,
  suggestedAmountOne,
  suggestedAmountTwo,
  suggestedAmountThree,
  suggestedAmountFour,
}: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [changeForCustomer, setChangeForCustomer] = useState("");

  // method to handle the numeric pad
  const handleButton = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLElement;
    if (input.innerText === "C") {
      setCustomerNeedToPay(
        customerNeedToPay.slice(0, customerNeedToPay.length - 1)
      );
    } else {
      setCustomerNeedToPay(customerNeedToPay.concat(input.innerText));
    }
  };

  const handleSuggestedBtn = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.target as HTMLElement;
    setReceivedFromCustomer(input.innerText);
  };

  const handlePayment = () => {
    // (receivedFromCustomer).replace(/[, . €]/g,"")) -> removing all signs mentioned here
    let customerPaid = Number(receivedFromCustomer.replace(/[, . €]/g, ""));
    let bill = Number(customerNeedToPay.replace(/[, . €]/g, ""));
    let change = (customerPaid - bill) / 100;
    let formatChange = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(change);
    setChangeForCustomer(formatChange);
    setCustomerNeedToPay("");
    setReceivedFromCustomer("");
    setShowSuggestionButtons(false);
    setShowModal(true);
  };

  return (
    <div>
      <div className={styles.container}>
        {/* Suggested amounts with the amount needs to pay */}
        {showSuggestionButtons ? (
          <SuggestedPrices
            customerNeedToPay={customerNeedToPay}
            suggestedAmountOne={suggestedAmountOne}
            suggestedAmountTwo={suggestedAmountTwo}
            suggestedAmountThree={suggestedAmountThree}
            suggestedAmountFour={suggestedAmountFour}
            handleSuggestedBtn={handleSuggestedBtn}
          />
        ) : null}

        {/* Numeric keypad */}
        <PadBtn handleButton={handleButton} />
        <div className={styles["payment-btn"]}>
          <button onClick={handlePayment}>Zahlen</button>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          changeForCustomer={changeForCustomer}
        />
      )}
    </div>
  );
};

export default NumericKeypad;
