import styled from "styled-components";

import { breakpoints } from "@styles/breakpoints";

export const Container = styled.div`
  display: flex;

  margin-top: 50px;

  & > main {
    flex: 1;
  }

  @media ${breakpoints.laptop} {
    margin: 0;
  }
`;

export const DrawerButton = styled.button`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 10px;
  right: 10px;

  opacity: 0.8;
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
  flex-direction: column;

  overflow: hidden;
  overflow-y: auto;

  width: ${({ show }) => (show ? "100%" : 0)};
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  transition: width 0.1s;

  @media ${breakpoints.tablet} {
    width: ${({ show }) => (show ? "80%" : 0)};
  }

  @media ${breakpoints.laptop} {
    position: static;

    flex-direction: row;

    flex-wrap: nowrap;

    width: 30%;
    min-width: 450px;

    & > button {
      display: none;
    }
  }
`;

export const NavBar = styled.nav`
  background: ${({ theme }) => theme.colors.secondary};

  height: 60px;

  ul {
    padding: 0;
    margin: 0;
    width: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    list-style-type: none;
  }

  @media ${breakpoints.laptop} {
    height: 100%;

    background: ${({ theme }) => theme.colors.primary};

    ul {
      flex-direction: column;

      justify-content: flex-start;
      align-items: flex-start;
    }

    width: 120px;
  }
`;

export const NavBarItem = styled.li<{ current: boolean }>`
  padding: 16px 0;
  margin: 0 10px;

  cursor: pointer;

  span {
    display: block;
    font-size: 20px;
    color: ${({ current, theme }) =>
      current ? "#fff" : theme.colors.tertiary};
  }

  svg {
    display: none;
    margin: 0;
    padding: 8px;
  }

  &:hover {
    span {
      color: ${({ theme, current }) =>
        current ? "#fff" : theme.colors.tertiary};
      opacity: ${({ current }) => (current ? 1 : 0.5)};
    }
  }

  @media ${breakpoints.laptop} {
    width: 100%;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-style: solid;
    border-width: 0px 0px 0.5px 0px;

    text-align: center;

    padding: 10x 0;
    margin: 0;

    svg {
      display: inline;
    }

    span {
      font-size: 12px;
    }

    span,
    svg {
      color: ${({ current, theme }) =>
        current ? "#fff" : theme.colors.tertiary};
    }

    &:hover {
      svg,
      span {
        color: ${({ theme, current }) =>
          current ? "#fff" : theme.colors.tertiary};
        opacity: ${({ theme, current }) => (current ? 1 : 0.5)};
      }
    }
  }
`;

export const Presentation = styled.div`
  width: 100%;
  height: 100%;

  padding: 8px;

  background: ${({ theme }) => theme.colors.secondary};

  text-align: center;

  h1 {
    font-size: 2.5rem;
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
        background: ${({ theme }) => theme.colors.tertiary};
        border-radius: 50%;
        opacity: 0.9;
      }
    }
  }
`;

export const Languages = styled.div`
  margin: 8px;

  padding: 0px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }

  .selected-language {
    font-weight: bold;
    color: #fff;
  }

  p:hover {
    opacity: 0.5;
  }

  @media (${breakpoints.laptop}) {
    margin-bottom: 80px;
    justify-content: flex-end;
  }
`;

export const AvatarWrapper = styled.div`
  width: 180px;
  height: 180px;

  margin: auto;

  overflow: hidden;

  border-radius: 50%;
  border: 1px #fff solid;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
