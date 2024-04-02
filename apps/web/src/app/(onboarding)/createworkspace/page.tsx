import Card from "@/components/onboarding/card";
import { getCurrentUser } from "@/lib/auth";

export default async function CreateWorkspacePage(): Promise<JSX.Element> {
  const user = await getCurrentUser();
  return (
    <div>
      <Card user={user} />
    </div>
  );
}
