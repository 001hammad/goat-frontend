"use client";

import "./globals.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import ChatWidget from "./Components/chatwidget";
import SocialMediaFloating from "./Components/SocialMediaFloating";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<"roman" | "urdu">("roman");

  return (
    <ClerkProvider>
    <html lang="en">
      <body className="font-sans">
        <Navbar language={language} setLanguage={setLanguage} />
        {children}
        <SocialMediaFloating/>
        <ChatWidget/>
      </body>
    </html>
    </ClerkProvider>
  );
}
