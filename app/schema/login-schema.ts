import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Enter email",
    })
    .email()
    .max(50),
  password: z
    .string()
    .min(2, {
      message: "Enter password",
    })
    .max(50),
});
