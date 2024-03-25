"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@buildit/ui";
import { cn } from "@buildit/ui/utils";
import Image from "next/image";
import React from "react";

export function NavTabs() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-indigo-soft">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white/5 to-white/10 p-6 no-underline outline-none transition-colors duration-300 ease-in-out hover:bg-white/5 focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 flex flex-col gap-2 text-lg font-medium">
                      <Image
                        src="/WhiteLogo.svg"
                        width={25}
                        height={25}
                        alt="logo"
                      />
                      BuildIt
                    </div>
                    <p className="text-sm font-light leading-tight text-white/70">
                      Elevate Your Next.js Development Experience
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Development Environment">
                Intuitive code editor with syntax highlighting and
                autocompletion.
              </ListItem>
              <ListItem href="/docs" title="Collaboration">
                Real-time code editing for simultaneous collaboration.
              </ListItem>
              <ListItem href="/docs" title="Deployments">
                One-click deployment to Vercel.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-grey/10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-150 ease-in",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none tracking-wider">
            {title}
          </div>
          <p className="line-clamp-2 text-sm font-light leading-snug text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
