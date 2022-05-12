import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 85%;
  z-index: 30;
  background: #01060a;
  padding: 16px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }

  &:after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: rgba(1, 6, 10, 0.6);
  }
`;

export const Category = styled.div`
  z-index: 30;
  margin-bottom: 16px;
  width: 100%;

  &:nth-child(2) {
    margin-top: 64px;
  }
  /* display: flex;
  justify-content: space-between; */

  span {
    color: #fff;
  }
`;

const divisorModifiers = {
  isSubCategory: css`
    margin-left: 32px;
  `,
  isMicroCategory: css`
    margin-left: 64px;
  `,
};

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ isSubCategory }) => isSubCategory && divisorModifiers.isSubCategory}
  ${({ isMicroCategory }) =>
    isMicroCategory && divisorModifiers.isMicroCategory}
`;

export const ArrowDown = styled.button`
  border: none;
  background: none;

  i {
    border: solid #f15a24;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-top: 2px;
    margin-left: 12px;
    transform: rotate(45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 6px;
    transition: transform ease-in-out 0.3s;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      i {
        transform: rotate(45deg);
      }
    `}
`;

export const Close = styled.div`
  font-size: 42px;
  font-weight: medium;
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  right: 12px;
`;
