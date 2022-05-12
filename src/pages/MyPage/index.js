import React, { useEffect, useState } from "react";
import Categorymenu from "../../components/MyPage/Categorymenu";
import Keys from "../../components/MyPage/Keys";
import Wishlist from "../../components/MyPage/Wishlist";
import Request from "../../components/MyPage/Request";
import Data from "../../components/MyPage/Data";
import Avatarmodal from "../../components/MyPage/Avatarmodal";
import { Base } from "../../components/shared/Base";

const links = {
  "/mypage": 0,
  "/mypage/wishlist": 1,
  "/mypage/request": 2,
  "/mypage/data": 3,
};

function MyPage() {
  const [activeLink, setActiveLink] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(links[path]);
  }, []);

  const handleModalState = () => setShow((prevState) => !prevState);

  const handleClick = (link) => setActiveLink(link);

  return (
    <Base>
      <Categorymenu
        handleShow={handleModalState}
        activeLink={activeLink}
        handleClick={handleClick}
      />
      {activeLink === 0 && <Keys />}
      {activeLink === 1 && <Wishlist />}
      {activeLink === 2 && <Request />}
      {activeLink === 3 && <Data />}

      <Avatarmodal show={show} handleClose={handleModalState} />
    </Base>
  );
}

export default MyPage;
