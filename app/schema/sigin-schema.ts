import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Enter username",
    })
    .max(50),
  otp: z
    .string()
    .min(6, {
      message: "Enter otp",
    })
    .max(6, {
      message: "Otp can be 6 digit",
    }),
  email: z
    .string()
    .min(2, {
      message: "Enter proper email",
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
