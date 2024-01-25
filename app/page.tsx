"use client";

import { Icons } from "@/components/icons";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home () {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("dashboard");
    }, 2000);
  }, [router]);

  return (
    <main className="w-screen h-screen grid place-content-center">
      <div className="p-5">
        <Icons.Logo className="animate-bounce" />
      </div>
    </main>
  );
}
