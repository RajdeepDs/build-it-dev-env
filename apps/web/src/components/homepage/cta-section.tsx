import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Image from "next/image";

export default function CTASection(): JSX.Element {
  return (
    <div className="container flex flex-col items-center space-y-10 py-14 text-center">
      <Image src="/Logo.svg" alt="Logo" width={60} height={60} />
      <h1 className="text-3xl font-bold leading-tight md:text-4xl">
        Start Building Today
        <br />
        Build your Next.js app with Muse
      </h1>
      <div className="flex gap-4">
        <Button className="flex items-center">
          Get started
          <Icons.ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" className="flex items-center">
          Read Docs
          <Icons.ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
