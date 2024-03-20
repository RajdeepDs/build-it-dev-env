import { Separator } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection(): JSX.Element {
  return (
    <div className="container flex flex-col justify-between text-black md:flex-row">
      <div className="flex justify-between md:flex-col">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/LogoDark.svg" alt="Logo" width={25} height={25} />
          <h1 className="font-medium">Muse</h1>
        </Link>
        <div className="flex items-center gap-4">
          <p className="text-grey-deep hidden text-sm md:flex">
            rajdeepds626@gmail.com
          </p>
          <Separator
            orientation="vertical"
            className="hidden h-4 opacity-40 md:block"
          />
          <Link href="https://twitter.com/Rajdeep__ds">
            <Icons.Twitter className="fill-indigo-accent h-5 w-5 cursor-pointer stroke-none" />
          </Link>
          <Link href="https://github.com/RajdeepDs">
            <Icons.Github className="text-indigo-accent h-5 w-5 cursor-pointer stroke-none" />
          </Link>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 md:mt-0 md:grid-cols-6 md:gap-0">
        <div className="md:col-start-2">
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-medium">Features</li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Workspace
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Collaboration
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Deployment
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Integrations
            </li>
          </ul>
        </div>
        <div className="md:col-start-4">
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-medium">Product</li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Blog
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Changelog
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Pricing
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              GitHub
            </li>
          </ul>
        </div>
        <div className="md:col-start-6">
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-medium">Resources</li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Privacy policy
            </li>
            <li className="text-grey-deep w-fit cursor-pointer text-sm">
              Terms of service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
