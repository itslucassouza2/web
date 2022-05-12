import React from "react";

import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 4px;
  color: white;
  border: none;
  font-size: 15px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding: 4px 40px 4px 40px;
`;

const Button = ({ background, buttontext, ...props }) => {
  return (
    <Wrapper style={{ backgroundColor: background }} {...props}>
      {buttontext}
    </Wrapper>
  );
};

export default Button;
