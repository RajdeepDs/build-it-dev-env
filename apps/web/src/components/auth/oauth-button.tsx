"use client";

import Image from "next/image";

import { Button } from "@muse/ui";

export function OauthButton({ type }: { type: string }): JSX.Element {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button
        variant="outline"
        className="text-grey w-full items-center gap-4 rounded-md text-sm font-light hover:text-white"
      >
        <Image
          src="/github-icon.svg"
          alt="github-icon"
          width={20}
          height={20}
        />
        {type} with GitHub
      </Button>
      <Button
        variant="outline"
        className="text-grey w-full items-center gap-4 rounded-md text-sm font-light hover:text-white"
      >
        <Image
          src="/google-icon.svg"
          alt="google-icon"
          width={20}
          height={20}
        />
        {type} with Google
      </Button>
    </div>
  );
}
