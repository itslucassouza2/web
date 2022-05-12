import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  background: #0d3840;
  width: 496px;
  position: absolute;
  z-index: 30;
  margin-top: 6px;
  border-radius: 5px;
  max-height: 400px;
  overflow-y: auto;
  min-height: 100px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: unset;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #031114;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 64px;
  }
`;

export const Item = styled(Link)`
  padding: 8px;
  cursor: pointer;
  display: flex;
`;

export const Loading = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;
