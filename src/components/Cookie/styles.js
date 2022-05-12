import styled from "styled-components";

export const CookieContainer = styled.div`
  background: #0d3840;
  border-radius: 15px;
  margin-bottom: 20px;
  position: fixed;
  bottom: 0;
  left: 20%;
  right: 20%;
  z-index: 9999;

  @media (max-width: 768px) {
    left: 0%;
    right: 05%;
  }
`;

export const CookieTextContent = styled.div`
  padding: 25px;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;

    a {
      color: #f15a24;
    }
  }

  @media (max-width: 768px) {
    height: 178px;
    font-size: 12px;
    padding: 10px;
  }
`;

export const CookiesButtons = styled.div`
  padding: 0 25px 25px 25px;
  button {
    background: #11a147;
    border-radius: 5px;
    width: 230px;
    height: 40px;
    border: none;
  }

  button:nth-child(2) {
    width: 230px;
    height: 40px;
    color: #db2b2f;
    background: none;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 08px;
    button {
      width: 190px;
      font-size: 11px;
    }
  }

  button:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`;
