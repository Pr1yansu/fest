import React from "react";
import Marquee from "../ui/marquee";
import DateTimeCountDown from "../ui/date-time-count-down";
import { cn } from "@/lib/utils";
import Container from "../ui/container";

const WhatISGemisha = () => {
  return (
    <section className="texture-right py-6">
      <Container>
        <div className="text-white py-6 text-center">
          <h2 className="xl:text-8xl md:text-6xl text-4xl">
            WHAT IS <span className="text-teal-300">GEMISHA&apos;24</span>?
          </h2>
          <p
            className={cn(
              "description xl:text-2xl md:text-xl text-base text-center mt-4"
            )}
          >
            &ldquo;Experience GEMISHA 2024, a dynamic tech fest showcasing model
            representation, innovative idea presentations, robotics, web
            development, quizzes, bridge building, and more. Join us for an
            8-hour journey of camaraderie and innovation!&rdquo;
          </p>
          <h3 className="xl:text-6xl md:text-4xl text-2xl lg:mt-24 mt-12">
            &ldquo;Access Innovation&apos;s Vault With Us...&rdquo;
          </h3>
          <DateTimeCountDown />
        </div>
      </Container>
      <Marquee />
    </section>
  );
};

export default WhatISGemisha;
