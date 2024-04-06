"use server";

import { update } from "@/auth";
import { getUserById } from "@/data/auth/user";
import prisma from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "Your username cannot be empty."),
});

export const updateUsername = async (id: string, username: string) => {
  const validatedFields = formSchema.safeParse({ username });

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const existingUser = await getUserById(id);
  if (!existingUser) {
    return { error: "User does not exists!" };
  }

  const updatedUser = await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      username: username,
    },
  });

  update({
    user: {
      username: updatedUser.username,
    },
  });

  return { success: "Username updated!" };
};
