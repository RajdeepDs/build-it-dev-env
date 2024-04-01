import HeaderTitle from "@/components/settings/header-title";
import { Separator } from "@buildit/ui";
import * as React from "react";

export default function MembersPage(): JSX.Element {
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle
        title="Members"
        description="Manage who has access to this workspace"
      />
      <Separator className="bg-grey-deep/50 my-5" />

      <div className="flex flex-col items-start">
        <h2 className="">Manage members</h2>
        <p className=" text-grey mt-1 text-sm">
          Invite members to your workspace and manage their roles.
        </p>
      </div>
    </div>
  );
}
