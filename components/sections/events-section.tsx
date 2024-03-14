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
              <Link
                className="border-2 px-2 mx-auto mt-12 capitalize text-white lg:text-2xl sm:text-xl text-lg flex gap-2 items-center p-1 rounded-full"
                href={"/events"}
              >
                VIew all events
                <Compass />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <EventsCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EventsSection;
