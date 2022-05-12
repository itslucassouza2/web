import React from "react";

import styles from "./LeftContent.module.scss";
import { Button } from "../../../components/NotFound/Button";
import { RightImg } from "../../NotFound1/RightImg";

export const LeftContent = (props) => {
  return (
    <div className={styles.leftcontent}>
      <dl>
        <dt>Esta página não contém nada além de sobras.</dt>
        <RightImg />
        <dd>
          Uma caixa de pizza perfeitamente atraente sobre uma mesa. Você o abre
          cheio de expectativa. E encontra... nada além de restos. Talvez uma
          crosta meio comida. E muita gordura. A expectativa se transforma em um
          profundo desapontamento e desespero. Não sobrou nada!
        </dd>
      </dl>
      <div className={styles.buttonContainer}>
        <Button />
      </div>
    </div>
  );
};
