
import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact-form';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SARN SOLAR for a free quote or any inquiries. We are here to help you on your journey to clean, renewable energy.',
};

export default function ContactPage() {
  const address = "Swapna Neer Apartment. 05, RNC Road, Kolkata-700147";
  const mapsUrl = "https://maps.app.goo.gl/FzW8RMMktxNfbmQV8";
  const emails = ["contact@sarnsolar.in", "sarnsolar@gmail.com"];
  const phone = "+91 94326 89034";

  return (
    <div className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have questions or ready to start your solar project? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">
                Reach out to us through any of the following methods.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <Link href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  {address}
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <div className="flex flex-col">
                  {emails.map((email) => (
                    <Link key={email} href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {email}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <Link href={`tel:${phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {phone}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
