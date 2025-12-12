
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Sun,
  Wrench,
  ClipboardList,
  ShieldCheck,
  Users,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { portfolio, services, testimonials, certifications, shopProducts } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { HeroSlider } from '@/components/common/hero-slider';

export default function Home() {
  const portfolioImages = portfolio.map(p => PlaceHolderImages.find(img => img.id === p.coverImageId));
  const certificationImages = certifications.map(c => PlaceHolderImages.find(img => img.id === c.imageId));
  const topProducts = shopProducts.slice(0, 3);
  const phoneNumber = '919432689034';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We provide comprehensive solar solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center">
                    {service.id === 'installation' && <Sun className="h-8 w-8" />}
                    {service.id === 'maintenance' && <Wrench className="h-8 w-8" />}
                    {service.id === 'consultation' && <ClipboardList className="h-8 w-8" />}
                  </div>
                  <CardTitle className="mt-4 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose SARN SOLAR?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <ShieldCheck className="h-12 w-12 mx-auto text-accent mb-4"/>
                <h3 className="text-xl font-bold font-headline">Reliability</h3>
                <p className="text-muted-foreground mt-2">Dependable systems and a 25-year warranty for your peace of mind.</p>
            </div>
            <div className="p-6">
                <Award className="h-12 w-12 mx-auto text-accent mb-4"/>
                <h3 className="text-xl font-bold font-headline">Expertise</h3>
                <p className="text-muted-foreground mt-2">Our certified professionals ensure a seamless and efficient installation process.</p>
            </div>
            <div className="p-6">
                <Users className="h-12 w-12 mx-auto text-accent mb-4"/>
                <h3 className="text-xl font-bold font-headline">Customer Focus</h3>
                <p className="text-muted-foreground mt-2">We prioritize your needs, offering personalized support every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">SARN, the name you trust</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We are registered under
            </p>
          </div>
          <div
            className="relative flex overflow-x-hidden"
          >
            <div className="flex animate-scroll group-hover:pause">
              {[...certificationImages, ...certificationImages].map((image, index) => (
                image && (
                  <div key={index} className="mx-8 flex-shrink-0">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      width={128}
                      height={128}
                      className="object-contain h-24 w-auto"
                    />
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Project Portfolio Preview */}
      <section id="portfolio" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              See the quality of our work and the impact we've made.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolio.slice(0, 2).map((project, index) => {
              const image = portfolioImages[index];
              return (
                <Link key={project.id} href={`/portfolio/${project.slug}`} className="block group">
                  <Card className="overflow-hidden h-full flex flex-col">
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
                      <p className="text-muted-foreground">{project.description}</p>
                      <Button variant="link" className="p-0 mt-4 self-start">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center text-center aspect-square justify-center p-6">
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                          <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                        <h4 className="font-bold mt-4">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      </section>

      {/* Top Products Section */}
      <section id="products" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Top Products</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              High-performance solar panels for maximum efficiency and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map((product) => {
              const image = PlaceHolderImages.find(img => img.id === product.imageId);
              const whatsappMessage = `Hi, I'm interested in the ${product.name}. Could you please provide more information?`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
              return (
                <Card key={product.id} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                  <Link href={`/shop/${product.slug}`} className="relative h-64 w-full block">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={product.name}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                      />
                    )}
                    <Badge variant="secondary" className="absolute top-4 right-4 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      {product.power}
                    </Badge>
                  </Link>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl h-14">
                      <Link href={`/shop/${product.slug}`} className="hover:text-primary transition-colors">{product.name}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{product.shortDescription}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between">
                    <Button asChild variant="destructive">
                      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/shop/${product.slug}`}>
                        More Info <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/shop">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Go Solar?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Join the solar revolution today. Get in touch for a personalized quote and find out how much you can save.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
