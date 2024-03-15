"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface NavProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainNav: React.FC<NavProps> = ({ isOpen, setOpen }) => {
  const { data } = useSession();
  const pathName = usePathname();
  const Links = [
    {
      link: data ? null : "/auth",
      name: data ? "Logout" : "Auth",
      active: data ? false : pathName === "/auth",
    },
    {
      link: "/",
      name: "Home",
      active: pathName === "/",
    },
    {
      link: "/events",
      name: "Events",
      active: pathName === "/events",
    },
    {
      link: "/schedule",
      name: "Schedule",
      active: pathName === "/schedule",
    },
    {
      link: "/gemisha",
      name: "Gemisha Family",
      active: pathName === "/gemisha",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const logoutHandler = async () => {
    try {
      await signOut();
    } catch (error) {
      toast.error("Failed to logout");
      return;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="w-full bg-black/30 fixed right-0 top-0 bottom-0 z-40"
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => {
            setOpen(false);
          }}
        >
          <m.div
            className="sm:w-96 border-l-2 w-full sm:rounded-l-[30px] fixed right-0 top-0 bottom-0 z-50 sidebar"
            initial={{ x: "100%", opacity: 0 }}
            exit={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.15 }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="relative text-white p-5 space-y-6 flex flex-col mt-[15vh]">
              {Links.map((link, index) => (
                <Link
                  key={index}
                  className={cn(
                    "text-3xl p-2 px-4 rounded-full",
                    link.name === "Auth" &&
                      "border-2 text-center text-teal-300 mb-12",
                    link.active && "bordercustom rounded-full text-amber-500"
                  )}
                  href={link.link ? link.link : "/"}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MainNav;
