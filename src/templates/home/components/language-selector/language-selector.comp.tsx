import { useTranslation } from "next-i18next";

import { LanguageCodes } from "@enums/language.enum";

import * as Styles from "./language-selector.styles";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <Styles.Languages>
      <p
        onClick={() => {
          i18n.changeLanguage(LanguageCodes.EN);
        }}
        className={
          i18n.language === LanguageCodes.EN ? "selected-language" : ""
        }
      >
        EN
      </p>
      <span>|</span>
      <p
        onClick={() => {
          i18n.changeLanguage(LanguageCodes.PT_BR);
        }}
        className={
          i18n.language === LanguageCodes.PT_BR ? "selected-language" : ""
        }
      >
        PT
      </p>
    </Styles.Languages>
  );
};
