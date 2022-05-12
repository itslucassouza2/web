import React from "react";

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from "./Signin.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={Styles.signin}>
      <div className={Styles.userinfo}>
        <img src={getImg("home/icons/user-default.png")} alt="" />
        <p>Usuário não logado</p>
      </div>

      <a onClick={loginWithRedirect}>
        <Button buttontext="Fazer Login" background="#01191E" />
      </a>
      {/* <a href="/register">
        <Button buttontext="Cadastrar-se" background="#01191E" />
      </a> */}
    </div>
  );
};

export default Signin;
