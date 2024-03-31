"use client";

import { SidebarNavItem } from "@/types";
import { cn } from "@buildit/ui/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemsProps {
  items: SidebarNavItem[];
}
export default function SidebarItems({
  items,
}: SidebarItemsProps): JSX.Element {
  const path = usePathname();
  return (
    <div className="ml-7 mt-[10px]">
      {items.map((item) => {
        return (
          item.href && (
            <Link href={item.disabled ? "/dashboard" : item.href} key={item.id}>
              <span
                className={cn(
                  "flex items-center justify-between rounded px-[5px] py-[5px] transition-colors duration-300 ease-in-out",
                  path === item.href ? "bg-deepFaded" : "hover:bg-deepFaded",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <span className="text-sm">{item.title}</span>
                {item.count && (
                  <div className="bg-indigo-accent mr-[5px] flex h-4 w-4 items-center justify-around rounded-sm text-center text-sm">
                    {item.count}
                  </div>
                )}
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
