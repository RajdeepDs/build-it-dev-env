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
  settingsWorkspaceSidebarNav: [
    {
      id: 1,
      title: "General",
      href: "/settings/general",
    },
    {
      id: 2,
      title: "Members",
      href: "/settings/members",
    },
    {
      id: 3,
      title: "Plans",
      href: "/settings/plans",
    },
    {
      id: 4,
      title: "Billing",
      href: "/settings/billing",
    },
    {
      id: 5,
      title: "Integrations",
      href: "/settings/integrations",
    },
  ],
  settingsProfileSidebarNav: [
    {
      id: 1,
      title: "Profile",
      href: "/settings/profile",
    },
    {
      id: 2,
      title: "Preferences",
      href: "/settings/preferences",
    },
    {
      id: 3,
      title: "Notifications",
      href: "/settings/notification",
    },
    {
      id: 4,
      title: "Security & Access",
      href: "/settings/security",
    },
  ],
};
