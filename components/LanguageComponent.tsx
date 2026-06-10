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
            className="inline-flex items-center rounded-full border border-default-200 bg-default-100/60 p-0.5 backdrop-blur"
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
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                            isActive
                                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-sm"
                                : "text-default-500 hover:text-foreground"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};
