"use client";

import { motion } from "framer-motion";

export default function IntegrationSection(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.h1
        className="container -z-10 text-balance text-center text-3xl font-bold leading-tight md:text-6xl
      "
        initial={{ y: 120 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Revolutionize Your Workflow: <br className="hidden md:block" />
        Streamline Development with Muse&apos;s
        <br className="hidden md:block" /> Powerful Integrations
      </motion.h1>
      <div className="container flex flex-col items-center">
        <div className="bg-bg2 border-indigoLight mt-20 h-[286px] w-1/2 rounded-lg border" />
        <h2 className="mt-10 max-w-3xl text-pretty text-center text-2xl md:text-3xl">
          Unlock seamless workflows with
          <br />
          integrations that simplify task and project collaborations.
        </h2>
      </div>
      <div className="border-gradient my-16 h-[1px] w-full" />
      <div className="container flex flex-col">
        <ul className="grid gap-5 md:grid-cols-6">
          <li className="col-span-2 col-start-2 flex w-fit">
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">GitHub:</span> Manage
              your code effectively with direct GitHub integration. Push and
              pull changes effortlessly, track branches and commits, and revert
              seamlessly.
            </p>
          </li>
          <li className="col-span-2 col-start-4 flex w-fit">
            <p className="text-grey/70 flex flex-col font-light md:block">
              <span className="font-medium text-white">Vercel:</span> Deploy
              your app to Vercel instantly with a single click from Muse. Enjoy
              automated builds and real-time deployment for a seamless
              experience.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
