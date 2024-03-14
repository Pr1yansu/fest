import { Card } from "@/components/ui/card";
import Container from "@/components/ui/container";
import PosterCard from "@/components/ui/poster-card";
import React from "react";

const cards = [
  {
    poster: "/assets/poster/web-dev.jpg",
    title: "Web Development",
    date: "28 March 2024",
    time: "3 Hours",
    googleForm: "https://forms.gle/A7NBJJ3jTCybDExw7",
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
        </>
      </Container>
    </section>
  );
};

export default events;
