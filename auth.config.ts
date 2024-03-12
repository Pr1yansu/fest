import bcrypt from "bcrypt";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import { loginSchema } from "./app/schema/login-schema";
import prisma from "./lib/prisma";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      async authorize(credentials) {
        const validateFields = loginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (!user || !user.password) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
