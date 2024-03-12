"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

const Events = [
  {
    url: "/assets/events/gaming.jpg",
    name: "Gaming",
  },
  {
    url: "/assets/events/bridge.jpg",
    name: "Bridge",
  },
  {
    url: "/assets/events/eureka.jpg",
    name: "Eureka",
  },
  {
    url: "/assets/events/model presentation.jpg",
    name: "Model presentation",
  },
  {
    url: "/assets/events/poster.jpg",
    name: "Poster",
  },
  {
    url: "/assets/events/quiz.jpg",
    name: "Quiz",
  },
  {
    url: "/assets/events/robotics.jpg",
    name: "Robotics",
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
              className="w-[90%] h-full object-cover object-center"
              src={event.url}
              alt="gaming"
            />
            <div className="absolute z-20 bottom-0 py-3 text-white bg-white/5 w-full backdrop-blur-xl rounded-md flex justify-center">
              {event.name}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EventsCarousel;
