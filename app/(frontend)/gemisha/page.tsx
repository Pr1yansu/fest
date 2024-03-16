import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";

const facultyHead = [
  {
    image: "/assets/family/faculty/family-1.jpeg",
    name: "Amartya Roy",
    designation: "TIC,EE",
    role: "MEMBER R&D cell GMIT",
  },
  {
    name: "Hiranmoy Samanta",
    designation: "Assistant professor,ME",
    role: "Convenor,R&D cell",
    image: "/assets/family/faculty/family-2.jpeg",
  },
  {
    name: "Bipasha Chakrabarti Banik",
    designation: "Assistant professor & TIC, Department of ECE",
    role: "Member , R&D Cell Convenor, GEMISHA 2K24",
    image: "/assets/family/faculty/family-3.jpeg",
  },
];

const GemishaFamily = () => {
  return (
    <section className="texture-left">
      <Container>
        <div className="min-h-screen">
          <h2 className="text-4xl font-bold text-center py-6 text-white">
            Gemisha Family
          </h2>
          <h3 className="text-4xl text-center text-primary-1">Faculty Heads</h3>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 ">
            {facultyHead.map((faculty, index) => (
              <div
                key={index}
                className="flex justify-center items-start avatar"
              >
                <div className="container">
                  <div className="card bg-primary-1">
                    <div className="image">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        loading="eager"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="content">
                      <h3>{faculty.name}</h3>
                      <p>{faculty.designation}</p>
                      <p>{faculty.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GemishaFamily;
