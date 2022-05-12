import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from "./Button.module.scss";

const Button = ({ background, onClick, buttontext }) => {
  return (
    <button
      className={Styles.buttonstyle}
      style={{ backgroundColor: background }}
      onClick={onClick}
    >
      {buttontext}
    </button>
  );
};

export default Button;
