"use client";

import React from "react";
import { useLang } from "@/i18n/LanguageProvider";

export const Content = () => {
  const { t } = useLang();

  return (
    <div className="space-y-6 text-foreground">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-primary">{t.about.whoTitle}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.about.whoBody}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3 text-secondary">{t.about.journeyTitle}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.about.journeyBody1}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground mt-3">
          {t.about.journeyBody2}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3 text-accent">{t.about.skillsTitle}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.about.skillsBody1}
        </p>
        <p className="text-base leading-relaxed text-muted-foreground mt-3">
          {t.about.skillsBody2}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3 gradient-text">{t.about.profileTitle}</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          {t.about.profileBody}
        </p>
      </div>
    </div>
  );
};
