"use server";

import { getWorkspace } from "@/data/workspace/get-workspace";
import prisma from "@/lib/prisma";
import { z } from "zod";

const UpdateWorkspaceSchema = z.object({
  workspaceName: z.string().min(3, "Workspace name cannot be empty."),
  workspaceURL: z.string().min(3, "Workspace URL must be a valid URL."),
});

export default async function updateWorkspace({
  userId,
  workspaceName,
  workspaceURL,
}: {
  userId: string;
  workspaceName: string;
  workspaceURL: string;
}) {
  const validatedFields = UpdateWorkspaceSchema.parse({
    workspaceName,
    workspaceURL,
  });

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const existingWorkspace = await getWorkspace(userId);
  if (!existingWorkspace) {
    return { error: "Workspace not found!" };
  }

  try {
    await prisma.workspace.update({
      where: {
        id: existingWorkspace.id,
      },
      data: {
        name: workspaceName,
        url: workspaceURL,
      },
    });
    return { success: "Workspace updated!" };
  } catch {
    return null;
  }
}
