import React, { useState } from "react";
import Styles from "./CartFourth.module.scss";
import Loginmodal from "../../Loginmodal";
import { useCart } from "../../../../contexts/cart";
import { api } from "../../../../services/api";
import { FormatValue } from "../../../../utils/FormatValue";
import { useAuth0 } from "@auth0/auth0-react";

const CartFourth = ({ stateModal, submitClick, pagenum, closeModal }) => {
  const [inputvalue, setInputvalue] = useState("");
  const [couponState, setCouponState] = useState("");
  const { isAuthenticated, user } = useAuth0();

  const { totalPrice, items } = useCart();

  const { loginWithRedirect } = useAuth0();

  const handleFinishCheckout = async () => {
    const formatedItems = items.map((item) => ({
      quantity: item.quantity,
      id: item.id,
    }));

    const checkoutPayload = {
      paymentMethod: 1,
      items: formatedItems,
    };

    await api.post(checkoutPayload);
  };

  // const setInputValue = (value) => {
  //   setInputvalue(value);
  // };

  // const clickcountadd = () => {
  //   if (inputvalue == "YIYI2022") {
  //     setCouponState(2);
  //   } else if (inputvalue == "") {
  //     setCouponState(0);
  //   } else {
  //     setCouponState(1);
  //   }
  // };

  return (
    <div className={Styles.config_panel_right}>
      <div className={Styles.right_panel_content}>
        {couponState == 2 && (
          <>
            <div
              className={Styles.right_panel_content_header}
              style={{ marginTop: "20px" }}
            >
              <p>Desconto</p>
              <p>R$ 29,99</p>
            </div>
            <div className={Styles.right_panel_content_header}>
              <p>Total</p>
              <p>R$ 200,00</p>
            </div>
          </>
        )}
        {couponState != 2 && (
          <div
            style={{ marginTop: "20px" }}
            className={Styles.right_panel_content_header}
          >
            <p>Total</p>
            <p>{FormatValue(totalPrice)}</p>
          </div>
        )}
        {/* <div className={Styles.label_group1}>
          <label style={{ fontSize: "14px" }}>Tem um cupom de desconto?</label>
        </div>
        <div className={Styles.right_panel_content_label2}>
          <div className={Styles.form_group}>
            <div className={Styles.content_button}>
              <input
                className={Styles.content_input}
                type="text"
                name="email"
                id="email"
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
                defaultValue="YIYI2022"
              />
              <button
                onClick={() => clickcountadd()}
                type="button"
                className={Styles.btn1}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div> */}
        <div className={Styles.label_group2} style={{ textAlign: "right" }}>
          {couponState == 2 && (
            <label style={{ fontSize: "12px", color: "#34A853" }}>
              Cupom aplicado com sucesso!
            </label>
          )}
          {couponState == 1 && (
            <label style={{ fontSize: "12px", color: "#DB2B2F" }}>
              Cupom inválido :(
            </label>
          )}
          {couponState == 0 && <></>}
        </div>
        {isAuthenticated ? (
          <button
            type="button"
            onClick={handleFinishCheckout}
            className={Styles.btn2}
          >
            Finalizar Compra
          </button>
        ) : (
          <button className={Styles.btn2} onClick={() => loginWithRedirect()}>
            {" "}
            Fazer login{" "}
          </button>
        )}
      </div>
      {stateModal && (
        <Loginmodal
          submitClick={submitClick}
          pagenum={pagenum}
          actModalOpen={stateModal}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default CartFourth;
