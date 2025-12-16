import Link from 'next/link';

export default function Services() {
  const photographyServices = [
    {
      title: 'Wedding Photography',
      description: 'Capture your special day with elegance and emotion. We document every precious moment from ceremony to reception.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Portrait Photography',
      description: 'Professional headshots, family portraits, and individual sessions that showcase your personality and style.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Event Photography',
      description: 'Corporate events, celebrations, and gatherings. We ensure every important moment is beautifully documented.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Commercial Photography',
      description: 'Product photography, branding, and marketing visuals that elevate your business presence.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const printingServices = [
    {
      title: 'Photo Prints',
      description: 'High-quality prints in various sizes, from standard formats to large-scale prints for your walls.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Photo Albums',
      description: 'Custom-designed albums that tell your story with premium materials and professional binding.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Canvas Prints',
      description: 'Transform your favorite photos into stunning canvas artwork, ready to hang and display.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      title: 'Custom Printing',
      description: 'Specialized printing for invitations, cards, posters, and other custom projects tailored to your needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Professional photography and printing solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Photography Services */}
      <section id="photography" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Photography Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing life's most precious moments with artistic vision and technical excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photographyServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[#800020]">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Services */}
      <section id="printing" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#800020] rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Printing Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bringing your memories to life with premium printing and expert craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {printingServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-xl border border-gray-200 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#800020] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-[#800020]">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#800020]">
              Our Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your vision and requirements' },
              { step: '02', title: 'Planning', description: 'We create a detailed plan for your project' },
              { step: '03', title: 'Execution', description: 'Professional service delivery with attention to detail' },
              { step: '04', title: 'Delivery', description: 'Final products delivered with care and excellence' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#d4af37] rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#800020]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#800020] to-[#a03050] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d4af37] text-[#800020] font-semibold rounded-lg hover:bg-[#e8d5a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
