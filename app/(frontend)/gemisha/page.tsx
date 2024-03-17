import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";

const facultyHead = [
  {
    image: "/assets/family/faculty/family-1.jpeg",
    name: "Bipasha Chakrabarti Banik",
    designation: "Assistant professor & TIC, Department of ECE",
    role: "Member , R&D Cell Convenor, GEMISHA 2K24",
  },
  {
    image: "/assets/family/faculty/family-2.jpeg",
    name: "Hiranmoy Samanta",
    designation: "Assistant professor,ME",
    role: "Convenor,R&D Cell",
  },
  {
    image: "/assets/family/faculty/family-3.jpeg",
    name: "Amartya Roy",
    designation: "TIC,EE",
    role: "Member R&D Cell GMIT",
  },
  {
    image: "/assets/family/faculty/family-4.jpg",
    name: "Pronita Mukherjee",
    designation: "Asst. Proff. CSE",
    role: "Member R&D Cell GMIT",
  },
  {
    image: "/assets/family/faculty/family-5.jpg",
    name: "Satrajit Das",
    designation: "Asst. Proff. CSE",
    role: "Member R&D Cell GMIT",
  },
  {
    image: "/assets/family/faculty/family-6.jpg",
    name: "Sayantani Das",
    designation: "TIC,BSH",
    role: "Member R&D Cell GMIT",
  },
  {
    image: "/assets/family/faculty/family-7.jpg",
    name: "Saddam Mollah",
    designation: "Asst. Proff. Mathematics",
    role: "BSH Department",
  },
];

const students = [
  {
    image: "/assets/family/student/student-1.jpg",
    name: "Snehashis Gharai",
    role: "Co-ordinator of Web Derby",
  },
  {
    image: "/assets/family/student/student-2.jpg",
    name: "Sahil Roy",
    role: "Co-ordinator of innova.",
  },
  {
    image: "/assets/family/student/student-3.jpg",
    name: "Souravdeep Giri",
    role: "Co-ordinator of Digital Arena",
  },
  {
    image: "/assets/family/student/student-4.jpg",
    name: "Animesh Mahato",
    role: "Co-ordinator of Bridge the gap",
  },
  {
    image: "/assets/family/student/student-5.jpg",
    name: "Sidhant Mishra",
    role: "Co-ordinator of Eureka",
  },
  {
    image: "/assets/family/student/student-6.jpg",
    name: "Soumodip Chatterjee",
    role: "Co-ordinator of Mind Maze",
  },
  {
    image: "/assets/family/student/student-7.jpg",
    name: "Rupankar Patra",
    role: "Co-ordinator of Blueprint Bonanza",
  },
  {
    image: "/assets/family/student/student-8.jpg",
    name: "Samrat Singha Roy",
    role: "Co-ordinator of Bolt of Briliance",
  },
  {
    image: "/assets/family/student/student-9.jpg",
    name: "Priyansu Chowdhury",
    role: "Website development",
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
          <h3 className="text-4xl text-center text-primary-1">Students</h3>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 ">
            {students.map((student, index) => (
              <div
                key={index}
                className="flex justify-center items-start avatar"
              >
                <div className="container">
                  <div className="card bg-primary-1">
                    <div className="image">
                      <Image
                        src={student.image}
                        alt={student.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        loading="eager"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="content">
                      <h3>{student.name}</h3>
                      <p>{student.role}</p>
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
