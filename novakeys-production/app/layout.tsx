import './globals.css';
import type { Metadata, Viewport } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.novakeys.fr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nova Keys Conciergerie | Gestion Airbnb et location courte durée',
    template: '%s | Nova Keys Conciergerie',
  },
  description:
    'Conciergerie immobilière premium en Île-de-France : estimation, gestion Airbnb, ménage, maintenance, accueil voyageurs et optimisation des revenus locatifs.',
  keywords: [
    'conciergerie immobilière',
    'gestion Airbnb',
    'location courte durée',
    'conciergerie Paris',
    'gestion locative',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Nova Keys Conciergerie',
    description: 'Gestion clé en main pour propriétaires en location courte durée.',
    url: siteUrl,
    siteName: 'Nova Keys',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#162766',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
