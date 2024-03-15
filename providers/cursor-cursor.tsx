"use client";
import React from "react";
import Script from "next/script";

const CursorProvider = () => {
  return (
    <>
      <Script src={"/custom.js"} strategy="beforeInteractive" />
      <canvas
        id="canvas"
        className="fixed top-0 left-0 bottom-0 right-0 z-10"
      />
    </>
  );
};

export default CursorProvider;
