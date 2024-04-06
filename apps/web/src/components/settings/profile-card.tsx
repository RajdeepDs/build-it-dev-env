"use client";

import { ExtendedUser } from "@/../next-auth";
import { updateProfile } from "@/actions/user/update-profile";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
} from "@buildit/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, "Your full name cannot be empty."),
  userName: z.string().min(1, "Your username cannot be empty."),
});

interface ProfileCardProp {
  user: ExtendedUser;
}

export default function ProfileCard({ user }: ProfileCardProp): JSX.Element {
  const route = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: user.email || "",
      fullName: user.name || "",
      userName: user.username || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (user.name !== values.fullName || user.username !== values.userName) {
      startTransition(() => {
        updateProfile(user.id, values.fullName, values.userName).then(
          (data) => {
            if (data?.error) {
              form.reset();
              toast.error(data.error);
            }
            if (data?.success) {
              toast.success(data.success);
              route.refresh();
            }
          },
        );
      });
    }
  }

  return (
    <div className="border-grey-deep mt-5 rounded-lg border">
      <div className="bg-grey-deep/10 flex w-full flex-col items-center rounded-t-md p-3">
        <h2 className="flex w-full items-start">Profile</h2>
        <div className="bg-grey-deep/30 mb-3 flex h-28 w-28 rounded-full text-center" />
      </div>
      <Form {...form}>
        <form
          className="mt-3 space-y-2 p-3"
          onBlur={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0">
                <div className="flex flex-col gap-y-1">
                  <FormLabel className="font-normal">Email</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl className="text-grey-deep w-[288px]">
                  <Input
                    placeholder="email"
                    autoComplete="off"
                    disabled
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="bg-grey-deep/50" />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0">
                <div className="flex flex-col gap-y-1">
                  <FormLabel className="font-normal">Full name</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl className="w-[288px]">
                  <Input
                    placeholder="full name"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="bg-grey-deep/50" />
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem className="flex items-center justify-between space-y-0">
                <div className="flex flex-col gap-y-1">
                  <FormLabel className="font-normal">Username</FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl className="w-[288px]">
                  <Input placeholder="username" autoComplete="off" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
