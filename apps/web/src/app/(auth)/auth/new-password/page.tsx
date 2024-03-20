import NewPasswordForm from "@/components/auth/new-password-form";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function NewPasswordPage() {
  return (
    <div className="mx-auto flex h-screen w-full flex-col justify-center gap-y-4 md:max-w-[450px]">
      <div className="flex flex-col gap-y-6 text-start">
        <Image src="/Logo.svg" width={35} height={35} alt="Muse Logo" />
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Enter a new password</h1>
          <p className="text-grey/70">
            Return to login?{" "}
            <Link href="/login" className="text-indigo-medium hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
      <Suspense>
        <NewPasswordForm />
      </Suspense>
    </div>
  );
}
