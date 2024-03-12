"use client";
import React, { useState } from "react";
import MainNav from "./main-nav";
import { cn } from "@/lib/utils";

const Menu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <button
        name="menu"
        className="fixed top-5 right-5 z-[90]"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div className="w-10 h-10 flex flex-wrap gap-2 relative">
          {!isOpen && (
            <div className="w-full flex gap-0.5 items-center">
              <span className={cn("w-full bg-white h-1 rounded-full")} />
              <span className="w-2 aspect-square rounded-full bg-white" />
            </div>
          )}
          <span
            className={cn(
              "w-full bg-white h-1 rounded-full duration-300",
              isOpen &&
                "rotate-45 absolute top-1/2 translate-y-1/2 bg-orange-600"
            )}
          ></span>
          <span
            className={cn(
              "w-full bg-white h-1 rounded-full duration-300",
              isOpen &&
                "-rotate-45 absolute top-1/2 translate-y-1/2 bg-orange-600"
            )}
          ></span>
        </div>
      </button>
      <MainNav isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default Menu;
