import { getCurrentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getWorkspace = async () => {
  const user = await getCurrentUser();

  try {
    const workspace = await prisma.workspace.findFirst({
      where: {
        adminId: user?.id,
      },
    });
    return workspace;
  } catch {
    return null;
  }
};
