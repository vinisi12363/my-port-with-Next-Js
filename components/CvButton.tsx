"use client";
import { Button } from "@nextui-org/react";
import React from "react";

export const  DownloadCvButton = ({ onClick }: { onClick?: () => void }) => {
  const download = () => {
    window.open(
      "./CV-Marcos-Vinicius-Fullstack.pdf",
      "_blank"
    );
  };

  return <Button onClick={onClick ? () => onClick() : download}>Baixar meu CV 📄</Button>;
};
