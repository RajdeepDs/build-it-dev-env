import HeaderTitle from "@/components/settings/header-title";
import { getCurrentUser } from "@/lib/auth";
import { Button, Input, Separator } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import Image from "next/image";
import * as React from "react";

export default async function MembersPage(): Promise<JSX.Element> {
  const user = await getCurrentUser();
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
      <div className="mt-5 flex w-full items-center justify-between">
        <form action="" className="w-1/2">
          <div className="relative">
            <Icons.Search className="text-grey-deep absolute left-2 top-3 h-4 w-4" />
            <Input placeholder="Search members" className="pl-8" />
          </div>
        </form>
        <Button className="text-sm">Invite members</Button>
      </div>
      <p className="mt-5 text-sm">1 member</p>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {user?.image ? (
            <Image
              src={user.image}
              alt="profile image"
              className="rounded-full"
              width={32}
              height={32}
            />
          ) : (
            <div className="bg-grey-deep/30 mb-3 flex h-8 w-8 items-center justify-center rounded-full text-center">
              <span className="text-2xl">{user?.name?.charAt(0)}</span>
            </div>
          )}
          <div className="flex flex-col items-start">
            <h1 className="text-sm">{user?.name}</h1>
            <p className="text-grey-muted text-sm">{user?.email}</p>
          </div>
        </div>
        <p className="text-sm">Admin</p>
        <Button
          className="hover:bg-deep/40"
          variant="icon"
          size="icon"
          disabled
        >
          <Icons.MoreHorizontal className="text-grey-deep h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
