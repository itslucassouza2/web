import React, { useState } from "react";

import { getImg } from "../../../../utils/Helper";
import Styles from "./CartSecond.module.scss";

const CartSecond = () => {
  const [methodsPayment, setMethodsPayment] = useState({
    lists: [
      { name: "Pix", imgname: ["Payment Methods.png"], value: 8 },
      {
        name: "Cartão de Crédito",
        imgname: [
          "Payment Methods1.png",
          "Payment Methods2.png",
          "Payment Methods3.png",
          "Payment Methods4.png",
        ],
        value: 3,
      },
      { name: "Boleto Express", imgname: ["list5.png"] },
      { name: "Depósito Express", imgname: ["list6.png"] },
      { name: "PayPal", imgname: ["picture7.png"], value: 6 },
      { name: "PicPay", imgname: ["picture8.png"], value: 5 },
      { name: "Ame", imgname: ["picture9.png"], value: 4 },
    ],
    type: 0,
  });

  const setType = (num) => {
    setMethodsPayment((prev) => ({
      ...prev,
      type: num,
    }));
  };

  return (
    <div className={Styles.config_panel_right}>
      <div className={Styles.right_panel_content}>
        {methodsPayment.lists.map((item, idx) => (
          <>
            <div
              className={Styles.right_panel_content_label}
              onClick={() => setType(idx)}
            >
              {methodsPayment.type == idx && (
                <div
                  className={Styles.right_panel_content_label_first_active}
                ></div>
              )}
              {methodsPayment.type != idx && (
                <div className={Styles.right_panel_content_label_first}></div>
              )}
              <div className={Styles.right_panel_content_label_second}>
                <p>{item.name}</p>
                {item.imgname.map((img) => (
                  <img
                    src={getImg("checkout/" + img)}
                    className={Styles.label_img}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CartSecond;
