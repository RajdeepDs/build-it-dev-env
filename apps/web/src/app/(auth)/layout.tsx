import { buttonVariants } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import { cn } from "@buildit/ui/utils";
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
          "absolute left-2 top-4 hidden sm:flex md:left-8 md:top-8",
        )}
      >
        <Icons.ChevronLeft className="h-4 w-4" />
        Home
      </Link>
      <div className="container min-h-screen">{children}</div>
    </div>
  );
}
