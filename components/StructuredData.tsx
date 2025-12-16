export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Zanunu Portrait Studio",
    "image": "https://zanunu.com/zanunu-logo.jpg",
    "@id": "https://zanunu.com",
    "url": "https://zanunu.com",
    "telephone": "+232 (79) 316-767",
    "email": "zanunu@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Studio Street, Aberdeen",
      "addressLocality": "Freetown",
      "addressCountry": "SL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.4840,
      "longitude": -13.2299
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Sierra Leone"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Photography and Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Photography",
            "description": "Professional wedding photography services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portrait Photography",
            "description": "Professional portrait photography services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Photography",
            "description": "Professional event photography services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Printing",
            "description": "High-quality photo printing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Canvas Printing",
            "description": "Premium canvas printing services"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

