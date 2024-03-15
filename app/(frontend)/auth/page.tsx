import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AuthHeader from "@/components/ui/auth-header";
import AuthBody from "@/components/ui/auth-content";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const data = await auth();
  if (data?.user) {
    redirect("/");
  }
  return (
    <section className="flex justify-center items-center h-screen bg-[#020314]">
      <Card className={cn("w-[380px] relatvie z-20")}>
        <CardHeader>
          <AuthHeader />
        </CardHeader>
        <AuthBody />
      </Card>
    </section>
  );
};

export default Login;
