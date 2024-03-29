import { Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AudioPlayer from "../ui/audio-player";
import Container from "../ui/container";
import Titles from "../ui/titles";

const HomeSection = () => {
  return (
    <section className="texture-left py-6">
      <Container>
        <div className="min-h-screen flex items-center max-lg:flex-wrap-reverse max-lg:justify-center">
          <div className="lg:w-2/5 w-full max-lg:text-center">
            <div className="w-full">
              <Titles />
              <div className="sm:hidden">
                <AudioPlayer />
              </div>
              <div className="flex mt-12 justify-between items-center px-3">
                <div>
                  <h3 className="text-white xl:text-7xl sm:text-5xl  text-3xl max-[400px]:text-2xl text-start">
                    28
                  </h3>
                  <p className="text-teal-300 xl:text-3xl text-lg max-[400px]:text-base break-words">
                    March 2024
                  </p>
                </div>
                <div>
                  <h3 className="text-white  xl:text-7xl sm:text-5xl text-3xl max-[400px]:text-2xl text-center">
                    8
                  </h3>
                  <p className="text-teal-300 xl:text-3xl text-lg max-[400px]:text-base">
                    Hours
                  </p>
                </div>
                <div>
                  <h3 className="text-white  xl:text-7xl sm:text-5xl text-3xl max-[400px]:text-2xl text-end">
                    30K
                  </h3>
                  <p className="text-teal-300 xl:text-3xl text-lg max-[400px]:text-base">
                    Prizepool
                  </p>
                </div>
              </div>
              <div className="max-sm:hidden">
                <AudioPlayer />
              </div>
              <div className="flex justify-center">
                <div>
                  <Link
                    className="border-2 mx-auto capitalize text-white lg:text-2xl sm:text-xl text-lg p-1 flex items-center justify-center gap-2 mt-8 hover:border-amber-500 hover:text-amber-500 rounded-full w-full text-center px-4 duration-100 relative z-20"
                    href={"/events"}
                  >
                    Explore Events
                    <Compass />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 w-full">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover object-center w-full relative z-20"
              src={"/assets/Hero-Section.gif"}
              alt="here image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
