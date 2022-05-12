import { css } from "styled-componentes";

export const DefaultScroll = css`
  overscroll-behavior: contain;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #01191e;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #01191e;
  }
`;
