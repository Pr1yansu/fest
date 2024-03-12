"use server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { sendVerificationToken } from "../mailer/mails";
import crypto from "crypto";
import { signInSchema } from "@/app/schema/sigin-schema";
import bcrypt from "bcrypt";

export const SendVerificationToken = async (email: string) => {
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser)
      if (existingUser.emailVerified)
        return {
          error: "Email already verified",
        };
      else {
        await prisma.user.delete({
          where: { email: email },
        });
      }

    const otp = crypto.randomBytes(3).toString("hex").substring(0, 6);
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getSeconds() + 300);

    await prisma.user.create({
      data: {
        email: email,
        emailVerificationToken: otp,
        otpExpiration: otpExpiration,
      },
    });
    const { success, error } = await sendVerificationToken(email, otp);
    if (error)
      return {
        error: error,
      };
    return {
      success: success,
    };
  } catch (error) {
    console.log("ERROR_SENDING_OTP :_", error);
    return {
      error: "Something went wrong",
    };
  }
};

export const VerifyOTP = async (email: string, otp: string | undefined) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return {
        error: "User not found",
      };
    }

    if (user.emailVerified) {
      return {
        error: "Email already verified",
      };
    }

    if (
      user.otpExpiration &&
      new Date(user.otpExpiration).getTime() < new Date().getTime()
    ) {
      await prisma.user.delete({
        where: { email: email },
      });
      return {
        error: "OTP has expired",
      };
    }

    if (user.emailVerificationToken !== otp) {
      await prisma.user.delete({
        where: { email: email },
      });
      return {
        error: "Invalid OTP",
      };
    }

    await prisma.user.update({
      where: { email: email },
      data: { emailVerified: new Date() },
    });

    return {
      success: "Email verified successfully",
    };
  } catch (error) {
    console.log("ERROR_VERIFYING_OTP :_", error);
    return {
      error: "Something went wrong",
    };
  }
};

export const Register = async (values: z.infer<typeof signInSchema>) => {
  try {
    const verifiedEmail = await prisma.user.findFirst({
      where: {
        email: values.email,
      },
    });
    if (verifiedEmail?.emailVerified === null)
      return {
        error: "Email is not verified please verify",
      };
    const hashedPassword = await bcrypt.hash(values.password, 10);
    await prisma.user.update({
      data: {
        password: hashedPassword,
        name: values.username,
        emailVerificationToken: null,
        otpExpiration: null,
      },
      where: {
        email: values.email,
      },
    });
    return {
      success: "User created successfully",
    };
  } catch (error) {
    console.log("ERROR_IN_REGISTRATION :_", error);
    return {
      error: "Something went wrong",
    };
  }
};
