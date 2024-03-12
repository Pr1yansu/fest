"use client";
import React, { useState, useEffect, startTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, SendHorizontalIcon, Eye, EyeOff } from "lucide-react";
import { loginSchema } from "@/app/schema/login-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema } from "@/app/schema/sigin-schema";
import Image from "next/image";
import {
  Register,
  SendVerificationToken,
  VerifyOTP,
} from "@/app/(backend)/auth-action/register";
import { login } from "@/app/(backend)/auth-action/login";
import { signIn } from "next-auth/react";

const AuthBody = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [tab, setTab] = useState<"Login" | "SignIn">("SignIn");
  const [showOtpField, setShowOtpField] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<string>("");
  const [otpExpirationTime, setOtpExpirationTime] = useState<Date | null>(null);
  const [errorSignIn, setErrorSignIn] = useState<string | null>(null);
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [successSignIn, setSuccessSignIn] = useState<string | null>(null);
  const [successLogin, setSuccessLogin] = useState<string | null>(null);
  const [successOtp, setSuccessOtp] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
      otp: "",
    },
  });

  async function googleSignIn() {
    try {
      await signIn("google", {
        redirectTo: "/",
      });
    } catch (error) {
      console.log(error);
      return;
    }
  }

  function onLogin(values: z.infer<typeof loginSchema>) {
    try {
      setIsLoading(true);
      startTransition(() => {
        login(values)
          .then((data) => {
            if (data?.error) {
              loginForm.reset();
              setErrorLogin(data.error);
            }

            if (data?.success) {
              loginForm.reset();
              setSuccessLogin(data.success);
            }
          })
          .catch(() => setErrorLogin("Something went wrong"));
      });
    } catch (error) {
      return;
    } finally {
      setIsShow(false);
      setIsLoading(false);
    }
  }

  async function sendOtp() {
    try {
      setShowOtpField(true);
      const email = signInForm.getValues("email");
      const response = await SendVerificationToken(email);
      if (response.error) {
        setOtpError(response.error);
        setShowOtpField(false);
        if (response.error === "Email already verified") {
          setOtpError("Email already verified");
          return;
        }
        return;
      }
      setOtpExpirationTime(new Date(Date.now() + 300 * 1000));
      if (response.success) {
        setSuccessOtp(response.success);
      }
    } catch (error) {
      console.log("ERROR_SENDING_OTP", error);
      return;
    }
  }

  async function onSignIn(values: z.infer<typeof signInSchema>) {
    try {
      const VerifyOTPResponse = await VerifyOTP(values.email, values.otp);

      if (VerifyOTPResponse.error) {
        setOtpError(VerifyOTPResponse.error);
        setShowOtpField(false);
        return;
      }

      const response = await Register(values);
      if (response.error) {
        setErrorSignIn(response.error);
        return;
      }
      if (response.success) {
        setSuccessSignIn(response.success);
        setShowOtpField(false);
        setOtpError(null);
        setSuccessOtp(null);
      }
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
      signInForm.reset();
      setShowOtpField(false);
    }
  }

  useEffect(() => {
    if (otpExpirationTime) {
      const timer = setInterval(async () => {
        const now = new Date();
        const diff = otpExpirationTime.getTime() - now.getTime();
        if (diff <= 0) {
          clearInterval(timer);
          const res = await VerifyOTP(
            signInForm.getValues("email"),
            signInForm.getValues("otp")
          );

          if (res.error) {
            setOtpError(res.error);
            return;
          }

          setShowOtpField(false);
          setRemainingTime("OTP has expired");
        } else {
          const minutes = Math.floor(diff / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setRemainingTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [otpExpirationTime, signInForm]);

  useEffect(() => {
    setIsLoading(false);
    setIsShow(false);
    setShowOtpField(false);
    setRemainingTime("");
    setOtpExpirationTime(null);
    setErrorSignIn(null);
    setErrorLogin(null);
    setOtpError(null);
    setSuccessSignIn(null);
    setSuccessLogin(null);
    setSuccessOtp(null);
    loginForm.reset();
    signInForm.reset();
  }, [tab, loginForm, signInForm]);

  if (!isMounted) return null;

  return (
    <>
      {tab === "Login" && (
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onLogin)}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="relative">
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="password"
                            type={isShow ? "text" : "password"}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  >
                    {isShow ? (
                      <EyeOff
                        className="absolute top-1/2 right-2 translate-y-2 text-muted-foreground hover:text-black transition-colors"
                        size={18}
                      />
                    ) : (
                      <Eye
                        className="absolute top-1/2 right-2 translate-y-2 text-muted-foreground hover:text-black transition-colors"
                        size={18}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                className="flex justify-end text-xs mt-2 cursor-pointer"
                onClick={() => {
                  setTab("SignIn");
                }}
              >
                Have an account?
                <span className="ms-1 text-primary font-semibold">Sign in</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col">
              <Button
                disabled={isLoading}
                size={"sm"}
                className="w-full"
                type="submit"
              >
                {tab}
                {isLoading ? (
                  <Loader2 className="ms-2 animate-spin" size={18} />
                ) : (
                  <SendHorizontalIcon className="ms-2" size={18} />
                )}
              </Button>
              <div className="h-0.5 bg-zinc-900 w-full relative my-4">
                <div className="absolute bg-white px-1 top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
                  or
                </div>
              </div>
              <Button
                size={"sm"}
                className="w-full bg-transparent border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
                type="button"
                onClick={googleSignIn}
              >
                Continue with Google
                <Image
                  src={"/assets/google.png"}
                  alt="google.png"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="ms-2 w-4 h-4 object-cover"
                />
              </Button>
            </CardFooter>
          </form>
        </Form>
      )}
      {tab === "SignIn" && (
        <Form {...signInForm}>
          <form onSubmit={signInForm.handleSubmit(onSignIn)}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={signInForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={signInForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <div className="flex gap-2">
                        <FormControl>
                          <Input placeholder="email" {...field} />
                        </FormControl>
                        <Button
                          type="button"
                          onClick={sendOtp}
                          disabled={showOtpField}
                          size="sm"
                          className="text-xs"
                        >
                          Send OTP
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  {otpError && (
                    <div className="text-red-600 font-semibold bg-red-200 p-3 rounded-md text-xs w-full">
                      {otpError}
                    </div>
                  )}
                  {successOtp && (
                    <div className="text-green-600 font-semibold bg-green-200 p-3 rounded-md text-xs w-full">
                      {successOtp}
                    </div>
                  )}
                </div>

                <FormField
                  control={signInForm.control}
                  name="otp"
                  render={({ field }) => (
                    <>
                      {showOtpField && (
                        <FormItem>
                          <FormLabel htmlFor="otp">OTP</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input placeholder="Check email" {...field} />
                              <div className="absolute top-1/2 right-2 -translate-y-1/2 text-xs">
                                {remainingTime}
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    </>
                  )}
                />
                <div className="relative">
                  <FormField
                    control={signInForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControl>
                          <Input placeholder="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setIsShow(!isShow);
                    }}
                  >
                    {isShow ? (
                      <EyeOff
                        className="absolute top-1/2 right-2 translate-y-2 text-muted-foreground hover:text-black transition-colors"
                        size={18}
                      />
                    ) : (
                      <Eye
                        className="absolute top-1/2 right-2 translate-y-2 text-muted-foreground hover:text-black transition-colors"
                        size={18}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                className="flex justify-end text-xs mt-2 cursor-pointer"
                onClick={() => {
                  setTab("Login");
                }}
              >
                Don&apos;t have an account?
                <span className="ms-1 text-primary font-semibold">Login</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 rounded-full">
              <Button
                disabled={isLoading}
                size={"sm"}
                className="w-full"
                type="submit"
              >
                {tab}
                {isLoading ? (
                  <Loader2 className="ms-2 animate-spin" size={18} />
                ) : (
                  <SendHorizontalIcon className="ms-2" size={18} />
                )}
              </Button>
              <div className="h-0.5 bg-zinc-900 w-full relative my-2">
                <div className="absolute bg-white px-1 top-0 right-1/2 -translate-y-1/2 translate-x-1/2">
                  or
                </div>
              </div>
              <Button
                size={"sm"}
                className="w-full bg-transparent border-blue-500 border text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200"
                type="button"
                onClick={googleSignIn}
              >
                Continue with Google
                <Image
                  src={"/assets/google.png"}
                  alt="google.png"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="ms-2 w-4 h-4 object-cover"
                />
              </Button>
              <div className="w-full">
                {errorSignIn && (
                  <div className="text-red-600 font-semibold bg-red-200 p-3 rounded-md text-xs w-full">
                    {errorSignIn}
                  </div>
                )}
                {successSignIn && (
                  <div className="text-green-600 font-semibold bg-green-200 p-3 rounded-md text-xs w-full">
                    {successSignIn}
                  </div>
                )}
              </div>
            </CardFooter>
          </form>
        </Form>
      )}
    </>
  );
};

export default AuthBody;
