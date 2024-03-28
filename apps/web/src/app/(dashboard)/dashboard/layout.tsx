import SidebarNav from "@/components/dashboard/sidebar-navigation";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-dvh">
      <aside className="bg-banner w-[288px]">
        <SidebarNav />
      </aside>
      <main>{children}</main>
    </div>
  );
}
