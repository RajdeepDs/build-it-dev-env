"use client";
import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoPill from "./info-pill";

export default function HeroSection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center gap-y-5 ">
      <div className="mt-16 flex flex-col items-center px-4">
        <InfoPill />
        <motion.h1
          className="my-6 bg-gradient-to-br from-white from-25% to-white/80 to-75% bg-clip-text text-center text-3xl font-bold leading-tight text-transparent md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Effortless Full-Stack <br /> Development with Muse
        </motion.h1>
        <motion.div
          className="text-grey/60 mb-12 text-center text-lg font-light md:text-xl"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <p className="flex md:block">
            Effortless collaboration, seamless Vercel deployment.{" "}
            <br className="hidden md:block" />
            Everything you need to code faster and smarter.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <Button className="text-md py-6 font-normal tracking-wide">
          Get started
          <Icons.ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
      <Image
        src="/Editor-Mockup.webp"
        alt="Editor Mockup"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={1240}
        height={750}
        className="border-indigoLight mt-28 rounded-lg border"
      />
    </div>
  );
}
