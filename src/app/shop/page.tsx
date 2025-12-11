
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { shopProducts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, ShoppingCart, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Shop Solar Panels',
  description: 'Browse our selection of high-quality solar panels. Find the perfect fit for your home or business.',
};

export default function ShopPage() {
  const phoneNumber = '919432689034';

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Solar Panels</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            High-performance solar panels designed for reliability and maximum efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((product) => {
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
                  <Button asChild>
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
      </div>
    </div>
  );
}
