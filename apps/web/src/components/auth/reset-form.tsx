"use client";

import { reset } from "@/actions/reset";
import { ResetFormSchema } from "@/schemas";
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
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export default function ResetForm(): JSX.Element {
  const route = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ResetFormSchema>>({
    resolver: zodResolver(ResetFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof ResetFormSchema>) {
    setIsLoading(true);
    startTransition(() => {
      reset(values).then((result) => {
        if (result.success) {
          toast.success(result.success);
          route.push("/login");
        } else {
          toast.error(result.error);
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
            <Button
              type="submit"
              className="text-md w-full rounded-md"
              variant="form"
              disabled={isLoading}
            >
              {isLoading && (
                <Icons.Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Send Reset Email
              <Icons.ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
