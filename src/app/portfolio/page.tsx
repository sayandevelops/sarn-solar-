import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { portfolio } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'Browse a gallery of our completed solar installation projects for residential and commercial clients. See the quality and impact of SARN SOLAR\'s work.',
};

export default function PortfolioPage() {
  const portfolioImages = portfolio.map(p => PlaceHolderImages.find(img => img.id === p.coverImageId));

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Project Portfolio</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We take pride in every installation. Here’s a look at some of our recent work and the satisfied customers behind them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((project, index) => {
            const image = portfolioImages[index];
            return (
              <Link key={project.id} href={`/portfolio/${project.slug}`} className="block group">
                <Card className="overflow-hidden h-full flex flex-col shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="relative h-64 w-full overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold font-headline text-white">{project.title}</h3>
                      <p className="text-sm text-primary-foreground/80">{project.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                        <p>&quot;{project.testimonial}&quot;</p>
                      </blockquote>
                    </div>
                    <Button variant="link" className="p-0 mt-4 self-start">
                      View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
