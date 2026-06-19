export default function Services() {
  const services = [
    {
      icon: "✂️",
      title: "Precision Haircuts",
      description:
        "Tailored cuts by expert stylists that complement your face shape and lifestyle perfectly.",
      tag: "Signature",
    },
    {
      icon: "🎨",
      title: "Hair Coloring",
      description:
        "From bold fashion colors to natural-looking highlights — vibrant, long-lasting results.",
      tag: "Popular",
    },
    {
      icon: "🌿",
      title: "Balayage & Ombre",
      description:
        "Hand-painted color techniques for a sun-kissed, dimensional finish that looks effortlessly natural.",
      tag: "Trending",
    },
    {
      icon: "💆",
      title: "Hair Spa",
      description:
        "Deep conditioning treatments that restore shine, strength, and silkiness to damaged hair.",
      tag: "",
    },
    {
      icon: "💫",
      title: "Hair Extensions",
      description:
        "Add length, volume, and drama with premium quality hair extensions, seamlessly blended.",
      tag: "",
    },
    {
      icon: "👑",
      title: "Bridal Styling",
      description:
        "Complete bridal hair and makeup packages for your most special day — flawless from morning to midnight.",
      tag: "Special",
    },
    {
      icon: "✨",
      title: "Keratin Treatment",
      description:
        "Smooth out frizz and transform unruly hair into sleek, manageable perfection for months.",
      tag: "",
    },
    {
      icon: "🌸",
      title: "Beauty Services",
      description:
        "Eyebrows, facials, waxing, and more — complete beauty care under one luxurious roof.",
      tag: "",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase font-medium">
              What We Offer
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#f5f0ea] leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Services Crafted for{" "}
            <span className="gold-gradient italic">Perfection</span>
          </h2>
          <p className="text-[#f5f0ea]/55 text-base leading-relaxed">
            Every service is delivered with precision, premium products, and an
            unwavering commitment to making you look and feel your absolute best.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="card-dark rounded-lg p-6 group cursor-default"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="service-icon">
                  <span role="img" aria-label={s.title}>
                    {s.icon}
                  </span>
                </div>
                {s.tag && (
                  <span className="text-[9px] tracking-widest uppercase text-[#c9a96e] border border-[#c9a96e]/40 px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                )}
              </div>
              <h3
                className="text-[#f5f0ea] font-semibold text-base mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.title}
              </h3>
              <p className="text-[#f5f0ea]/50 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a href="#booking" className="btn-gold px-10 py-4 rounded-sm text-sm inline-block">
            Book Any Service
          </a>
        </div>
      </div>
    </section>
  );
}
