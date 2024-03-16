import Container from "@/components/ui/container";
import Copyright from "@/components/ui/copyright";
import GetInTouch from "@/components/ui/get-in-touch";
import PosterCard from "@/components/ui/poster-card";
import React from "react";

const cards = [
  {
    poster: "/assets/poster/web.webp",
    title: "Web Development",
    date: "28 March 2024",
    googleForm: "https://forms.gle/A7NBJJ3jTCybDExw7",
  },

  {
    poster: "/assets/poster/innova.webp",
    title: "Innovative Model Presentation",
    date: "28 March 2024",
    googleForm: "https://forms.gle/wGSReecC22S9wGSL9",
  },
  {
    poster: "/assets/poster/bolt.webp",
    title: "Robo Soccer & Robo Race",
    date: "28 March 2024",
    googleForm: "https://forms.gle/ErHMzsX6PY54xrtE8",
  },
  {
    poster: "/assets/poster/mind.webp",
    title: "Quiz Competition",
    date: "28 March 2024",
    googleForm: "https://forms.gle/RG8HwiTy8wYDCrDb9",
  },

  {
    poster: "/assets/poster/gaming.webp",
    title: "BGMI & FREE FIRE Competition",
    date: "28 March 2024",
    googleForm: "https://forms.gle/5dM9cNAsNzUZGHfBA",
  },
  {
    poster: "/assets/poster/eureka.webp",
    title: "Idea Presentation",
    date: "28 March 2024",
    googleForm: "https://forms.gle/SwuP347rD27WJQ4Q9",
  },

  {
    poster: "/assets/poster/bridge.webp",
    title: "Bridge Builing Competition",
    date: "28 March 2024",
    googleForm: "https://forms.gle/955NgAA1ALVeBUud8",
  },

  {
    poster: "/assets/poster/poster.webp",
    title: "Technical Poster Presentation",
    date: "28 March 2024",
    googleForm: "https://forms.gle/J1yFGUTsZkKXcQ6T9",
  },
];

const events = () => {
  return (
    <section className="texture-left">
      <Container>
        <>
          <h2 className="text-4xl font-bold text-center py-6 text-white">
            Events
          </h2>
          <div className="min-h-screen grid grid-cols-12 gap-4 py-6">
            {cards.map((card, index) => (
              <PosterCard key={index} {...card} />
            ))}
          </div>
          <GetInTouch />
        </>
      </Container>
      <Copyright />
    </section>
  );
};

export default events;
