import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import AuthHeader from "@/components/ui/auth-header";
import AuthBody from "@/components/ui/auth-content";

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <AuthHeader />
        </CardHeader>
        <AuthBody />
      </Card>
    </section>
  );
};

export default Login;
