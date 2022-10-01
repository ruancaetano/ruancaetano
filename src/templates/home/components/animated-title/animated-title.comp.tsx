import React from "react";

import { useTranslation } from "next-i18next";

import * as Styles from "./animated-title.styles";

export const AnimatedTitle: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <Styles.TitleWrapper>
      <h1>{t("title")}</h1>
    </Styles.TitleWrapper>
  );
};
