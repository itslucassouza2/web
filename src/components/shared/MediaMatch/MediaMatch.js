import styled, { css } from "styled-components";
import media from "styled-media-query";

const matchModifiers = {
  lessThan: (breakpoint) => css`
    ${media.lessThan(breakpoint)`
      display: block;
    `}
  `,
  greaterThan: (breakpoint) => css`
    ${media.greaterThan(breakpoint)`
      display: block;
    `}
  `,
};

export const MediaMatch = styled.div`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${lessThan && matchModifiers.lessThan(lessThan)}
    ${greaterThan && matchModifiers.greaterThan(greaterThan)}
  `}
`;
