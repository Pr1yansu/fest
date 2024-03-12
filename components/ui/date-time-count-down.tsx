"use client";
import React, { useState, useEffect } from "react";

const DateTimeCountDown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-28") - +new Date();
    let timeLeft: { days: number; hours: number; minutes: number } = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="mt-20 max-w-screen-xl mx-auto xl:text-[4vw] lg:text-[6vw] text-[8vw]">
      <h4 className="flex justify-center md:gap-28 sm:gap-14 gap-5 text-orange-500">
        <div>
          <h4>{timeLeft.days}</h4>
          <p className="lg:text-4xl text-2xl text-center text-white">Days</p>
        </div>
        :
        <div>
          <h4>{timeLeft.hours}</h4>
          <p className="lg:text-4xl text-2xl text-center text-white">Hours</p>
        </div>
        :
        <div>
          <h4>{timeLeft.minutes}</h4>
          <p className="lg:text-4xl text-2xl text-center text-white">Minutes</p>
        </div>
      </h4>
    </div>
  );
};

export default DateTimeCountDown;
