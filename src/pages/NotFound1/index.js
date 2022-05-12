import React from "react";

import { Header } from "../../components/NotFound/Header";
import { Footer } from "../../components/NotFound/Footer";
import { LeftContent } from "./LeftContent";
import { RightImg } from "./RightImg";
import Styles from "../NotFound.module.scss";
import { MediaMatch } from "../../components/shared/MediaMatch/MediaMatch";

function NotFound() {
  return (
    <div className={Styles.notfound}>
      <Header />
      <div className={Styles.container}>
        <div className={Styles.maincontent}>
          <LeftContent />
          <MediaMatch greaterThan="medium">
            <RightImg />
          </MediaMatch>
        </div>
      </div>
      <div className={Styles.clearfix}></div>
      <Footer />
    </div>
  );
}

export default NotFound;
