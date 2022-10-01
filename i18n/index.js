const en = require("./locales/translation.en.json");
const pt = require("./locales/translation.pt.json");

const i18n = {
  translations: {
    en,
    pt,
  },
  defaultLang: "en",
  useBrowserDefault: false,
};

module.exports = i18n;