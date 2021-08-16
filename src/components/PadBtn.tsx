import React from "react";
import styles from "./Style.module.css";

type PadBtnProps = {
  handleButton: Function;
};
const PadBtn = ({ handleButton }: PadBtnProps) => {
  return (
    <div
      className={styles.keypad}
      onClick={(e) => {
        handleButton(e);
      }}
    >
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>C</button>
      <button>0</button>
      <button>,</button>
    </div>
  );
};

export default PadBtn;
