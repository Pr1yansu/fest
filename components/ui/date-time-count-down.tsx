"use client";
import React, { useState, useEffect } from "react";

const DateTimeCountDown: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-28") - +new Date();
    let timeLeft: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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

  if (!mounted) return null;

  return (
    <div className="sm:mt-20 mt-10 max-w-screen-xl mx-auto lg:text-6xl text-4xl">
      <h4 className="flex flex-wrap justify-center gap-5 text-orange-500">
        <div>
          <h4>{timeLeft.days}</h4>
          <p className=" text-2xl text-center text-white">Days</p>
        </div>
        <div>
          <h4>{timeLeft.hours}</h4>
          <p className=" text-2xl text-center text-white">Hours</p>
        </div>
        <div>
          <h4>{timeLeft.minutes}</h4>
          <p className=" text-2xl text-center text-white">Minutes</p>
        </div>
        <div>
          <h4>{timeLeft.seconds}</h4>
          <p className=" text-2xl text-center text-white">Seconds</p>
        </div>
      </h4>
    </div>
  );
};

export default DateTimeCountDown;
