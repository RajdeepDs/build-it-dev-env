import type { Icon } from "@buildit/ui/icons";

export type SidebarNavItem = {
  id: number;
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: [];
    }
);

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}
