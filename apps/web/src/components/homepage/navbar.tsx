import { auth } from "@/auth";
import { Button } from "@muse/ui";
import { Session } from "next-auth/types";
import Image from "next/image";
import Link from "next/link";
import MobileNavMenu from "./mobile-nav-menu";
import { NavTabs } from "./nav-tabs";

export const navItems = [
  {
    name: "Documentations",
    slug: "docs",
  },
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Changelog",
    slug: "changelog",
  },
];

export default async function NavBar(): Promise<JSX.Element> {
  const session: Session | null = await auth();

  return (
    <div className="mx-auto flex h-full items-center justify-between md:container">
      <div className="flex items-center gap-5">
        <Link href="/homepage" className="flex items-center gap-2">
          <Image src="./word-logo.svg" alt="Muse" width={62} height={16} />
        </Link>
        <NavTabs />
        {navItems.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.slug}
            className="hidden space-x-5 md:flex"
          >
            <span className="text-indigo-soft text-sm font-normal hover:text-white">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <div className="gap-2 md:flex">
          {!session ? (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          ) : (
            <Link href="/dashboard">
              <Button size="sm">Dashboard</Button>
            </Link>
          )}
        </div>
        <MobileNavMenu session={session} />
      </div>
    </div>
  );
}
