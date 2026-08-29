"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/lib/validations";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin/dashboard";
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      setServerError("Invalid email or password");
      return;
    }
    if (res?.ok) {
      router.push(callbackUrl);
      router.refresh();
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-ink/10 p-8">
      <h1 className="font-display text-3xl mb-2">Admin Login</h1>
      <p className="font-sans text-sm text-olive mb-8">Bunmi Alabi — Editorial CMS</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Email</label>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="admin@bunmialabi.com"
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.email && <p className="font-sans text-xs text-red-600 mt-2">{errors.email.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Password</label>
          <input
            {...register("password")}
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.password && <p className="font-sans text-xs text-red-600 mt-2">{errors.password.message}</p>}
        </div>

        {serverError && <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2">{serverError}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-ink text-cream font-sans text-sm tracking-widest uppercase py-3 hover:bg-ink/90 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="font-sans text-xs text-olive/60 mt-6 text-center">Seed login: admin@bunmialabi.com / admin1234</p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <Suspense fallback={<div className="font-sans text-sm text-olive">Loading…</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
