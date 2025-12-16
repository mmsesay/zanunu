import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - Zanunu Portrait Studio Reviews',
  description: 'Read testimonials from our satisfied clients about their experience with Zanunu Portrait Studio. Professional photography and printing services in Sierra Leone with 98% satisfaction rate.',
  keywords: 'Zanunu Portrait Studio reviews, client testimonials, photography reviews, printing service reviews, Sierra Leone photo studio reviews',
  openGraph: {
    title: 'Client Testimonials - Zanunu Portrait Studio',
    description: 'Hear from our satisfied clients about their experience with Zanunu Portrait Studio',
    url: 'https://zanunu.com/testimonials',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zanunu.com/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

