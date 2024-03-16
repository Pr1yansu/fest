import React from "react";
import Container from "../ui/container";
import GetInTouch from "../ui/get-in-touch";
import Copyright from "../ui/copyright";
import Image from "next/image";

const Sponsors = [
  {
    image: "/assets/sponsors/sponsor-1.jpg",
  },
  {
    image: "/assets/sponsors/sponsor-2.jpg",
  },
  {
    image: "/assets/sponsors/sponsor-3.jpg",
  },
  {
    image: "/assets/sponsors/sponsor-4.jpg",
  },
  {
    image: "/assets/sponsors/sponsor-5.jpg",
  },
];

const Footer = () => {
  return (
    <section className="texture-left pt-6">
      <Container>
        <div className="mt-12">
          <h3 className="lg:text-[3vw] text-3xl text-center text-white">
            Our <span className="text-amber-500">Sponsors</span>
          </h3>
          <div className="sponsors flex justify-evenly p-5 lg:mt-16 mt-8 w-full rounded-2xl flex-wrap gap-4">
            {Sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="md:w-40 md:h-40 w-24 h-24 rounded-full flex items-center justify-center relative bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out cursor-pointer overflow-hidden grayscale hover:grayscale-0"
              >
                <Image
                  src={sponsor.image}
                  alt="sponsor"
                  fill
                  className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer object-contain"
                />
              </div>
            ))}
          </div>
          <GetInTouch />
        </div>
      </Container>
      <Copyright />
    </section>
  );
};

export default Footer;
