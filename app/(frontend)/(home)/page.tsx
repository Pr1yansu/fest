import Container from "@/components/ui/container";
import React from "react";
import { cn } from "@/lib/utils";
import HomeSection from "@/components/sections/home-section";
import WhatISGemisha from "@/components/sections/what-is-gemisha";
import Register from "@/components/sections/register";
import EventsSection from "@/components/sections/events-section";
import Footer from "@/components/sections/footer";
import { auth } from "@/auth";

const Home = async () => {
  const data = await auth();
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
