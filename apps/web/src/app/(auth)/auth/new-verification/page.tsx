import NewVerificationForm from "@/components/auth/new-verification-form";
import { Suspense } from "react";

export default function NewVerificationPage(): JSX.Element {
  return (
    <div>
      <h1>New Verification Page</h1>
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
}
