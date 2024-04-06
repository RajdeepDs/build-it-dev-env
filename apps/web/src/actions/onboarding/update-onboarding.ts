"use server";

import { update } from "@/auth";
import { getUserById } from "@/data/user";
import prisma from "@/lib/prisma";

export default async function updateOnboarding({ id }: any) {
  const existingUser = await getUserById(id);
  if (!existingUser) {
    return { error: "User does not exists!" };
  }

  const updatedUser = await prisma.user.update({
    where: { id: existingUser.id },
    data: {
      onboarding: true,
    },
  });

  update({
    user: {
      onboarding: !!updatedUser.onboarding,
    },
  });
  return { success: "Onboarding updated!" };
}
