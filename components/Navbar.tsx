"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx"; // uses react-icons (already in your project)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-[40] w-full h-[80px] bg-transparent flex justify-between items-center px-6 md:px-20">
      {/* Left: Logo (smaller on mobile) */}
      <div className="flex items-center gap-3">
        <img
          src="/logo1.png"
          alt="My Logo"
          className="h-12 w-auto md:h-20 transition-all"
        />
      </div>

      {/* Desktop/Tablet: Socials + Resume */}
      <nav className="hidden md:flex items-center gap-5 mb-2">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label={social.name}
            title={social.name}
          >
            <Image
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
              className="invert brightness-0"
            />
          </a>
        ))}
        <Link
          href="/resume"
          className="rounded-[12px] border border-white/70 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
        >
          Resume
        </Link>
      </nav>

      {/* Mobile: Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 rounded-md text-white hover:bg-white/10"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <RxHamburgerMenu className="w-6 h-6" />
        </button>

        {/* Click-away overlay */}
        {menuOpen && (
          <button
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[48] cursor-default"
            aria-label="Close menu"
          />
        )}

        {/* Dropdown menu */}
        <div
          className={`absolute right-6 top-16 z-[49] origin-top-right transform transition-all duration-200
            ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
            bg-black/90 border border-white/20 rounded-lg shadow-lg p-4 flex flex-col gap-3 w-56`}
        >
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={20}
                height={20}
                className="invert brightness-0"
              />
              {social.name}
            </a>
          ))}

          <Link
            href="/resume"
            className="text-white border border-white/60 px-3 py-2 rounded-md hover:bg-white/10 transition text-center"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
