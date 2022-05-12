import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes/routes";
import styles from "./Button.module.scss";

export const Button = (props) => {
  return (
    <Link to="/" className={styles.orange}>
      Voltar para a Página Principal
    </Link>
  );
};
