"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

const Events = [
  {
    url: "/assets/events/gaming.jpg",
    name: "Gaming Event",
  },
  {
    url: "/assets/events/bridge.jpg",
    name: "Bridge Building Competition",
  },
  {
    url: "/assets/events/eureka.jpg",
    name: "Idea Presentation",
  },
  {
    url: "/assets/events/model presentation.jpg",
    name: "Model presentation",
  },
  {
    url: "/assets/events/poster.jpg",
    name: "Technical Poster",
  },
  {
    url: "/assets/events/quiz.jpg",
    name: "Quiz Competition",
  },
  {
    url: "/assets/events/robotics.jpg",
    name: "Robotics Buildup",
  },
  {
    url: "/assets/events/web development.jpg",
    name: "Web Development",
  },
];

const EventsCarousel = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Events.map((event, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-cover object-center rounded-xl"
              loading="eager"
              src={event.url}
              alt="gaming"
            />
            <div className="absolute z-20 bottom-0 py-3 text-white bg-white/5 w-full backdrop-blur-xl rounded-md flex justify-center text-xl">
              {event.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EventsCarousel;
