import React from "react";
import styles from "./Style.module.css";

type SuggestedPricesProps = {
  customerNeedToPay: string;
  suggestedAmountOne: string;
  suggestedAmountTwo: string;
  suggestedAmountThree: string;
  suggestedAmountFour: string;
  handleSuggestedBtn: Function;
};
const SuggestedPrices = ({
  customerNeedToPay,
  suggestedAmountOne,
  suggestedAmountTwo,
  suggestedAmountThree,
  suggestedAmountFour,
  handleSuggestedBtn,
}: SuggestedPricesProps) => {
  return (
    <div onClick={(e) => handleSuggestedBtn(e)} className={styles.prices}>
      <button> {suggestedAmountFour}</button>
      <button> {suggestedAmountThree}</button>
      <button> {suggestedAmountTwo}</button>
      <button> {suggestedAmountOne}</button>
      <button> {customerNeedToPay}</button>
    </div>
  );
};

export default SuggestedPrices;
