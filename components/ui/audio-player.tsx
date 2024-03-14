"use client";
import React, { useState } from "react";
import Image from "next/image";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return (
    <div
      className="mt-12 flex justify-center w-full"
      onClick={() => {
        setIsPlaying(!isPlaying);
      }}
    >
      <div className=" border-[3px] flex items-center justify-evenly rounded-full gap-2 px-3 mx-auto">
        {isPlaying ? (
          <button
            aria-label="pause-btn"
            className="h-12 aspect-square relative cursor-pointer"
          >
            <Image fill src={"/assets/pause.png"} alt="play btn" />
          </button>
        ) : (
          <button aria-label="play-btn" className="h-12 aspect-square relative">
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
