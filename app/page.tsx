"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      {/* Background sky */}
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        {/* Hero copy */}
        <div className="px-6 md:px-20 pb-32 md:pb-20 flex flex-col gap-5 z-[20] max-w-[750px]">
          <h1 className="text-[34px] sm:text-[42px] md:text-[50px] text-white font-semibold leading-tight">
            Hi! I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Krishna Agarwal
            </span>{" "}
            <br className="hidden md:block" />
            <span className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-medium">
              Full-Stack Developer • C++ Coder • Node.js Developer
            </span>
          </h1>

          <p className="text-gray-200/90 hidden sm:block max-w-[680px] text-sm md:text-base lg:text-lg">
            I build fast, secure web apps with React/Next.js, Node/Express, TypeScript, and
            PostgreSQL/MySQL — plus tooling like Prisma and Stripe.
          </p>

          {/* CTA buttons (responsive, same style everywhere) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            {[
              { href: "/my-skills", label: "Learn more" },
              { href: "/my-projects", label: "My projects" },
              { href: "/contact-me", label: "Contact me" },
            ].map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                className="rounded-[18px] px-5 py-2 sm:py-3 text-sm sm:text-base 
                           text-white border border-blue-500 
                           bg-transparent
                           hover:bg-white/10 hover:text-blue-500 
                           transition active:scale-[0.98] text-center"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground cluster */}
      <div className="absolute bottom-0 right-0 z-[10] pointer-events-none">
        {/* Animated horse */}
        <MotionImage
          src="/horse.png"
          alt="horse"
          width={300}
          height={300}
          className="absolute right-[28px] sm:right-[40px] md:right-[55px] top-32 sm:top-36 md:top-40 w-[200px] sm:w-[260px] md:w-[300px]"
          animate={{ rotate: [-2, 2, -2], y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "70% 30%" }}
          priority
        />

        {/* Cliff */}
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="w-[300px] sm:w-[380px] md:w-[480px] h-auto"
        />
      </div>

      {/* Trees layer */}
      <div className="absolute bottom-0 z-[5] w-full h-auto pointer-events-none">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Stars */}
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[8] pointer-events-none"
        priority
      />
    </main>
  );
}
