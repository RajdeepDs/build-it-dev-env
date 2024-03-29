import SidebarNav from "@/components/dashboard/sidebar-navigation";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="bg-deep flex h-dvh">
      <aside className="w-[288px]">
        <SidebarNav />
      </aside>
      <main className="bg-deepFaded w-full">{children}</main>
    </div>
  );
}
