import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div
      className={cn(
        "sponsors lg:mt-16 mt-8 w-full rounded-t-2xl p-5 flex justify-between flex-wrap text-center text-white description"
      )}
    >
      <h4>Copyright &copy; 2024 Community of webweeb. All rights reserved.</h4>
      <Link href="/privacy-policy" passHref>
        Privacy policy
      </Link>
    </div>
  );
};

export default Copyright;
