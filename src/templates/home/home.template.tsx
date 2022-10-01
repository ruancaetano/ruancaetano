import React, { useEffect } from "react";

import { useTranslation } from "next-export-i18n";
import Image from "next/image";

import { AnimatedTitle } from "./components/animated-title/animated-title.comp";
import { Contacts } from "./components/contacts/contacts.styles";
import { CustomParticles } from "./components/custom-particles/custom-particles.comp";
import { LanguageSelector } from "./components/language-selector/language-selector.comp";
import { Skills } from "./components/skills/skills.comp";
import * as Styles from "./home.styles";

export const HomeTemplate = () => {
  const { t } = useTranslation();

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

        <Styles.Description>{t("home.goalDescription")}</Styles.Description>

        <Contacts />

        <p>
          <span>{t("home.skillsLabel")}</span>
        </p>

        <Skills />
      </Styles.Content>
    </Styles.Container>
  );
};
