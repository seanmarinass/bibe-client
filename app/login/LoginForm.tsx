"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { googleLogin } from "./utils/google-login";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSubmit = async () => {
    console.log(`Google button pressed`);

    try {
      const loginData = await googleLogin();

      console.log(`Login successful: ${loginData}`);
    } catch (error: any) {
      console.error(`Error loggin in with Google: ${error.message}`);
    }
  };

  const handleSubmit = () => {
    alert(`Email: ${email}`);
    alert(`Password: ${password}`);
  };

  return (
    <Card className="flex flex-col justify-center items-center p-4 shadow-xl sm:w-[20rem] md:w-[30rem] lg:w-[40rem] xl:w-[45rem]">
      <CardHeader className="text-3xl text-center">Login to Bibe</CardHeader>

      <CardContent className="sm:w-[20rem] md:w-[30rem]">
        <div className="flex flex-col gap-3">
          <Button
            variant="outline"
            className="flex justify-between"
            onClick={handleGoogleSubmit}
          >
            <GoogleIcon /> Login with Google
            <span></span>
          </Button>
          
          <Button variant="outline" className="flex justify-between">
            <AppleIcon /> Login with Apple
            <span></span>
          </Button>
        </div>

        <div className="my-10">
          <Divider>or</Divider>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button variant="default" className="w-full mt-2">
            Next
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
