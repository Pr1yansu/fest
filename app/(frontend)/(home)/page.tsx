import AudioPlayer from "@/components/ui/audio-player";
import Container from "@/components/ui/container";
import { Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Exo } from "next/font/google";
import { cn } from "@/lib/utils";
import DateTimeCountDown from "@/components/ui/date-time-count-down";
import Marquee from "@/components/ui/marquee";
import EventsCarousel from "@/components/ui/event-carousel";

const exo = Exo({
  style: ["normal"],
  weight: ["400"],
  subsets: ["latin"],
});

const Home = () => {
  return (
    <>
      <section className="texture-left py-6">
        <Container>
          <div className="min-h-screen flex items-center max-lg:flex-wrap-reverse max-lg:justify-center">
            <div className="lg:w-[40vw] w-full max-lg:text-center">
              <h4 className="text-white uppercase title-slogan">
                Bigger.Grander.Wilder
              </h4>
              <h1 className="text-white lowercase title">GEMISHA</h1>
              <div className="lg:flex lg:mt-24 mt-12 max-lg:space-y-4 justify-between">
                <div>
                  <h3 className="text-white lg:text-[3vw] sm:text-[5vw] text-[10vw]">
                    28
                  </h3>
                  <p className="text-teal-300 lg:text-[1.5vw] text-xl">
                    March 2024
                  </p>
                </div>
                <div>
                  <h3 className="text-white lg:text-[3vw] sm:text-[5vw] text-[10vw] lg:text-center">
                    8
                  </h3>
                  <p className="text-teal-300 lg:text-[1.5vw] text-xl">Hours</p>
                </div>
                <div>
                  <h3 className="text-white lg:text-[3vw] sm:text-[5vw] text-[10vw] lg:text-end">
                    30K
                  </h3>
                  <p className="text-teal-300 lg:text-[1.5vw] text-xl">
                    Prizepool
                  </p>
                </div>
              </div>
              <AudioPlayer />
              <div className="flex justify-center">
                <Link
                  className="border-2 px-4 mx-auto mt-12 capitalize text-white lg:text-2xl sm:text-xl text-lg flex gap-2 items-center p-2 rounded-full"
                  href={"/events"}
                >
                  Explore events
                  <Compass />
                </Link>
              </div>
            </div>
            <div className="w-full">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover object-center w-full"
                src={"/assets/Hero-Section.gif"}
                alt="here image"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="texture-right py-6">
        <Container>
          <div className="text-white py-6 text-center">
            <h2 className="lg:text-[4vw] text-[6vw]">
              WHAT IS <span className="text-teal-300">GEMISHA&apos;24</span>?
            </h2>
            <p className={cn("lg:text-[1.5vw] text-[2vw]", exo.className)}>
              &ldquo;Experience GEMISHA 2024, a dynamic tech fest showcasing
              model representation, innovative idea presentations, robotics, web
              development, quizzes, bridge building, and more. Join us for an
              8-hour journey of camaraderie and innovation!&rdquo;
            </p>
            <h3 className="lg:text-[3vw] text-[4vw] lg:mt-40 mt-20">
              &ldquo;Access Innovation&apos;s Vault With Us...&rdquo;
            </h3>
            <DateTimeCountDown />
          </div>
        </Container>
        <Marquee />
      </section>
      <section className="texture-left relative min-h-screen py-6">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={"/assets/register.png"}
              className="w-full object-cover lg:object-center object-[-6vw]"
              alt="register"
            />
          </div>
          <div className="max-lg:mx-auto w-full text-center items-center space-y-6 px-4">
            <Link
              className="border-2 mx-auto capitalize text-white lg:text-2xl sm:text-xl text-lg p-2 rounded-full w-full text-center px-4"
              href={"/register"}
            >
              Register here
            </Link>
            <h4 className="text-white lg:text-[3vw] text-[4vw]">
              Application Closes On
            </h4>
            <h4 className="lg:text-5xl text-4xl text-orange-600">
              26 March,2024
            </h4>
          </div>
        </div>
        <div className="relative z-20 lg:text-5xl text-3xl mt-10">
          <h2 className="text-teal-300  text-center mb-6">TECH FEST VENUE</h2>
          <h3 className="text-white  text-center">
            GARGI MEMORIAL INSTITUTE OF TECHNOLOGY
          </h3>
          <p className="text-orange-600 text-xl text-center">
            Baruipur, Mouza Beralia, Balarampur, Kolkata
          </p>
        </div>
        <div className="w-full absolute bottom-0">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={"/assets/GMIT-campus.png"}
            className="w-full object-cover object-center opacity-30 grayscale"
            alt="campus"
          />
        </div>
      </section>
      <section className="texture-right py-6">
        <Container>
          <div
            className={cn(
              "min-h-screen flex place-items-center lg:text-4xl md:text-2xl text-xl text-white flex-wrap-reverse"
            )}
          >
            <div className="lg:w-1/2 w-full">
              <p className={cn("text-justify", exo.className)}>
                &ldquo;Dive into new experiences and expand your perspective at
                our vibrant tech fest. Connect, learn, and embrace diverse
                innovations. Register now to secure your spot and embark on a
                journey celebrating the tapestry of technology. Expand your
                horizons and be part of an enriching tech-filled
                experience!&rdquo;
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  className="border-2 px-4 mx-auto mt-12 capitalize text-white lg:text-2xl sm:text-xl text-lg flex gap-2 items-center p-2 rounded-full"
                  href={"/events"}
                >
                  VIew all events
                  <Compass />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <EventsCarousel />
            </div>
          </div>
        </Container>
      </section>
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
            <div className={cn("mt-6 text-white", exo.className)}>
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
            "sponsors lg:mt-16 mt-8 w-full rounded-t-2xl p-5 flex justify-between flex-wrap text-center text-white",
            exo.className
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
    </>
  );
};

export default Home;
