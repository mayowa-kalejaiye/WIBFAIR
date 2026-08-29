"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  label?: string;
  action: (id: string) => Promise<any>;
};

export default function DeleteButton({ id, label = "Delete", action }: Props) {
  const [pending, start] = useTransition();
  const router = useRouter();

  const onClick = () => {
    if (!confirm(`Are you sure you want to delete?`)) return;
    start(async () => {
      await action(id);
      router.refresh();
    });
  };

  return (
    <button
      onClick={onClick}
      disabled={pending}
      className="font-sans text-xs tracking-widest uppercase text-red-600 hover:text-red-800 disabled:opacity-50"
    >
      {pending ? "Deleting..." : label}
    </button>
  );
}
