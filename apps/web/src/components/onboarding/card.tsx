"use client";

import updateOnboarding from "@/actions/update-onboarding";
import { Button } from "@buildit/ui";
import { startTransition } from "react";

export default function Card({ user }: any): JSX.Element {
  function onContinue() {
    startTransition(() => {
      updateOnboarding({ id: user.id }).then((data) => {
        if (data?.error) {
          console.error(data.error);
        }
        if (data?.success) {
          console.log(data.success);
        }
      });
    });
  }
  return (
    <div>
      <h1>Create a new workspace</h1>
      <Button onClick={() => onContinue()}>Continue</Button>
    </div>
  );
}
