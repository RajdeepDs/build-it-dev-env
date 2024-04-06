"use server";

import { getUserById } from "@/data/auth/user";
import prisma from "@/lib/prisma";
import * as z from "zod";

const CreateWorkspaceSchema = z.object({
  id: z.string(),
  workspaceName: z.string().min(3),
});

export default async function createWorkspace({
  id,
  workspaceName,
}: {
  id: string | undefined;
  workspaceName: string;
}) {
  const validatedFields = CreateWorkspaceSchema.parse({
    id,
    workspaceName,
  });

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  if (typeof id === "undefined") {
    return { error: "Invalid user ID!" };
  }

  const existingUser = await getUserById(id);
  if (!existingUser) {
    return { error: "User does not exist!" };
  }
  try {
    await prisma.workspace.create({
      data: {
        name: workspaceName,
        url: workspaceName.toLowerCase().replace(/\s/g, "-"),
        adminId: existingUser.id,
      },
    });
    return { success: "Workspace created!" };
  } catch (e) {
    return { error: "Failed to create workspace!" };
  }
}
