"use client";

import { newVerification } from "@/actions/auth/new-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

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
        if (data.success) {
          setSuccess(data.success);
          setError(undefined);
          toast.success("Email verified!");
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <div className="text-center">
      {!error && !success && <p className="">Loading....</p>}
      {!success && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}
