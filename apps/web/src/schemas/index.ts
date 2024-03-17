import * as z from "zod";

export const RegisterFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  pin: z.optional(
    z.string().min(6, {
      message: "Your two factor code must be 6 characters.",
    }),
  ),
});

export const NewPasswordFormSchema = z.object({
  password: z.string().min(8),
});

export const ResetFormSchema = z.object({
  email: z.string().email(),
});
