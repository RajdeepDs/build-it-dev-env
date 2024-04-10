import Image from "next/image";
import Link from "next/link";

export default function AuthErrorPage(): JSX.Element {
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-y-4 md:max-w-[450px]">
      <div className="flex flex-col gap-y-6 text-center">
        <Image
          src="/WhiteLogo.svg"
          width={35}
          height={35}
          alt="Logo"
          className="mx-auto flex items-center "
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Authentication Error</h1>
          <p className="text-sm text-red-500">Oops! Something went wrong!</p>
          <p className="text-grey/70 mt-5">
            Return to login?{" "}
            <Link href="/login" className="text-indigo-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
