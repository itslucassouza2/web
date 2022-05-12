import styled from "styled-components";

export const FavoriteButton = styled.button`
  background: ${({ favorite }) => (favorite ? "#DB2B2F" : "#0D3840")};
  padding: 4px 10px;
  border: none;
  width: 223px;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  text-align: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
