import { LocateFixed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section className="md:py-20 py-10 registerBg">
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={"/assets/register.png"}
            className="w-full relative object-cover lg:object-center object-[-6vw]"
            alt="register"
          />
        </div>
        <div className="max-lg:mx-auto lg:w-1/2 w-full text-center items-center space-y-6 px-4 ">
          <Link
            className="border-2 mx-auto capitalize text-white lg:text-2xl sm:text-xl text-lg p-1 hover:border-amber-500 hover:text-amber-500 rounded-full w-full text-center px-4 duration-100 relative z-20"
            href={"/events"}
          >
            Register here
          </Link>
          <h4 className="text-white 3xl:text 2xl:text-4xl xl:text-4xl lg:text-2xl md:text-[2rem] sm:text-3xl  uppercase">
            Application Closes On
          </h4>
          <h4 className=" description font-medium 2xl:text-7xl xl:text-7xl  lg:text-5xl md:text-5xl sm:text-3xl text-amber-500 text-[1.7rem]">
            26 March,2024
          </h4>
        </div>
      </div>
      <div className="relative z-20 lg:text-5xl sm:text-3xl text-xl lg:-mt-3">
        <h2 className="text-teal-300  text-center mb-4">TECH FEST VENUE</h2>
        <h3 className="text-white  text-center flex flex-col justify-center items-center flex-wrap gap-4">
          GARGI MEMORIAL INSTITUTE OF TECHNOLOGY{" "}
          <Link
            href="https://maps.app.goo.gl/HFEqK66RQNSEnfd66"
            className="text-amber-500 description text-xl flex items-center gap-2 w-full justify-center"
          >
            Click Here
            <LocateFixed size={40} />
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default Register;
