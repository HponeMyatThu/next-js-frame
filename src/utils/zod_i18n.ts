import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/en/zod.json";

i18next.init({
  lng: "en",
  resources: {
    en: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

export { z };
