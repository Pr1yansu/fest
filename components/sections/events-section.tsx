import React from "react";
import EventsCarousel from "../ui/event-carousel";
import { Compass } from "lucide-react";
import Link from "next/link";
import Container from "../ui/container";
import { cn } from "@/lib/utils";

const EventsSection = () => {
  return (
    <section className="texture-right py-6">
      <Container>
        <div
          className={cn(
            "min-h-screen flex place-items-center lg:text-4xl md:text-2xl text-xl text-white flex-wrap-reverse"
          )}
        >
          <div className="lg:w-1/2 w-full">
            <p className={cn("text-justify description")}>
              &ldquo;Dive into new experiences and expand your perspective at
              our vibrant tech fest. Connect, learn, and embrace diverse
              innovations. Register now to secure your spot and embark on a
              journey celebrating the tapestry of technology. Expand your
              horizons and be part of an enriching tech-filled
              experience!&rdquo;
            </p>
            <div className="mt-8 flex justify-center">
              <div><Link
            className="border-2 mx-auto capitalize text-white lg:text-2xl sm:text-xl text-lg p-1 flex items-center justify-center gap-2 mt-8 hover:border-amber-500 hover:text-amber-500 rounded-full w-full text-center px-4 duration-100"
            href={"/events"}
          >
            View All Events
            <Compass/>
          </Link></div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full ">
            <EventsCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
