"use client";

import React from "react";
import Link from "next/link";
import { Projects } from "@/constants";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Mountains.jpg')" }} // ✅ ensure it's in public/
      className="w-screen min-h-screen bg-center bg-cover p-5 overflow-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[90%] mx-auto">
        {Projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg h-64">
              <img
                src={project.src} // ✅ make sure project.src looks like "/projects/proj1.png"
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
