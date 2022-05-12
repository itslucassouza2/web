import React from "react";
import Styles from "./Cart.module.scss";

import CartFirst from "./CartFirst";
import CartSecond from "./CartSecond";
import CartThird from "./CartThird";
import CartFourth from "./CartFourth";
import { MediaMatch } from "../../shared/MediaMatch/MediaMatch";

const Cart = ({ submitClick, pagenum, stateModal, closeModal }) => {
  return (
    <>
      <div className={Styles.mydata_page_wrap}>
        <div className={Styles.config_group}>
          <div className={Styles.config_header}>
            <p className={Styles.header_p1}>PRODUTO</p>
            <p className={Styles.header_p2}>QTD.</p>
            <p className={Styles.header_p3}>VALOR</p>
            <MediaMatch greaterThan="large">
              <p className={Styles.header_p4}>FORMA DE PAGAMENTO</p>
            </MediaMatch>
          </div>
          <div className={Styles.config_panel1}>
            <CartFirst />
            <MediaMatch lessThan="medium">
              <p className={Styles.header_p4}>FORMA DE PAGAMENTO</p>
            </MediaMatch>
            <CartSecond />
          </div>
          <div className={Styles.config_panel2}>
            <CartThird />
            <CartFourth
              submitClick={submitClick}
              pagenum={pagenum}
              stateModal={stateModal}
              closeModal={closeModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
