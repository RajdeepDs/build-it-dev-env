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
                  "flex items-center rounded px-2 py-1 transition-colors duration-300 ease-in-out",
                  path === item.href ? "bg-faded/50" : "hover:bg-faded/50",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-3 h-4 w-4" />
                <span className="text-sm">{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </div>
  );
}
