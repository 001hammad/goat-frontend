"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#9C5518] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <Image
            src="/akhtar-logo.jpg"
            alt="Akhtar Goat Farm"
            width={60}
            height={60}
            className="rounded-full border-2 border-white mb-3"
          />
          <p className="text-sm">
            Akhtar Goat Farm, North Karachi mein waqay aik bharosemand aur
            maqbool farm hai jahan sehatmand aur dehqani parwarish wali bakriyaan
            farokht hoti hain.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#EF962D]">Home</Link></li>
            <li><Link href="/goats" className="hover:text-[#EF962D]">Bakriyan</Link></li>
            <li><Link href="/about" className="hover:text-[#EF962D]">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#EF962D]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">📞 0317-2774237</p>
          <p className="text-sm mb-4">📍 North Karachi, Karachi</p>

          <div className="flex gap-4 text-2xl">
            <Link href="https://www.facebook.com/profile.php?id=61560417864449&sk=reels_tab" target="_blank">
              <FaFacebookF className="hover:text-[#EF962D]" />
            </Link>
            <Link href="https://www.youtube.com/@akhtargoatfarm" target="_blank">
              <FaYoutube className="hover:text-[#EF962D]" />
            </Link>
            <Link href="https://www.tiktok.com/@akhtaralichutta.1?is_from_webapp=1&sender_device=pc" target="_blank">
              <FaTiktok className="hover:text-[#EF962D]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-10 text-white border-t border-[#EF962D] pt-4">
        © {new Date().getFullYear()} Akhtar Goat Farm. All rights reserved.
      </div>
    </footer>
  );
}

 