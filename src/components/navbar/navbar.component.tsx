import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  FiHome,
  FiUser,
  FiLinkedin,
  FiGithub,
  FiX,
  FiAlignJustify,
} from "react-icons/fi";

import * as Styles from "./navbar.styles";
import { NavBarProps } from "./navbar.types";

export const NavBar = ({ children }: NavBarProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <Styles.Container >
      <Styles.DrawerButton onClick={() => setDrawerOpen(!drawerOpen)}>
        {drawerOpen ? (
          <FiX color="white"  size={20} />
        ) : (
          <FiAlignJustify color="white" size={20} />
        )}
      </Styles.DrawerButton>

      <Styles.NavBarDrawer show={drawerOpen}>
        <Styles.NavBar>
          <ul>
            <Styles.NavBarItem
              onClick={() => router.replace("/")}
              current={router.pathname === "/"}
            >
              <FiHome size={40} />
              <span>Home</span>
            </Styles.NavBarItem>

            <Styles.NavBarItem
              onClick={() => router.replace("/resume")}
              current={router.pathname === "/resume"}
            >
              <FiUser size={40} />
              <span>Resume</span>
            </Styles.NavBarItem>
          </ul>
        </Styles.NavBar>

        <Styles.Presentation>
          <Styles.AvatarWrapper>
            <Image
              src="/images/me.jpeg"
              alt="Ruan Caetano Image"
              width={200}
              height={200}
            />
          </Styles.AvatarWrapper>

          <h1>Ruan Caetano</h1>
          <p>Software Engeenier</p>

          <div id="links">
            <a
              href="https://github.com/ruancaetano"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FiGithub color="#fff" size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/ruanscaetano/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FiLinkedin color="#fff" size={25} />
            </a>
          </div>
        </Styles.Presentation>
      </Styles.NavBarDrawer>

      <main>{children}</main>
    </Styles.Container>
  );
};
