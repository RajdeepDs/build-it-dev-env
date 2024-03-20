import { Separator } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import Image from "next/image";
import Link from "next/link";
import FeatureCard from "../ui/feature-card";

export default function DashboardSection(): JSX.Element {
  return (
    <div className="mb-[113px] overflow-hidden">
      <section className="container flex max-w-[1220px] flex-col lg:flex-row">
        <div className="relative z-10 ml-5 flex-1 md:top-16 lg:left-0 lg:ml-0">
          <Link href={"/docs"} className="flex items-center gap-x-2">
            <Image
              src={"/logo-indigo.svg"}
              alt={"Muse Logo"}
              width={12}
              height={12}
            />
            <h2 className="text-indigo-light text-sm">Dashboard</h2>
            <Separator orientation="vertical" className="h-[10px]" />
            <h2 className="text-indigo-light text-sm">Muse</h2>
          </Link>
          <h1 className="mt-4 text-4xl font-bold md:whitespace-nowrap">
            Organize & Conquer.
            <div className="pb-1">Centralized Workspace Management.</div>
          </h1>
          <p className="text-grey-muted mt-2 text-base">
            Muse empowers you to create, manage, and switch between your Next.js
            projects seamlessly within a single, intuitive dashboard.
          </p>
          <Link
            href={"/docs"}
            className="text-indigo-light mt-5 flex items-center"
          >
            Explore dashboard
            <Icons.ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <div className="-ml-4 mr-8 mt-16 md:flex md:gap-6">
            <FeatureCard
              icon={"FolderGit2"}
              title="Effortless Project Sync"
              description="No need to switch between platforms! Connect your GitHub account and browse your existing repositories directly within the Muse dashboard."
            />
            <div className="mt-4 md:hidden" />
            <FeatureCard
              icon={"LayoutGrid"}
              title="Centralized management"
              description="Manage all your Next.js projects, both local and GitHub-connected, from a single, convenient location."
            />
          </div>
        </div>
        <div className="relative -mx-10 ml-1 flex-1 lg:left-5 lg:mx-0">
          <Image
            src={"/editor-mockup-fade.svg"}
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
