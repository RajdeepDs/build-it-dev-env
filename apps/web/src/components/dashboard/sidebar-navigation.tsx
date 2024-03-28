import SidebarItems from "@/components/dashboard/sidebar-items";
import { SidebarConfig } from "@/config/dashboard";
import { Button } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import Image from "next/image";

export default function SidebarNav(): JSX.Element {
  const items = SidebarConfig.sidebarNav;

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <Image src={"/WhiteLogo.svg"} width={20} height={21} alt="Logo" />
        <Button size="icon" variant="icon">
          <Icons.History className="text-grey h-5 w-5" />
        </Button>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="hover:bg-faded/50 flex cursor-pointer items-center gap-x-2 rounded p-1">
          <div className="bg-grey h-6 w-6 rounded-sm" />
          <h1>Muse</h1>
          <Icons.ChevronDown className="text-grey h-4 w-4" />
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            size="icon"
            variant="icon"
            className="group transition-colors duration-300 ease-in-out"
          >
            <Icons.Search className="text-grey h-4 w-4 group-hover:text-white" />
          </Button>
          <Button className="bg-faded/50" size="icon" variant="icon">
            <Icons.PanelsLeftBottom className="h-4 w-4 " />
          </Button>
        </div>
      </div>
      <SidebarItems items={items} />
      <div className="mt-5">
        <div className="flex items-center">
          <p className="text-grey text-sm font-light">Projects</p>
          <Icons.ChevronDown className="text-grey h-4 w-4" />
        </div>
        <div className="hover:bg-faded/50 w-full cursor-pointer rounded px-1 py-1 transition-colors duration-300 ease-in-out">
          <h1 className="">muse</h1>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center">
          <p className="text-grey text-sm font-light">Your teams</p>
          <Icons.ChevronDown className="text-grey h-4 w-4" />
        </div>
        <div className="hover:bg-faded/50 flex w-full cursor-pointer items-center gap-x-1 rounded px-1 py-1 transition-colors duration-300 ease-in-out">
          <Icons.Home className="h-5 w-5" />
          <h1 className="">Muse</h1>
          <Icons.ChevronDown className="text-grey h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
