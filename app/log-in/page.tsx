"use client";

import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import React, { FormEvent, useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { redirect } from "next/navigation";
import { login } from "@/lib/actions/auth";
import { TLoginInfoDto } from "@/types/dto/user.dto";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as TLoginInfoDto;

    const { status } = await login(data);
    if (status === 200) redirect("/");
    setIsLoading(false);
  };

  return (
    <AuthLayout>
      <Form
        className="justify-center items-center w-full space-y-4"
        validationBehavior="native"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return "Please enter your email";
              }
              if (validationDetails.typeMismatch) {
                return "Please enter a valid email address";
              }
            }}
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />

          <Input
            isRequired
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Enter your password"
            type="password"
          />

          <Button
            className="w-full"
            color="warning"
            type="submit"
            isLoading={isLoading}
            style={{ color: "white" }}
          >
            Log in
          </Button>
        </div>
      </Form>
    </AuthLayout>
  );
}
