"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) setIsRouting(true);
  }, [path, prevPath]);

  useEffect(() => {
    if (!isRouting) return;
    setPrevPath(path);
    const t = setTimeout(() => setIsRouting(false), 1200);
    return () => clearTimeout(t);
  }, [isRouting, path]);

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-[50]
        w-[340px] h-[64px]  /* <-- static bubble size */
        rounded-full border border-white/30 bg-black/70 backdrop-blur
        overflow-hidden
      "
    >
      {isRouting && <Transition />}

      <div className="h-full w-full flex items-center justify-between px-2">
        {NavLinks.map((nav) => (
          <Link
            key={nav.link}
            href={nav.link}
            className="
              flex-1 h-full flex items-center justify-center
              rounded-full hover:bg-white/10 transition
            "
            aria-label={nav.name}
            title={nav.name}
          >
            <nav.icon
              className={`w-[22px] h-[22px] md:w-[24px] md:h-[24px] transition-transform
                ${path === nav.link ? "text-purple-500" : "text-white"}
              `}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
