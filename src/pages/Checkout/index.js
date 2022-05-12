import React, { useEffect, useState } from "react";

import { Base } from "../../components/shared/Base";
import Checkstep from "../../components/Checkout/Checkstep";
import Cart from "../../components/Checkout/Cart";
import Payment from "../../components/Checkout/Payment";
import Finalization from "../../components/Checkout/Finalization";
import Styles from "./Checkout.module.scss";

function Checkout() {
  const [activeLink, setActiveLink] = useState(0);
  const [stateModal, setModalState] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/checkout/login") setActiveLink(1);
    else if (path === "/checkout/payment") setActiveLink(2);
    else if (path === "/checkout/finalization") setActiveLink(3);
  }, []);

  const handleClick = (pageno) => {
    if (pageno === 1) {
      setActiveLink(pageno);
      setModalState(true);
    } else {
      setActiveLink(pageno);
    }
  };

  const submitClick = () => {
    setActiveLink((prevState) => prevState + 1);
    setModalState(true);
  };

  const closeModal = () => {
    setActiveLink((prevState) => prevState - 1);
    setModalState(false);
  };

  return (
    <Base>
      <div className={Styles.home}>
        <Checkstep activeLink={activeLink} handleClick={handleClick} />
        {activeLink === 0 && (
          <Cart
            pagenum={0}
            stateModal={stateModal}
            closeModal={closeModal}
            submitClick={submitClick}
          />
        )}
        {activeLink === 1 && (
          <Cart
            pagenum={1}
            stateModal={stateModal}
            closeModal={closeModal}
            submitClick={submitClick}
          />
        )}
        {activeLink === 2 && <Payment pagenum={2} submitClick={submitClick} />}
        {activeLink === 3 && <Finalization />}
      </div>
    </Base>
  );
}

export default Checkout;
