// ✅ app/sign-up/[[...sign-up]]/page.tsx (Sign Up with Redirect)
"use client";

import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && user?.primaryEmailAddress?.emailAddress === "blogify082@gmail.com") {
      router.push("/admin");
    }
  }, [isSignedIn, user, router]);

  return <SignUp />;
}