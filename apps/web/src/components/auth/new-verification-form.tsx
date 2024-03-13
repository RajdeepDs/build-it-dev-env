"use client";

import { newVerification } from "@/actions/new-verification";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function NewVerificationForm(): JSX.Element {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div>
      <h1>Confirm your Verification</h1>
      {!error && !success && <p className="">Loading....</p>}
      {!success && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <Link href="/login">Back to login</Link>
    </div>
  );
}
