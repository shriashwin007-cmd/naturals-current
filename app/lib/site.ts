export const SITE = {
  name: "Naturals",
  domain: "naturalsalon.in",
  tagline: "Where Beauty Begins",
  city: "Chennai",
  region: "Tamil Nadu",
  phoneDisplay: "+91 44 2345 6789",
  phoneHref: "tel:+914423456789",
  whatsapp: "+91 98765 43210",
  email: "hello@naturalsalon.in",
  hours: "10:00 AM – 8:00 PM",
  hoursDetail: "Open every day, all week",
  founded: 2009,
} as const;

export type Branch = {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  phoneHref: string;
  /** Maps "search" query used to build the embedded map. */
  mapQuery: string;
};

export const BRANCHES: Branch[] = [
  {
    id: "anna-nagar",
    name: "Anna Nagar",
    area: "Anna Nagar West",
    address: "42, 2nd Avenue, Anna Nagar West, Chennai 600040",
    phone: "+91 44 2625 4100",
    phoneHref: "tel:+914426254100",
    mapQuery: "Anna Nagar, Chennai, Tamil Nadu",
  },
  {
    id: "t-nagar",
    name: "T. Nagar",
    area: "T. Nagar Main",
    address: "18, Ranganathan Street, T. Nagar, Chennai 600017",
    phone: "+91 44 2833 2200",
    phoneHref: "tel:+914428332200",
    mapQuery: "T. Nagar, Chennai, Tamil Nadu",
  },
  {
    id: "nungambakkam",
    name: "Nungambakkam",
    area: "Nungambakkam",
    address: "7, Habibullah Road, Nungambakkam, Chennai 600024",
    phone: "+91 44 2817 6600",
    phoneHref: "tel:+914428176600",
    mapQuery: "Nungambakkam, Chennai, Tamil Nadu",
  },
];

/** Embedded map URL for a branch (no API key required). */
export function mapEmbedUrl(branch: Branch): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&z=13&output=embed`;
}

/** Directions link that opens Google Maps in a new tab. */
export function mapDirectionsUrl(branch: Branch): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;
}
