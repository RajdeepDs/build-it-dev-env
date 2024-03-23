"use client";

import { Button, Separator } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center gap-y-5 ">
      <div className="flex flex-col items-center px-4">
        <motion.p
          className="text-indigo-light mb-11 text-sm font-medium uppercase tracking-wider sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          build. communicate. deploy.
        </motion.p>
        <motion.h1
          className="my-6 text-center text-2xl font-bold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            type: "tween",
            delay: 0.1,
          }}
        >
          Effortless Full-Stack <br /> Development with Muse
        </motion.h1>
        <motion.div
          className="text-grey/60 mb-9 text-center text-lg font-light md:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <p className="text-indigo-soft flex text-lg sm:text-xl md:block">
            Everything you need to code faster and smarter.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
      >
        <Link href={"/dashboard"}>
          <Button className="text-md ring-banner ring-offset-faded py-6 font-normal tracking-wide ring-2 ring-offset-4">
            Get started
            <Icons.ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
      <Image
        src="/editor-mockup.webp"
        alt="Editor Mockup"
        sizes="100vw"
        style={{
          width: "90%",
          height: "auto",
        }}
        width={1240}
        height={950}
        className="border-indigoLight mt-28 rounded-lg border"
      />
      <Separator className="my-[113px] opacity-20" />
    </div>
  );
}
