import HeaderTitle from "@/components/settings/header-title";
import { Separator } from "@buildit/ui";
import * as React from "react";

export default function BillingPage(): JSX.Element {
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle
        title="Billing"
        description="Manage your billing information and invoices"
      />
      <Separator className="bg-grey-deep/50 my-5" />
    </div>
  );
}
