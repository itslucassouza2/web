import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from "./Button1.module.scss";

const Button1 = ({ background, width, buttontext }) => {
  return (
    <button
      className={Styles.btn_style}
      style={{
        backgroundColor: background,
        width: width + "px",
      }}
    >
      {buttontext}
    </button>
  );
};

export default Button1;
