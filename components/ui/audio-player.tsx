"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!mounted) return null;

  return (
    <div className="mt-12 flex justify-center w-full">
      <div className="border-[3px] flex items-center justify-evenly rounded-full gap-2 px-3 mx-auto">
        <button
          aria-label="pause-btn"
          className="h-12 aspect-square relative cursor-pointer z-20"
          onClick={togglePlay}
          onTouchStart={togglePlay}
        >
          <Image
            fill
            src={isPlaying ? "/assets/pause.png" : "/assets/play.png"}
            alt="pause btn"
          />
        </button>

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

      <audio ref={audioRef} src="/assets/sound.MP3" loop />
    </div>
  );
};

export default AudioPlayer;
