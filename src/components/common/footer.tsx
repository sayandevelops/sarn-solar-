import Link from 'next/link';
import { Sun, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Sun className="h-7 w-7 text-primary" />
              <span className="font-headline">Sarn Solar</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Powering a brighter, cleaner future for everyone.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-headline font-semibold">Support</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/estimator" className="text-muted-foreground hover:text-primary">Free Estimator</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-headline font-semibold">Contact Info</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Solar Way, Sunville, USA</li>
              <li>(123) 456-7890</li>
              <li>info@sarnsolar.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sarn Solar Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
