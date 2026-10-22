export type ServiceCategory = "Hair" | "Skin" | "Nails" | "Bridal";

export type Service = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  /** Minimum price in INR. */
  price: number;
  duration: string;
  category: ServiceCategory;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "hair-styling",
    name: "Hair Styling",
    icon: "✂️",
    desc: "Precision cuts, blowouts and styling that define your signature look — tailored to your hair type and lifestyle.",
    price: 499,
    duration: "45 min",
    category: "Hair",
  },
  {
    id: "hair-colouring",
    name: "Hair Colouring",
    icon: "🎨",
    desc: "Global colour, balayage, ombré and highlights painted with artistry for every skin tone and hair length.",
    price: 1299,
    duration: "90 min",
    category: "Hair",
    popular: true,
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    icon: "💆",
    desc: "Deep conditioning rituals that restore moisture, shine and strength to every strand — the reset your hair deserves.",
    price: 799,
    duration: "60 min",
    category: "Hair",
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    icon: "✨",
    desc: "Frizz-free, silky smoothness that lasts for months — our most requested transformation for Indian hair.",
    price: 2499,
    duration: "120 min",
    category: "Hair",
  },
  {
    id: "bridal",
    name: "Bridal Package",
    icon: "👑",
    desc: "Complete bridal transformation — pre-bridal skin prep, makeup, hair and draping for your most radiant day.",
    price: 5999,
    duration: "4 hrs",
    category: "Bridal",
    popular: true,
  },
  {
    id: "nail-art",
    name: "Nail Art & Care",
    icon: "💅",
    desc: "Manicures, pedicures and intricate nail art crafted with meticulous attention to detail and long-wear formulas.",
    price: 399,
    duration: "60 min",
    category: "Nails",
  },
  {
    id: "skin-facial",
    name: "Skin Care Facial",
    icon: "🧖",
    desc: "Hydrating facials, clean-ups and glow-restoring peels chosen by our skin specialists for your skin type.",
    price: 899,
    duration: "60 min",
    category: "Skin",
  },
  {
    id: "threading-waxing",
    name: "Threading & Waxing",
    icon: "🌸",
    desc: "Gentle, hygienic threading and waxing for a naturally defined look, using soothing, skin-friendly products.",
    price: 199,
    duration: "30 min",
    category: "Skin",
  },
];

/** Human-readable price, e.g. 499 -> "₹499". */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

/** Price as shown in cards and dropdowns, e.g. "From ₹1,299". */
export function priceLabel(service: Service): string {
  return `From ${formatPrice(service.price)}`;
}

/** Compact one-line list used by the chat assistant. */
export function priceSummary(): string {
  return SERVICES.map((s) => `${s.icon} ${s.name} — from ${formatPrice(s.price)}`).join("\n");
}

/** "Hair Styling — From ₹499 (45 min)" — used in the booking dropdown. */
export function bookingOption(service: Service): string {
  return `${service.name} — From ${formatPrice(service.price)}`;
}
