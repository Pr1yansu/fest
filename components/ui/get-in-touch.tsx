import React from "react";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className=" text-white lg:mt-20 mt-6">
      <h3 className="lg:text-[3vw] text-3xl">
        Get In <span className="text-amber-500">Touch</span>
      </h3>
      <div className={cn("mt-6 description flex justify-between flex-wrap")}>
        <div className="flex gap-2">
          <Mail className="m-1 text-zinc-500" />
          <div>
            <p className="text-lg text-teal-300">Email - </p>
            <span className="text-yellow-500">Dummy@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Phone className="m-1 text-zinc-500" />
          <div>
            <p className="text-lg text-teal-300">
              Prof. Bipasha Chakraborty Banik -{" "}
              <span className="text-yellow-500">9330905991</span>
            </p>
            <p className="text-lg text-teal-300">
              Prof. Hiranmoy Samanta -{" "}
              <span className="text-yellow-500">7980507308</span>
            </p>
            <p className="text-lg text-teal-300">
              Prof. Amartya Roy -{" "}
              <span className="text-yellow-500">9474119035, 7003753421</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
