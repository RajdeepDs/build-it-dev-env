import HeaderTitle from "@/components/settings/header-title";
import { Separator } from "@buildit/ui";
import * as React from "react";

export default function NotificationPage(): JSX.Element {
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle
        title="Notifications"
        description="Select where and when you'll be notified"
      />
      <Separator className="bg-grey-deep/50 my-5" />
    </div>
  );
}
