import Header from "../../Home/HeaderLogged";
import Footer from "../../Home/Footer";
import * as S from "./styles";
import Cart from "../../Home/Cart";
import { useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";

export const Base = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const elementRef = useClickOutside(() => setShowCart(false));

  const handleCartState = () => setShowCart((prevState) => !prevState);

  return (
    <S.Wrapper>
      <S.Content>
        <Cart
          isOpen={showCart}
          handleHideCart={handleCartState}
          ref={elementRef}
        />
        <Header handleShowCart={handleCartState} />
        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  );
};
