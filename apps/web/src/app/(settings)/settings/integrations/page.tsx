import HeaderTitle from "@/components/settings/header-title";
import { Separator } from "@buildit/ui";
import * as React from "react";

export default function IntegrationsPage(): JSX.Element {
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle
        title="Integrations"
        description="Enhance your Buildit experience with integrations"
      />
      <Separator className="bg-grey-deep/50 my-5" />
    </div>
  );
}
