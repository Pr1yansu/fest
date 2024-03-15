import { cn } from "@/lib/utils";
import React from "react";

const Copyright = () => {
  return (
    <div
      className={cn(
        "sponsors lg:mt-16 mt-8 w-full rounded-t-2xl p-5 flex justify-between flex-wrap text-center text-white description"
      )}
    >
      <h4>Copyright &copy; 2024 Community of webweeb. All rights reserved.</h4>
      <div className="flex gap-2 flex-wrap justify-center">
        <h4>Code of conduct</h4>
        <h4>Privacy policy</h4>
      </div>
    </div>
  );
};

export default Copyright;
