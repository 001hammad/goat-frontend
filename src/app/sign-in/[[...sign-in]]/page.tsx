// app/sign-in/[[...sign-in]]/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // 🧠 Check if signed in and is admin
    if (isSignedIn && user?.primaryEmailAddress?.emailAddress === "blogify082@gmail.com") {
      router.push("/admin"); // 🔁 Redirect to admin page
    }
  }, [isSignedIn, user, router]);

  return <SignIn />;
}
