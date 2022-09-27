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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-width: 3px; border-color: transparent }
  50% { border-color: orange; }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 10px;
  overflow: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(-45deg, #203a43, #0f2027, #000);
  background-size: 400% 400%;
  animation: ${gradient} 8s ease infinite;
`;

export const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;

  color: white;

  text-align: center;

  p {
    text-align: justify;
    font-size: 1.2rem;
    margin: 25px 10px;
    line-height: 1.8rem;

    span {
      display: block;
      text-align: center;
    }
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

export const TitleWrapper = styled.div`
  display: inline-block;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    overflow: hidden;
    border-right: 0.15em solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: ${typing} 2s steps(40, end),
      ${blinkCaret} 0.75s step-end infinite;
  }

  @media (${breakpoints.tablet}) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
    margin: 0 5px;
  }
`;
