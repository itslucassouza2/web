import React, { useState } from "react";
import { CookieContainer, CookiesButtons, CookieTextContent } from "./styles";

const cookieName = "yiyigames";

export const Cookie = () => {
  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem(cookieName);
  });

  const handleAccept = () => {
    localStorage.setItem(cookieName, "accept");
    setIsVisible(false);
  };

  const handleRefused = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <CookieContainer className="box-cookies hide">
          <CookieTextContent>
            <p>
              Esse site utiliza de cookies para conseguir lhe entregar
              informações mais relevantes. <br />
              Por favor, os aceite para ter uma melhor performance conosco! Para
              saber mais sobre, <br />
              confira a nossa <a href="/">política de privacidade</a>.
            </p>
          </CookieTextContent>
          <CookiesButtons>
            <button onClick={handleAccept}>Sim, eu aceito os Cookies</button>
            <button onClick={handleRefused}>Não, eu odeio doces >:(</button>
          </CookiesButtons>
        </CookieContainer>
      )}
    </>
  );
};
