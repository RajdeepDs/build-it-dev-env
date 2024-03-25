"use client";

import FeatureCard from "@/components/ui/feature-card";
import { Separator } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DevelopmentEnvironment(): JSX.Element {
  return (
    <div className="bg-deep overflow-hidden py-[113px] ">
      <section className="container flex max-w-[1220px] flex-col lg:flex-row">
        <motion.div
          className="relative z-10 ml-5 flex-1 md:ml-16 lg:left-0 lg:top-16 lg:ml-0"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
          viewport={{ once: true }}
        >
          <Link href={"/docs"} className="flex items-center gap-x-2">
            <Image
              src={"/IndigoLogo.svg"}
              alt={"BuildIt Logo"}
              width={12}
              height={12}
            />
            <h2 className="text-indigo-light text-sm">
              Development Environment
            </h2>
            <Separator orientation="vertical" className="h-[10px]" />
            <h2 className="text-indigo-light text-sm">BuildIt</h2>
          </Link>
          <h1 className="mt-4 text-2xl font-bold sm:text-4xl md:whitespace-nowrap">
            Unleash Creativity.
            <div className="pb-1">Development Environment for Next.js.</div>
          </h1>
          <p className="text-grey-muted mt-2 text-base">
            BuildIt&apos;s development environment provides everything you need
            to code Next.js applications with speed and focus. Write clean,
            well-structured code with features like syntax highlighting,
            autocompletion, and linting.
          </p>
          <Link
            href={"/docs"}
            className="text-indigo-light mt-5 flex items-center"
          >
            Explore more
            <Icons.ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <div className="-ml-4 mr-8 mt-16 md:flex md:gap-6">
            <FeatureCard
              icon={"Bot"}
              title="Smart Code Assist"
              description="BuildIt's intelligent code assist provides real-time suggestions and autocompletion based on your project context and Next.js framework specifics."
            />
            <div className="mt-4 md:hidden" />
            <FeatureCard
              icon={"Radio"}
              title="Live Preview"
              description="BuildIt's Live Preview feature displays the visual output of your code changes in real-time, directly within the development environment."
            />
          </div>
        </motion.div>
        <div className="relative -mx-10 ml-1 flex-1 lg:left-5 lg:mx-0">
          <Image
            src={"/editor-mockup-deep-fade.svg"}
            alt={"Editor Mockup"}
            width={550}
            height={250}
            className={
              "absolute left-0 top-0 mt-10 hidden max-w-none rounded-s-xl lg:block"
            }
          />
          <Image
            src={"/editor-mockup-deep-fade.svg"}
            alt={"Editor Mockup"}
            width={550}
            height={250}
            className={"mt-5 hidden w-full rounded-s-lg md:block lg:hidden"}
          />
          <Image
            src={"/editor-mockup-slice.svg"}
            alt={"Editor Mockup"}
            width={350}
            height={450}
            className={"mt-10 flex w-full rounded-s-lg md:hidden"}
          />
          <div className="lg:h-[700px]" />
        </div>
      </section>
    </div>
  );
}
