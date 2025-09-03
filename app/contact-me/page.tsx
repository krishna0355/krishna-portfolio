import ContactForm from "@/components/ContactForm";
import React from "react";

export default function Page() {
  return (
    <main
      className="relative min-h-screen w-screen flex items-center justify-center
                 pt-[100px] pb-28 bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
    >
      {/* Card with transparent overlay */}
      <div
        className="w-[92%] max-w-xl sm:max-w-2xl md:max-w-3xl
                   h-[70vh] md:h-[60vh]
                   rounded-xl overflow-hidden border border-white/40
                   bg-cover bg-center flex items-center justify-center p-4
                   bg-black/40 backdrop-blur-sm"
        style={{ backgroundImage: "url(/atombg-comp.webp)" }}
      >
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
