import { Metadata } from 'next';
import { Sun, Wrench, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore the comprehensive solar services offered by Sarn Solar, including expert installation, system maintenance, and personalized energy consultations.',
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Solar Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From initial design to long-term maintenance, we offer a complete suite of services to ensure your transition to solar is seamless and rewarding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card key={service.id} className="flex flex-col md:flex-row items-center shadow-md transition-shadow hover:shadow-lg">
              <div className="p-6 md:p-8 flex-shrink-0">
                <div className="bg-primary text-primary-foreground rounded-full h-20 w-20 flex items-center justify-center">
                  {service.id === 'installation' && <Sun className="h-10 w-10" />}
                  {service.id === 'maintenance' && <Wrench className="h-10 w-10" />}
                  {service.id === 'consultation' && <ClipboardList className="h-10 w-10" />}
                </div>
              </div>
              <div className="p-6 pt-0 md:pt-6 md:pl-0">
                  <h2 className="text-2xl font-bold font-headline">{service.title}</h2>
                  <p className="mt-2 text-muted-foreground">{service.longDescription}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <h2 className="font-headline text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Contact us today for a free, no-obligation quote and take the first step towards energy independence.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
