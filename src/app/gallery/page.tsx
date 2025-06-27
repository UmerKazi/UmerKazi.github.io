/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowUpRight, X } from "lucide-react";
import React, { useState, useEffect } from "react";

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

// Sample gallery data - replace with your actual images
const galleryItems = [
  {
    id: 1,
    src: "/costarica.jpg",
    title: "green noise",
    description: "like white noise but leafier.",
    location: "monteverde, costa rica",
  },
  {
    id: 4,
    src: "/sa.jpg",
    title: "stripe model",
    description: "low effort, high impact.",
    location: "kruger national park, south africa",
  },
  {
    id: 5,
    src: "/morocco.jpg",
    title: "just a few grains",
    description: "give or take a billion.",
    location: "merzouga, morocco",
  },
  {
    id: 6,
    src: "/saskatoon.jpg",
    title: "art break",
    description: "a quick one. then i left.",
    location: "saskatoon, canada",
  },

  {
    id: 2,
    src: "/iceland.jpg",
    title: "washed up",
    description: "literally and maybe metaphorically.",
    location: "glacier beach, iceland",
  },
  {
    id: 3,
    src: "/portugal.jpg",
    title: "peak porto",
    description: "somewhere down there is a bakery i liked.",
    location: "porto, portugal",
  },
];

export default function Gallery() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(item)}
            style={{
              opacity: 0,
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
            }}
          >
            <div className="relative overflow-hidden rounded-lg bg-black/20 aspect-[4/3]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-serif font-medium text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-white/80 font-light text-sm font-serif">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="w-full flex flex-row items-center justify-start gap-4 ml-8">
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-all duration-200 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-white font-serif font-semibold text-2xl mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-white/80 font-light mb-2 max-w-lg font-serif">
                  {selectedImage.description}
                </p>
                <p className="text-white/60 font-light text-sm font-serif">
                  {selectedImage.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
