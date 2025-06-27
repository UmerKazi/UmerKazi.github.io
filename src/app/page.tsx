"use client";

import Dither from "@/components/dither";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useEffect } from "react";

const links = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "gallery",
    href: "/gallery",
  },
  {
    title: "folio inc.",
    href: "https://foliotech.ca",
  },
];

const linksTwo = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/umerkazi/",
  },
  {
    title: "email",
    href: "mailto:umer@kazi.cc",
  },
];

export default function Home() {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className="max-w-2xl h-200 mx-auto px-6 md:px-0">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-start py-8 gap-4 ml-8">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:underline font-[300] text-md font-serif text-white/85"
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* Hero */}
      <div className="w-full h-[400px] relative rounded-xl flex flex-col items-start justify-start">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: "inherit",
            overflow: "hidden",
            opacity: 0, // Start with opacity 0
            animation: "fadeIn 0.4s ease-in-out forwards", // Add fade-in animation
          }}
        >
          <div className="absolute w-full h-full bg-black/60 z-1" />
          <Dither
            waveColor={[0.2, 0.2, 0.2]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0}
            colorNum={2.6}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full p-8 font-serif absolute top-0 left-0 z-2">
          <span className="text-2xl tracking-tighter mb-4 font-semibold text-white/85">
            Umer Kazi
          </span>
          <span className="max-w-[500px] font-light text-white/85">
            Working on some AI stuff. On the side, I help startups shape
            products and ship faster. I like making things that have purpose,
            polish, and real-world impact.
          </span>
        </div>
      </div>
      {/* Links */}
      <div className="w-full flex flex-row items-center justify-start py-8 gap-4 ml-8">
        {linksTwo.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="hover:underline font-[300] text-md font-serif text-white/85 flex items-center gap-2"
            target="_blank"
          >
            <ArrowUpRight className="text-white/85 h-4 w-4" />
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
