'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'info@zanunu.com',
      link: 'mailto:info@zanunu.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      content: '123 Studio Street, City, State 12345',
      link: '#',
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
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#800020]">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="photography">Photography</option>
                    <option value="printing">Printing Services</option>
                    <option value="both">Both</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#800020] to-[#a03050] text-white font-semibold rounded-lg hover:from-[#600015] hover:to-[#800020] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#800020]">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels. We're here to help bring your vision to life.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-[#800020] hover:to-[#a03050] hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#800020] to-[#d4af37] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-[#800020] group-hover:text-white transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-200 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="p-6 bg-gradient-to-br from-[#d4af37] to-[#e8d5a3] rounded-xl">
                <h3 className="font-bold text-lg mb-4 text-[#800020]">Business Hours</h3>
                <ul className="space-y-2 text-[#800020]">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-[#800020] to-[#a03050] flex items-center justify-center text-white">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xl font-semibold">123 Studio Street</p>
                <p className="text-gray-200">City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
