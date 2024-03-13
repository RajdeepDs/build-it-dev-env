"use server";

import { sendVerificationEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/tokens";
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

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return true;
};
