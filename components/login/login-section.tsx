"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sharedLoginConfig } from "@/config/shared";
import { getUrl } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const getLoginRedirectPath = (pathname?: string | null): string => {
  return (
    getUrl() +
    "/auth/callback" +
    "?redirect=" +
    (pathname ? pathname : "/dashboard")
  );
};

const FormSchema = z.object({
  email: z
    .string({
      required_error: sharedLoginConfig.emailRequiredError,
    })
    .email(),
  password: z
    .string({
      required_error: sharedLoginConfig.passwordRequiredError,
    })
    .min(6, sharedLoginConfig.passwordMinError),
});

interface LoginSectionProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginSection: React.FC<LoginSectionProps> = ({ setOpen }) => {
  const supabase = createClient();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const currentPathname = usePathname();
  const redirectTo = getLoginRedirectPath(currentPathname);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
          options: { emailRedirectTo: redirectTo },
        });
        if (error) {
          toast.error(error.message);
          return;
        }
        toast.success(
          "Check your email to confirm the account if confirmation is enabled.",
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (error) {
          toast.error(error.message);
          return;
        }
        setOpen?.(false);
        router.push("/editor/posts");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="mx-auto w-full justify-center rounded-md border border-black/5 bg-gray-50 align-middle shadow-md">
        <div className="flex flex-col items-center justify-center space-y-3 border-b px-4 py-6 pt-8 text-center">
          <a href="https://royalreelsdirect.com">
            <Image
              src="/images/logo.png"
              alt="Logo"
              className="h-16 w-16 rounded-full"
              width={64}
              height={64}
              priority
            />
          </a>
          <h3 className="font-display text-2xl font-bold">
            {sharedLoginConfig.title}
          </h3>
        </div>

        <div className="bg-gray-50 px-4 py-8 md:px-16">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{sharedLoginConfig.emailLabel}</FormLabel>
                    <FormControl>
                      <Input type="email" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{sharedLoginConfig.passwordLabel}</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        autoComplete={
                          isSignUp ? "new-password" : "current-password"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSignUp
                  ? sharedLoginConfig.signUpButton
                  : sharedLoginConfig.signInButton}
              </Button>
            </form>
          </Form>
          <button
            type="button"
            className="mt-4 w-full text-center text-sm text-gray-600 underline hover:text-gray-900"
            onClick={() => {
              setIsSignUp(!isSignUp);
              form.clearErrors();
            }}
          >
            {isSignUp
              ? sharedLoginConfig.switchToSignIn
              : sharedLoginConfig.switchToSignUp}
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginSection;
