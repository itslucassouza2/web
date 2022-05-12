import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from "./Checkstep.module.scss";

const Checkstep = ({ activeLink, handleClick }) => {
  const [data, setData] = useState({
    steps: [
      { icon: 1, name: "Carrinho", className: Styles.stepImg_1 },
      { icon: 2, name: "Login", className: Styles.stepImg_2 },
      { icon: 3, name: "Pagamento", className: Styles.stepImg_3 },
      { icon: 4, name: "Finalização", className: Styles.stepImg_4 },
    ],
  });

  return (
    <div className={Styles.checkout_menu_wrap}>
      <div className={Styles.caption}>CHECKOUT</div>
      <center>
        <ul className={Styles.progressbar}>
          {data.steps.map((item, idx) => (
            <>
              <li
                className={idx <= activeLink ? Styles.active : ""}
                onClick={() => handleClick(idx)}
              >
                <center>
                  <strong>{item.name}</strong>
                </center>
                {activeLink >= idx && (
                  <img
                    className={Styles.stepImg}
                    src={getImg("checkout/step" + item.icon + ".png")}
                    alt=""
                  />
                )}
                {activeLink < idx && (
                  <img
                    className={Styles.stepImg}
                    src={getImg("checkout/step_h" + item.icon + ".png")}
                    alt=""
                  />
                )}
              </li>
            </>
          ))}
        </ul>
      </center>
    </div>
  );
};

export default Checkstep;
