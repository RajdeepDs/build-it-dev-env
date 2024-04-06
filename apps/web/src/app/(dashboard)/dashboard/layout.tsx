import SidebarNav from "@/components/dashboard/sidebar-navigation";
import { getWorkspace } from "@/data/workspace/get-workspace";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const workspace = await getWorkspace();
  if (!workspace) return <div>Loading...</div>;
  return (
    <div className="bg-deep flex h-dvh">
      <aside className="border-grey-deep w-[288px] border-r">
        <SidebarNav workspace={workspace} />
      </aside>
      <main className="bg-deepFaded h-dvh w-full">{children}</main>
    </div>
  );
}
