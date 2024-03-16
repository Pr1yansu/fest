"use client";
import Image from "next/image";
import React from "react";

const Titles = () => {
  return (
    <>
      <Image
        height={0}
        width={0}
        sizes="100vw"
        alt="Gemisha"
        quality={100}
        className="w-full object-cover object-center px-4"
        src={"/assets/title-slogan.png"}
      />
      <Image
        height={0}
        width={0}
        sizes="100vw"
        alt="Gemisha"
        quality={100}
        className="w-full object-cover object-center"
        src={"/assets/Title-gemisha.png"}
      />
    </>
  );
};

export default Titles;
