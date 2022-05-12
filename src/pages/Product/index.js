import React, { useEffect, useState } from "react";
import { getImg } from "../../utils/Helper";
import Styles from "./Product.module.scss";
import Card from "../../components/Home/Card";
import { useFetch } from "../../hooks/useFetch";
import { ROUTES } from "../../constants/routes/routes";
import { useHistory, useParams } from "react-router-dom";
import { Base } from "../../components/shared/Base";
import { Loading } from "../../components/shared/Loading";
import { FormatValue } from "../../utils/FormatValue";
import { Tooltip } from "../../components/shared/Tooltip";
import { api } from "../../services/api";
import { getUrlWithParams } from "../../utils/urls";
import { useCountdown } from "../../hooks/useCountdown";
import { FavoriteButton } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { successToast, useCart } from "../../contexts/cart";
import { getCategory, getCountry } from "../../utils/global";

import * as S from "../Search/styles";

function Product() {
  const params = useParams();
  const [share, setShare] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [pageno, setPageNo] = useState(0);

  const { add } = useCart();

  const url = getUrlWithParams(ROUTES.PRODUCT.CATEGORY_FULL, {
    idP: params.id,
    idC: 6,
  });
  const { data, isLoading } = useFetch(url);
  const product = data?.produto_full[0];
  const date = useCountdown(product?.promocao_expira);

  const history = useHistory();

  const country = {
    1: "icon/paises_icon/Argentina.png",
    2: "icon/paises_icon/Brasil.svg",
    3: "icon/paises_icon/China.svg",
    4: "icon/paises_icon/Estados_Unidos.svg",
    5: "icon/paises_icon/Hong_Kong.svg",
    6: "icon/paises_icon/Japan.svg",
    7: "icon/paises_icon/Mexico.svg",
    8: "icon/paises_icon/Turquia.svg",
  }[product?.paises_produtos_id_pais];

  const category = {
    1: "icon/plataforma_icon/Playstation.svg",
    2: "icon/plataforma_icon/Nintendo.svg",
    3: "icon/plataforma_icon/Xbox.svg",
    4: "icon/plataforma_icon/PC.svg",
    5: "icon/plataforma_icon/Mobile.svg",
    6: "icon/plataforma_icon/Mobile.svg",
    7: "icon/plataforma_icon/Mobile.svg",
    8: "icon/plataforma_icon/Streaming.svg",
    9: "icon/plataforma_icon/Misc.svg",
    10: "icon/plataforma_icon/Misc.svg",
    11: "icon/plataforma_icon/Misc.svg",
    12: "icon/plataforma_icon/Streaming.svg",
    13: "icon/plataforma_icon/Misc.svg",
    14: "icon/plataforma_icon/Misc.svg",
    15: "icon/plataforma_icon/PC.svg",
  }[product?.categorias_produtos_id_cat];

  const { data: recomendados } = useFetch(ROUTES.PRODUCT.CATEGORY(params.id));

  useEffect(() => {
    if (data?.id_wishlist) {
      setFavorite(true);
    }
  }, [data?.id_wishlist]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (share) setShare((prevState) => !prevState);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [share]);

  const handleAddWhishList = async () => {
    if (!favorite) {
      await api.post(ROUTES.WISHLIST.POST, {
        id_cliente: 6,
        id_product: product.id_product,
      });
      successToast("Adicionado aos favoritos");
      return setFavorite(true);
    } else {
      await api.delete(ROUTES.WISHLIST.DELETE(data?.id_wishlist));
      successToast("Removido dos favoritos");
      return setFavorite(false);
    }
  };

  const selectPage = (no) => {
    setPageNo(no);
  };

  const openShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setShare(!share);
  };

  const formattedDate = `${String(date.days).padStart(2, "0")}D / ${
    date.hours
  }:${date.minutes}:${date.seconds}`;

  const handleAddProductAndCheckout = () => {
     add(product);
     history.push(ROUTES.CHECKOUT.ROOT);
   };

  if (isLoading) return (
    <S.WrapperLoading>
      <Loading />
    </S.WrapperLoading>
  )

  return (
    <div
      className={Styles.product_page}
      style={{
        backgroundImage: `url(${getImg("product/background2.png")})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Base>
        <div className={Styles.product_detail_container}>
          <div className={Styles.product_detail_wrap}>
            <div className={Styles.product_title}>{product?.nome}</div>
            <div className={Styles.product_infos}>
              <img
                className={Styles.full_img_src}
                src={product?.full_img_src}
                alt=""
              />
              <div className={Styles.product_detail_content}>
                <div className={Styles.icon_group}>
                  <img src={getImg(country)} alt="" />
                  <img src={getImg(category)} alt="" />
                </div>
                <div className={Styles.time_wrap}>
                  {product?.desconto > 0 && (
                    <>
                      <button>-{product?.desconto * 100}%</button>
                      <div>
                        <span>Acaba em:</span>
                        <span>{formattedDate}</span>
                      </div>
                    </>
                  )}
                </div>
                <div className={Styles.product_price}>
                  {FormatValue(product?.preco)}
                </div>
                <button
                   className={Styles.btn_purchase}
                   onClick={handleAddProductAndCheckout}
                 >
                   Comprar
                </button>
                <div className={Styles.btn_group}>
                  <FavoriteButton
                    favorite={favorite}
                    onClick={handleAddWhishList}
                  >
                    <i className="fa fa-heart"></i> Desejo
                  </FavoriteButton>
                  <div style={{ position: 'relative' }} className={Styles.btn_main_holder}>
                    <button className={Styles.btn_main} onClick={openShare}>
                      <i className="fa fa-reply"></i> Compartilhar
                    </button>
                    {share && (
                      <Tooltip label="Copiado para a área de transferência!" />
                    )}
                  </div>
                </div>
                <div className={Styles.footer_text}>
                  Sua compra está segura conosco. Para saber mais sobre nós,{" "}
                  <a
                    href="https://yiyigames.zendesk.com/hc/pt-br/articles/4416240495891"
                    target="_blank"
                    rel="noreferrer"
                  >
                    clique aqui!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.explain_wrap}>
            <dl>
              <dt>
                <span
                  className={pageno === 0 ? Styles.active : ""}
                  onClick={() => selectPage(0)}
                >
                  Detalhes
                </span>
                <span
                  className={pageno === 1 ? Styles.active : ""}
                  onClick={() => selectPage(1)}
                >
                  Resgate
                </span>
              </dt>
              <dd>
                {pageno === 0 && (
                  <div>
                    <p>{product?.descricao_produto}</p>
                  </div>
                )}
                {pageno === 1 && (
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: product?.resgatar_produto,
                      }}
                    />
                  </div>
                )}
              </dd>
            </dl>
          </div>
          <div className={Styles.product_recommend_wrap}>
            <div className={Styles.caption}>Produtos recomendados</div>
            <div className={Styles.product_recommend_list}>
              {recomendados?.recomendados?.map((item) => (
                <Card
                  id={item.id_product}
                  key={item.id_product}
                  cardimage={item?.mid_img_src}
                  item={item}
                  title={item?.nome}
                  price={item?.preco}
                  discount={item?.desconto}
                  countries={item?.paises_produtos_id_pais}
                  categories={item?.categorias_produtos_id_cat}
                />
              ))}
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
}

export default Product;
