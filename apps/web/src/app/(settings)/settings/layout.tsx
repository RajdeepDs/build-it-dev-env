import SidebarNav from "@/components/settings/sidebar-navigations";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "BuildIt settings page",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="bg-deep flex h-dvh">
      <aside className="border-grey-deep w-[288px] border-r">
        <SidebarNav />
      </aside>
      <main className="bg-deepFaded h-dvh w-full">{children}</main>
    </div>
  );
}
