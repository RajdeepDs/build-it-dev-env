"use server";

import { getPasswordResetTokenbyToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import * as z from "zod";

const formSchema = z.object({
  password: z.string().min(8),
});

export const newPassword = async (
  values: z.infer<typeof formSchema>,
  token?: string | null,
) => {
  if (!token) {
    return {
      error: "Missing Token!",
    };
  }
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenbyToken(token);

  if (!existingToken) {
    return {
      error: "Invalid Token!",
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return {
      error: "Token has expired!",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return {
      error: "User not found!",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma?.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });
  await prisma?.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Password updated!" };
};
