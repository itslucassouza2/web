import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useCart } from "../../../contexts/cart";
import { getImg } from "../../../utils/Helper";
import Styles from "./../Header/Header.module.scss";
import Cart from "../../../assets/home/cart.svg";
import Signup from "../Signup";
import Signin from "../Signin";
import { useClickOutside } from "../../../hooks/useClickOutside";

export const UserIdentify = ({ handleShowCart }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const { isAuthenticated, user } = useAuth0();
  const { items } = useCart();
  const productQuantity = items.length;

  const toogleSignin = () => {
    if (isAuthenticated) setShowSignUp((state) => !state);
    else setShowSignIn((state) => !state);
  };

  const handleCloseModal = () => {
    setTimeout(() => {
      if (isAuthenticated) setShowSignUp(false);
      else setShowSignIn(false);
    }, 100);
  };

  const elementRef = useClickOutside(handleCloseModal);

  return (
    <div className={Styles.userinfo} ref={elementRef}>
      <a className={Styles.userimage} onClick={toogleSignin}>
        <img
          src={user?.picture ?? getImg("home/icons/user-default.png")}
          alt={user?.name || "user avatar"}
          style={{ borderRadius: 100 }}
        />

        <div className={Styles.username}>
          <p>Minha Conta</p>
        </div>
      </a>
      <div className={Styles.usercart}>
        <a onClick={handleShowCart}>
          <img src={Cart} alt="User" />
        </a>
        {!!productQuantity && (
          <span className={Styles.productcount}>{productQuantity}</span>
        )}
      </div>
      {showSignUp && <Signup />}
      {showSignIn && <Signin />}
    </div>
  );
};
