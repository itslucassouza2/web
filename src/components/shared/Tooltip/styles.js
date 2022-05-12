import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4px;
  background: #f15a24;
  position: absolute;
  border-radius: 5px;
  margin-top: 16px;
  margin-left: -8px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid black;
    border-bottom-color: #f15a24;
  }

  span {
    color: #fff;
    font-size: 12px;
  }
`;
