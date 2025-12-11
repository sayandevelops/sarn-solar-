
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { shopProducts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle, ShoppingCart, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = shopProducts.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export async function generateStaticParams() {
  return shopProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = shopProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === product.imageId);
  const phoneNumber = '919432689034';
  const whatsappMessage = `Hi, I'm interested in the ${product.name}. Could you please provide more information?`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <article className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/shop">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            {image && (
              <Image
                src={image.imageUrl}
                alt={product.name}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="w-fit flex items-center gap-1 mb-2">
                <Zap className="h-3 w-3" />
                {product.power}
            </Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.shortDescription}</p>
            
            <div
              className="mt-6 prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
            
            <div className="mt-8">
                <Button asChild size="lg">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now / Inquire
                    </Link>
                </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl font-bold mb-6 text-center">Technical Specifications</h2>
            <div className="border rounded-lg shadow-md overflow-hidden">
                <Table>
                    <TableBody>
                        {product.specifications.map((spec) => (
                            <TableRow key={spec.key} className="even:bg-card">
                                <TableCell className="font-semibold">{spec.key}</TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
        
      </div>
    </article>
  );
}
