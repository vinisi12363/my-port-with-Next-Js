"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { CV_HREF } from "@/i18n/config";

export const DownloadCvButton = ({ onClick }: { onClick?: () => void }) => {
  const { t, lang } = useLang();

  const download = () => {
    window.open(CV_HREF[lang], "_blank");
  };

  return (
    <Button onClick={onClick ? () => onClick() : download}>
      {t.contactPage.downloadCv}
    </Button>
  );
};
