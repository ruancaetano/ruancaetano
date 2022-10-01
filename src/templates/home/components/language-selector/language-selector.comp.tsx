import { LanguageSwitcher, useSelectedLanguage } from "next-export-i18n";

import { LanguageCodes } from "@enums/language.enum";

import * as Styles from "./language-selector.styles";

export const LanguageSelector = () => {
  const { lang } = useSelectedLanguage();

  return (
    <Styles.Languages>
      <LanguageSwitcher lang="en">
        <p className={lang === LanguageCodes.EN ? "selected-language" : ""}>
          EN
        </p>
      </LanguageSwitcher>
      <span>|</span>
      <LanguageSwitcher lang="pt">
        <p className={lang === LanguageCodes.PT ? "selected-language" : ""}>
          PT
        </p>
      </LanguageSwitcher>
      {/* <p
        onClick={() => {
          setLang(LanguageCodes.EN);
        }}
        className={lang === LanguageCodes.EN ? "selected-language" : ""}
      >
        EN
      </p>
      <span>|</span>
      <p
        onClick={() => {
          setLang(LanguageCodes.PT_BR);
        }}
        className={lang === LanguageCodes.PT_BR ? "selected-language" : ""}
      >
        PT
      </p> */}
    </Styles.Languages>
  );
};
