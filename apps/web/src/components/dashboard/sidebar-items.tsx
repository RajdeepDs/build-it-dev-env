"use client";

import { SidebarNavItem } from "@/types";
import { Icons } from "@buildit/ui/icons";
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
    <div className="mt-5">
      {items.map((item) => {
        const Icon = Icons[(item.icon as keyof typeof Icons) || "ChevronRight"];
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
                <div className="flex items-center">
                  <Icon className="text-grey-deep mr-[14px] h-[18px] w-[18px]" />
                  <span>{item.title}</span>
                </div>
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
