import Image from "next/image";

const SHOWROOM_IMAGES = [
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892346/showroom_1._WhatsApp_Image_2026-06-19_at_7.51.21_PM_qs2bom.jpg",
    label: "Our Salon",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892347/showroom_2._WhatsApp_Image_2026-06-19_at_7.51.22_PM_mwvtit.jpg",
    label: "Styling Stations",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892348/showroom_3._WhatsApp_Image_2026-06-19_at_7.51.24_PM_imhkep.jpg",
    label: "Wash Area",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892350/showroom_4._WhatsApp_Image_2026-06-19_at_7.52.21_PM_faig2o.jpg",
    label: "Premium Seating",
  },
  {
    src: "https://res.cloudinary.com/dxvui0xkz/image/upload/v1781892352/showroom_5._WhatsApp_Image_2026-06-19_at_7.53.04_PM_suzn9d.jpg",
    label: "Interior Design",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F5F0FF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#6B21A8]" />
            <span className="text-[#6B21A8] text-xs tracking-[0.3em] uppercase font-semibold">
              Our Space
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a0a2e] leading-tight mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Step Inside{" "}
            <span className="purple-gradient italic">Our World</span>
          </h2>
          <p className="text-[#6b5a7e] text-base leading-relaxed">
            A premium salon environment designed to make you feel relaxed, pampered,
            and inspired from the moment you walk in.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured */}
          <div className="col-span-2 md:col-span-2 gallery-item rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px] relative shadow-lg">
            <Image
              src={SHOWROOM_IMAGES[0].src}
              alt={SHOWROOM_IMAGES[0].label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="overlay" />
            <div className="absolute bottom-4 left-4 text-white text-xs tracking-widest uppercase font-semibold opacity-0 hover:opacity-100 transition-opacity">
              {SHOWROOM_IMAGES[0].label}
            </div>
          </div>

          {/* Right column */}
          {SHOWROOM_IMAGES.slice(1, 4).map((img, i) => (
            <div key={i} className="gallery-item rounded-2xl overflow-hidden relative shadow-md" style={{ height: "152px" }}>
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="overlay" />
            </div>
          ))}

          {/* Bottom wide */}
          <div className="col-span-2 md:col-span-3 gallery-item rounded-2xl overflow-hidden relative h-52 md:h-64 shadow-lg">
            <Image
              src={SHOWROOM_IMAGES[4].src}
              alt={SHOWROOM_IMAGES[4].label}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="overlay" />
          </div>
        </div>

        <p className="text-center text-[#6b5a7e]/50 text-xs tracking-widest uppercase mt-8">
          Naturals Signature — Premium Salon Interior
        </p>
      </div>
    </section>
  );
}
