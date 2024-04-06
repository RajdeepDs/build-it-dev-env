import HeaderTitle from "@/components/settings/header-title";
import WorkspaceForm from "@/components/settings/workspace-form";
import { getWorkspace } from "@/data/workspace/get-workspace";
import { Button, Separator } from "@buildit/ui";
import * as React from "react";

export default async function GeneralPage(): Promise<JSX.Element> {
  const workspace = await getWorkspace();
  if (!workspace) return <></>;
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle
        title="Workspace"
        description="Manage your workspace settings"
      />
      <Separator className="bg-grey-deep/50 my-5" />
      {/* TODO: Add Logo */}
      <WorkspaceForm workspace={workspace} />
      <Separator className="bg-grey-deep/50 my-5" />
      <div className="flex flex-col items-start">
        <h2 className="">Delete workspace</h2>
        <p className=" text-grey mt-1 text-sm">
          If you want to permanently delete this workspace and all of its data.
        </p>
        <Button variant="destructive" className="mt-5">
          Delete
        </Button>
      </div>
    </div>
  );
}
