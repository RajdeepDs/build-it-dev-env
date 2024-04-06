"use server";

import { getUserByEmail } from "@/data/auth/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

export const reset = async (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.parse(values);

  if (!validatedFields) {
    return { error: "Invalid email" };
  }

  const email = validatedFields.email;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  );

  return { success: "Email sent! Check you mail inbox." };
};
