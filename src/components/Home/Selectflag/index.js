import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from "./Selectflag.module.scss";

const Selectflag = () => {
  return (
    <div className={Styles.panel}>
      <Dropdown
        options={["Real Brasileiro (R$)", "US dollar($)", "Euro (euro)"]}
        value={"Real Brasileiro (R$)"}
        placeholder="Select an option"
        className={Styles.dropdown}
        controlClassName={Styles.control}
        menuClassName={Styles.menu}
        arrowClassName={Styles.arrow}
      />
    </div>
  );
};

export default Selectflag;
