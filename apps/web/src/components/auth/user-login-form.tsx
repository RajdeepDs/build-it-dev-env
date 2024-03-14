"use client";

import { login } from "@/actions/login";
import { LoginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export default function UserLoginForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);

  const serachParams = useSearchParams();

  const urlError =
    serachParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  useEffect(() => {
    if (urlError) {
      toast.error(urlError);
    }
  }, [urlError]);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    setIsLoading(true);
    startTransition(() => {
      login(values.email, values.password, values.pin ?? "")
        .then((data) => {
          if (data?.error) {
            form.reset();
            toast.error(data.error);
          }
          if (data?.success) {
            form.reset();
            toast.success(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => toast.error("Something went wrong!"));
    });
    setIsLoading(false);
  }
  return (
    <div className="w-full">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Two Factor Code</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        render={({ slots }) => (
                          <InputOTPGroup>
                            {slots.map((slot, index) => (
                              <InputOTPSlot key={index} {...slot} />
                            ))}{" "}
                          </InputOTPGroup>
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Please enter the two factor code sent to your email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/auth/reset"
                          className="text-grey/50 hover:text-grey text-sm underline-offset-1 transition-all duration-150 ease-in hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <Button
              type="submit"
              className="text-md w-full rounded-md"
              variant="form"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Continue
              <Icons.ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
