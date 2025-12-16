import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Zanunu Portrait Studio - Professional Photography & Printing Services | Sierra Leone',
  description: 'Professional photography and printing services in Sierra Leone. Wedding photography, portraits, events, and premium printing. Capturing moments, creating memories with excellence and artistry.',
  keywords: 'photography Sierra Leone, printing services Salone, wedding photography, portrait studio, event photography, photo printing, Sierra Leone photo studio',
  openGraph: {
    title: 'Zanunu Portrait Studio - Professional Photography & Printing Services',
    description: 'Capturing moments, creating memories. Professional photography and printing press services with excellence and artistry.',
    url: 'https://zanunu.com',
    siteName: 'Zanunu Portrait Studio',
    images: [
      { url: '/zanunu-logo.jpg', width: 1200, height: 630, alt: 'Zanunu Portrait Studio Logo' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zanunu Portrait Studio - Professional Photography & Printing Services',
    description: 'Capturing moments, creating memories. Professional photography and printing services.',
    images: ['/zanunu-logo.jpg'],
  },
  alternates: {
    canonical: 'https://zanunu.com',
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#800020] via-[#a03050] to-[#800020] text-white">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block mb-6">
              <Image
                src="/zanunu-logo.jpg"
                alt="Zanunu Logo"
                width={120}
                height={120}
                className="rounded-full border-4 border-[#d4af37] shadow-2xl"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
              Zanunu Portrait Studio
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-2xl mx-auto">
              We Capture Memories
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto">
              Professional photography and printing services with excellence and artistry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-[#d4af37] text-[#800020] font-semibold rounded-lg hover:bg-[#e8d5a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37] hover:text-[#800020] transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From capturing your special moments to bringing them to life through premium printing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photography Service */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#800020] to-[#a03050] p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Photography</h3>
                <p className="text-gray-200 mb-6">
                  Professional photography services for weddings, events, portraits, and commercial projects. We capture your moments with artistic vision and technical excellence.
                </p>
                <Link
                  href="/services#photography"
                  className="inline-flex items-center text-[#d4af37] font-semibold hover:text-[#e8d5a3] transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Printing Service */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#e8d5a3] p-8 text-[#800020] transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#800020] opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#800020] rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Printing Services</h3>
                <p className="text-[#600015] mb-6">
                  High-quality printing services for photos, albums, canvases, and custom prints. We bring your memories to life with premium materials and expert craftsmanship.
                </p>
                <Link
                  href="/services#printing"
                  className="inline-flex items-center text-[#800020] font-semibold hover:text-[#600015] transition-colors"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Why Choose Zanunu
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Professional Excellence',
                description: 'Years of experience and dedication to delivering exceptional quality in every project.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: 'Artistic Vision',
                description: 'Creative approach that transforms ordinary moments into extraordinary memories.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Timely Delivery',
                description: 'Reliable service with attention to deadlines and commitment to customer satisfaction.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#800020]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#800020] to-[#a03050] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Capture Your Story?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's work together to create something beautiful and memorable
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#800020] font-semibold rounded-lg hover:bg-[#e8d5a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
