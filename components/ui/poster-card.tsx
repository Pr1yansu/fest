"use client";
import { CalendarCheckIcon, Pencil, X } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Link from "next/link";

interface PosterCardProps {
  poster: string;
  title: string;
  date: string;
  googleForm?: string;
}

const PosterCard = ({
  poster,
  title,
  date,
  googleForm,
}: PosterCardProps) => {
  const [openFullImage, setOpenFullImage] = useState(false);

  return (
    <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 p-6">
      <div
        className="relative h-auto cursor-pointer group"
        onClick={() => setOpenFullImage(true)}
      >
        <img src={poster} alt={title} className="h-full w-full object-cover" />
        <div className="p-4 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black/80 group-hover:opacity-100 opacity-0 duration-100">
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-orange-500">{date}</p>
            <Link href="/rules" className="flex justify-center flex-col mt-4">
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
            <img
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
    </div>
  );
};

export default PosterCard;
