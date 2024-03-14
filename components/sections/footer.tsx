import { cn } from "@/lib/utils";
import React from "react";
import Container from "../ui/container";

const Footer = () => {
  return (
    <section className="texture-left pt-6">
      <Container>
        <div className="mt-12">
          <h3 className="lg:text-[3vw] text-3xl text-center text-white">
            Our <span className="text-orange-600">Sponsors</span>
          </h3>
          <div className="sponsors h-40 lg:mt-16 mt-8 w-full rounded-2xl"></div>
          <h3 className="lg:text-[3vw] text-3xl text-center text-white lg:mt-20 mt-6">
            Get In <span className="text-orange-600">Touch</span>
          </h3>
          <div className={cn("mt-6 text-white description")}>
            <p className="text-center md:text-2xl text-lg">
              <span className="text-teal-300">
                Prof. Bipasha Chakraborty Banik
              </span>{" "}
              (9330905991)
            </p>
            <p className="text-center md:text-2xl text-lg">
              <span className="text-teal-300">Prof. Hiranmoy Samanta</span>{" "}
              (7980507308)
            </p>
            <p className="text-center md:text-2xl text-lg">
              <span className="text-teal-300">Prof. Amartya Roy</span>{" "}
              (9474119035, 7003753421)
            </p>
          </div>
        </div>
      </Container>
      <div
        className={cn(
          "sponsors lg:mt-16 mt-8 w-full rounded-t-2xl p-5 flex justify-between flex-wrap text-center text-white description"
        )}
      >
        <h4>
          Copyright &copy; 2024 Community of webweeb. All rights reserved.
        </h4>
        <div className="flex gap-2 flex-wrap justify-center">
          <h4>Code of conduct</h4>
          <h4>Privacy policy</h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
