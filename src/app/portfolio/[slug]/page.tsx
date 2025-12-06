
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { portfolio } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Metadata } from 'next';
import { MapPin, ArrowLeft, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

// Helper to generate static paths for all portfolio items
export async function generateStaticParams() {
  return portfolio.map((project) => ({
    slug: project.slug,
  }));
}


export default function PortfolioProjectPage({ params }: Props) {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.galleryImageIds.map(id => PlaceHolderImages.find(img => img.id === id));
  const coverImage = PlaceHolderImages.find(img => img.id === project.coverImageId);

  return (
    <article className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
        </div>

        <header className="mb-12 max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
            {project.title}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{project.location}</span>
          </div>
        </header>

        {coverImage && (
          <div className="relative h-96 w-full mb-12 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={coverImage.imageUrl}
              alt={project.title}
              data-ai-hint={coverImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <h2 className="font-headline text-3xl font-bold mb-4">About the Project</h2>
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                         prose-headings:font-headline prose-headings:text-foreground
                         prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: project.details }}
            />
          </div>
          
          <aside className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-4">Client Testimonial</h3>
              <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground bg-card p-4 rounded-r-lg">
                <p>&quot;{project.testimonial}&quot;</p>
              </blockquote>
            </div>

            {project.videoUrl && (
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">Project Video</h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.videoUrl}
                    title="Project Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </aside>
        </div>
        
        {galleryImages.length > 0 && (
          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-8 text-center">Project Gallery</h2>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  image && (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                           <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  )
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}

      </div>
    </article>
  );
}
