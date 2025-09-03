"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full aspect-square rounded-md cursor-pointer mx-auto"
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front */}
        <div
          style={{
            backgroundImage: `url('${image}')`, // ✅ must be like "/projects/proj1.png"
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute w-full h-full rounded-lg"
        >
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100">
            Learn more &gt;
          </div>
        </div>

        {/* Back */}
        <div
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute w-full h-full rounded-lg rotate-y-180"
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
          <div className="flex flex-col justify-center items-center h-full text-white p-4 gap-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-sm">{text}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
