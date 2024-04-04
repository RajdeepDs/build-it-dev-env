"use client";

import { updateUsername } from "@/actions/update-username";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ExtendedUser } from "../../../next-auth";

interface UserNameFormProps {
  user: ExtendedUser | undefined;
}

const formSchema = z.object({
  email: z.string().email("Invalid email address."),
  username: z.string().min(1, "Username cannot be empty."),
});

export default function UsernameForm({ user }: UserNameFormProps): JSX.Element {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user?.email || "",
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      updateUsername(user?.id || "", values.username).then((data) => {
        if (data?.error) {
          console.error(data.error);
        }
        if (data?.success) {
          console.log(data.success);
          route.push("/createworkspace");
        }
      });
    });
  }
  return (
    <div className="w-[329px]">
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
                    {...field}
                    autoComplete="off"
                    disabled
                    className="text-grey"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Username"
                    {...field}
                    autoComplete="off"
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
      >
        Continue
      </Button>
    </div>
  );
}
