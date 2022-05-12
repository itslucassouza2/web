import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from "./Keys.module.scss";
import Button from "../Button";
import Sort from "../Sort";

import Activationmodal from "../Activationmodal";
import { getUrlWithParams } from "../../../utils/urls";
import { ROUTES } from "../../../constants/routes/routes";
import { useFetch } from "../../../hooks";
import { Pagination } from "../../shared/Pagination";
import { api } from "../../../services/api";
import { mutate } from "swr";

const Keys = () => {
  const [data, setData] = useState({
    actModalOpen: false,
    buttonText: "Resgatar ",
  });
  const [filter, setFilter] = useState({ value: "marca" });

  const [currentPage, setCurrentePage] = useState(1);

  const dataFetch = getUrlWithParams(ROUTES.KEYS.GET, {
    id_cliente: 6,
    classificar: filter.value,
  });

  const { data: dataArray } = useFetch(dataFetch);

  const activationModalOpen = (activeItem) => {
    setData((prev) => ({
      ...prev,
      activeItem: activeItem,
      actModalOpen: true,
      buttonText: "resgatando",
    }));
  };

  const activationModalClose = () => {
    setData((prev) => ({
      ...prev,
      actModalOpen: false,
      buttonText: "Resgatar",
    }));
  };

  const doPurchase = async (productId) => {
    await api.patch(ROUTES.KEYS.UPDATE, {
      id_code: productId,
    });
    mutate(dataFetch);
  };

  const options = [
    { label: "Data de compra", value: "compra" },
    { label: "Produto", value: "produto" },
    { label: "Marca", value: "marca" },
  ];

  const handlePagination = (page) => setCurrentePage(page);

  const handleChange = (value) => {
    setFilter(value);
  };

  const empty = (dataArray?.items?.length) === 0 ? <p style={{ color: 'white', display: 'block', textAlign: 'center'}}>Lista vazia!</p> : null;

  return (
    <div className={Styles.product_item_wrap}>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "0px 10px" }}>
        <Sort options={options} _onSelect={handleChange} />
      </div>

      <div className={Styles.product_list}>
        { empty }

        {dataArray?.items?.map((item, idx) => (
          <div className={Styles.product_item}>
            <img src={getImg(item.image)} alt="" />
            <Button
              className={"btn" + idx}
              buttontext={item.isRedeemed ? "ja Resgatado" : data.buttonText}
              background={item.isRedeemed ? "#DB2B2F" : "#01191E"}
              onClick={() => activationModalOpen(item)}
            />
          </div>
        ))}
      </div>

      { data?.items?.lenght &&
        <Pagination
          onChange={handlePagination}
          currentPage={currentPage}
          pageSize={dataArray?.paging.pageCount}
        />
      }

      {data.actModalOpen && (
        <Activationmodal
          items={data.items}
          activeItem={data.activeItem}
          purchase={dataArray.purchase}
          doPurchase={doPurchase}
          actModalOpen={data.actModalOpen}
          activationModalClose={activationModalClose}
        />
      )}
    </div>
  );
};

export default Keys;
