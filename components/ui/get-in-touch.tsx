import React from "react";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className=" text-white lg:mt-20 mt-6">
      <h3 className="lg:text-[3vw] text-3xl text-center">
        Get In <span className="text-amber-500">Touch</span>
      </h3>
      <div
        className={cn(
          "mt-6 description flex sm:justify-between flex-wrap justify-center"
        )}
      >
        <div className="flex gap-2">
          <div>
            <div className="flex gap-2">
              <FaWhatsapp size={20} className="text-green-500" />
              <p className="text-lg text-teal-300">
                Prof. Bipasha Chakraborty Banik -{" "}
                <span className="text-yellow-500">9330905991</span>
              </p>
            </div>
            <div className="flex gap-2">
              <FaWhatsapp size={20} className="text-green-500" />
              <p className="text-lg text-teal-300">
                Prof. Hiranmoy Samanta -{" "}
                <span className="text-yellow-500">7980507308</span>
              </p>
            </div>
            <div className="flex gap-2">
              <FaWhatsapp size={20} className="text-green-500" />
              <p className="text-lg text-teal-300">
                Prof. Amartya Roy -{" "}
                <span className="text-yellow-500">9474119035, 7003753421</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 sm:flex-col relative z-20">
          <a
            rel="noreferrer noopener"
            aria-label="facebook"
            href="https://www.facebook.com/Gemisha17"
            target="_blank"
            className="cursor-pointer"
          >
            <CiFacebook size={30} className="text-blue-500" />
          </a>
          <a href="#" target="_blank" aria-label="instagram">
            <FaInstagram size={30} className="text-[#ff2600]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
