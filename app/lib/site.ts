/**
 * ── Brand, contact and branch data ─────────────────────────────────────────
 *
 * NOTE: every contact value below is SAMPLE DATA and is deliberately
 * non-routable / non-existent so nobody can mistake it for a live business.
 * Replace the values marked "SAMPLE" with the real ones before going live.
 *
 * - Phone numbers use the all-zeros +91 00000 0000X pattern (not assigned).
 * - Email uses the RFC 2606 reserved `example.com` domain.
 * - Addresses use "Sample Street" and the non-existent pincode 600000.
 * - Map queries resolve to the district only, never to a specific building.
 */
export const SITE = {
  name: "Naturals",
  domain: "example.com", // SAMPLE
  tagline: "Where Beauty Begins",
  city: "Chennai",
  region: "Tamil Nadu",
  phoneDisplay: "+91 00000 00000", // SAMPLE
  phoneHref: "tel:+910000000000", // SAMPLE
  whatsapp: "+91 00000 00000", // SAMPLE
  email: "hello@example.com", // SAMPLE
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
    address: "No. 00, Sample Street, Anna Nagar West, Chennai 600000", // SAMPLE
    phone: "+91 00000 00001", // SAMPLE
    phoneHref: "tel:+910000000001", // SAMPLE
    mapQuery: "Anna Nagar, Chennai, Tamil Nadu",
  },
  {
    id: "t-nagar",
    name: "T. Nagar",
    area: "T. Nagar Main",
    address: "No. 00, Sample Street, T. Nagar Main, Chennai 600000", // SAMPLE
    phone: "+91 00000 00002", // SAMPLE
    phoneHref: "tel:+910000000002", // SAMPLE
    mapQuery: "T. Nagar, Chennai, Tamil Nadu",
  },
  {
    id: "nungambakkam",
    name: "Nungambakkam",
    area: "Nungambakkam",
    address: "No. 00, Sample Street, Nungambakkam, Chennai 600000", // SAMPLE
    phone: "+91 00000 00003", // SAMPLE
    phoneHref: "tel:+910000000003", // SAMPLE
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
