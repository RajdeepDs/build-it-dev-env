"use client";

import { Icons } from "@buildit/ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Session } from "next-auth/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavMenu({
  session,
}: {
  session: Session | null;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-center md:hidden">
      {" "}
      <div
        className="group flex flex-col items-center hover:cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <>
            <span className="bg-indigo-soft h-[1px] w-4 translate-y-[1px] -rotate-45 transition-all duration-300" />
            <span className="bg-indigo-soft h-[1px] w-4 rotate-45 transition-all duration-300" />
          </>
        ) : (
          <>
            <span className="bg-indigo-soft h-[1px] w-4 origin-center translate-y-[5px] transition-all duration-300" />
            <span className="bg-indigo-soft h-[1px] w-4 origin-center -translate-y-[5px] transition-all duration-300" />
          </>
        )}
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav-menu"
            className="bg-faded absolute left-0 top-0 -z-10 h-screen w-full"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: -300,
              opacity: 0,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="padding-header container mt-5 flex flex-col items-start gap-y-5 px-4 text-lg font-medium">
              <a href="/docs" className="text-indigo-soft block">
                Docs
              </a>
              <a href="/pricing" className="text-indigo-soft block">
                Pricing
              </a>
              <a href="/blog" className="text-indigo-soft block">
                Blog
              </a>
              <a href="/changelog" className="text-indigo-soft block">
                Changelog
              </a>
            </div>
            <div className="container absolute bottom-5 flex w-full items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <Link href="https://twitter.com/Rajdeep__ds">
                  <Icons.Twitter className="fill-indigo-soft h-5 w-5 cursor-pointer stroke-none" />
                </Link>
                <Link href="https://github.com/RajdeepDs">
                  <Icons.Github className="text-indigo-soft h-5 w-5 cursor-pointer stroke-none" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
