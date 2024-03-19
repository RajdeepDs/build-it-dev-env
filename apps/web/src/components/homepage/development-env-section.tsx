import { Separator } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "../ui/feature-card";

export default function DevelopmentEnvironment(): JSX.Element {
  return (
    <div className="bg-deep overflow-hidden py-[113px] ">
      <section className="container flex max-w-[1220px] flex-col lg:flex-row">
        <div className="relative z-10 ml-5 flex-1 md:top-16 lg:left-0 lg:ml-0">
          <Link href={"/docs"} className="flex items-center gap-x-2">
            <Image
              src={"/logo-indigo.svg"}
              alt={"Muse Logo"}
              width={12}
              height={12}
            />
            <h2 className="text-indigo-light text-sm">
              Development Environment
            </h2>
            <Separator orientation="vertical" className="h-[10px]" />
            <h2 className="text-indigo-light text-sm">Muse</h2>
          </Link>
          <h1 className="mt-4 text-4xl font-bold md:whitespace-nowrap">
            Unleash Creativity.
            <div className="pb-1">Development Environment for Next.js.</div>
          </h1>
          <p className="text-grey-muted mt-2 text-base">
            Muse&apos;s development environment provides everything you need to
            code Next.js applications with speed and focus. Write clean,
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
              description="Muse's intelligent code assist provides real-time suggestions and autocompletion based on your project context and Next.js framework specifics."
            />
            <div className="mt-4 md:hidden" />
            <FeatureCard
              icon={"Radio"}
              title="Live Preview"
              description="Muse's Live Preview feature displays the visual output of your code changes in real-time, directly within the development environment."
            />
          </div>
        </div>
        <div className="relative -mx-10 ml-1 flex-1 lg:left-5 lg:mx-0">
          <Image
            src={"/editor-mockup-deep-fade.svg"}
            alt={"Editor Mockup"}
            width={550}
            height={250}
            className={
              "absolute left-0 top-0 mt-10 hidden max-w-none rounded-s-xl md:block"
            }
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
