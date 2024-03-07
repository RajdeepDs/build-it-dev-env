import * as Icons from "@muse/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection(): JSX.Element {
  return (
    <div className="container flex flex-col justify-between md:flex-row">
      <div className="flex justify-between md:flex-col">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.svg" alt="Logo" width={25} height={25} />
          <h1>Muse</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com/Rajdeep__ds">
            <Icons.Twitter className="fill-grey h-5 w-5 cursor-pointer stroke-none" />
          </Link>
          <Link href="https://github.com/RajdeepDs">
            <Image
              src="/github-icon.svg"
              alt="Github"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-10 md:mt-0 md:grid-cols-6 md:gap-0">
        <div className="md:col-start-2">
          <ul className="flex flex-col gap-2">
            <li className="text-lg">Features</li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Workspace
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Collaboration
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Deployment
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Integrations
            </li>
          </ul>
        </div>
        <div className="md:col-start-4">
          <ul className="flex flex-col gap-2">
            <li className="text-lg">Product</li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Blog
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Changelog
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Pricing
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              GitHub
            </li>
          </ul>
        </div>
        <div className="md:col-start-6">
          <ul className="flex flex-col gap-2">
            <li className="text-lg">Resources</li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Privacy policy
            </li>
            <li className="text-grey/50 hover:text-grey w-fit cursor-pointer font-extralight">
              Terms of service
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
