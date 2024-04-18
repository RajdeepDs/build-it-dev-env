"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { ExtendedUser } from "../../../next-auth";

interface NavProps {
  user: Pick<ExtendedUser, "image">;
}
export default function Nav({ user }: NavProps): JSX.Element {
  const workspace_url = useParams().url;
  return (
    <div className="flex h-full items-center justify-between">
      <div className="flex items-center gap-5">
        <h1>{workspace_url}</h1>
        <h2 className="text-sm text-gray-300">main</h2>
      </div>
      {user.image ? (
        <Image
          src={user.image}
          width={20}
          height={20}
          alt="user"
          className="rounded-full"
        />
      ) : (
        <div className="h-[20px] w-[20px] rounded-full bg-gray-300" />
      )}
    </div>
  );
}
