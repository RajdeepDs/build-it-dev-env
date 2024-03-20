import { Button } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import Image from "next/image";

export default function CTASection(): JSX.Element {
  return (
    <section className="container flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-x-2">
          <Image src="/LogoDark.svg" alt="Logo" width={30} height={30} />
          <h1 className="text-xl font-medium">Muse</h1>
        </div>
        <div className="mt-7">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            Start Building Today!
          </h1>
          <p className="text-grey-deep mt-3">
            Sign Up for Your Free Muse Account and Experience a <br />
            Streamlined Next.js Development Workflow.
          </p>
        </div>
        <div className="mt-8">
          <Button className="flex items-center">
            Create an account
            <Icons.ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="pb-28" />
    </section>
  );
}
