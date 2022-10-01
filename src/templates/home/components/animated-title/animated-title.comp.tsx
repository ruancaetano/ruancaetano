import React from "react";

import { useTranslation } from "next-export-i18n";

import * as Styles from "./animated-title.styles";

export const AnimatedTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Styles.TitleWrapper>
      <h1>{t("home.title")}</h1>
    </Styles.TitleWrapper>
  );
};
