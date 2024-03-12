import React from "react";
import ReactMarquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="marquee-bg py-2 relative mt-16">
      <div className="marquee-placeholder absolute top-0 bottom-0 left-0 right-0"></div>
      <ReactMarquee className="bg-teal-300 p-4 flex justify-between text-black lg:text-5xl sm:text-3xl text-2xl">
        <div> GEMISHA&apos;24 . </div>
        <div> GEMISHA&apos;24 . </div>
        <div> GEMISHA&apos;24 · </div>
        <div> GEMISHA&apos;24 · </div>
        <div> GEMISHA&apos;24 · </div>
        <div> GEMISHA&apos;24 · </div>
        <div> GEMISHA&apos;24 · </div>
        <div> GEMISHA&apos;24 · </div>
      </ReactMarquee>
    </div>
  );
};

export default Marquee;
