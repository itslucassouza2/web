import React, { forwardRef } from "react";

import Button from "./../Button";
import Item from "./Item";
import Styles from "./Cart.module.scss";
import { slide as HamburgerMenu } from "react-burger-menu";
import { useCart } from "../../../contexts/cart";
import { FormatValue } from "../../../utils/FormatValue";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    display: "none",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    outline: "none",
    maxWidth: "390px",
    width: "90%",
  },
  bmMenu: {
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  },
};

const Cart = forwardRef(({ isOpen, handleHideCart }, ref) => {
  const { items, totalPrice, remove, setQuantity } = useCart();
  console.log('items', items)

  return (
    <HamburgerMenu
      disableOverlayClick
      isOpen={isOpen}
      right
      pageWrapId={"page-wrap"}
      styles={styles}
      onClose={handleHideCart}
    >
      <div className="cart-item" ref={ref}>
        <div className={Styles.container + " menu-item"}>
          <h5>Carrinho de Compras</h5>
          <div className={Styles.products}>
            <div className={Styles.productscontent}>
              {items.map((item) => (
                <Item
                  key={item.id}
                  productname={item.nome}
                  productcount={item.quantity}
                  productprice={FormatValue(item.preco)}
                  productimage={item.full_img_src || item.mid_img_src}
                  onRemove={() => remove(item)}
                  onSetQuantity={(quantity) => setQuantity(item, quantity)}
                />
              ))}
            </div>
          </div>
          <div className={Styles.footer}>
            <div className={Styles.total}>
              <p>Total</p>
              <p>{FormatValue(totalPrice)}</p>
            </div>
            <div className={Styles.buttoncontent}>
              <Link to={ROUTES.CHECKOUT.ROOT}>
                <Button buttontext="Finalizar Compra" background="#F15A24" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HamburgerMenu>
  );
});

export default Cart;
