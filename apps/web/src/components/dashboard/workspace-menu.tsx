"use client";

import { logout } from "@/actions/auth/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import Link from "next/link";

interface WorkspaceMenuProps {
  workspacename: string;
  workspacenameInitial: string;
}

export default function WorkspaceMenu({
  workspacename,
  workspacenameInitial,
}: WorkspaceMenuProps): JSX.Element {
  const onclick = () => {
    logout();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="hover:bg-deepFaded flex cursor-pointer items-center gap-x-2 rounded p-1">
          <div className="bg-indigo-light h-6 w-6 rounded-sm text-center">
            {workspacenameInitial}
          </div>
          <h1>{workspacename}</h1>
          <Icons.ChevronDown className="text-grey h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-3">
        <DropdownMenuItem asChild>
          <Link href="/settings/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/settings/general">Workspace settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings/members">Invite and manage members</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onclick}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
