"use client";

import * as React from "react";
import { Lang, DEFAULT_LANG, STORAGE_KEY } from "./config";
import { messages, Messages } from "./messages";

interface LanguageContextValue {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggle: () => void;
    /** Dictionary of UI strings for the active language. */
    t: Messages;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Always start from the default language so server and first client render
    // match (avoids hydration mismatch); the real preference is applied after mount.
    const [lang, setLangState] = React.useState<Lang>(DEFAULT_LANG);

    React.useEffect(() => {
        const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
        if (stored === "pt" || stored === "en") {
            setLangState(stored);
        } else {
            const nav = (typeof navigator !== "undefined" ? navigator.language : "").toLowerCase();
            setLangState(nav.startsWith("pt") ? "pt" : "en");
        }
    }, []);

    React.useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        }
    }, [lang]);

    const setLang = React.useCallback((next: Lang) => {
        setLangState(next);
        try {
            window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /* ignore storage errors (private mode, etc.) */
        }
    }, []);

    const toggle = React.useCallback(() => {
        setLang(lang === "pt" ? "en" : "pt");
    }, [lang, setLang]);

    const value = React.useMemo<LanguageContextValue>(
        () => ({ lang, setLang, toggle, t: messages[lang] }),
        [lang, setLang, toggle]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
    const ctx = React.useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLang must be used within a LanguageProvider");
    }
    return ctx;
}
