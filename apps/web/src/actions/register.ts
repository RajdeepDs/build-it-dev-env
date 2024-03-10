"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return "User already exists";
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  //   TODO: Send verification token to user's email

  return true;
};
