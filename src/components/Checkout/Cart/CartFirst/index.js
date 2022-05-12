import React, { useEffect, useState } from "react";
import { useCart } from "../../../../contexts/cart";
import { FormatValue } from "../../../../utils/FormatValue";
import Styles from "./CartFirst.module.scss";

const CartFirst = () => {
  const { items, add, remove: removeFromCart, setQuantity } = useCart();
  const [data, setData] = useState(items);

  useEffect(() => {
    setData(items);
  }, [items]);

  const increament = (itemId) => {
    const currentItem = data.find((item) => item.id_product === itemId);
    if (currentItem) add(currentItem);
  };

  const remove = (itemId) => {
    const currentItem = data.find((item) => item.id_product === itemId);
    if (currentItem) removeFromCart(currentItem);
  };

  const decrease = (itemId) => {
    const currentItem = data.find((item) => item.id_product === itemId);
    const quantity = currentItem.quantity - 1;
    if (currentItem) setQuantity(currentItem, quantity);
  };

  const setInputValue = (itemId, value) => {
    const quantity = Number(value);
    const currentItem = data.find((item) => item.id_product === itemId);
    setQuantity(currentItem, quantity);
  };

  return (
    <div className={Styles.config_panel_left}>
      {data.map((item) => (
        <>
          <div className={Styles.left_panel_content}>
            <img src={item.full_img_src || item.mid_img_src} alt={item.nome} />
            <div className={Styles.left_panel_infos}>
              <p className={Styles.left_panel_content_p1}>{item.nome}</p>
              <div className={Styles.left_panel_content_div1}>
                <div className={Styles.left_panel_content_div2}>
                  <button
                    onClick={() => decrease(item.id_product)}
                    className={Styles.left_panel_content_sub}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className={Styles.left_panel_content_button}
                    onChange={(e) =>
                      setInputValue(item.id_product, e.target.value)
                    }
                    step="0.01"
                    value={item.quantity}
                  />
                  <button
                    onClick={() => increament(item.id_product)}
                    className={Styles.left_panel_content_add}
                  >
                    +
                  </button>
                  <button
                    onClick={() => remove(item.id_product)}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <p
                      className={Styles.left_panel_content_bottom}
                      style={{ color: "red", fontSize: "13px" }}
                    >
                      Remover
                    </p>
                  </button>
                </div>
                <p className={Styles.left_panel_content_p2}>
                  {FormatValue(item.preco)}
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CartFirst;
