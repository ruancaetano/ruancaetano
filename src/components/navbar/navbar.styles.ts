import styled from "styled-components";

import { breakpoints } from "@styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > main {
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const DrawerButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 10px;
  right: 10px;

  opacity: .8;
  cursor: pointer;
  z-index: 100;

  background: ${({ theme }) => theme.colors.secondary};

  padding: 5px;

  border: none;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media ${breakpoints.laptop} {
    display: none;
  }
`;

export const NavBarDrawer = styled.div<{ show: boolean }>`
  display: flex;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.primary};

  flex-wrap: wrap-reverse;
  width: ${({ show }) => (show ? "70%" : 0)};

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  transition: width 0.1s;

  @media ${breakpoints.laptop} {
    position: static;
    display: flex;

    width: 30%;
    min-width: 400px;

    flex-wrap: nowrap;

    & > button {
      display: none;
    }
  }
`;

export const NavBar = styled.nav`
  width: 100%;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  @media ${breakpoints.laptop} {
    width: 85px;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const NavBarItem = styled.li<{ current: boolean }>`
  padding: ${({ theme }) => theme.spacing.unit * 2}px 0;

  border-color: ${({ theme }) => theme.colors.primary};
  border-style: solid;
  border-width: 1px 0px 1px 0px;

  cursor: pointer;

  span {
    display: block;
    font-size: 12px;
  }

  svg {
    display: none;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.unit}px;
  }

  span,
  svg {
    color: ${({ current, theme }) =>
      current ? theme.colors.secondary : "#fff"};
  }

  &:hover {
    svg,
    span {
      color: ${({ theme }) => theme.colors.secondary};
      opacity: 0.5;
    }
  }

  @media ${breakpoints.laptop} {
    svg {
      display: inline;
    }
  }
`;

export const Presentation = styled.div`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.unit * 6}px
    ${({ theme }) => theme.spacing.unit}px;
  background: ${({ theme }) => theme.colors.primary};

  text-align: center;

  h1 {
    color: #fff;
  }

  p {
    font-size: 18px;
    color: #fff;
  }

  div#links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > a {
      width: 50px;
      height: 50px;
      margin: 0;
      padding: 10px;
      text-align: center;

      svg {
        padding: 0;
        margin: 0;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        opacity: 0.9;
      }
    }
  }
`;

export const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;

  margin: auto;

  overflow: hidden;

  border-radius: 50%;
  border: 1px #fff solid;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
