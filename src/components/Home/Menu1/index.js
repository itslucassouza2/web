import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import { getUrlWithParams } from "../../../utils/urls";

import * as S from "./styles";

export const menuUrl = (values) =>
  getUrlWithParams(ROUTES.SEARCH.CATEGORY, values);

function Menu1({ items, onMouseOver, handleActive, menuClass, active }) {
  const handleMouseOver = (isParent, value) => {
    onMouseOver && onMouseOver(isParent);
    handleActive && handleActive(value);
  };

  return (
    <S.MenuItem type={menuClass}>
      <ul>
        {items.map((item) => (
          <S.CategoryItem
            key={item.text}
            onMouseOver={() => handleMouseOver(item.isParent, item.text)}
            isActive={active === item.text}
          >
            {item.isParent ? (
              <a>
                {item.text} {item.isParent && <i></i>}
              </a>
            ) : (
              <Link to={menuUrl(item.link)}>{item.text}</Link>
            )}
          </S.CategoryItem>
        ))}
      </ul>
    </S.MenuItem>
  );
}

export default Menu1;
