import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";

import { getImg } from "../../../utils/Helper";
import Styles from "./Categorymenu.module.scss";

const Categorymenu = ({ handleShow, activeLink, handleClick }) => {
  const { user, logout } = useAuth0();

  const [data, setData] = useState({
    links: [
      { icon: 1, text: "Minhas Chaves", className: Styles.category_item },
      { icon: 2, text: "Lista de Desejos", className: Styles.category_item },
      { icon: 3, text: "Meus Pedidos", className: Styles.category_item },
      // { icon: 4, text: "Meus Dados", className: Styles.category_item },
    ],

    overlayOpen: false,
  });

  const showOverlay = () => {
    setData((prev) => ({ ...prev, overlayOpen: true }));
  };

  const hideOverlay = () => {
    setData((prev) => ({ ...prev, overlayOpen: false }));
  };

  return (
    <div className={Styles.category_menu_wrap}>
      <div className={Styles.caption}>MINHA CONTA</div>

      <div className={Styles.avatar_wrap}>
        <div
          className={Styles.avatar_img_wrap}
          onMouseEnter={showOverlay}
          // onClick={handleShow}
        >
          <img
            className={Styles.avatar_img}
            src={user?.picture ?? getImg("mypage/avatar.png")}
            alt="userAvatar"
          />
          {/* <div
            className={Styles.overlay}
            onMouseOut={hideOverlay}
            style={data.overlayOpen ? { display: "flex" } : { display: "none" }}
          >
            <img src={getImg("mypage/icon5.png")} alt="camera icon" />
            Alterar Imagem
          </div> */}
        </div>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })} className={Styles.btn_sair}>
          Sair
        </button>
      </div>
      <div className={Styles.userinfo_wrap}>
        <div className={Styles.userinfo_item}>
          <dl>
            <dt>{user?.name}</dt>
            <dd>Nome</dd>
          </dl>
        </div>
        <div className={Styles.userinfo_item}>
          <dl>
            <dt>{user?.email}</dt>
            <dd>Email</dd>
          </dl>
        </div>
        <div className={Styles.userinfo_item}>
          <dl>
            <dt>(11) 98893-5997</dt>
            <dd>Telefone</dd>
          </dl>
        </div>
      </div>
      <div className={Styles.category_list}>
        {data.links.map((item, idx) => (
          <div
            className={
              Styles.category_item +
              " " +
              (idx == activeLink ? Styles.category_active : "")
            }
            onClick={() => handleClick(idx)}
          >
            <img src={getImg("mypage/icon" + item.icon + ".png")} alt="" />
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorymenu;
