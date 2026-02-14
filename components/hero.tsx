"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import number_5 from "./5.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={number_5}
          alt="Beauty Salon Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
          Luxe Beauty Parlor
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance">
          Elevate Your Beauty Journey with Premium Care & Expert Styling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  );
}
