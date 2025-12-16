import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Our Photography Portfolio | Zanunu Portrait Studio',
  description: 'Explore our portfolio of stunning photography work including weddings, portraits, events, and commercial photography. See examples of our professional photography services in Sierra Leone.',
  keywords: 'photography gallery, photo portfolio, wedding photos, portrait gallery, event photography examples, Sierra Leone photography',
  openGraph: {
    title: 'Gallery - Our Photography Portfolio | Zanunu Portrait Studio',
    description: 'Explore our portfolio of stunning photography work',
    url: 'https://zanunu.com/gallery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zanunu.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

