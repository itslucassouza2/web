import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";
import reducers from "./reducers/index";
import reportWebVitals from "./reportWebVitals";
import { SWRConfig } from "swr";
import { Auth0Provider } from "@auth0/auth0-react";
import { OAUTH_CONFIG } from "./constants/oauth0";
import { CartProvider } from "./contexts/cart";

import "./index.css";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const swrConfigs = { revalidateOnFocus: false, shouldRetryOnError: false };

const oAuthConfig = { ...OAUTH_CONFIG, redirectUri: window.location.origin };

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfigs}>
      <Provider store={store}>
        <Auth0Provider {...oAuthConfig}>
          <BrowserRouter>
            <CartProvider>
              <App />
              <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </CartProvider>
          </BrowserRouter>
        </Auth0Provider>
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
