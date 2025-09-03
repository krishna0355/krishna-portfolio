import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Resume — Krishna Agarwal",
  description: "View or download my latest resume.",
};

export default function Page() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
    >
      <div className="w-[90%] h-[85vh] max-w-5xl bg-black/40 backdrop-blur rounded-xl border border-white/30 p-4 md:p-6">
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-[12px] border border-white/70 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[12px] border border-white/70 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            Open in new tab
          </a>
          <Link
            href="/"
            className="rounded-[12px] border border-white/70 px-4 py-2 text-white hover:bg-white/10 transition"
          >
            Back to Home
          </Link>
        </div>

        <div className="w-full h-[calc(85vh-64px)] bg-white rounded-lg overflow-hidden">
          <object
            data="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            type="application/pdf"
            className="w-full h-full"
          >
            {/* Fallback if PDF viewer isn't supported */}
            <iframe src="/resume.pdf" className="w-full h-full" />
          </object>
        </div>
      </div>
    </div>
  );
}
