"use client";
import { Button } from "@nextui-org/react";
import React from "react";

interface DeployButtonProps {
  onClick?: () => void;
  link: string;
}

export const DeployButton: React.FC<DeployButtonProps> = ({ onClick, link }) => {
  const abrirLink = () => {
    window.open(link, "_blank");
  };

  return (
    <Button onClick={onClick ? () => onClick() : abrirLink}>
      Visualizar Deploy 💻
    </Button>
  );
};
