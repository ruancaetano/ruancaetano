import React from "react";

import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

import { AnimatedTitle } from "./components/animated-title/animated-title.comp";
import { CustomParticles } from "./components/custom-particles/custom-particles.comp";
import { LanguageSelector } from "./components/language-selector/language-selector.comp";
import { TOOLS } from "./home.constants";
import * as Styles from "./home.styles";

export const HomeTemplate = () => {
  const { t, i18n } = useTranslation("home");

  return (
    <Styles.Container>
      <CustomParticles />
      <LanguageSelector />

      <Styles.Content>
        <Styles.AvatarWrapper>
          <Image
            src="https://cdn.ruancaetano.dev/images/me.jpeg"
            alt="Ruan Caetano Image"
            width={200}
            height={200}
          />
        </Styles.AvatarWrapper>

        <AnimatedTitle />

        <Styles.Description>{t("goalDescription")}</Styles.Description>

        <Styles.Contacts>
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
          <a
            href="https://api.whatsapp.com/send?phone=5512997204962&text=Hello%2C%20I%27m%20Ruan"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <ImWhatsapp color="#fff" size={25} />
          </a>
          <a
            href="mailto:ruansouza_caetano@hotmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FiMail color="#fff" size={25} />
          </a>
        </Styles.Contacts>

        <p>
          <span>{t("skillsLabel")}</span>
        </p>

        <Styles.Skills>
          {TOOLS.map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              title={tool.title}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={tool.image} alt={tool.title} />
            </a>
          ))}
        </Styles.Skills>
      </Styles.Content>
    </Styles.Container>
  );
};
