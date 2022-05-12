import React from "react";
import Flickity from "react-flickity-component";
import Cardtitle from "../../components/Home/Cardtitle";
import Card from "../../components/Home/Card";
import Product from "../../components/Home/Product";
import { useFetch } from "../../hooks/useFetch";
import { ROUTES } from "../../constants/routes/routes";
import { Base } from "../../components/shared/Base";

import { getImg } from "../../utils/Helper";

import "./flickity.css";
import Styles from "./../Home/Home.module.scss";
import * as S from "./styles";

import { Cookie } from "../../components/Cookie";

const infos = [
  {
    image: "home/cart.png",
    boldText: "Loja 100% Segura",
    simpleText: "compre com segurança",
  },
  {
    image: "home/fingerprint.png",
    boldText: "Atendimento 24h",
    simpleText: "tire suas dúvidas",
  },
  {
    image: "home/24hours.png",
    boldText: "Entrega Rápida",
    simpleText: "em até 15 minutos",
  },
];

export const Home = () => {
  const { data } = useFetch(ROUTES.HOME.ROOT);
  const { data: mostPopular } = useFetch(ROUTES.HOME.RECOMMENDED);
  const { data: banners } = useFetch(ROUTES.HOME.BANNERS);

  const [bannersItem] = banners || [];
  const bannersBackground = [];
  bannersItem?.items.map((banner) =>
    bannersBackground.push(banner.backgroundUrl)
  );

  let bannerBackground = bannersBackground[0];

  return (
    <div
      className={Styles.home}
      style={{ backgroundImage: `url('${bannerBackground}')` }}
      data-home={JSON.stringify(bannersBackground)}
    >
      <Base>
        <Cookie />
        <div className={Styles.cardcontent}>
          <div className={`${Styles.slide}`}>
            <Flickity
              options={{ autoPlay: 5000, selectedAttraction: 0.1 }}
              flickityRef={flickity => flickity.on('change', (index) => {
                const homeBackground = document.querySelector('[data-home]');
                if (homeBackground) homeBackground.style.backgroundImage = `url('${JSON.parse(homeBackground.dataset.home)[index]}')`;
              })}>
              {bannersItem?.items.map((banner) => (
                <div key={banner.bannerSequence} className={Styles.slideitem}>
                  <img src={banner.bannerUrl} alt="SlideImage" />
                </div>
              ))}
            </Flickity>
          </div>

          <div className={Styles.service}>
            {infos?.map((info) => (
              <div key={info.image} className={Styles.serviceitem}>
                <img src={getImg(info.image)} alt="" />
                <div className={Styles.servicedescript}>
                  <h5>{info.boldText}</h5>
                  <p>{info.simpleText}</p>
                </div>
              </div>
            ))}
          </div>

          {data?.map((category) => (
            <div key={category.categoria} className={Styles.xbox}>
              {category.title !== "Nintendo" && (
                <Cardtitle
                  title={category.title}
                  brandId={category.categoria}
                />
              )}
              <S.WrappItem hasItems={!!category?.items?.length}>
                {category.bannerUrl && (
                  <div
                    style={{
                      backgroundImage: `url(${category?.bannerUrl})`,
                    }}
                    className={Styles.xboxmain}
                  />
                )}
                <S.WrapperProducts hasBanner={!!category.bannerUrl}>
                  {category?.items.map((item) => (
                    <Card
                      key={item.id_product}
                      id={item.id_product}
                      cardimage={item.mid_img_src}
                      title={item.nome}
                      price={item.preco}
                      item={item}
                      discount="-5%"
                      countries={item?.paises_produtos_id_pais}
                      categories={item?.categorias_produtos_id_cat}
                    />
                  ))}
                </S.WrapperProducts>
              </S.WrappItem>
            </div>
          ))}

          {mostPopular?.map((product) => (
            <div key={product.title} className={Styles.product}>
              <Cardtitle title={product.title} hasSeeMore={false} />
              <div className={Styles.productlist}>
                {product?.items.map((item) => (
                  <Product
                    key={item.id_product}
                    id={item.id_product}
                    cardimage={item.full_img_src}
                    title={item.nome}
                    price={item.preco}
                    item={item}
                    discount="0"
                    countries={item?.paises_produtos_id_pais}
                    categories={item?.categorias_produtos_id_cat}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Base>
    </div>
  );
};

export default Home;
