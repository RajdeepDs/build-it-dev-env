"use client";

import { newPassword } from "@/actions/auth/new-password";
import { NewPasswordFormSchema } from "@/schemas";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@buildit/ui";
import { Icons } from "@buildit/ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export default function NewPasswordForm(): JSX.Element {
  const route = useRouter();
  const searchParam = useSearchParams();
  const token = searchParam.get("token");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof NewPasswordFormSchema>>({
    resolver: zodResolver(NewPasswordFormSchema),
    defaultValues: {
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof NewPasswordFormSchema>) {
    setIsLoading(true);
    startTransition(() => {
      newPassword(values, token).then((result) => {
        if (result.error) {
          toast.error(result.error);
        }
        if (result.success) {
          toast.success("Password updated successfully!");
          route.push("/login");
        }
      });
    });
    setIsLoading(false);
  }
  return (
    <div className="w-full">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your new password"
                      {...field}
                      autoComplete="off"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button
          className="text-md mt-4 w-full rounded-md"
          variant="form"
          onClick={form.handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading && <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Reset Password
          <Icons.ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
