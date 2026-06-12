"use client";

import React from "react";
import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/config";

const OPTIONS: { value: Lang; label: string }[] = [
    { value: "pt", label: "PT-BR" },
    { value: "en", label: "EN" },
];

export const LanguageSelector = () => {
    const { lang, setLang } = useLang();

    return (
        <div
            role="radiogroup"
            aria-label="Idioma / Language"
            className="inline-flex items-center rounded border border-cborder2 bg-cborder/60 p-0.5 backdrop-blur"
        >
            {OPTIONS.map((option) => {
                const isActive = lang === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => setLang(option.value)}
                        className={`rounded px-3 py-1 text-xs font-mono font-semibold transition-colors ${
                            isActive
                                ? "bg-cprimary text-cbg"
                                : "text-cmuted hover:text-cheading"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};
