import SidebarItems from "@/components/settings/sidebar-items";
import { SidebarConfig } from "@/config/dashboard";
import { Button } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import Link from "next/link";

export default function SidebarNav(): JSX.Element {
  const workspaceItems = SidebarConfig.settingsWorkspaceSidebarNav;
  const myProfileItems = SidebarConfig.settingsProfileSidebarNav;

  return (
    <div className="p-3">
      <Link href="/dashboard" className="flex items-center gap-x-2">
        <Icons.ChevronLeft className="text-grey h-6 w-6" />
        <h2 className="">Settings</h2>
      </Link>
      <div className="mt-5">
        <div className="flex items-center gap-x-2">
          <Icons.Building2 className="text-grey-deep m-1 h-4 w-4" />
          <h2 className="text-grey-deep text-sm">Workspace</h2>
        </div>
      </div>
      <SidebarItems items={workspaceItems} />
      <div className="mt-5">
        <div className="flex items-center gap-x-2">
          <Icons.UserCircle2 className="text-grey-deep m-1 h-4 w-4" />
          <h2 className="text-grey-deep text-sm">My Profile</h2>
        </div>
      </div>
      <SidebarItems items={myProfileItems} />
      <Button variant="icon" size="icon" className="absolute bottom-3">
        <Icons.HelpCircle className="text-grey h-5 w-5" />
      </Button>
    </div>
  );
}
