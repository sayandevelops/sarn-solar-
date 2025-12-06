import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { portfolio } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'Browse a gallery of our completed solar installation projects for residential and commercial clients. See the quality and impact of Sarn Solar\'s work.',
};

export default function PortfolioPage() {
  const portfolioImages = portfolio.map(p => PlaceHolderImages.find(img => img.id === p.imageId));

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
              <Card key={project.id} className="overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                {image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold font-headline">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                  <p className="mt-4">{project.description}</p>
                  <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground">
                    <p>&quot;{project.testimonial}&quot;</p>
                  </blockquote>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
