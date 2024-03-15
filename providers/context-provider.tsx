"use client";
import React, { useEffect } from "react";

const ContextDisableProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return <>{children}</>;
};

export default ContextDisableProvider;
