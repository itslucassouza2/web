import React, { useState } from "react";

import Styles from "./Wishlist.module.scss";
import Product from "../../Home/Product";
import { ROUTES } from "../../../constants/routes/routes";
import { useFetch } from "../../../hooks";
import { Loading } from "../../shared/Loading";
import styled from "styled-components";
import { api } from "../../../services/api";
import { getUrlWithParams } from "../../../utils/urls";
import { mutate } from "swr";
import { Pagination } from "../../shared/Pagination";

const WrapperLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wishlist = () => {
  const [currentPage, setCurrentePage] = useState(1);
  const url = getUrlWithParams(ROUTES.WISHLIST.GET, {
    id_cliente: 6,
    currentPage,
  });
  const { data, isLoading } = useFetch(url);

  const handleRemoveProductFromWishList = async (id_wishlist) => {
    await api.delete(ROUTES.WISHLIST.DELETE(id_wishlist));
    mutate(url);
  };

  const handlePagination = (page) => setCurrentePage(page);
  const empty =
    data?.items?.length === 0 ? (
      <p style={{ color: "white", display: "block", textAlign: "center" }}>
        Lista vazia!
      </p>
    ) : null;

  if (isLoading)
    return (
      <WrapperLoading>
        <Loading />
      </WrapperLoading>
    );

  return (
    <div className={Styles.wish_list_wrap}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <Sort options={[{ text: "Real Brasileiro (R$)" }]} /> */}
      </div>
      <div className={Styles.wish_list}>
        {empty}

        {data?.items?.map(
          (
            {
              id_product,
              id_wishlist,
              full_img_src,
              nome,
              preco,
              desconto,
              paises_produtos_id_pais,
              subcategorias_produtos_id_subcat,
              mid_img_src,
            },
            index
          ) => (
            <Product
              id={id_product} // TODO trocar para id_product
              key={id_wishlist}
              cardimage={mid_img_src}
              title={nome}
              item={data?.items[index]}
              price={preco}
              discount={desconto}
              type="horizontal"
              countries={paises_produtos_id_pais}
              categories={subcategorias_produtos_id_subcat}
              handleRemoveProductFromWishList={() =>
                handleRemoveProductFromWishList(id_wishlist)
              }
            />
          )
        )}
      </div>
      <div className={Styles.paginationWrapper}>
        {data?.items?.lenght && (
          <Pagination
            onChange={handlePagination}
            currentPage={currentPage}
            pageSize={data?.paging.pageCount}
          />
        )}
      </div>
    </div>
  );
};

export default Wishlist;
