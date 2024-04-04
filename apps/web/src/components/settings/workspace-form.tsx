"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  workspaceName: z.string().min(1, "Workspace name cannot be empty."),
  workspaceURL: z.string().min(7, "Workspace URL must be a valid URL."),
});

export default function WorkspaceForm(): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspaceName: "",
      workspaceURL: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col">
      <h2 className="w-full items-start">General</h2>
      <Form {...form}>
        <form className="mt-5 space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="workspaceName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Workspace name</FormLabel>
                <FormControl className="w-[288px]">
                  <Input placeholder="" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="workspaceURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">Workspace URL</FormLabel>
                <FormControl className="w-[288px]">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="border-grey/20 bg-deep/60 ring-indigo flex h-10 w-full items-center rounded-md border px-3 py-2 text-sm has-[:focus-visible]:ring-2">
                      <span className="text-grey">buildit.codes/</span>
                      <input
                        className="w-full bg-transparent focus-visible:outline-none"
                        type="text"
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Button
        className="mt-5 w-fit"
        variant="form"
        onClick={form.handleSubmit(onSubmit)}
      >
        Submit{" "}
      </Button>
    </div>
  );
}
