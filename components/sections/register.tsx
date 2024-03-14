import { LocateFixed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section className="texture-left relative py-6">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={"/assets/register.png"}
            className="w-full relative object-cover lg:object-center object-[-6vw]"
            alt="register"
          />
        </div>
        <div className="max-lg:mx-auto lg:w-1/2 w-full text-center items-center space-y-6 px-4">
          <Link
            className="border-2 mx-auto capitalize text-white lg:text-2xl sm:text-xl text-lg p-1 hover:border-orange-500 hover:text-orange-500 rounded-full w-full text-center px-4 duration-100"
            href={"/register"}
          >
            Register here
          </Link>
          <h4 className="text-white lg:text-5xl sm:text-3xl text-2xl">
            Application Closes On
          </h4>
          <h4 className="lg:text-4xl sm:text-3xl text-orange-600 text-xl">
            26 March,2024
          </h4>
        </div>
      </div>
      <div className="relative z-20 lg:text-5xl sm:text-3xl text-xl lg:-mt-3">
        <h2 className="text-teal-300  text-center mb-4">TECH FEST VENUE</h2>
        <h3 className="text-white  text-center flex justify-center items-center flex-wrap gap-4">
          GARGI MEMORIAL INSTITUTE OF TECHNOLOGY{" "}
          <Link href="/map">
            <LocateFixed size={40} className="text-orange-500" />
          </Link>
        </h3>
      </div>
      <div className="w-full absolute bottom-0">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={"/assets/GMIT-campus.png"}
          className="w-full object-cover object-center opacity-30 grayscale"
          alt="campus"
        />
      </div>
    </section>
  );
};

export default Register;
