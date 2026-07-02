export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: {
    "@type": "Organization";
    name: string;
  };
  inLanguage: string;
}

export interface WebPageSchemaInput {
  name: string;
  path: string;
  description: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}
