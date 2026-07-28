import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const SEO: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.websiteUrl,
    logo: `${COMPANY_INFO.websiteUrl}/logo.png`,
    description: COMPANY_INFO.slogan,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      email: COMPANY_INFO.email,
      areaServed: 'BR',
      availableLanguage: ['Portuguese', 'English']
    },
    sameAs: [
      COMPANY_INFO.instagramUrl,
      COMPANY_INFO.youtubeUrl
    ]
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </React.Fragment>
  );
};
