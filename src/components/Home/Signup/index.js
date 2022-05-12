import React from "react";
import Button from "./../Button";
import { getImg } from "../../../utils/Helper";
import "./Signup.scss";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="signup">
      <div className="container userinfo">
        <img
          src={user?.picture ?? getImg("home/users/lima.png")}
          alt={user?.name || "user avatar"}
        />
        <div className="user-info">
          <p className="username">{user?.name}</p>
          <p className="usermail">{user?.email}</p>
        </div>
      </div>

      <a href="/mypage">
        <div className="container text-center">
          <img className="big" src={getImg("home/icons/key.png")} alt="" />
          <div>Minhas Chaves</div>
        </div>
      </a>

      <div className="semi-container">
        <a href="/mypage/request" className="a-link">
          <div className="semi-half">
            <img className="small" src={getImg("home/icons/note.png")} alt="" />
            Pedidos
          </div>
        </a>

        <a href="/mypage/wishlist" className="a-link">
          <div className="semi-half">
            <img
              className="small"
              src={getImg("home/icons/heart.png")}
              alt=""
            />
            Desejos
          </div>
        </a>
      </div>

      <Button
        buttontext="Sair"
        background="#F15A24"
        onClick={() => logout({ returnTo: window.location.origin })}
      />
    </div>
  );
};

export default SignUp;
