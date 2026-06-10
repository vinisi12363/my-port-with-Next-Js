export type Lang = "pt" | "en";

export const LANGS: Lang[] = ["pt", "en"];
export const DEFAULT_LANG: Lang = "pt";
export const STORAGE_KEY = "portfolio-lang";

/** A value that exists in every supported language. */
export type Localized<T = string> = Record<Lang, T>;

/** Pick the value for the active language from a localized field. */
export function tx<T>(value: Localized<T>, lang: Lang): T {
    return value[lang];
}

/** CV / resume file served per language (files live in /public). */
export const CV_HREF: Localized = {
    pt: "/CV-Marcos-Vinicius-Fullstack.pdf",
    en: "/Resume-Marcos-Vinicius-Fullstack-EN.pdf",
};
