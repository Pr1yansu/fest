import Navbar from "@/components/ui/navbar";
import React, { ReactNode } from "react";

const FrontendLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default FrontendLayout;
