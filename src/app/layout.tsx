import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/common/whatsapp-button';

export const metadata: Metadata = {
  title: {
    template: '%s | SARN SOLAR Solutions',
    default: 'SARN SOLAR Solutions - Power Your Future',
  },
  description: 'SARN SOLAR offers top-tier solar solutions including installation, maintenance, and consultation. Lower your energy bills and reduce your carbon footprint with our expert services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppButton />
      </body>
    </html>
  );
}
