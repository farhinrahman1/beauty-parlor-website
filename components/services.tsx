"use client";

import { Scissors, Sparkles, Palette, Droplets } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Hair Styling",
      description:
        "Professional haircuts, coloring, and styling with premium products for all hair types.",
      price: "BDT 500 - BDT 2000",
      icon: Scissors,
    },
    {
      id: 2,
      title: "Facial Care",
      description:
        "Customized facials using luxurious skincare products to rejuvenate and brighten your skin.",
      price: "BDT 800 - BDT 2500",
      icon: Sparkles,
    },
    {
      id: 3,
      title: "Makeup Artistry",
      description:
        "Expert makeup application for everyday looks, special events, and bridal services.",
      price: "BDT 1000 - BDT 3000",
      icon: Palette,
    },
    {
      id: 4,
      title: "Spa Treatment",
      description:
        "Relaxing body treatments, massages, and wellness therapies for ultimate rejuvenation.",
      price: "BDT 1500 - BDT 5000",
      icon: Droplets,
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of beauty and wellness
            services, designed to enhance your natural beauty and boost your
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center mb-6">
                  <p className="text-lg font-semibold text-primary">
                    {service.price}
                  </p>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
