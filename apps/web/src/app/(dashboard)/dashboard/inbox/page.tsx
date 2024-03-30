import { Separator } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox | Dashboard",
};
export default function InboxPage(): JSX.Element {
  return (
    <div className="flex h-full">
      <aside className="border-grey-deep h-full w-1/4 border-r">
        <nav className="flex items-center justify-between px-3 py-2">
          <h1 className="text-xl">Inbox</h1>
          <Icons.ListFilter className="text-grey h-5 w-5" />
        </nav>
        <Separator />
        <div className="">{/* TODO: Add the messages */}</div>
      </aside>
    </div>
  );
}
