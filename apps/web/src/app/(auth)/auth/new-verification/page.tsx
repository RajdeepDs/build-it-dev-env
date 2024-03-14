import NewVerificationForm from "@/components/auth/new-verification-form";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function NewVerificationPage(): JSX.Element {
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-y-4 md:max-w-[450px]">
      <div className="flex flex-col gap-y-6 text-center">
        <Image
          src="/Logo.svg"
          width={35}
          height={35}
          alt="Muse Logo"
          className="mx-auto flex items-center "
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Confirm your Verification</h1>
          <p className="text-grey/70">
            Return to login?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-500 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
}
