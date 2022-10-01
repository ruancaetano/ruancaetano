import styled from "styled-components";

import { breakpoints } from "@styles/breakpoints";

export const Languages = styled.div`
  position: absolute;
  height: 35px;
  width: 100%;

  background: #ffffff35;
  top: 0px;
  right: 0px;

  padding: 5px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-size: 18px;

  p {
    padding: 0;
    margin: 0;
    color: #fff;
    cursor: pointer;
    opacity: 0.5;
  }

  span {
    margin: 0 10px;
    color: #fff;
  }

  .selected-language {
    font-weight: bold;
    color: #fff;
    opacity: 1;
  }

  p:hover {
    opacity: 0.3;
  }

  @media ${breakpoints.tablet} {
    background-color: transparent;
    font-size: 20px;
    padding: 20px;
  }
`;
