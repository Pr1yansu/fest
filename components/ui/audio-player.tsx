"use client";
import React, { useState } from "react";
import Image from "next/image";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div
      className="lg:mt-24 mt-12 flex justify-center"
      onClick={() => {
        setIsPlaying(!isPlaying);
      }}
    >
      <div className=" border-2 flex items-center justify-evenly rounded-full gap-2 px-3 mx-auto">
        {isPlaying ? (
          <button className="h-12 aspect-square relative" title="play-btn">
            <Image fill src={"/assets/pause.png"} alt="play btn" />
          </button>
        ) : (
          <button className="h-12 aspect-square relative" title="pause-btn">
            <Image fill src={"/assets/play.png"} alt="play btn" />
          </button>
        )}
        <div className="flex overflow-hidden">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={isPlaying ? "/assets/soundwave.gif" : "/assets/soundwave.png"}
            alt="soundwave"
            className="w-auto md:h-[100px] h-16"
          />
        </div>
      </div>

      <audio src="/assets/sound.mp4" autoPlay={isPlaying} playsInline loop />
    </div>
  );
};

export default AudioPlayer;
