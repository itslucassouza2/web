import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import { getImg } from "../../../utils/Helper";
import { FormatValue } from "../../../utils/FormatValue";
import Styles from "./Product.module.scss";
import { useCart } from "../../../contexts/cart";
import {
  getCategory,
  getCountry,
} from "../../../utils/global";

const Product = (props) => {
  const {
    cardimage,
    discount,
    title,
    price,
    item,
    id,
    countries,
    categories,
    type,
    handleRemoveProductFromWishList,
  } = props;
  const hasNoDiscount = !!Number(discount);

  const { add } = useCart();

  function handleAddToCard(e) {
    e.preventDefault();
    add(item);
  }

  const isHorizontal = type === "horizontal";

  return (
    <div className={type ? Styles.producthorizontal : Styles.product}>
      <Link to={ROUTES.PRODUCT.BY_ID(id)}>
        <div
          className={Styles.productimage}
          style={{ backgroundImage: `url(${cardimage})` }}
        >
          <img src={cardimage} alt="" />
          {hasNoDiscount && type !== "horizontal" && (
            <div className={Styles.discount}>{discount}</div>
          )}
        </div>
      </Link>
      <div className={Styles.producttext}>
        <p className={Styles.producttitle}>{title}</p>
        <div className={Styles.producticon}>
          <img src={getImg(getCountry(countries))} alt="" />
          <img src={getImg(getCategory(categories))} alt="" />
        </div>
        <div className={Styles.productaside}>
          {hasNoDiscount && type && (
            <div className={Styles.discount}>{discount}</div>
          )}
          <div className={Styles.pricebtn}>
            <button className={Styles.priceBtnText} onClick={handleAddToCard}>
              {FormatValue(price)}
            </button>
            {isHorizontal && (
              <button
                className={Styles.removeButton}
                style={{ color: "red", fontSize: "13px" }}
                onClick={handleRemoveProductFromWishList}
              >
                Remover
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
