"use client";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@muse/ui";
import { signIn } from "next-auth/react";
import Image from "next/image";

// import { useSearchParams } from "next/navigation";

export function OauthButton({ type }: { type: string }): JSX.Element {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "github" | "google") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button
        onClick={() => onClick("github")}
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
        onClick={() => onClick("google")}
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
