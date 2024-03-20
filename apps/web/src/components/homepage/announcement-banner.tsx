import { Separator } from "@muse/ui";
import { Icons } from "@muse/ui/icons";
import Link from "next/link";

export default function AnnouncementBanner(): JSX.Element {
  const announcement: string =
    "Introducing Muse, an open source development environment.";

  return (
    <div className="container">
      <div className="bg-banner text-indigo-soft flex min-h-[30px] items-center rounded-md px-2 py-1 align-middle">
        <Link
          href="/docs"
          className="flex w-full items-center justify-center sm:justify-between "
        >
          <div className="flex items-center gap-x-2">
            <Icons.Bell className="hidden h-[14px] w-[14px] md:block" />
            <Separator
              orientation="vertical"
              className="hidden h-[10px] md:block"
            />
            <p className="text-sm font-thin">{announcement}</p>
          </div>
          <p className="text-grey-muted hover:text-indigo-soft hidden text-sm font-normal transition-colors duration-300 ease-out sm:flex">
            Learn more
          </p>
        </Link>
      </div>
    </div>
  );
}
