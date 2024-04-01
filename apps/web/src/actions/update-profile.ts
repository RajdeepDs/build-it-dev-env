"use server";

import { update } from "@/auth";
import { getUserById } from "@/data/user";
import prisma from "@/lib/prisma";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Your full name cannot be empty."),
  username: z.string().min(1, "Your username cannot be empty."),
});

export const updateProfile = async (
  id: string,
  name: string,
  username: string,
) => {
  const validatedFields = formSchema.safeParse({ name, username });

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
      name: name,
      username: username,
    },
  });

  update({
    user: {
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
    },
  });

  return { success: "Profile updated!" };
};
