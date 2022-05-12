import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu1 from "../Menu1";
import Styles from "./../Header/Header.module.scss";
import styled from "styled-components";
import Hamburger from "./hamburger.js";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import { useFetch } from "../../../hooks";
import { useDebounce } from "../../../hooks/useDebounce";
import { Dropdown } from "../../shared/Dropdown";
import { categories, microCategories, subCategories } from "./mock";
import Logo from "../../../assets/home/logo.svg";
import { MediaMatch } from "../../shared/MediaMatch/MediaMatch";
import { MenuMobile } from "../MenuMobile";
import { getUrlWithParams } from "../../../utils/urls";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { UserIdentify } from "./UserIdentify";
import { useResize } from "../../../utils/Helper";

const HeaderStyle = styled.div`
  .hamburger-react {
    div {
      color: #f15a24;
      font-weight: 700;
      height: 5px !important;
      border-radius: 3px;
    }
  }
`;

const ENTER_KEY = "Enter";

export const Header = ({ handleShowCart }) => {
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [categoryActive, setCategoryActive] = useState("");
  const [microActive, setMicroActive] = useState("");
  const [smallActive, setSmallActive] = useState("");

  const toogleMenu = () => {
    setShowMenu1((prevState) => !prevState);
    setIsOpen((prevState) => !prevState);
  };

  const handleResetSubFields = () => {
    setCategoryActive("");
    setMicroActive("");
  };

  const handleIsOpen = () => {
    toogleMenu();
    handleResetSubFields();
  };

  const handleIsClose = () => {
    setTimeout(() => {
      setShowMenu1(false);
      setIsOpen(false);
      handleResetSubFields();
    }, 100);
  };

  const elementRef = useClickOutside(handleIsClose);

  const history = useHistory();
  const { isMobile } = useResize();

  const handleDebounceChange = useDebounce();

  const { data, isLoading } = useFetch(ROUTES.SEARCH.BY_NAME(name));

  const handleCategoryActive = (value) => {
    setCategoryActive(value);
    setMicroActive("");
    setSmallActive("");
  };

  const handleMicroActive = (value) => {
    setMicroActive(value);
    setSmallActive("");
  };

  const handleSmallActive = (value) => setSmallActive(value);

  const showeventMenu2 = (isParent) => {
    if (isParent) {
      setShowMenu2(true);
    } else {
      setShowMenu2(false);
    }
  };

  const showeventMenu3 = (isParent) => {
    if (isParent) {
      setShowMenu3(true);
    } else {
      setShowMenu3(false);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
    handleDebounceChange(() => setName(value), 300);
  };

  const redirectWithParams = useCallback(() => {
    if (search) {
      setName("");
      history.push(
        getUrlWithParams(ROUTES.SEARCH.CATEGORY, {
          sh: search,
        })
      );
    }
  }, [search, history]);

  const getKeyPress = useCallback(
    (event) => event.key === ENTER_KEY && redirectWithParams(),
    [redirectWithParams]
  );

  useEffect(() => {
    document.addEventListener("keypress", getKeyPress);

    return () => document.removeEventListener("keypress", getKeyPress);
  }, [getKeyPress]);

  const [products] = data || [];

  return (
    <HeaderStyle>
      <header className={Styles.header}>
        <div className={Styles.topmenu}>
          <div className={Styles.menu}>
            <Hamburger open={isOpen} toggle={handleIsOpen} />
            <MediaMatch greaterThan="large">
              {isOpen && (
                <div
                  className={Styles.menucontent}
                  ref={!isMobile ? elementRef : null}
                >
                  {showMenu1 && (
                    <Menu1
                      menuClass="first"
                      items={categories}
                      onMouseOver={showeventMenu2}
                      handleActive={handleCategoryActive}
                      active={categoryActive}
                    />
                  )}
                  {showMenu2 && subCategories[categoryActive] && (
                    <Menu1
                      menuClass="second"
                      items={subCategories[categoryActive]}
                      onMouseOver={showeventMenu3}
                      handleActive={handleMicroActive}
                      active={microActive}
                      handleIsOpen={handleIsOpen}
                    />
                  )}
                  {showMenu3 && microCategories[microActive] && (
                    <Menu1
                      menuClass="third"
                      items={microCategories[microActive]}
                      handleActive={handleSmallActive}
                      active={smallActive}
                      handleIsOpen={handleIsOpen}
                    />
                  )}
                </div>
              )}
            </MediaMatch>

            <MediaMatch lessThan="medium">
              {isMobile && showMenu1 && <MenuMobile onClose={toogleMenu} />}
            </MediaMatch>
          </div>
          <Link to="/">
            <div className={Styles.logo}>
              <img src={Logo} alt="Logo" />
            </div>
          </Link>
          <div className={Styles.iconinputcontainer}>
            <input
              className={Styles.iconinput}
              type="text"
              placeholder="O que procura, jovem padawan?"
              onChange={handleChange}
            />
            {name && <Dropdown items={products || []} isLoading={isLoading} />}
            <div className={Styles.iconcontainer} onClick={redirectWithParams}>
              <div className={Styles.iconsearch}></div>
            </div>
          </div>
          <UserIdentify handleShowCart={handleShowCart} />
        </div>
      </header>
    </HeaderStyle>
  );
};

export default Header;
