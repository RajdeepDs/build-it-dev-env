"use client";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

export function OauthButton({ type }: { type: string }): JSX.Element {
  const [isGithubLoading, setIsGithubLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const onClick = (provider: "github" | "google") => {
    if (provider === "github") {
      setIsGithubLoading(true);
    } else {
      setIsGoogleLoading(true);
    }
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <Button
        onClick={() => onClick("github")}
        variant="outline"
        disabled={isGithubLoading || isGoogleLoading}
        className="text-grey w-full items-center gap-4 rounded-md text-sm font-light hover:text-white"
      >
        {isGithubLoading ? (
          <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image
            src="/github-icon.svg"
            alt="github-icon"
            width={20}
            height={20}
          />
        )}
        {type} with GitHub
      </Button>
      <Button
        onClick={() => onClick("google")}
        variant="outline"
        disabled={isGithubLoading || isGoogleLoading}
        className="text-grey w-full items-center gap-4 rounded-md text-sm font-light hover:text-white"
      >
        {isGoogleLoading ? (
          <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Image
            src="/google-icon.svg"
            alt="google-icon"
            width={20}
            height={20}
          />
        )}
        {type} with Google
      </Button>
    </div>
  );
}
