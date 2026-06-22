"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  { name: "Laravel", slug: "laravel", color: "FF2D20" },
  { name: "PHP", slug: "php", color: "777BB4" },
  { name: ".NET", slug: "dotnet", color: "512BD4" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Stripe", slug: "stripe", color: "635BFF" },
  { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Zoho", slug: "zoho", color: "E42527" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Google Tag Manager", slug: "googletagmanager", color: "246FDB" },
];

export default function TechLogoLoop() {
  return (
    <section
      aria-label="Technologies"
      className="relative py-12 border-y border-border overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="sr-only">Technologies I work with</h2>
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          plugins={[Autoplay({ delay: 1800, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {logos.map((l) => (
              <CarouselItem
                key={l.slug}
                className="pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div
                  className="glass-card flex flex-col items-center justify-center gap-3 py-6 px-4 h-full hover:-translate-y-1 transition-transform"
                  title={l.name}
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${l.slug}/${l.color}`}
                    alt={`${l.name} logo`}
                    width={40}
                    height={40}
                    unoptimized
                    className="h-10 w-10"
                  />
                  <span className="font-mono text-xs text-muted-foreground text-center">
                    {l.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
