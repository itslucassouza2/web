import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import { useCart } from "../../../contexts/cart";
import { FormatValue } from "../../../utils/FormatValue";
import {
  getCategory,
  getCountry
} from "../../../utils/global";

import { getImg } from "../../../utils/Helper";
import { Image } from "../../shared/Image";
import Styles from "./Card.module.scss";

const Card = (props) => {
  const { cardimage, discount, title, price, id, countries, categories, item } =
    props;

  const { add } = useCart();

  function addToCart(e) {
    e.preventDefault();
    add(item);
  }

  return (
    <Link to={ROUTES.PRODUCT.BY_ID(id)}>
      <div className={Styles.card}>
        <div className={Styles.cardimage} onError={(e) => console.error(e)}>
          <Image src={cardimage} />
          {discount && <div className={Styles.discount}>{discount}</div>}
        </div>
        <div className={Styles.carddescript}>
          <p className={Styles.cardtitle}>{title}</p>
          <div className={Styles.cardicon}>
            <img src={getImg(getCountry(countries))} alt="" />
            <img src={getImg(getCategory(categories))} alt="" />
          </div>
          <div className={Styles.pricebtn}>
            <button onClick={addToCart}>{FormatValue(price)}</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
