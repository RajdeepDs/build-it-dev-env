import UsernameForm from "@/components/onboarding/username-form";
import { getCurrentUser } from "@/lib/auth";
import Image from "next/image";

export default async function WelcomePage(): Promise<JSX.Element> {
  const user = await getCurrentUser();
  return (
    <div className="grid grid-cols-2">
      <div className="h-dvh w-full">
        <div className="flex h-full w-full items-center justify-around">
          <div className="flex flex-col">
            <h1 className="mb-10 text-start text-4xl font-medium">
              Unlock your potential with <br /> a powerful username
            </h1>
            <UsernameForm user={user} />
          </div>
        </div>
      </div>
      <div className="h-dvh w-full">
        <div className="flex h-full w-full items-center justify-around">
          <div className="from-indigo-light to-indigo-accent flex  h-[673px] w-[546px] flex-col items-center justify-center rounded-2xl bg-gradient-to-br">
            <Image src="/BlackLogo.svg" alt="Logo" width={90} height={100} />
            <h1 className="mt-2 text-3xl font-medium">BuildIt</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
