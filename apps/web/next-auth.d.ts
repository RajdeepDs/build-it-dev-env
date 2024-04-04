import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username: string | null;
  onboarding: boolean;
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
