"use client";

import Image from "next/image";
import number_1 from "./1.jpg";
import number_2 from "./2.jpg";
import number_3 from "./3.jpg";
import number_4 from "./4.jpg";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: number_1,
      alt: "Professional Hair Styling Station",
      title: "Hair Styling",
    },
    {
      id: 2,
      src: number_4,
      alt: "Makeup Artist Workspace",
      title: "Makeup Artistry",
    },
    {
      id: 3,
      src: number_3,
      alt: "Spa Treatment Room",
      title: "Spa Treatments",
    },
    {
      id: 4,
      src: number_2,
      alt: "Luxury Salon Lounge",
      title: "Salon Interior",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Salon Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step into our world of luxury and beauty. Explore our
            state-of-the-art facilities and welcoming ambiance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 md:h-72 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="w-full h-0 group-hover:h-24 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end transition-all duration-300">
                  <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
