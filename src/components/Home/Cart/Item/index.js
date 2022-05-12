import React from "react";
// import InputNumber from 'rc-input-number';

import Styles from "./Item.module.scss";

const Item = ({
  productimage,
  productname,
  productprice,
  productcount,
  onRemove,
  onSetQuantity,
}) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.productimage}>
        <img src={productimage} alt="imagem do produto" />
      </div>
      <div className={Styles.productinfo}>
        <p className={Styles.productname}>{productname}</p>
        <input
          type="number"
          onChange={(e) => onSetQuantity(e.currentTarget.value)}
          value={productcount}
          min="0"
        />
        <button className={Styles.price} style={{ background: "#0D3840" }}>
          {productprice}
        </button>
        <button style={{ background: "#DB2B2F" }} onClick={onRemove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Item;
