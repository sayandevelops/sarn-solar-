import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sarn Solar for a free quote or any inquiries. We are here to help you on your journey to clean, renewable energy.',
};

export default function ContactPage() {
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
                <p className="text-muted-foreground">123 Solar Way, Sunville, USA</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground">info@sarnsolar.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
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
