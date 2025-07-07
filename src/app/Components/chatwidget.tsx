"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 cursor-pointer right-6 z-50 bg-[#9C5518] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#EF962D] transition"
      >
        {open ? "Close Chat ✖️" : "Chat with us 💬"}
      </button>

      {open && (
        <div className="fixed bottom-20  right-6 w-[300px] h-[400px] md:w-[350px] md:h-[400px] bg-white border-2 border-[#9C5518] shadow-xl rounded-xl z-50 overflow-hidden">
          <iframe
            src="http://localhost:8000" // Change to actual deployment URL later
            className="w-full h-full"
            title="Akhtar Goat Farm Assistant"
          />
        </div>
      )}
    </>
  );
}
