"use server";

import { sendVerificationEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";
import { generateVerificationToken } from "@/lib/tokens";
import { RegisterFormSchema } from "@/schemas";
import bcrypt from "bcrypt";

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const validatedFields = RegisterFormSchema.parse({
    name,
    email,
    password,
  });

  if (!validatedFields) {
    return { error: "Invalid fields!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "User already exists!" };
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
