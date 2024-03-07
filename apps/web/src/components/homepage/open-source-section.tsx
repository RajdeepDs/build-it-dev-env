import { Button } from "@muse/ui";
import Image from "next/image";
import Link from "next/link";

export default function OpenSourceSection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center space-y-10 py-14">
      <div className="flex flex-col space-y-5">
        <h1 className="bg-gradient-to-br from-white from-25% to-white/70 to-75% bg-clip-text text-center text-3xl font-bold leading-tight text-transparent md:text-6xl">
          Proudly open-source
        </h1>
        <p className="text-grey/60 text-center text-lg font-light md:text-xl">
          Our source code is available on GitHub - feel free to read, review, or
          <br className="hidden md:block" /> contribute to it however you want!
        </p>
      </div>
      <Link href="https://github.com/RajdeepDs/Muse">
        <Button className="w-fit gap-2" variant="secondary">
          <Image
            src="/github-mark-white.svg"
            width={24}
            height={24}
            alt="Github"
          />
          GitHub
        </Button>
      </Link>
    </div>
  );
}
