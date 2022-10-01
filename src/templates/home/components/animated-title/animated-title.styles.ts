import styled, { keyframes } from "styled-components";

import { breakpoints } from "@styles/breakpoints";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

/* The typewriter cursor effect */
const blinkCaret = keyframes`
  from, to { border-width: 3px; border-color: transparent }
  50% { border-color: orange; }
`;

export const TitleWrapper = styled.div`
  display: inline-block;

  text-align: center;
  

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
