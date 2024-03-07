"use client";
import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MobileNavMenu(): JSX.Element {
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
            <span className="h-[1px] w-4 translate-y-[1px] -rotate-45 bg-white transition-all duration-300" />
            <span className="h-[1px] w-4 rotate-45 bg-white transition-all duration-300" />
          </>
        ) : (
          <>
            <span className="h-[1px] w-4 origin-center translate-y-[5px] bg-white transition-all duration-300" />
            <span className="h-[1px] w-4 origin-center -translate-y-[5px] bg-white transition-all duration-300" />
          </>
        )}
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="mobile-nav-menu"
            className="bg-bg absolute left-0 top-0 -z-10 h-screen w-full"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: -300,
              opacity: 0,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="padding-header container mt-5 flex flex-col items-start gap-y-5 px-4 text-lg font-medium">
              <a href="/docs" className="block text-white">
                Docs
              </a>
              <a href="/pricing" className="block text-white">
                Pricing
              </a>
              <a href="/blog" className="block text-white">
                Blog
              </a>
              <a href="/changelog" className="block text-white">
                Changelog
              </a>
            </div>
            <div className="container absolute bottom-5 flex w-full items-center justify-between px-4">
              <div className="flex gap-x-2">
                <Link href="/register">
                  <Button size="sm">Sign Up</Button>
                </Link>
                <Link href="/login">
                  <Button variant="secondary" size="sm">
                    Log in
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="https://twitter.com/Rajdeep__ds">
                  <Icons.Twitter className="fill-grey h-5 w-5 cursor-pointer stroke-none" />
                </Link>
                <Link href="https://github.com/RajdeepDs">
                  <Image
                    src="/github-icon.svg"
                    alt="Github"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
