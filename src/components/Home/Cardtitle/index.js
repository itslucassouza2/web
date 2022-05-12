import React from "react";
import Button from "./../Button";
import { getUrlWithParams } from "../../../utils/urls";
import { ROUTES } from "../../../constants/routes/routes";
import Styles from "./Cardtitle.module.scss";
import { categories } from "../../../pages/Search/mock";

const Cardtitle = ({ title, brandId, hasSeeMore = true }) => {
  const brandLabel = categories.find(
    (category) => category.value === String(brandId)
  )?.label;
  const cardTitleUrl = getUrlWithParams(ROUTES.SEARCH.CATEGORY, {
    marca: brandLabel,
  });

  return (
    <div className={Styles.cardtitle}>
      <p>{title}</p>
      {hasSeeMore && (
        <Button
          as="a"
          href={cardTitleUrl}
          buttontext="Ver Mais"
          background="#F15A24"
        />
      )}
    </div>
  );
};

export default Cardtitle;
