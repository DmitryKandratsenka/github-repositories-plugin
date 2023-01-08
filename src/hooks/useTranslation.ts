import t from "@/locales/english.json";
import { useMemo } from "react";

type Translations = typeof t;
type TranslationKey = keyof Translations;

export function useTranslation() {
  return useMemo(() => {
    return {
      t: function (key: TranslationKey) {
        return t[key] || "";
      },
    };
  }, [t]);
}
