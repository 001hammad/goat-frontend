"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import navbarContent from "../Content/navbarContent";
import LanguageToggle from "./LanguageToggle";
import { useUser, SignOutButton } from "@clerk/nextjs";

type Props = {
  language: "roman" | "urdu";
  setLanguage: (lang: "roman" | "urdu") => void;
};

export default function Navbar({ language, setLanguage }: Props) {
  const [open, setOpen] = useState(false);
  const { user, isSignedIn } = useUser();
  const isAdmin =
    user?.primaryEmailAddress?.emailAddress === "blogify082@gmail.com";

  // Filter out admin and login from static content to show manually
  const publicLinks = navbarContent.links.filter(
    (link) => link.key !== "admin" && link.key !== "login"
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-[80px]">
          {/* 🐐 Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/akhtar-logo.jpg"
              alt="Akhtar Goat Farm Logo"
              width={40}
              height={40}
              priority
              className="h-auto w-auto rounded-3xl border-2 border-[#9C5518] object-contain"
            />
          </Link>

          {/* 🌐 Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {publicLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-[#9C5518] hover:text-[#EF962D] hover:underline font-medium"
              >
                {link[language]}
              </Link>
            ))}

            {/* ✅ Admin Link (if admin) */}
            {isAdmin && (
              <Link
                href="/admin"
                className="text-[#9C5518] hover:text-[#EF962D] font-medium"
              >
                Admin Panel
              </Link>
            )}

            {/* 🔐 Auth */}
            {!isSignedIn ? (
              <Link
                href="/sign-in"
                className="text-[#9C5518] hover:text-[#EF962D] font-medium"
              >
                {navbarContent.links.find((l) => l.key === "login")?.[language]}
              </Link>
            ) : (
              <SignOutButton>
                <button className="text-[#EF962D] hover:text-red-600 font-medium">
                  Sign Out
                </button>
              </SignOutButton>
            )}
          </div>

          {/* 🔁 Language Toggle (Desktop) */}
          <div className="hidden md:block">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7 text-[#9C5518]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg z-50">
          <div className="space-y-3">
            {publicLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="block text-[#9C5518] hover:text-[#EF962D] text-lg font-medium"
              >
                {link[language]}
              </Link>
            ))}

            {/* Admin Panel (mobile) */}
            {isAdmin && (
              <Link
                href="/admin"
                className="block text-[#9C5518] hover:text-[#EF962D] text-lg font-medium"
              >
                Admin Panel
              </Link>
            )}

            {/* Auth Buttons (mobile) */}
            {!isSignedIn ? (
              <Link
                href="/sign-in"
                className="block text-[#9C5518] hover:text-[#EF962D] text-lg font-medium"
              >
                {navbarContent.links.find((l) => l.key === "login")?.[language]}
              </Link>
            ) : (
              <SignOutButton>
                <button className="text-[#EF962D] hover:text-red-600 font-medium">
                  Sign Out
                </button>
              </SignOutButton>
            )}
          </div>

          {/* Divider Line */}
          <div className="border-t border-[#EF962D] my-2"></div>

          {/* Language Toggle (Mobile) */}
          <div className="pt-2">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </div>
      )}
    </nav>
  );
}
