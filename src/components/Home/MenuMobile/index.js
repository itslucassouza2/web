import { useState } from "react";
import {
  categories,
  microCategories,
  subCategories,
} from "../HeaderLogged/mock";
import { Link } from "react-router-dom";

import * as S from "./styles";
import { menuUrl } from "../Menu1";

export const MenuMobile = ({ onClose }) => {
  const [menuCategories, setMenuCategories] = useState({
    categories: {},
    subCategories: {},
  });

  const handleMenuCategories = (type, field) => {
    setMenuCategories((prevState) => {
      const item = !prevState[type][field];

      return {
        ...prevState,
        [type]: {
          ...prevState[type],
          [field]: item,
        },
      };
    });
  };

  return (
    <S.MenuWrapper>
      <S.Close onClick={onClose}>&times;</S.Close>
      {categories.map((category) => (
        <S.Category key={category.text}>
          <S.Divisor>
            <span>{category.text}</span>
            <S.ArrowDown
              className="menu1-item"
              key={category.text}
              onClick={() => handleMenuCategories("categories", category.text)}
              isOpen={menuCategories.categories[category.text]}
            >
              {category.isParent && <i></i>}
            </S.ArrowDown>
          </S.Divisor>

          {menuCategories.categories[category.text] &&
            subCategories[category.text].map((subCategory, index) => (
              <>
                <S.Divisor key={`${subCategory.text}-${index}`} isSubCategory>
                  <span>{subCategory.text}</span>
                  <S.ArrowDown
                    className="menu1-item"
                    key={subCategory.text}
                    onClick={() =>
                      handleMenuCategories("subCategories", subCategory.text)
                    }
                    isOpen={menuCategories.subCategories[subCategory.text]}
                  >
                    {subCategory.isParent && <i></i>}
                  </S.ArrowDown>
                </S.Divisor>

                {menuCategories.subCategories[subCategory.text] &&
                  microCategories[subCategory.text].map((micro) => (
                    <Link to={menuUrl(micro.link)} onClick={onClose}>
                      <S.Divisor key={`${micro.text}-${index}`} isMicroCategory>
                        <span>{micro.text}</span>
                      </S.Divisor>
                    </Link>
                  ))}
              </>
            ))}
        </S.Category>
      ))}
    </S.MenuWrapper>
  );
};
