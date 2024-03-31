import HeaderTitle from "@/components/settings/header-title";
import ProfileCard from "@/components/settings/profile-card";
import { getCurrentUser } from "@/lib/auth";

export default async function ProfilePage(): Promise<JSX.Element> {
  const user = await getCurrentUser();
  if (!user) {
    return <></>;
  }
  return (
    <div className="mx-auto h-full w-2/5  py-14">
      <HeaderTitle title="Profile" description="Manage your BuildIt profile" />
      <ProfileCard user={user} />
    </div>
  );
}
