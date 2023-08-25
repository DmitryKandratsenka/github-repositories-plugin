import { useMemo } from "react";
import t from "@/locales/english.json";

type Translations = typeof t;
type TranslationKey = keyof Translations;

export function useTranslation() {
  return useMemo(() => {
    return {
      t(key: TranslationKey) {
        return t[key] || "";
      },
    };
  }, []);
}
