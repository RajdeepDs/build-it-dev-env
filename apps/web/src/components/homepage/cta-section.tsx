import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Image from "next/image";

export default function CTASection(): JSX.Element {
  return (
    <div className="container relative flex items-center justify-center space-y-10 overflow-hidden py-14 text-center ">
      <Image
        src={"/dots.svg"}
        alt="Dots"
        width={960}
        height={970}
        className="absolute inset-0 -top-52 mx-auto"
      />
      <div className="relative z-20 flex flex-col items-center justify-center gap-8">
        <Image src="/LogoDark.svg" alt="Logo" width={60} height={60} />
        <div className="">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Start Building Today!
          </h1>
          <p className="">
            Sign Up for Your Free Muse Account and Experience a Streamlined
            Next.js Development Workflow.
          </p>
        </div>
        <div className="flex gap-4">
          <Button className="flex items-center">
            Create an account
            <Icons.ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
