"use client";

import updateOnboarding from "@/actions/update-onboarding";
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

interface WorkspaceNameFormProps {
  id: string | undefined;
}

const formSchema = z.object({
  workspacename: z.string().min(1, "Workspace name cannot be empty."),
});

export default function WorkspaceNameForm({
  id,
}: WorkspaceNameFormProps): JSX.Element {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspacename: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      updateOnboarding({ id }).then((data) => {
        if (data?.error) {
          console.error(data.error);
        }
        if (data?.success) {
          console.log(data.success);
          route.push("/dashboard");
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
            name="workspacename"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Workspace Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter workspace name"
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
        type="submit"
        className="text-md mt-4 w-full rounded-md"
        variant="default"
        onClick={form.handleSubmit(onSubmit)}
      >
        Create workspace
      </Button>
    </div>
  );
}
