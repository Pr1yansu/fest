"use client";
import { CalendarCheckIcon, Pencil, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface PosterCardProps {
  poster: string;
  title: string;
  date: string;
  googleForm?: string;
}

const PosterCard = ({ poster, title, date, googleForm }: PosterCardProps) => {
  const [openFullImage, setOpenFullImage] = useState(false);
  const [isViewportAbove1024, setIsViewportAbove1024] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsViewportAbove1024(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 p-6">
      <div
        className="relative z-0 h-auto cursor-pointer group"
        onClick={() => setOpenFullImage(true)}
      >
        <Image
          width={0}
          height={0}
          sizes="100vw"
          loading="eager"
          src={poster}
          alt={title}
          className="h-full w-full object-cover relative z-0"
        />
        <div className="p-4 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80 group-hover:opacity-100 opacity-0 duration-100">
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-orange-500">{date}</p>
            <Link
              href={`/rules/${title.toLowerCase().split(" ").join("-")}`}
              className="flex justify-center flex-col mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="text-white border-2 border-white px-4 py-2 rounded-full mt-2 hover:bg-white hover:text-black transition-all duration-100 flex items-center justify-center gap-2">
                Rules <Pencil size={16} />
              </button>
            </Link>
            <div
              className=" flex justify-center flex-col mt-4"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(googleForm, "_blank");
              }}
            >
              <button className="text-white border-2 border-white px-4 py-2 rounded-full mt-2 hover:bg-white hover:text-black transition-all duration-100 flex items-center justify-center gap-2">
                Attend Event <CalendarCheckIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isViewportAbove1024 && (
        <AnimatePresence>
          {openFullImage && (
            <m.div
              className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 flex justify-center items-center p-6 z-[99]"
              onClick={() => setOpenFullImage(false)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.1 }}
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="eager"
                src={poster}
                alt={title}
                className="h-full w-auto object-contain object-center max-w-full max-h-full rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                aria-label="close full image"
                onClick={() => setOpenFullImage(false)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full"
              >
                <X />
              </button>
            </m.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default PosterCard;
