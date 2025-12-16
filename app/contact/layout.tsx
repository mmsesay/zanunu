import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Zanunu Portrait Studio | Get In Touch',
  description: 'Contact Zanunu Portrait Studio for professional photography and printing services in Sierra Leone. Email: zanunu@gmail.com | Phone: +232 (79) 316-767',
  keywords: 'contact Zanunu Portrait Studio, photography studio contact, printing services contact, Sierra Leone photo studio',
  openGraph: {
    title: 'Contact Us - Zanunu Portrait Studio',
    description: 'We\'d love to hear from you. Let\'s discuss your project and bring your vision to life.',
    url: 'https://zanunu.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zanunu.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

