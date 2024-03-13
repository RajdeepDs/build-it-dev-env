"use client";

import { login } from "@/actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@muse/ui";
import * as Icons from "@muse/ui/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function UserLoginForm(): JSX.Element {
  const serachParams = useSearchParams();
  const urlError =
    serachParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      login(values.email, values.password).then((data) => {
        if (data?.error) {
          console.log(data.error);
        } else {
          console.log("Confirmation email sent!");
        }
      });
    });
  }
  return (
    <div className="w-full">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    <Link href="/forgot-password" className="text-sm">
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
            {urlError && (
              <FormMessage className="flex items-center justify-center">
                <Icons.AlertTriangle className="mr-1 h-4 w-4" />
                {urlError}
              </FormMessage>
            )}
            <Button
              type="submit"
              className="text-md w-full rounded-md"
              variant="default"
            >
              Continue
              <Icons.ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
