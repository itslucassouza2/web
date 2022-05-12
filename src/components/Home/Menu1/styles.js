import styled, { css } from "styled-components";

const menuModifiers = {
  first: css`
    z-index: 10;
    filter: drop-shadow(4px 0px 5px #01191e);

    &:after {
      right: auto;
      position: absolute;
      top: -14px;
      left: 47px;
      display: inline-block !important;
      border-right: 10px solid transparent;
      border-bottom: 14px solid #fff;
      border-left: 10px solid transparent;
      content: "";
      border-bottom-color: #0d3840;
    }

    &:nth-child(2) {
      &::after {
        border: transparent;
        display: none;
      }
    }

    &:nth-child(3) {
      &::after {
        border: transparent;
      }
    }
  `,
  second: css`
    z-index: 9;
    left: -12px;
    filter: drop-shadow(4px 0px 5px #01191e);
  `,
  third: css`
    z-index: 8;
    left: -24px;

    ul li:after,
    ul li:before {
      display: none !important;
    }
  `,
};

export const MenuItem = styled.div`
  position: relative;
  background: #0d3840;
  width: 280px;
  min-width: 280px;
  border-radius: 8px;
  padding-top: 18px;
  padding-bottom: 18px;

  ul {
    list-style-type: none;
  }

  ${({ type }) => menuModifiers[type]}
`;

const categoryModifiers = {
  isActive: css`
    background: #01191e;

    &:before,
    &:after {
      height: 10px;
      position: absolute;
      right: 0;
      width: 10px;
    }

    &:before {
      top: 0;
      transform: translateY(-100%);
    }

    &:after {
      bottom: 0;
      transform: translateY(100%);
    }

    a {
      color: #f15a24;

      i {
        border-color: #f15a24;
      }
    }
  `,
};

export const CategoryItem = styled.li`
  position: relative;
  padding: 8px 0px 8px 24px;
  margin: 4px 0px;
  z-index: 999;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none !important;

    i {
      border: solid #fff;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      margin-top: 2px;
      margin-left: 12px;
      transform: rotate(45deg);
      -webkit-transform: rotate(-45deg);
      margin-right: 24px;
    }
  }

  ${({ isActive }) => isActive && categoryModifiers.isActive}
`;
