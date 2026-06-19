import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/showroom-1.jpg", label: "Our Salon" },
    { src: "/showroom-2.jpg", label: "Styling Stations" },
    { src: "/showroom-3.jpg", label: "Wash Area" },
    { src: "/showroom-4.jpg", label: "Premium Seating" },
    { src: "/showroom-5.jpg", label: "Interior Design" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
              Our Space
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0ea] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Step Inside{" "}
            <span className="gold-gradient italic">Our World</span>
          </h2>
          <p className="text-[#f5f0ea]/55 text-base leading-relaxed">
            A premium salon environment designed to make you feel relaxed, pampered,
            and inspired from the moment you walk in.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Large featured image */}
          <div className="col-span-2 md:col-span-2 row-span-2 gallery-item rounded-lg overflow-hidden aspect-[4/3] md:aspect-auto md:h-[480px] relative">
            <Image
              src={images[0].src}
              alt={images[0].label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            <div className="overlay" />
            <div className="absolute bottom-4 left-4 text-[#c9a96e] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              {images[0].label}
            </div>
          </div>

          {/* Right column - 3 smaller images */}
          {images.slice(1, 4).map((img, i) => (
            <div
              key={i}
              className="gallery-item rounded-lg overflow-hidden relative"
              style={{ height: "152px" }}
            >
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

          {/* Bottom wide image */}
          <div className="col-span-2 md:col-span-3 gallery-item rounded-lg overflow-hidden relative h-52 md:h-64">
            <Image
              src={images[4].src}
              alt={images[4].label}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="text-[#f5f0ea]/0 hover:text-[#f5f0ea] transition-colors text-2xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-[#f5f0ea]/30 text-xs tracking-widest uppercase mt-8">
          Naturals Signature — Premium Salon Interior
        </p>
      </div>
    </section>
  );
}
