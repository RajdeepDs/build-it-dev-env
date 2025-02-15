import SidebarItems from "@/components/dashboard/sidebar-items";
import { SidebarConfig } from "@/config/dashboard";
import { Button } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import Link from "next/link";
import WorkspaceMenu from "./workspace-menu";

interface SidebarNavProp {
  workspace: {
    name: string;
    url: string;
  };
}

export default function SidebarNav({ workspace }: SidebarNavProp): JSX.Element {
  const items = SidebarConfig.sidebarNav;
  const workspacename = workspace.name;
  const workspacenameInitial = workspacename.charAt(0).toUpperCase();
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <WorkspaceMenu
          workspacename={workspacename}
          workspacenameInitial={workspacenameInitial}
        />
        <Button size="icon" variant="icon">
          <Icons.History className="text-grey h-5 w-5" />
        </Button>
      </div>
      <div className="mt-5 flex w-full items-center justify-between">
        <div className="flex w-full items-center gap-x-2">
          <Button className="bg-deepFaded w-full gap-x-2" asChild>
            <Link href={`/${workspace.url}`}>
              <Icons.Edit className="text-grey h-4 w-4" />
              <h1 className="">Editor</h1>
            </Link>
          </Button>
          <Button className="bg-deepFaded px-3 py-2">
            <Icons.Search className="text-grey h-4 w-4" />
          </Button>
        </div>
      </div>
      <SidebarItems items={items} />
      <h3 className="text-grey-deep mt-5 text-sm">Your team</h3>
      <div className="mt-3">
        <div className="hover:bg-deepFaded flex cursor-pointer items-center rounded px-[5px] py-[5px] transition-colors duration-300 ease-in-out">
          <Icons.UserPlus2 className="text-grey-deep mr-[14px] h-[18px] w-[18px]" />
          <h1 className="text-sm">Add member</h1>
        </div>
      </div>
      <div className="flex items-center justify-between rounded px-[5px] py-[5px] transition-colors duration-300 ease-in-out">
        <div className="flex items-center">
          <Icons.UsersRound className="text-grey-deep mr-[14px] h-[18px] w-[18px]" />
          <h1 className="text-sm">Members</h1>
        </div>
        <div className=" text-grey-deep mr-[5px] flex h-4 w-4 items-center justify-around rounded-sm text-center text-sm">
          3
        </div>
      </div>
      {/* TODO: Display all the team members with their respective avatar and their name */}
      <Button variant="icon" size="icon" className="absolute bottom-3">
        <Icons.HelpCircle className="text-grey h-5 w-5" />
      </Button>
    </div>
  );
}
