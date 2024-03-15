import { cn } from "@/lib/utils";
import React from "react";
import Container from "../ui/container";
import GetInTouch from "../ui/get-in-touch";
import Copyright from "../ui/copyright";

const Footer = () => {
  return (
    <section className="texture-left pt-6">
      <Container>
        <div className="mt-12">
          <h3 className="lg:text-[3vw] text-3xl text-center text-white">
            Our <span className="text-amber-500">Sponsors</span>
          </h3>
          <div className="sponsors h-40 lg:mt-16 mt-8 w-full rounded-2xl"></div>
          <GetInTouch />
        </div>
      </Container>
      <Copyright />
    </section>
  );
};

export default Footer;
