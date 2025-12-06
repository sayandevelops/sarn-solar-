'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { heroBanners } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from 'embla-carousel-autoplay';

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const banners = heroBanners.map(banner => ({
    ...banner,
    image: PlaceHolderImages.find(img => img.id === banner.imageId)
  }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className="relative h-[60vh] min-h-[400px] w-full">
              {banner.image && (
                <Image
                  src={banner.image.imageUrl}
                  alt={banner.image.description}
                  data-ai-hint={banner.image.imageHint}
                  fill
                  className="object-cover"
                  priority={banner.id === 'hero-1'}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
                <h1 className="font-headline text-4xl md:text-6xl font-bold drop-shadow-md">
                  {banner.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
                  {banner.subtitle}
                </p>
                <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={banner.buttonLink}>
                    {banner.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white" />
    </Carousel>
  );
}
