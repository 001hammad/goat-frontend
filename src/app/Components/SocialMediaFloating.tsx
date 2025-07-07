"use client";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Link from "next/link";

export default function SocialMediaFloating() {
  return (
    <div className="fixed right-4 top-[35%] z-50 flex flex-col items-center gap-4">
      {/* Facebook */}
      <Link
        href="https://www.facebook.com/profile.php?id=61560417864449&sk=reels_tab" // ← Replace with your link
        target="_blank"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaFacebookF className="text-lg" />
      </Link>

      {/* TikTok */}
      <Link
        href="https://www.tiktok.com/@akhtaralichutta.1?is_from_webapp=1&sender_device=pc" // ← Replace with your link
        target="_blank"
        className="bg-black hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition"
      >
        <SiTiktok className="text-lg" />
      </Link>

      {/* YouTube */}
      <Link
        href="https://www.youtube.com/@akhtargoatfarm" // ← Replace with your link
        target="_blank"
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <FaYoutube className="text-lg" />
      </Link>
    </div>
  );
}
