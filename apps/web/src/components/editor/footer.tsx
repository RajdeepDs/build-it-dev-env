import { Button } from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";

export default function Footer(): JSX.Element {
  return (
    <div className="flex h-full items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Button variant="icon" size="smIcon">
          <Icons.Folder className="h-4 w-4" />
        </Button>
        {/* <Icons.UsersRound className="h-5 w-5" /> */}
      </div>
      <div className="flex items-center gap-x-3">
        <Icons.TerminalSquare className="h-5 w-5" />
        <Icons.MessagesSquare className="h-5 w-5" />
        <Icons.Bell className="h-5 w-5" />
      </div>
    </div>
  );
}
