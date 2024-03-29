import { DashboardConfig } from "@/types";

export const SidebarConfig: DashboardConfig = {
  sidebarNav: [
    {
      id: 1,
      title: "Inbox",
      icon: "Inbox",
      href: "/dashboard/inbox",
      count: 4,
    },
    {
      id: 2,
      title: "Tasks",
      icon: "ListTodo",
      href: "/dashboard/tasks",
    },
    {
      id: 3,
      title: "Documents",
      icon: "FileText",
      href: "/dashboard/documents",
    },
  ],
};
