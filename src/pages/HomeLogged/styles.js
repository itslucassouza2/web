import styled, { css } from "styled-components";

export const WrapperProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: ${({ hasBanner }) => (hasBanner ? "wrap" : "nowrap")};
  gap: 20px;

  @media (max-width: 765px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    a:nth-child(4) {
      display: none;
    }

    ${({ hasBanner }) =>
      hasBanner &&
      css`
        a:nth-child(3) {
          flex-direction: column;
          display: none;
        }
      `}
  }
`;

const wrapperItemModifiers = {
  hasNoItems: css`
    display: initial;

    div:nth-child(1) {
      height: 238px;
    }
  `,
};

export const WrappItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    gap: 16px;
  }

  ${({ hasItems }) => !hasItems && wrapperItemModifiers.hasNoItems}
`;
