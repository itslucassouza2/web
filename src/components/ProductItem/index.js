import React from "react";

import { getImg } from "../../utils/Helper";
import Styles from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
  return (
    <div className={Styles.product_recommend_item}>
      <div className={Styles.img_wrap}>
        <img src={getImg("product/" + item.imgname)} alt="" />
      </div>
      <div className={Styles.product_title}>{item.name}</div>
      <div style={{ padding: "15px" }}>
        <div className={Styles.icon_group}>
          <img src={getImg("product/" + item.icon1)} alt="" />
          <img src={getImg("product/" + item.icon2)} alt="" />
        </div>
        <button>{item.price}</button>
      </div>
    </div>
  );
};

export default ProductItem;
