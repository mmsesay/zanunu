import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us - Zanunu Portrait Studio | Professional Photography & Printing',
  description: 'Learn about Zanunu Portrait Studio - a photography and printing studio in Sierra Leone dedicated to capturing life\'s precious moments and transforming them into lasting memories with excellence and artistry.',
  keywords: 'about Zanunu Portrait Studio, photography studio Sierra Leone, printing studio, professional photographers, photo studio history',
  openGraph: {
    title: 'About Us - Zanunu Portrait Studio',
    description: 'Where artistry meets excellence in photography and printing',
    url: 'https://zanunu.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://zanunu.com/about',
  },
};

export default function About() {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Creativity',
      description: 'We bring artistic vision and innovative approaches to every assignment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: 'Passion',
      description: 'Our love for photography and printing drives us to exceed expectations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'We build lasting relationships through honesty, transparency, and reliability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#800020] via-[#a03050] to-[#800020] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37] opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#d4af37] bg-clip-text text-transparent">
            About Zanunu
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Where artistry meets excellence in photography and printing
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#800020] to-[#d4af37] opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src="/zanunu-logo.jpg"
                      alt="Zanunu Portrait Studio"
                      fill
                      className="object-cover rounded-full border-4 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#800020]">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mb-6"></div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Zanunu Portrait Studio was founded with a simple yet powerful vision: to capture life's most precious moments and transform them into lasting memories through the art of photography and printing.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With years of experience in both photography and printing, we've built a reputation for excellence, creativity, and attention to detail. Our team combines technical expertise with artistic vision to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether it's a wedding, a corporate event, a family portrait, or a custom printing project, we approach each assignment with passion and dedication, ensuring that every detail is perfect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#800020]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#800020]">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              To provide exceptional photography and printing services that capture the essence of every moment and transform them into beautiful, lasting memories. We are committed to excellence, creativity, and customer satisfaction in everything we do.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Zanunu Portrait Studio, we believe that every story deserves to be told beautifully, and every memory deserves to be preserved with care and artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-[#800020] to-[#a03050] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Zanunu
            </h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '500+',
                label: 'Happy Clients',
                description: 'Satisfied customers who trust us with their precious moments',
              },
              {
                number: '1000+',
                label: 'Projects Completed',
                description: 'Successful photography and printing projects delivered',
              },
              {
                number: '3+',
                label: 'Years of Experience',
                description: 'Dedicated service in photography and printing excellence',
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-4 text-[#d4af37]">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-200">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
