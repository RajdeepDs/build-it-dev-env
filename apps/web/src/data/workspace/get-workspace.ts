import prisma from "@/lib/prisma";

export const getWorkspace = async (userId: string) => {
  try {
    const workspace = await prisma.workspace.findFirst({
      where: {
        adminId: userId,
      },
    });
    return workspace;
  } catch {
    return null;
  }
};
