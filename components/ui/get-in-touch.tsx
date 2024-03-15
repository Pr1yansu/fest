import { cn } from "@/lib/utils";
import React from "react";

const GetInTouch = () => {
  return (
    <>
      <h3 className="lg:text-[3vw] text-3xl text-center text-white lg:mt-20 mt-6">
        Get In <span className="text-amber-500">Touch</span>
      </h3>
      <div className={cn("mt-6 text-white description")}>
        <p className="text-center md:text-2xl text-lg">
          <span className="text-teal-300">Prof. Bipasha Chakraborty Banik</span>{" "}
          (9330905991)
        </p>
        <p className="text-center md:text-2xl text-lg">
          <span className="text-teal-300">Prof. Hiranmoy Samanta</span>{" "}
          (7980507308)
        </p>
        <p className="text-center md:text-2xl text-lg">
          <span className="text-teal-300">Prof. Amartya Roy</span> (9474119035,
          7003753421)
        </p>
      </div>
    </>
  );
};

export default GetInTouch;
