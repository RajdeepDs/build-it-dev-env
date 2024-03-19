import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function OpenSourceSection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center justify-center space-y-10 py-14">
      <div className="flex flex-col space-y-5">
        <h1 className="text-center text-3xl font-bold leading-tight md:text-5xl">
          Building for Developers
        </h1>
        <p className="text-grey-deep text-center text-lg font-light md:text-xl">
          Our source code is available on GitHub - feel free to read, review, or
          <br className="hidden md:block" /> contribute to it however you want!
        </p>
      </div>
      <Link
        href="https://www.github.com"
        className="relative h-[311px] w-[247px] text-white shadow-xl"
      >
        <div className="absolute inset-0">
          <Image
            src={"/github-card-image.webp"}
            alt="GitHub"
            width={247}
            height={311}
            className="rounded-lg"
          />
        </div>
        <div className="relative top-0 z-10 flex h-full w-full flex-col justify-between p-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/github-mark-white.svg"}
              alt="GitHub"
              width={20}
              height={20}
            />
            <h1 className="text-sm">Community-built open source</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src={"/Logo.svg"}
                alt="GitHub"
                width={20}
                height={20}
                className=""
              />
              <h1 className="text-sm">Muse</h1>
            </div>
            <div className="flex items-center">
              <p className="text-xs">
                Supercharge Your Next.js Workflow: Build Faster, Collaborate
                seamlessly.
              </p>
            </div>
          </div>
          <Icons.ArrowUpRight className="bg-deep border-grey/50 absolute bottom-3 right-2 h-6 w-6 rounded-full border text-white" />
        </div>
      </Link>
      <Link href={"/docs"} className="text-indigo-accent flex items-center">
        Explore Documentation
        <Icons.ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
