import styled, { keyframes } from "styled-components";

import { breakpoints } from "@styles/breakpoints";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  overflow-y: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(-45deg, #203a43, #0f2027, #000);
  background-size: 400% 400%;
  animation: ${gradient} 8s ease infinite;
`;

export const Content = styled.div`
  height: calc(100vh - 70px);
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;

  overflow-y: auto;

  text-align: center;
  color: white;

  @media ${breakpoints.tablet} {
    height: auto;
  }
`;

export const Description = styled.p`
  text-align: justify;
  font-size: 1.2rem;
  margin: 25px 10px;
  line-height: 1.8rem;

  span {
    display: block;
    text-align: center;
  }
`;

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;

  overflow: hidden;

  margin: 10px auto;

  border-radius: 50%;
  border: 3px #fff solid;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
