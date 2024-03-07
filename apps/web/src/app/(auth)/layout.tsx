import { buttonVariants } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import { cn } from "@muse/ui/utils";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Link
        href="/homepage"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-2 top-4 md:left-8 md:top-8",
        )}
      >
        <Icons.ChevronLeft className="h-4 w-4" />
        Home
      </Link>
      <div className="container min-h-screen">{children}</div>
    </div>
  );
}
