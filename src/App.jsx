import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/HomeLogged";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Interest from "./pages/Interest";
import HomeLogged from "./pages/HomeLogged";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";

import MyPage from "./pages/MyPage";

import NotFound2 from "./pages/NotFound2";
import NotFound3 from "./pages/NotFound3";
import NotFound4 from "./pages/NotFound4";
import NotFound5 from "./pages/NotFound5";
import NotFound from "./pages/NotFound1";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { OAUTH_CONFIG } from "./constants/oauth0";
import { setToken } from "./services/api";

function App() {
  const [canContinue, setCanContinue] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getToken() {
      try {
        const token = await getAccessTokenSilently({
          audience: OAUTH_CONFIG.audience,
          scope: OAUTH_CONFIG.scope,
        });

        setToken(token);
      } catch (e) {}

      setCanContinue(true);
    }

    getToken();
  }, [getAccessTokenSilently]);

  if (!canContinue) return null; // TODO: return loader here

  return (
    <Router>
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={Register} path="/register" />
        <Route component={Interest} path="/tastes" />

        <Route component={HomeLogged} path="/home_logged" />
        <Route component={withAuthenticationRequired(MyPage)} path="/mypage" />
        <Route component={Product} path="/product/:id" />
        <Route component={Search} path="/search" />
        <Route component={Checkout} path="/checkout" />

        <Route component={NotFound2} path="/page1" />
        <Route component={NotFound3} path="/page2" />
        <Route component={NotFound4} path="/page3" />
        <Route component={NotFound5} path="/page4" />

        <Route component={Login} path="/login" />

        <Route exact component={Home} path="/" />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
