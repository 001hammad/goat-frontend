"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#9C5518] hover:bg-[#EF962D] text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      >
        {open ? (
          <>
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close Chat</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Chat with us</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[320px] h-[420px] md:w-[370px] md:h-[440px] bg-white border border-[#9C5518] rounded-2xl shadow-2xl z-50 overflow-hidden animate-slide-up">
          <iframe
            src="https://goat-agent-production.up.railway.app/"
            title="Akhtar Goat Farm Assistant"
            className="w-full h-full"
          />
        </div>
      )}

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
