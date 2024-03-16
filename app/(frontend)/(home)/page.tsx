import React from "react";
import HomeSection from "@/components/sections/home-section";
import WhatISGemisha from "@/components/sections/what-is-gemisha";
import Register from "@/components/sections/register";
import EventsSection from "@/components/sections/events-section";
import Footer from "@/components/sections/footer";

const Home = async () => {
  return (
    <>
      <HomeSection />
      <WhatISGemisha />
      <Register />
      <EventsSection />
      <Footer />
    </>
  );
};

export default Home;
