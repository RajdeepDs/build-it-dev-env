"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DevelopmentEnvironment(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="container -z-10 text-balance text-center text-4xl font-bold leading-tight md:text-6xl
      "
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Muse: Your effortless Next.js development environment
      </motion.h1>
      <div className="container flex flex-col items-center">
        <Image
          src="/editor-dev.webp"
          alt="Development Environment Mockup"
          sizes="100vw"
          style={{
            width: "90%",
            height: "auto",
          }}
          width={1240}
          height={286}
          className="border-indigoLight mt-28 rounded-lg border"
        />
        <h2 className="mt-10 max-w-3xl text-center text-2xl md:text-3xl">
          Boost your Next.js development workflow with Muse&apos;s intuitive and
          feature-rich environment.
        </h2>
      </div>
      <div className="border-gradient my-16 h-[0.5px] w-full" />
      <div className="container flex justify-center">
        <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 md:px-6">
          <li className="flex w-fit">
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Code Editor:</span> Write
              and edit Next.js code with a smooth, intuitive experience.
            </p>
          </li>
          <li>
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">
                Syntax Highlighting:
              </span>{" "}
              Understand Your Next.js Code with Muse&apos;s Intelligent
              Highlighting.
            </p>
          </li>
          <li>
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Linting:</span> Get
              real-time feedback on potential issues, improving code quality.
            </p>
          </li>
          <li>
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Autocompletion:</span>{" "}
              Intelligent suggestions help you write code accurately and
              efficiently.
            </p>
          </li>
          <li>
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Debugging:</span>{" "}
              Pinpoint bugs quickly with powerful debugging tools.
            </p>
          </li>
          <li>
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Terminal Access:</span>{" "}
              Access the power of the terminal directly from your IDE.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
